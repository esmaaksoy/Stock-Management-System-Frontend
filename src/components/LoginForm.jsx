import { Form } from "formik"
import { object, string } from "yup"
import { NavLink } from "react-router-dom";
export const loginSchema = object({
    email: string()
      .email(
        "Please enter a valid email.")
      .required(
"Email is required."),
    password: string()
      .required(
        "Password is required.")
      .min(8, 
        "Password must contain at least 8 characters.")
      .matches(/\d+/, 
      "Password must contain at least one digit.")
      .matches(/[a-z]/, 
      "Password must contain at least one lowercase letter.")
      .matches(/[A-Z]/, 
      "Password must contain at least one uppercase letter.")
      .matches(
        /[@$!%*?&]+/,
"Password must contain at least one special character (@$!%*?&)."
      ),
  })
  const LoginForm = ({handleChange,values,touched,errors,handleBlur}) => {
    return (
        <Form>
        <div className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <input
               name="email"
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
          
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
          
            </div>
            {touched.email && Boolean(errors.email) && <span className="text-red-500">{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
           
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
             
            </div>
            {touched.password && Boolean(errors.password) && <span className="text-red-500">{errors.password}</span>}
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              No account?
              <NavLink to={"/register"} className="underline" href="">
                Sign up
              </NavLink>
            </p>
            <button
              type="submit"
              className="inline-block rounded-lg bg-gray-500 px-5 py-3 text-sm font-medium text-white"
            >
              Sign in
            </button>
          </div>
        </div>
      </Form>
    )
  }
  
  export default LoginForm