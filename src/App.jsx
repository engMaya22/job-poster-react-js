import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListing from "./components/JobListing";
import Navbar from "./components/Navbar";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
  const title = "Become a React Dev";
  const subtitle  =  "Find the React job that fits your skills and needs";

  return (  <>
              <Navbar />
              <Hero  title={title} subtitle={subtitle} />
              <HomeCards />
              <JobListing />             
              <ViewAllJobs />
             </>
 

)  
}

export default App;

//when using tailwind with react we need to search by vite with tailwind
//components state , global state 