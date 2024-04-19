# Stock Management System
This project is a stock management application developed using **Node.js** on the backend and **React** on the frontend. For user interaction, the application offers login functionality for existing users and a straightforward account creation process for newcomers. Users can effortlessly add new information, perform edits or deletions, and manage product-related data such as firm, brand, and stock updates. The system supports sorting and filtering operations on tabular data, providing a streamlined experience. Additionally, users can visualize data through graphical representations, enhancing the overall accessibility and usability of the application.
**Redux Toolkit** is chosen for state management in the project. Additionally, the **redux-persist** library is utilized for persisting the Redux state, ensuring that the state is preserved when the application is restarted. **CRUD** operations are performed using API requests, and **Formik** along with **Yup** is preferred for form validation. The UI/UX design is crafted using libraries such as **Material-UI, Tailwind CSS, Material Tailwind, ApexCharts**, and more.
## Screenshots
![Project snapshot](./stock.gif) 

[Stock Management System Live Page](https://stock-management-system-esma.netlify.app/) <br><br>
If you prefer to see Redoc or JSON instead of Swagger, simply replace 'swagger' in the endpoint with 'redoc' or 'json'.<br>
[Swagger Documents](https://stock-management-system-backend.onrender.com/documents/swagger/)

## Project Skeleton

```
Stock Management System (folder)
|
|
├── public
│    └── index.html
├── src
│    ├── app
│    │    └──  store.jsx
│    ├── assets
│    │    └──  logo.png
│    ├── components
│    │     ├──BarChart.jsx
│    │     ├──BrandCard.jsx
│    │     ├──BrandForm.jsx
│    │     ├──DataMessage.jsx
│    │     ├──FirmCard.jsx
│    │     ├──FirmForm.jsx
│    │     ├──Footer.jsx
│    │     ├──LineChart.jsx
│    │     ├──LoginForm.jsx
│    │     ├──Navbar.jsx
│    │     ├──ProductForm.jsx
│    │     ├──ProductTable.jsx
│    │     ├──RecentReport.jsx
│    │     ├──RegisterForm.jsx
│    │     ├──SaleForm.jsx
│    │     ├──SaleTable.jsx
│    │     ├──Stats.jsx
│    │     └──Switch.jsx
│    ├── features
│    │     ├──authSlice.js
│    │     └──stockSlice.js
│    ├── helpers
│    │     ├── icon.js
│    │     └──ToastNotify.js
│    ├── pages
│    │     ├──Brands.jsx
│    │     ├──Dashboard.jsx
│    │     ├──Firms.jsx
│    │     ├──Login.jsx
│    │     ├──Products.jsx
│    │     ├──Purchases.jsx
│    │     ├──Register.jsx
│    │     ├──Sales.jsx
│    │     └──ScroolToTop.jsx
│    ├── router
│    │     ├── PrivateRouter.jsx
│    │     └── AppRouter.jsx
│    ├── service
│    │     ├── useAuthCalls.js
│    │     ├── useAxios.js
│    │     └── useStockCalls.js
│    ├── App.js
│    ├── index.js
│    ├── index.css
├── .env
├── package-lock-json
├── package.json
├── tailwind.config.js
└── README.md
```

## Packages Utilized in the Development:

- **React**: A JavaScript library for building user interfaces, providing a declarative and component-based approach to UI development.
- **React-Redux**: Official Redux bindings for React, enabling seamless integration of Redux state management with React components.
- **Redux Toolkit**: An opinionated, batteries-included Redux library for efficient and simplified Redux usage, including Redux logic and state management utilities.
- **Redux-persist**: A library for persisting Redux state to local storage or other storage mechanisms, ensuring data persistence between sessions.
- **Yup**: A schema validation library for JavaScript, enabling easy and efficient validation of data schemas, particularly useful in form validation.
- **Formik**: A React library for building forms with easy form state management, form validation, and form submission handling.
- **Material-UI**: A popular React UI framework providing a set of pre-designed and customizable UI components based on Google's Material Design guidelines.
- **Tailwind CSS**: A utility-first CSS framework for creating custom and responsive user interfaces with minimal CSS code, focusing on utility classes for styling.
- **Material Tailwind**: A UI kit that combines the utility-first approach of Tailwind CSS with the components and design principles of Material Design.
- **ApexCharts**: A modern JavaScript charting library that offers a wide range of interactive and visually appealing charts for data visualization in web applications.
- **MUI Data Grid**: A feature-rich data grid component for React applications, offering advanced features like sorting, filtering, pagination, and customization options.
- **Axios**: A promise-based HTTP client for making asynchronous HTTP requests in JavaScript environments, commonly used for consuming APIs.
- **React-toastify**: A React library for displaying toast notifications in web applications, providing customizable and user-friendly notifications for various actions.
- **React Router DOM**: A routing library for React applications, allowing for declarative routing and navigation between different views or pages within the application.
- **React Helmet**: A React library for managing document head meta-information, enabling the dynamic manipulation of HTML head elements, including title, meta tags, and more.
- **React Open Graph**: A React library for generating Open Graph meta tags, facilitating the customization and inclusion of Open Graph metadata in web pages for improved sharing on social media platforms.

## Tools Utilized in the Development:
- **Postman**: A popular API testing and development tool used for testing backend API endpoints and debugging HTTP requests.
- **Redux DevTools**: A browser extension and development tool that integrates with Redux, facilitating debugging and monitoring of Redux state changes during development.



## How to use?
- If you have an account, you can log in; otherwise, you can create a new account.
- You can delete or edit existing information at any time.
- Easily add new information through the application.
- You can enter product, firm, brand, etc., update stocks, and sell products currently in stock
- Perform sorting or filtering operations on the displayed data in tabular form.
- Access graphical representation of the data.

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/esmaaksoy/Stock-Management-System-Frontend
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create .env file in home directory.
   ```sh
   REACT_APP_BASE_URL=https://stock-management-system-backend.onrender.com/
   ```
5. The project is ready, you can start using it now.
   You can run:

   `npm start`

   Runs the app in the development mode.\
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## API Reference
https://stock-management-system-backend.onrender.com/

## İMPORTANT NOTES !

To use the application, you can log in with the following email and password <br>
email: admin@site.com <br>
password: aA?123456 <br>
 
