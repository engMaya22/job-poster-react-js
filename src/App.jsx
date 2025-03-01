import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Jobs from "./pages/jobs";
import AddJob from "./pages/AddJob";
import NotFound from "./pages/NotFound";
import Job, { jobLoader } from "./pages/Job";
import EditJob from "./pages/EditJob";


const App = () => {
  
    const addJob = async(newJob)=>{
      const res = await fetch('/api/jobs',{
        method: 'POST',
        headers:{
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(newJob)//like local storage when save data

      });
      return;

    }
    const deleteJob = async(jobId)=>{
      const res = await fetch(`/api/jobs/${jobId}`,{
        method : 'DELETE'
      });
      return;


    }
    const updateJob = async(job)=>{
      const res = await fetch(`/api/jobs/${job.id}`,{
        method:'PUT',
        headers:{
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(job)
      });
      return;

    }

    const router = createBrowserRouter (
    createRoutesFromElements(
      // now any Children inside route main layout will use this layout
                              <Route path="/" element={<MainLayout />} >
                                  <Route index element={<Home />} />
                                  <Route path="/jobs" element={<Jobs />} />
                                  <Route path="/jobs/:id" element={<Job deleteJobSubmit={deleteJob} />} loader={jobLoader}  />
                                  <Route path="/edit-job/:id" element={<EditJob updateJobSubmit={updateJob} />}  loader={jobLoader}/>
                                  {/* we define each path and its component page */}
                                  <Route path="/add-job" element={<AddJob addJobSubmit={addJob} />} />
                                  <Route path="*" element={<NotFound />} />
                                


                              </Route>
                            )
    )

  return ( <RouterProvider router={router}/>)  
}

export default App;

//when using tailwind with react we need to search by vite with tailwind
//components state , global state 
//react-icons package
//not to get link we can use <a> but its better to use <Link> cause this link not refresh page when use it like <a> does
//when we need to work with active link we use NavLink instead of Link
//to run json server npm run server


// for details api , when need to define route and use this route in link where 
// we send id with params to use it in details page to get details data api


// auth admin to add job