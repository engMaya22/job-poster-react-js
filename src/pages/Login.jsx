import { useNavigate } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { useAuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const {loginUser} = useAuthContext();

  const initialValues = {
    email: '',
    password: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required')
  })

  function handleSubmit(values) {
    loginUser(values)
    navigate('/jobs')
  }

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <h2 className="text-3xl text-center font-semibold mb-6">Login</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <button
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  )
}

export default Login

// import { useState } from "react"
// import { useNavigate } from "react-router-dom"

// const Login = ({ loginUserSubmit }) => {
//   const [formData, setFormData] = useState({
//     email: '', // required
//     password: '' // required
//   })

//   const navigate = useNavigate()

//   function submitHandler(e) {
//     e.preventDefault()
//     loginUserSubmit(formData)
//     navigate('/jobs')
//   }

//   function handleChange(e) {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   return (
//     <section className="bg-indigo-50">
//       <div className="container m-auto max-w-2xl py-24">
//         <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
//           <form onSubmit={submitHandler}>
//             <h2 className="text-3xl text-center font-semibold mb-6">Login</h2>

//             <div className="mb-4">
//               <label
//                 htmlFor="email"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="border rounded w-full py-2 px-3"
//                 placeholder="Enter your email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="password"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 className="border rounded w-full py-2 px-3"
//                 placeholder="Enter your password"
//                 required
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//             </div>

//             <div>
//               <button
//                 className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
//                 type="submit"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Login
