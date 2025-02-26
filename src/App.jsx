import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Jobs from "./pages/jobs";
import AddJob from "./pages/AddJob";


const router = createBrowserRouter (
  createRoutesFromElements(
    // now any Children inside route main layout will use this layout
                            <Route path="/" element={<MainLayout />} >
                                 <Route index element={<Home />} />
                                 <Route path="/jobs" element={<Jobs />} />
                                 {/* we define each path and its component page */}
                                 <Route path="/add-job" element={<AddJob />} />


                            </Route>
                          )
)

const App = () => {
  return ( <RouterProvider router={router}/>)  
}

export default App;

//when using tailwind with react we need to search by vite with tailwind
//components state , global state 
//react-icons package
//not to get link we can use <a> but its better to use <Link> cause this link not refresh page when use it like <a> does