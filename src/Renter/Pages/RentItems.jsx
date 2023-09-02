import { useState } from 'react'
import * as Yup from 'yup'
import { Form, Field, ErrorMessage, Formik } from 'formik'
import { toast } from 'react-toastify'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useGetItemsQuery } from '../../Store/Api/item-slice'
import { useRentAnItemMutation } from '../../Store/Api/Renter'
import { Header, Footer } from './Home/Components'
import loading from "../../assets/loading.gif"
import { useTitle } from '../../Hook/useTitle'
export default function RentItem() {
    const {data:items = []} =  useGetItemsQuery()
    
    const [ rentAnItem ] =  useRentAnItemMutation()
    const params = useParams()
    const currentItem  = items.find((item)=>item.id === Number(params.id))
    const navigate = useNavigate()
   useTitle(`Rent ${currentItem.title}`)
    const message = () => {
        toast.success("Item REnted  Success", { autoClose: 500, POSITION: toast.POSITION.TOP_CENTER })
    }
    const [initialValues, setInitialValues] = useState({
        start_date: '',
        end_date: '',
        total_cost:0
    })
    const validationSchema = Yup.object({
        start_date: Yup.string().required("Start Date Required"),
        end_date: Yup.string().required("End Date Required"),
        total_cost: Yup.string().required("Total Cost Required"),
    })
    const handleSubmit = (values, { resetForm }) => {
        rentAnItem({
                id: Number(params.id),
                item: values
       }).unwrap().then(()=>{
           resetForm()
           navigate("/renter/home")
           toast.success("Item Rented Success")
           setTimeout(()=>{
            window.location.reload()
           },2000)
       }).catch((error)=>{
        console.log(error)
        toast.error(error.data.error)
       })
    console.log("values",values)
    }
    return (
        <>

        <Header />
           
            <div className='flex flex-col lg:flex-row mt-[74px]  justify-evenly items-center space-x-2 p-2 space-y-3  md:w-[80%] w-[97%] mx-auto'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    enableReinitialize>
                    <Form className="w-full p-5 shadow-lg rounded-sm   lg:flex ">
                        {/* <div className=" lg:flex-col  w-full   flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row    hover:bg-gray-100 ">
                            <img className="object-cover w-full  h-96   md:rounded-none md:rounded-l-lg " src={currentItem&&currentItem.img_url} alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{currentItem&&(currentItem.description)} </p>
                            </div>
                        </div> */}
                        <div>

                        <div className="relative mx-4 mt-4 h-96 overflow-hidden   bg-white  text-gray-700">
                  <img
                    src={currentItem ? currentItem.img_url : loading}
                    className="h-full w-full object-center"
                  />
                </div>
                
                </div>

                        <div className='lg:ml-10 bg-blue-90 w-full'>
                            <div className='space-y-3 mb-3 '>
                                <label htmlFor="date" className=' text-xl pl-2 leading-normal   '>Start Date</label>
                                <Field className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5"
                                    type="date" id="start_date"
                                    name='start_date'
                                />
                                <ErrorMessage className='text-red-500 py-3' component='div' name="date" />
                            </div>
                            <div className='space-y-3'>
                                <label htmlFor="date" className=' text-xl pl-2 leading-normal '>End Date</label>
                                <Field className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5"
                                    type="date" id="end_date"
                                    name='end_date'
                                />
                                <ErrorMessage className='text-red-500 py-3' component='div' name="end_date" />
                            </div>
                            <div className='space-y-3'>
                                <label htmlFor="total_cost" className=' text-xl pl-2 leading-normal '>Total Cost</label>
                                <Field className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5"
                                    type="number" id="total_cost"
                                    name='total_cost'
                                />
                                <ErrorMessage className='text-red-500 py-3' component='div' name="total_cost" />
                                <button className='p-3 mt-4  mb-3 text-gray-100 leading-normal w-full bg-red-500' type = "submit">Rent Item</button>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>

            <Footer />
        </>
            )
}
