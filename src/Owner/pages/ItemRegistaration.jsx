
import * as Yup from 'yup'

import { Form, Field, ErrorMessage, Formik } from 'formik'

import { useCreateItemMutation } from '../../Store/Api/item-slice'

import { Link, useNavigate } from 'react-router-dom'
import Avatar from "../../assets/Avatar.jpg"
import { Header } from "../pages/Home/Components"
import { toast } from 'react-toastify'
import { useTitle } from '../../Hook/useTitle'

export const ItemRegistration = () => {
  const [  createItem ] = useCreateItemMutation()
  useTitle("Create Item")
  const navigate = useNavigate()
  

  const initialValues = {
    title: '',
    description: '',
    make: '',
    model: '',
    img_url: '',
    daily_cost: '',
    available: false,
    condition: ''
  }
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
  const handleSubmit = (values, { resetForm }) => {

    createItem({
      available: values.available,
      title: values.title,
      make: values.make,
      model: values.model,
      img_url: values.img_url,
      daily_cost: values.daily_cost,
      condition: values.condition,
      description: values.description,
      }
    ).unwrap().then(() => {
      resetForm()
      toast.success("item Registred Success")
      navigate("/owner/home")
    }).catch((error) => {
      toast.error(error.data.error)
      console.log(error)
    })


  }



  return (
    <>
    <Header />
      <div className='flex flex-col lg:flex-row mt-[74px]  justify-evenly items-center space-x-2 p-2 space-y-3  md:w-[80%] w-[97%] mx-auto'>
        <img className='w-full lg:w-5/12 object-cover object-center' src={Avatar } alt="item cover" />
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
              <ErrorMessage name="available" className="text-red-500 ml-2" component="span" />
              <Field className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5" type="text" name='img_url' placeholder=' Image Url' />
              <ErrorMessage className='text-red-500 mt-3' component='div' name="condition" />
              <button type='submit' className='  w-full mb-4  outline-none  bg-red-500 text-center font-normal text-gray-100 px-4 py-3 rounded text-xl '>Register Item</button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  )
}
