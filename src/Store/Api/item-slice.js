import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import Cookies  from 'js-cookie'
const BASE_URL  =  "https://rent-from-me-f11e9aa3a1c2.herokuapp.com"
const getCookies = ()=>{
    return Cookies.get('token')
}
export const itemSlice =  createApi({
    reducerPath:"itemSlice",
    baseQuery:fetchBaseQuery({
        baseUrl:BASE_URL,
        prepareHeaders:(Headers)=>{
            const token  =  getCookies()
            if(token){
                Headers.set("Authorization",`Barear ${token}`)
            }
            return Headers
         }
    }),
    tagTypes:["items"],
    endpoints:(builder)=>({
        getItems:builder.query({
           query:()=>{
            return{
                url:'/api/items',
                method:'GET',
            }
           },
            providesTags:["items"]
        }),
        createItem:builder.mutation({
            query:(newItem)=>({
                url:"/api/items/create",
                method:'POST',
                body:newItem
            }),
            invalidatesTags:["items"]

        }),
        getItmesByOwner: builder.query({
            query: (owner_id) => {
                return {
                    url: `/api/items/${owner_id}`,
                    method: "GET"
                }
            }
            
        }),
        getItemById: builder.query({
            query:()=>{
                return{
                    url: `/api/items/:id`,
                    method: "GET"
                }
            }
        }),
        updateItem: builder.mutation({
            query: ({ id, updatedItem }) => ({
                url: `/api/items/update/${id}`,
                method: 'PUT',
                body: updatedItem,
            }),
            invalidatesTags: ['items'],
        }),
        deleteItem:builder.mutation({
           query:(id)=>({
            url:`/api/items/delete/${id}`,
            method:'DELETE'
           }),
           invalidatesTags:["items"]
        }),
        getOwnerProfile:builder.query({
           query:()=>{
            return{

                url:"/api/owner/profile",
                method:'GET'
            }            
           },
           providesTags: ["owner"]
        }),
        updateOwnerProfile: builder.mutation({
            query: (owner) => ({
                url: "/api/owner/update_profile",
                method: "PUT",
                body: owner
            }),
            invalidatesTags: ["owner"]
        }),
        deleteOwnerProfile: builder.mutation({
            query: () =>({
                url: `/api/owner/delete_profile`,
                method: "DELETE"
            }),
            invalidatesTags: ["owner"]
        }),
        getRenterProfile:builder.query({
            query:()=>{
             return{
                  url:`/api/renter/profile`,
                  method:'GET'
             }

            },
            providesTags: ["renter"]
         }),
         updateRenterProfile: builder.mutation({
             query: (renter) => ({
                 url: "api/renter/update_profile",
                 method: "PUT",
                 body: renter
             }),
             invalidatesTags: ["renter"]
         }),
         deleteRenterProfile: builder.mutation({
             query: () =>({
                 url: `/api/renter/delete_profile`,
                 method: "DELETE"
             }),
             invalidatesTags: ["renter"]
         }),
    })
})

export const {
    useCreateItemMutation,
    useGetItemsQuery,
    useUpdateItemMutation,
    useDeleteItemMutation, 
    useGetItmesByOwnerQuery,
    useGetOwnerProfileQuery,
    useUpdateOwnerProfileMutation,
    useDeleteOwnerProfileMutation,
    useGetRenterProfileQuery,
    useDeleteRenterProfileMutation,
    useUpdateRenterProfileMutation,
    useGetItemByIdQuery
} = itemSlice
