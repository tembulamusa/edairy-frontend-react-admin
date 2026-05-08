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

/* ================= DATA PROVIDER ================= */

export const dataProvider: DataProvider = {
  /* ================= GET LIST ================= */
  getList: async (
    resource: string,
    params: GetListParams
  ): Promise<GetListResult> => {
    const { page = 1, perPage = 50 } = params.pagination ?? {};

    const json = await fetchJson(
      `${apiUrl}/${resource}?page=${page}&size=${perPage}`
    );

    return {
      data: (json.data || []).map((item: any) => ({
        ...item,
        id: item.id,
      })),
      total: json.total ?? json.data?.length ?? 0,
    };
  },

  get: async (
    resource: string,
    params: GetListParams
  ): Promise<GetListResult> => {

    const json = await fetchJson(
      `${apiUrl}/${resource}`
    );

    return json || json.data;
  },

  /* ================= GET ONE ================= */
  getOne: async (
    resource: string,
    params: GetOneParams
  ): Promise<GetOneResult> => {
    const json = await fetchJson(
      `${apiUrl}/${resource}/${params.id}`
    );

    return {
      data: {
        ...json,
        id: json.id,
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

    return {
      data: (json || []).map((item: any) => ({
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

    return {
      data: (json.data || []).map((item: any) => ({
        ...item,
        id: item.id,
      })),
      total: json.total ?? json.data?.length ?? 0,
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

    return {
      data: {
        ...json,
        id: json.id,
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

    return {
      data: {
        ...json,
        id: json.id,
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