import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListing from "../components/JobListing";
import ViewAllJobs from "../components/ViewAllJobs";


const Home = ()=>{
    return (
        <>
            <Hero />
            <HomeCards />
            <JobListing />
            <ViewAllJobs />
        </>
    )
}
export  default Home;