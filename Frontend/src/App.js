import React, { Component } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/home";
import { University } from "./components/university";
import CourseWithPassword from "./components/courseWithPassword";
import CoursePage from "./components/coursePage";

class App extends Component {
  render() {
    // initialize a browser router
    const router = createBrowserRouter([
      {
        element: <Layout />,
        // your custom routing error component
        // errorElement: <Page404 />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/:universityId",
            element: <University />,
          },
          {
            path: "/:universityId/:courseId",
            element: <CoursePage />,
          },
          {
            path: "/:universityId/:courseId/:password",
            element: <CourseWithPassword />,
          },
        ],
      },
    ]);

    return <RouterProvider router={router} />;

    // return (
    //   // //
    //   // <div>
    //   //   <h1>React Navigation Example</h1>
    //   //   <Router>
    //   //     <nav>
    //   //       <ul>
    //   //         <li>
    //   //           <Link to="/">Home</Link>
    //   //         </li>
    //   //       </ul>
    //   //     </nav>

    //   //     <Routes>
    //   //       <Route
    //   //         path="/"
    //   //         exact
    //   //         component={<Course courseData={newEngProdData} />}
    //   //       />
    //   //     </Routes>
    //   //     {/* Add a button to navigate */}
    //   //     <button onClick={() => (window.location.href = "/")}>
    //   //       Go to/ Page
    //   //     </button>
    //   //   </Router>
    //   // </div>
    // );
  }
}

export default App;
