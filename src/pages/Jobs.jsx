



import JobCard from "../components/JobCard";
import jobs from "../jobs.json" ;

const Jobs = () => {
  return (
    
    // <section className="bg-blue-50 py-4">
    //   <div className="container mx-auto px-4">
    //     <div className="relative">
    //       <input
    //         type="text"
    //         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
    //         placeholder="Filter jobs..."
    //       />
    //     </div>
    //   </div>
    // </section>

    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         
           {
             jobs.map((job , indx)=> <JobCard key={indx} job={job} />)
      
           }
       
         
        </div>
      </div>
    </section>
  )
}

export default Jobs
