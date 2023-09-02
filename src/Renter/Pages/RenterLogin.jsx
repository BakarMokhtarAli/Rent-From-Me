import userRegistration from "../../assets/userRegistration.png";
import { Header, Footer } from "../../Dashboard/Components";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"
import { useRenterLoginMutation } from "../../Store/Api/Renter";

import { Link, useNavigate } from "react-router-dom";
import { useTitle } from "../../Hook/useTitle";
import { toast } from "react-toastify";

export const RenterLogin = () => {
useTitle("Renter Login")
  const initialValues = {
    email: "",
    password: ""
  };
  const navigate = useNavigate()
  const [ renterLogin ] = useRenterLoginMutation()

  const validationSchema = Yup.object({
    
    email: Yup.string().email("Email is in valid").required("Email is required"),
    password: Yup.string().required("Password is Required")
  })

  const handleSubmit = (values, {resetForm}) => {
        renterLogin(values).unwrap().then(()=>{
            navigate("/renter/home")
            toast.success("logged in succes")
            resetForm()
            console.log(values)
          }).catch(err =>{
            toast.error(err.data.error)
            console.log("ERROR", err)
          })
  }

  return (
    <>
    <Header />      

      <div className="w-3/4  mt-40 m-auto flex flex-row justify-between items-center flex-wrap max-md:flex-col">
        <div className="w-1/2">
          <img className="w-full" src={userRegistration} alt="" />
        </div>
        <div className="w-1/2">
          <Formik 
          initialValues={initialValues} 
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          >
            <Form className="w-full shadow-sm flex flex-col justify-start gap-3 p-2">
              <h2 className="text-2xl font-bold text-[#4D1489] text-center mb-4 mt-2 outline-none">
                Renter Login
              </h2>              

              <div className="mb-6">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email:
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-[#4D1489] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-0"
                  placeholder="Email"
                />
                <ErrorMessage  name="email" component="div" className="text-red-800 text-sm mt-2"/>
              </div>

              <div className="mb-6">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password:
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-[#4D1489] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-0"
                  placeholder="Password"
                />
                <ErrorMessage  name="password" component="div" className="text-red-800 text-sm mt-2"/>
              </div>

              <button
                type="submit"
                className="cursor-pointer bg-[#4D1489] text-[#FEFEFE] py-2 w-[90&]  max-auto rounded-lg"
              >
                Login
              </button>
              <span className="flex justify-between items-center">
                <p>if you haven't account</p>
                <Link to="/renter/register" className="text-[#4D1489] hover:underline">Register Here</Link>
            </span>
            </Form>
          </Formik>
        </div>
      </div>
    
      <Footer />
    </>
  );
};
