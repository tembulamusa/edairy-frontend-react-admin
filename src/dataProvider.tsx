import type { CreateParams, CreateResult, DataProvider, DeleteManyParams, DeleteManyResult, DeleteParams, DeleteResult, GetListParams, GetListResult, GetManyParams, GetManyReferenceParams, GetManyReferenceResult, GetManyResult, GetOneParams, GetOneResult, UpdateManyParams, UpdateManyResult, UpdateParams, UpdateResult } from "react-admin";


const apiUrl = import.meta.env.VITE_EDAIRY_API_URL;

console.log("Reading API URL for .ENV", apiUrl);



export const dataProvider: DataProvider = {
  // GET LIST
  getList: async (
    resource: string,
    params: GetListParams
  ): Promise<GetListResult> => {
    const { page = 1, perPage = 50 } = params.pagination ?? {};

    const res = await fetch(
      `${apiUrl}/${resource}?page=${page}&size=${perPage}`
    );
    const json = await res.json();

    return {
      data: json.data.map((item: any) => ({
        ...item,
        id: item.id,
      })),
      total: json.total,
    };
  },

  // GET ONE
  getOne: async (
    resource: string,
    params: GetOneParams
  ): Promise<GetOneResult> => {
    const res = await fetch(`${apiUrl}/${resource}/${params.id}`);
    const json = await res.json();

    return {
      data: {
        ...json,
        id: json.id,
      },
    };
  },

  // GET MANY
  getMany: async (
    resource: string,
    params: GetManyParams
  ): Promise<GetManyResult> => {
    const query = params.ids.map(id => `id=${id}`).join("&");

    const res = await fetch(`${apiUrl}/${resource}?${query}`);
    const json = await res.json();

    return {
      data: json.map((item: any) => ({
        ...item,
        id: item.id,
      })),
    };
  },

  // GET MANY REFERENCE
  getManyReference: async (
    resource: string,
    params: GetManyReferenceParams
  ): Promise<GetManyReferenceResult> => {
    const { page, perPage } = params.pagination;

    const res = await fetch(
      `${apiUrl}/${resource}?${params.target}=${params.id}&page=${page}&size=${perPage}`
    );
    const json = await res.json();

    return {
      data: json.data.map((item: any) => ({
        ...item,
        id: item.id,
      })),
      total: json.total,
    };
  },

  // CREATE
  create: async (
    resource: string,
    params: CreateParams
  ): Promise<CreateResult> => {
    const res = await fetch(`${apiUrl}/${resource}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params.data),
    });
    const json = await res.json();

    return {
      data: {
        ...json,
        id: json.id,
      },
    };
  },

  // UPDATE
  update: async (
    resource: string,
    params: UpdateParams
  ): Promise<UpdateResult> => {
    const res = await fetch(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params.data),
    });
    const json = await res.json();

    return {
      data: {
        ...json,
        id: json.id,
      },
    };
  },

  // UPDATE MANY
  updateMany: async (
    resource: string,
    params: UpdateManyParams
  ): Promise<UpdateManyResult> => {
    const results = await Promise.all(
      params.ids.map(id =>
        fetch(`${apiUrl}/${resource}/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(params.data),
        })
      )
    );

    return {
      data: results.map((_, index) => params.ids[index]),
    };
  },

  // DELETE
  delete: async (
    resource: string,
    params: DeleteParams
  ): Promise<DeleteResult> => {
    await fetch(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    });

    return {
      data: { id: params.id },
    };
  },

  // DELETE MANY
  deleteMany: async (
    resource: string,
    params: DeleteManyParams
  ): Promise<DeleteManyResult> => {
    await Promise.all(
      params.ids.map(id =>
        fetch(`${apiUrl}/${resource}/${id}`, {
          method: "DELETE",
        })
      )
    );

    return {
      data: params.ids,
    };
  },
};