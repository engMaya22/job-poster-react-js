

const JobApi = () => {

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
    return {
        addJob ,
        deleteJob ,
        updateJob

    }

}
export default JobApi;
