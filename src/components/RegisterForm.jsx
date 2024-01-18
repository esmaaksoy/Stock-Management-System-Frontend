import { Form } from "formik"
import { object, string } from "yup"
import { NavLink } from "react-router-dom";
import { EmailIcon, PasswordIcon } from "../helper/icons";
export const registerSchema = object({
    username: string()
      .max(10, "The username must be less than 10 characters.")
      .required(
        "The username is required."),
    firstName: string()
      .max(10, "The first name must be less than 10 characters.")
      .required(
        "The first name is required."),
    lastName: string()
      .max(10, 
        "The last name must be less than 10 characters.")
      .required("The last name is required."),
  
    email: string()
      .email(
        "Please enter a valid email.")
      .required(
        "Email is required."),
    password: string()
      .required(
        "Password is required.")
      .min(8, "The password must be at least 8 characters.")
      .matches(/\d+/, 
      "The password must contain at least one number.")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
      .matches(/[!/[@$!%*?&]+/, "Password must contain at least one special character (@$!%*?&)."),
  })
const inputData= [
  {label:"username", name:"username", type:"text", placeholder:"User Name", icon:"" },
  {label:"firstName", name:"firstName", type:"text", placeholder:"First Name", icon:"" },
  {label:"lastName", name:"lastName", type:"text", placeholder:"Last Name", icon:"" },
  {label:"email", name:"email", type:"email", placeholder:"Enter email", icon:<EmailIcon/> },
  {label:"password", name:"password", type:"password", placeholder:"Enter password", icon:<PasswordIcon/> }
]
const RegisterForm = ({ values,
    handleChange,
    errors,
    touched,
    handleBlur,}) => {
  return (
    <Form>
    <div className="mx-auto mb-0 mt-8 max-w-md space-y-4">
    {inputData.map(({label, name, type, placeholder, icon })=>( 
        <div>
          <label htmlFor={label} className="sr-only">
          {label}
          </label>
          <div className="relative">
            <input
              name={name}
              type={type}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder={placeholder}
              value={values[name]}
              onChange={handleChange}
              onBlur={handleBlur}
              autocomplete="off"
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              {icon}     
            </span>
          </div>
          {touched[name] && Boolean(errors[name]) && (
            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-2">{errors[name]}</span>
          )}
        </div>))}
    <div className="flex items-center justify-between flex-wrap">
      <p className="text-sm text-gray-500 mb-3">
        Do you have an account?
        <NavLink to={"/"} className="underline" href="">
          Sign In
        </NavLink>
      </p>
      <button
        type="submit"
        className="inline-block rounded-lg bg-gray-500  px-5 py-3 text-sm font-medium text-white mx-auto"
      >
        Sign Up
      </button>
    </div>
  </div>
  </Form>
  )
}

export default RegisterForm