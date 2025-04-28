import { DataProvider, fetchUtils } from "react-admin";
import { stringify } from "querystring";

const apiUrl = "/api/admin";
const httpClient = fetchUtils.fetchJson;

export const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination!;
    const { field, order } = params.sort!;
    const query = {
      page,
      limit: perPage,
      sort: JSON.stringify({ [field]: order.toLowerCase() }),
      filter: JSON.stringify(params.filter),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    const { json } = await httpClient(url);
    return {
      data: json.data,
      total: json.pagination.total,
    };
  },

  getOne: async (resource, params) => {
    const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`);
    return { data: json };
  },

  getMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const { json } = await httpClient(url);
    return { data: json.data };
  },

  getManyReference: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      page,
      limit: perPage,
      sort: JSON.stringify({ [field]: order }),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const { json } = await httpClient(url);
    return {
      data: json.data,
      total: json.pagination.total,
    };
  },

  update: async (resource, params) => {
    const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },

  updateMany: async (resource, params) => {
    const { json } = await httpClient(`${apiUrl}/${resource}/bulk`, {
      method: "PUT",
      body: JSON.stringify(params.ids),
    });
    return { data: json };
  },

  create: async (resource, params) => {
    const { json } = await httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },

  delete: async (resource, params) => {
    const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    });
    return { data: json };
  },

  deleteMany: async (resource, params) => {
    const { json } = await httpClient(`${apiUrl}/${resource}/bulk`, {
      method: "DELETE",
      body: JSON.stringify(params.ids),
    });
    return { data: json };
  },
};
