import { FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY, API_URL } from 'api/config';

export type Params = {
    from: number,
    to: number,
    type: FilmType,
}

export type FilmType = 'movie' | 'series' | 'episode';

export const filmApi = createApi({
    reducerPath: 'api',
    tagTypes: ['Film'],
    baseQuery: fetchBaseQuery({ baseUrl: API_URL}),
    endpoints: (build) => ({
        getAllByFilter: build.query({
            query: (params: Params) => `?s=cat&type=${params.type}&y_gte=${params.from}&y_lte=${params.to}&apikey=${API_KEY}`,
        }),
        getById: build.query({
            query: (id) => `?i=${id}&apikey=${API_KEY}`,
        }),
        getBySearchName: build.query({
            query: (name) => `?s=${name}&type=movie&apikey=${API_KEY}`,
        })
    })
});

export const { useGetByIdQuery, useGetAllByFilterQuery, useGetBySearchNameQuery } = filmApi;