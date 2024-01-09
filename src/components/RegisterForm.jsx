import { Form } from "formik"
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
const RegisterForm = ({ values,
    handleChange,
    errors,
    touched,
    handleBlur,}) => {
  return (
    <Form>
    <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
    <div>
      <label htmlFor="username" className="sr-only">
        UserName
      </label>
      <div className="relative">
        <input
          type="text"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="User Name"
          name="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      {touched.username && Boolean(errors.username) && <span className="text-red-500">{errors.username}</span>}
    </div>
    <div>
      <label htmlFor="firstName" className="sr-only">
        First Name
      </label>
      <div className="relative">
        <input
          type="text"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      {touched.firstName && Boolean(errors.firstName) && <span className="text-red-500">{errors.firstName}</span>}
    </div>
    <div>
      <label htmlFor="lastName" className="sr-only">
        Last Name
      </label>
      <div className="relative">
        <input
          type="text"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      {touched.lastName && Boolean(errors.lastName) && <span className="text-red-500">{errors.lastName}</span>}
    </div>
    <div>
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <div className="relative">
        <input
          type="email"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter email"
          name="email"
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
        Do you have an account?
        <NavLink to={"/"} className="underline" href="">
          Sign In
        </NavLink>
      </p>
      <button
        type="submit"
        className="inline-block rounded-lg bg-gray-500  px-5 py-3 text-sm font-medium text-white"
      >
        Sign Up
      </button>
    </div>
  </form>
  </Form>
  )
}

export default RegisterForm