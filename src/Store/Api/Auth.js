import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'
const BASE_URL  =  "https://rent-from-me-f11e9aa3a1c2.herokuapp.com"
        const setToken = (token)=>{
        Cookies.set("token",token,{expires:1})
        
        }
  const Auth = createApi({
    reducerPath:"Auth",
    baseQuery:fetchBaseQuery({
        baseUrl :BASE_URL
    }),
    endpoints:(builder)=>({
        ownerRegistration:builder.mutation({
            query:(newOwnser)=>({           
                    url:"/api/owner/register",
                    method:"POST",
                    body:newOwnser
            }),
            invalidatesTags:["Auth"]
        }),
        ownerLogin:builder.mutation({
            query:(user)=>({
                url:"/api/owner/login",
                method:"POST",
                body:user
            }),
            invalidatesTags:["Auth"],
            onQueryStarted:async(args,{queryFulfilled})=>{
                try{
                const result  =  await queryFulfilled
               console.log("RESult",result)
                setToken(result.data.token)
                }catch(err){
                    console.log(err)

                }
            },
        }),
        fetchUser:builder.query({
            query:()=>{
                return{
                    url:'/api/owner/profile',
                    method:'GET',
                }        
        },
        providesTags: ["Auth"]

    
     
    })
})
  })

export const {
    useOwnerRegistrationMutation,
    useOwnerLoginMutation,
    useFetchUserQuery
} = Auth
export default Auth