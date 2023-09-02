import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'
const BASE_URL = "https://rent-from-me-f11e9aa3a1c2.herokuapp.com"
const setToken = (token) => {
    Cookies.set("token", token, { expires: 1 })
}
const getCookies = ()=>{
    return Cookies.get('token')
}
const Renter = createApi({
    reducerPath: "Renter",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders:(Headers)=>{
            const token  =  getCookies()
            if(token){
                Headers.set("Authorization",`Barear ${token}`)
            }
            return Headers
         }
    }),
    tagTypes: ["Renter"],
    endpoints: (builder) => ({
        // get Profile of the renter
        getProfile: builder.query({
            query: () => {
                return {
                    url: `/api/renter/profile`,
                    method: 'GET'
                }
            },
            providesTags: ["Renter"]
        }),
        // renter registration 
        renterRegistration: builder.mutation({
            query: (newRenter) => ({
                url: "/api/renter/register",
                method: "POST",
                body: newRenter
            }),
            invalidatesTags: ["Renter"]
        }),
        //rent an item 
        rentAnItem: builder.mutation({
            query: (data) => (
                // console.log("data",data),
                {
                
                url: `/api/rentals/rent_item/${data.id}`,
                method: "POST",
                body:data.item
            }),
            invalidatesTags: ["RentedItems"],
           
        }),
        // get list of the rented items
        rentedItems:builder.query({
            query:()=>{
                return{
                    url:"/api/rented_items",
                    method:'GET'
                }
            },
            invalidatesTags:["Renter"]
        }),
        getRentals:builder.query({
            query:(id)=>{
                return{
                    url:`/api/rentals/${id}`,
                    method:'GET'
                }
            },
            providesTags:["RentedItems"]
        }),
        deleteRentedItem:builder.mutation({
            query:(id)=>{
                // console.log("id")
                return{
                    url:`/api/rentals/remove_item/${id}`,
                    method:"DELETE"
                }

        },
        invalidatesTags:["RentedItems"]
        }),

        rentProfile: builder.query({
            query: () => ({
                url: `/api/renter/profile`,
                method: "GET",
             
            }),
            invalidatesTags: ["Renter"]
        }),
        
        renterLogin: builder.mutation({
            query: (user) => ({
                url: "/api/renter/login",
                method: "POST",
                body: user
            }),
            invalidatesTags: ["Renter"],
            onQueryStarted: async (args, { queryFulfilled }) => {
                try {
                    const result = await queryFulfilled
                    console.log(result)
                    setToken(result.data.token)
                } catch (err) {
                    console.log(err)
                }
            }
        }),
        invalidatesTags: ["Renter"],
    })
})
export const {
    useGetRenterProfileQuery,
    useRenterRegistrationMutation,
    useRenterLoginMutation,
   useRentAnItemMutation,
    useRentProfileQuery,
    useRentedItemsQuery
    ,useDeleteRentedItemMutation,
    useGetRentalsQuery
} = Renter
export default Renter