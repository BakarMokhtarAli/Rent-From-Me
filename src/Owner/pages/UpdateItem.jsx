import { Header,Footer } from "./Home/Components"
import {Form, Field,ErrorMessage, Formik} from 'formik'
import { useParams, useNavigate } from "react-router-dom"
import { useGetItemsQuery } from "../../Store/Api/item-slice"
import { useEffect, useState } from "react"
import { useUpdateItemMutation } from "../../Store/Api/item-slice"
import * as Yup from "yup"
import { toast } from "react-toastify"
import loading from "../../assets/loading.gif"
import { useTitle } from "../../Hook/useTitle"

export const UpdateItem = () => {

        
  const [ updateItem ] = useUpdateItemMutation()
  const navigate = useNavigate()

  const [ initialValues, setInitialValues ] = useState({
    title: '',
    description: '',
    make: '',
    model: '',
    img_url: '',
    daily_cost: '',
    available: false,
    condition: ''
  })
  
  
  

  const params = useParams()
  const { data: items =[] } = useGetItemsQuery()
  console.log(items)

  const currentImage = items.find(item => item.id === Number(params.id))
  useTitle(`Update ${currentImage.title}`)

  useEffect(()=>{
    const currentItem = items.find(item => item.id === Number(params.id))
    if(currentItem){
      setInitialValues({
        available: currentItem.available,
        title: currentItem.title,
        make: currentItem.make,
        model: currentItem.model,
        img_url: currentItem.img_url,
        daily_cost: currentItem.daily_cost,
        condition: currentItem.condition,
        description: currentItem.description,
        })
    }
      
  },[params])

  const validationSchema = Yup.object({
    available: Yup.boolean("check the fill").isTrue("check the fill").required("check the fill"),
    title: Yup.string().required("Title Required"),
    make: Yup.string().required("Make Required"),
    model: Yup.string().required("Model Required"),
    img_url: Yup.string().required("image required"),
    daily_cost: Yup.number().required("Daily Cost Required"),
    condition: Yup.string().required(" Condition Required"),
    description: Yup.string().required("description Required")
  })

  const handleSubmit = ( values, {resetForm} ) => {
    updateItem({
      id: Number(params.id),
      updatedItem: values
    }).unwrap().then(()=>{
      toast.success("Item Updated Succes")
      navigate("/owner/home")
    }).catch(error =>{
      toast.error(error.data.error)
      console.log("error",error)
    })
  }

  return (
    <>
    <Header />

      
      <div className='flex flex-col lg:flex-row mt-[74px] justify-evenly items-center space-x-2 p-2 space-y-3  md:w-[80%] w-[97%] mx-auto'>
        <img className='w-full lg:w-5/12 object-cover object-center max-h-96' src={currentImage? currentImage.img_url : loading} alt="item cover" />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize>
          <Form className="w-full p-5 shadow-lg rounded-sm grid grid-cols-1 md:grid-cols-2  gap-3">
            <div>
              <Field className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5"
                type="text" id="title"
                name='title'
                placeholder='Title' />
              <ErrorMessage className='text-red-500 py-3' component='div' name="title" />
            </div>
            <div>
              <Field className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5" type="text" name='make' placeholder=' Make' />
              <ErrorMessage className='text-red-500 py-3' component='div' name="make" />
            </div>
            <div>
              <Field className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5" type="text" name='model' placeholder=' Model' />
              <ErrorMessage className='text-red-500 mt-3' component='div' name="model" />
            </div>
            <div>
              <Field className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5" type="number" name='daily_cost' placeholder='Daily Cost' />
              <ErrorMessage className='text-red-500 mt-3' component='div' name="daily_cost" />
            </div>
            <div>
              <Field className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5" type="text" name='condition' placeholder=' condition' />
              <ErrorMessage className='text-red-500 mt-3' component='div' name="condition" />
            </div>
            <div>
              <Field className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5" type="text" name='description' placeholder=' Description' />
              <ErrorMessage className='text-red-500 mt-3' component='div' name="description" />
            </div>
            <div className=' space-y-3'>
              <span className="text-sm">Available</span>
              <Field
                name="available"
                className="ml-3 leading-tight"
                type="checkbox"
              />
              <ErrorMessage name="first_name" />
              <Field className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5" type="text" name='img_url' placeholder=' Image Url' />
              <ErrorMessage className='text-red-500 mt-3' component='div' name="condition" />
              <button type='submit' className='  w-full mb-4  outline-none  bg-red-500 text-center font-normal text-gray-100 px-4 py-3 rounded text-xl '>Update Item</button>
            </div>
          </Form>
        </Formik>
      </div>
  

    <Footer />
    </>
  )
}

