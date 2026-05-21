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

const normalizeResourceData = (resource: string, items: ApiRecord[]) => {
  return items;
};

const getApiEndpoint = (resource: string) => {
  
  return resource;
};

/* ================= DATA PROVIDER ================= */

export const dataProvider: DataProvider = {
  /* ================= GET LIST ================= */
  getList: async (
    resource: string,
    params: GetListParams
  ): Promise<GetListResult> => {
    const { filter } = params;
    const { page = 1, perPage = 50 } = params.pagination ?? {};
    const { field: sortField, order: sortOrder } = params.sort ?? {};

    const queryParams = new URLSearchParams();

    queryParams.set('page', String(page));
    queryParams.set('size', String(perPage));

    if (sortField && sortOrder) {
      queryParams.set('sort', `${sortField},${sortOrder.toLowerCase()}`);
    }

    Object.entries(filter).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        queryParams.set(key, String(value));
      }
    });

    const json = await fetchJson(
      `${apiUrl}/${getApiEndpoint(resource)}?${queryParams.toString()}`
    );

    const records = toRecords(json.content || json.data || json.Data || json);
    const total = json.totalElements ?? json.total ?? records.length;

    return {
      data: normalizeResourceData(resource, records).map((item) => ({ ...item, id: item.id })),
      total,
    };
  },

  get: async (
    resource: string,
    params: GetListParams
  ): Promise<GetListResult> => {
    void params;

    const json = await fetchJson(
      `${apiUrl}/${getApiEndpoint(resource)}`
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
      `${apiUrl}/${getApiEndpoint(resource)}/${params.id}`
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
      `${apiUrl}/${getApiEndpoint(resource)}?${query}`
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
    const { page = 1, perPage = 50 } = params.pagination;
    const { field: sortField, order: sortOrder } = params.sort;
    const filter = params.filter;

    const queryParams = new URLSearchParams();

    queryParams.set(params.target, String(params.id));
    queryParams.set('page', String(page));
    queryParams.set('size', String(perPage));

    if (sortField && sortOrder) {
      queryParams.set('sort', `${sortField},${sortOrder.toLowerCase()}`);
    }

    Object.entries(filter).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        queryParams.set(key, String(value));
      }
    });

    const json = await fetchJson(
      `${apiUrl}/${getApiEndpoint(resource)}?${queryParams.toString()}`
    );

    const records = toRecords(json.content || json.data || json.Data || json);
    const total = json.totalElements ?? json.total ?? records.length;

    return {
      data: normalizeResourceData(resource, records).map((item) => ({ ...item, id: item.id })),
      total,
    };
  },

  /* ================= CREATE ================= */
  create: async (
    resource: string,
    params: CreateParams
  ): Promise<CreateResult> => {
    const json = await fetchJson(`${apiUrl}/${getApiEndpoint(resource)}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    });

    const data = json.data || json.Data || json;

    return {
      data: {
        ...data,
        id: data.id,
      },
    };
  },

  /* ================= UPDATE ================= */
  update: async (
    resource: string,
    params: UpdateParams
  ): Promise<UpdateResult> => {
    const json = await fetchJson(
      `${apiUrl}/${getApiEndpoint(resource)}/${params.id}`,
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
        fetchJson(`${apiUrl}/${getApiEndpoint(resource)}/${id}`, {
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
    await fetchJson(`${apiUrl}/${getApiEndpoint(resource)}/${params.id}`, {
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
        fetchJson(`${apiUrl}/${getApiEndpoint(resource)}/${id}`, {
          method: "DELETE",
        })
      )
    );

    return {
      data: params.ids,
    };
  },
};
