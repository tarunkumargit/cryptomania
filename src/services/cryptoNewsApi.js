import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Bing news api
const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
  'x-rapidapi-key': 'c477e67296msh9b3aa4981fd3700p1ca03ejsndf9076613178',
};

// Free news api
// const cryptoNewsHeaders = {
//   'x-rapidapi-host': 'free-news.p.rapidapi.com',
//   'x-rapidapi-key': 'c477e67296msh9b3aa4981fd3700p1ca03ejsndf9076613178',
// };

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';
// const baseUrl = 'https://free-news.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        // ->Free News Api
        // createRequest(`/v1/search?q=${newsCategory}&lang=en`),

        // ->Bing News Api
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
