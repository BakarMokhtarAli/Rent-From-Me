import { Link } from "react-router-dom"
import { useGetItemsQuery, useDeleteItemMutation, useGetOwnerProfileQuery } from "../../../../Store/Api/item-slice"
import loading from "../../../../assets/loading.gif"
import NotFound from "../../../../assets/NotFound.jpg"

export const Items = () => {
    const style = {
        aspectRatio: "3 / 2"
    }
    const { data: items = [] } = useGetItemsQuery()
    const { data: profile ={} } = useGetOwnerProfileQuery()
   
    
    const [ deleteItem ] = useDeleteItemMutation()
    
    
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
                    {/* <p className="bi bi-emoji-frown-fill text-[#4D1489] text-7xl mb-5"></p> */}
                    <img src={NotFound} alt="not found" className="rounded-full w-60 h-60 object-fill mx-2 mb-5" />
                     <p className="font-bold text-2xl">Oops! There Are No Items in Here!</p>
                     <Link to="/owner/addItem" type="button" className="text-white mt-2 bg-[#4D1489] hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Add Items <i className="text-2xl text-center ml-1 bi bi-plus"></i></Link>
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
                        item.owner_id === profile.id && (
                            <div>
                            <Link to={`/update/item/${item.id}`}>
                            <i className="bi bi-pencil-square mr-1 text-2xl text-[#4D1489]"></i>
                            </Link>

                            <button onClick={()=>deleteItem(item.id)}>
                            <i className="bi bi-trash3 text-2xl text-[#4D1489]"></i>
                            </button>
                            </div>
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

{/* <>
    <h2 className="ml-16 p-2 text-lg">Devices Highly Rated By Users</h2>
    <div className="max-w-[92%] grid grid-cols-8 max-2xl:grid-cols-7 max-xl:grid-cols-6 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-1 max-sm:items-center gap-2 m-auto">
        {
            items.map(item => {
                return (
                    <div key={item.id} className="w-40 mx-4 md:max-w-[1640px] max-sm:w-full max-sm:m-auto bg-white shadow-md max-sm:p-2 rounded relative">
                    <img src={item.img_url} alt={item.title} className="w-full aspect-video rounded rounded-b-none" />
                    <p className="text-lg text-gray-700 ml-1">{item.title}</p>
                    <p className="text-xs bg-gray-900 text-white px-3 text-center rounded-full ml-1 absolute top-2 left-2">{}</p>
                    <p className="text-sm text-gray-800 ml-1 pr-1 break-words font-semibold">Description: {item.description} </p>
                    <Link to={`update/item/${item.id}`}>
                    <i className="bi bi-pencil-square text-[#4D1489] text-lg ml-2"></i>
                    </Link>
                    <button onClick={()=>deleteItem(item.id)}>
                    <i className="bi bi-trash3 text-[#FE6700] text-lg ml-2"></i>
                    </button>
                    </div>

                )
            })
        }
    </div>
    </> */}