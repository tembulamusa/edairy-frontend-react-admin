import type {
  CreateParams,
  CreateResult,
  DataProvider,
  DeleteManyParams,
  DeleteManyResult,
  DeleteParams,
  DeleteResult,
  GetListParams,
  GetListResult,
  GetManyParams,
  GetManyReferenceParams,
  GetManyReferenceResult,
  GetManyResult,
  GetOneParams,
  GetOneResult,
  UpdateManyParams,
  UpdateManyResult,
  UpdateParams,
  UpdateResult,
} from "react-admin";
import { normalizeCustomerMilkRateRecord } from "./pages/customers/shared/customer-milk-rate-transform";

const apiUrl =
  import.meta.env.VITE_EDAIRY_API_URL ??
  "http://192.168.1.10:8080/api";

console.log("Reading API URL for .ENV", apiUrl);

/* ================= AUTH HEADER ================= */

const getAuthHeaders = () => {
  let user = null;

  try {
    const stored = localStorage.getItem("user");

    // prevent parsing "undefined" or null
    if (stored && stored !== "undefined") {
      user = JSON.parse(stored);
    }
  } catch (e) {
    console.error("Invalid user in localStorage", e);
  }

  return {
    "Content-Type": "application/json",
    ...(user?.token && {
      Authorization: `Bearer ${user.token}`,
    }),
  };
};

/* ================= FETCH HELPER ================= */

const fetchJson = async (url: string, options: RequestInit = {}) => {
  const res = await fetch(url, {
    ...options,
    headers: {
      ...(await getAuthHeaders()),
      ...(options.headers || {}),
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || res.statusText);
  }

  return res.json();
};

type ApiRecord = Record<string, unknown>;

const toRecords = (value: unknown): ApiRecord[] => {
  if (Array.isArray(value)) return value as ApiRecord[];
  if (value && typeof value === "object") return [value as ApiRecord];
  return [];
};

const readStoreScalar = (value: unknown) =>
  value != null && typeof value !== "object" ? String(value) : undefined;

const normalizeStoreRecord = (item: ApiRecord): ApiRecord => {
  const nested =
    item.store != null && typeof item.store === "object" && !Array.isArray(item.store)
      ? (item.store as ApiRecord)
      : undefined;

  const name =
    readStoreScalar(item.name) ??
    readStoreScalar(item.Name) ??
    readStoreScalar(item.store) ??
    readStoreScalar(item.Store) ??
    readStoreScalar(item.store_name) ??
    readStoreScalar(item.StoreName) ??
    readStoreScalar(nested?.name) ??
    readStoreScalar(nested?.Name) ??
    readStoreScalar(nested?.store) ??
    readStoreScalar(nested?.Store) ??
    readStoreScalar(nested?.store_name) ??
    "";

  const description =
    readStoreScalar(item.description) ??
    readStoreScalar(item.Description) ??
    readStoreScalar(nested?.description) ??
    readStoreScalar(nested?.Description) ??
    "";

  return {
    ...item,
    name,
    description,
  };
};

const normalizeResourceData = (resource: string, items: ApiRecord[]) => {
  if (resource === "stores") {
    return items.map(normalizeStoreRecord);
  }
  if (resource === "customer-milk-rates") {
    return items.map((item) => normalizeCustomerMilkRateRecord(item));
  }
  return items;
};

/* ================= DATA PROVIDER ================= */

export const dataProvider: DataProvider = {
  /* ================= GET LIST ================= */
  getList: async (
    resource: string,
    params: GetListParams
  ): Promise<GetListResult> => {
    const { page = 1, perPage = 50 } = params.pagination ?? {};

    const query = new URLSearchParams();

    /* ================= PAGINATION ================= */
    query.append("page", String(page));
    query.append("size", String(perPage));

    /* ================= FILTERS (NEW) ================= */
    if (params.filter) {
      Object.entries(params.filter).forEach(([key, value]) => {
        if (
          value !== undefined &&
          value !== null &&
          value !== ""
        ) {
          query.append(key, String(value));
        }
      });
    }

    const json = await fetchJson(
      `${apiUrl}/${resource}?${query.toString()}`
    );

    const items = toRecords(json.data || json.Data);

    return {
      data: normalizeResourceData(resource, items).map((item) => ({
        ...item,
        id: item.id ?? item.ID ?? item.Id,
      })),
      total: json.total ?? items.length ?? 0,
    };
  },
  get: async (
    resource: string,
    params: GetListParams
  ): Promise<GetListResult> => {
    void params;

    const json = await fetchJson(
      `${apiUrl}/${resource}`
    );

    const normalized = normalizeResourceData(resource, toRecords(json.data || json.Data || json));
    return {
      data: normalized.map((item) => ({
        ...item,
        id: item.id,
      })),
      total: json.total ?? normalized.length,
    };
  },

  /* ================= GET ONE ================= */
  getOne: async (
    resource: string,
    params: GetOneParams
  ): Promise<GetOneResult> => {
    const json = await fetchJson(
      `${apiUrl}/${resource}/${params.id}`
    );

    const normalized = normalizeResourceData(resource, toRecords(json.data || json.Data || json));

    return {
      data: {
        ...normalized[0],
        id: normalized[0].id,
      },
    };
  },

  /* ================= GET MANY ================= */
  getMany: async (
    resource: string,
    params: GetManyParams
  ): Promise<GetManyResult> => {
    const query = params.ids.map(id => `id=${id}`).join("&");

    const json = await fetchJson(
      `${apiUrl}/${resource}?${query}`
    );

    const normalized = normalizeResourceData(resource, toRecords(json.data || json.Data));

    return {
      data: normalized.map((item) => ({
        ...item,
        id: item.id,
      })),
    };
  },

  /* ================= GET MANY REFERENCE ================= */
  getManyReference: async (
    resource: string,
    params: GetManyReferenceParams
  ): Promise<GetManyReferenceResult> => {
    const { page, perPage } = params.pagination;

    const json = await fetchJson(
      `${apiUrl}/${resource}?${params.target}=${params.id}&page=${page}&size=${perPage}`
    );

    const normalized = normalizeResourceData(resource, toRecords(json.data || json.Data));

    return {
      data: normalized.map((item) => ({
        ...item,
        id: item.id,
      })),
      total: json.total ?? normalized.length ?? 0,
    };
  },

  /* ================= CREATE ================= */
  create: async (
    resource: string,
    params: CreateParams
  ): Promise<CreateResult> => {
    const json = await fetchJson(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    });

    const data = json.data || json.Data || json;

    return {
      data: {
        ...data,
        id: data?.ID || data?.Id || data?.id,
      },
    };
  },

  /* ================= UPDATE ================= */
  update: async (
    resource: string,
    params: UpdateParams
  ): Promise<UpdateResult> => {
    const json = await fetchJson(
      `${apiUrl}/${resource}/${params.id}`,
      {
        method: "PUT",
        body: JSON.stringify(params.data),
      }
    );

    const data = json.data || json.Data || json;

    return {
      data: {
        ...data,
        id: data.id,
      },
    };
  },

  /* ================= UPDATE MANY ================= */
  updateMany: async (
    resource: string,
    params: UpdateManyParams
  ): Promise<UpdateManyResult> => {
    await Promise.all(
      params.ids.map(id =>
        fetchJson(`${apiUrl}/${resource}/${id}`, {
          method: "PUT",
          body: JSON.stringify(params.data),
        })
      )
    );

    return {
      data: params.ids,
    };
  },

  /* ================= DELETE ================= */
  delete: async (
    resource: string,
    params: DeleteParams
  ): Promise<DeleteResult> => {
    await fetchJson(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    });

    return {
      data: { id: params.id },
    };
  },

  /* ================= DELETE MANY ================= */
  deleteMany: async (
    resource: string,
    params: DeleteManyParams
  ): Promise<DeleteManyResult> => {
    await Promise.all(
      params.ids.map(id =>
        fetchJson(`${apiUrl}/${resource}/${id}`, {
          method: "DELETE",
        })
      )
    );

    return {
      data: params.ids,
    };
  },
};
