import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://connections-api.herokuapp.com',

        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token;
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }

            return headers;
        },
    }),

    endpoints: builder => ({
        getContacts: builder.query({
            query: newToken => {
                return '/contacts';
            },
            providesTags: ['contacts'],
        }),

        addContact: builder.mutation({
            query(body) {
                return {
                    url: '/contacts',
                    method: 'POST',
                    body,
                };
            },
            invalidatesTags: ['contacts'],
        }),

        removeContact: builder.mutation({
            query: contactId => ({
                url: `/contacts/${contactId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['contacts'],
        }),
    }),
});

export const {
    useGetContactsQuery,
    useRemoveContactMutation,
    useAddContactMutation,
} = contactsApi;
