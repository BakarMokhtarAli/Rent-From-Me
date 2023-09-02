import { Link } from "react-router-dom"
import { useGetItemsQuery, useDeleteItemMutation } from "../../../../Store/Api/item-slice"
import { useDeleteRentedItemMutation, useRentedItemsQuery } from "../../../../Store/Api/Renter"
import loading from "../../../../assets/loading.gif"
import NotFound from "../../../../assets/NotFound.jpg"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


export const Items = () => {

    const { data: rentals =[] } = useRentedItemsQuery();
    const [deleteRentedItem] = useDeleteRentedItemMutation()
    
    
    const style = {
        aspectRatio: "3 / 2"
    }
    const { data: items } = useGetItemsQuery()
    
      
    
    const handleDelete = (id) =>{
        deleteRentedItem(id).unwrap().then(()=>{
            window.location.reload()
            toast.success("Deleted Success")
        }).catch(err =>{
            console.log(err)
            toast.error("Failled")
        })
    }
    
  return (
    <>
{        
        items ? (
            <>
            <div className="w-[90%] m-auto flex justify-between items-center">
    <h2 className="p-2 text-lg">Items For Rent</h2>
    <span className="bg-[#4D1489] px-2 rounded-full text-center text-white">{items.length}</span>
    </div>
    {
            items.length === 0 &&(
                <div className="flex flex-col justify-center items-center">
                    <img src={NotFound} alt="not found" className="rounded-full w-60 h-60 object-fill mx-2 mb-5" />
                     <p className="font-bold text-2xl">Oops! There Are No Items in Here!</p>
                </div>
            )
        }
    <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:grid-cols-3 items-center mt-4 gap-2">
    
    {
        items.map (item => (
            <div key={item.id} style={style} className="w-full ml-2 max-w-xs max-sm:m-auto max-sm:max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-center items-center">
                <img className="w-full h-60 object-contain rounded-t-lg" src={item.img_url} alt={item.title} />
            </div>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                </a>
                <p>{item.description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${item.daily_cost}</span>
                    <div>
                    {
                        rentals.find(rent => rent.tool_id === item.id) ? (
                            <button onClick={()=>handleDelete(item.id)} className="px-3 py-2 text-white rounded-md  bg-[#ff4d47]">Delete</button>
                        ) : (
                            <Link to={`/renter/rentItem/${item.id}`}>
                            <span  className="px-3 py-2 text-white rounded-md  bg-[#4D1489]">Rent</span>
                            </Link>
                        )
                    }
                    
                            
                    </div>
                </div>
            </div>
            </div> 
        ))
    }
    </div>
    </>
        ) : (
            <div className="max-w-xs m-auto">
                <img src={loading} className="w-full rounded" alt="loading" />
            </div>
        )
    }
    
    </>


  )
}
