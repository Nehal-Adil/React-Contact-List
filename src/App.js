import { RouterProvider, createBrowserRouter } from "react-router-dom";

import NavBar from "./Components/NavBar/Navbar";
import Home from "./Components/Home/Home";

import AddToContact from "./Pages/AddToContact/AddToContact";
import Edit from "./Pages/EditContact/EditContact";

import CustomeContext from "./context";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {
  // Routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [
        { path: "/", element: <Home /> },
        { path: "add-contact", element: <AddToContact /> },
        { path: "edit-contact/:id", element: <Edit /> },
      ],
    },
  ]);

  return (
    <CustomeContext>
      <ToastContainer />
      <div className="App">
        {/* Assigning Routes */}
        <RouterProvider router={router} />
      </div>
    </CustomeContext>
  );
}

export default App;
