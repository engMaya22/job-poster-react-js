import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListing from "./components/JobListing";
import Navbar from "./components/Navbar";

const App = () => {
  const title = "Become a React Dev";
  const subtitle  =  "Find the React job that fits your skills and needs";

  return (  <>
              <Navbar />
              <Hero  title={title} subtitle={subtitle} />
              <HomeCards />
              <JobListing />             
                <section className="m-auto max-w-lg my-10 px-6">
                  <a
                    href="jobs.html"
                    className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
                    >View All Jobs</a
                  >
                </section>
             </>
 

)  
}

export default App;

//when using tailwind with react we need to search by vite with tailwind