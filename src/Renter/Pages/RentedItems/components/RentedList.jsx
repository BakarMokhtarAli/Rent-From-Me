import { toast } from "react-toastify";
import { useDeleteRentedItemMutation, useRentedItemsQuery } from "../../../../Store/Api/Renter";
import { useGetItemsQuery } from "../../../../Store/Api/item-slice";
import { FaTrash } from "react-icons/fa"
import { useNavigate } from "react-router-dom";

export const RentedList = () => {
  const { data: rentals = [] } = useRentedItemsQuery();
  const { data: items = [] } = useGetItemsQuery();
  // console.log("itens", items)
  const [deleteRentedItem] = useDeleteRentedItemMutation()
    const navigate = useNavigate()
  
  function handleDelete (id) {
    deleteRentedItem(id)
    .unwrap().then(()=>{
        navigate("/renter/home")
        toast.success("Deleted Success")
        setTimeout(()=>{
          window.location.reload()
         },2000)
    }).catch(err =>{
        toast.error("Failled")
        console.log(err)
    })
    
  }

  return (
    <div className=" md:w-[88%] mx-auto p-5">
      <div className="mt-[80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2">
        {rentals.map((rent) => {
          const currentItem = items.find((item) => item.id === rent.tool_id);
          return (
            <div
              key={rent.id}
              className="flex w-[100%] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md m-auto mb-3"
            >
              <div className="mx-4 mt-4 h-96 overflow-hidden  bg-white  text-gray-700">
                <img
                  src={currentItem&& currentItem.img_url}
                  className="h-full w-full object-center"
                />
              </div>
              <div className="p-6">
                  <div className="mb-2 flex items-center justify-between ">
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased mr-2">
                      { currentItem&&currentItem.title}
                    </p>
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                     <span className='px-3 font-normal '>Total_cost</span>{rent.total_cost}$
                    </p>
                  </div>
            </div>
                  <div className="ml-3 flex justify-between items-start flex-wrap">
                    <div>
                  <p className="block font-sans text-lg font-normal leading-normal text-gray-700">
                    <span className=' bold  mr-3  mb-5 '> Start Date: </span>{rent.start_date}
                  </p>
                  <p className="block font-sans text-lg font-normal leading-normal text-gray-700">
                    <span className=' bold  mr-4 '> End Date: </span>{rent.end_date}
                  </p>
                  </div>
                  <button onClick={()=>handleDelete(currentItem.id)}>
                  <i className="bi bi-trash3 text-2xl text-[#4D1489] mr-2"></i>
                  </button>
                  </div>
                  
            </div>
          );
        })}
      </div>
    </div>
  );
};
