



const loginUser = async(user)=>{
    const res = await fetch('/api/login',{
        method: 'POST',
        headers :{
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(user),
    });

    return;
}

const registerUser = async(user)=>{
    const res = await fetch('/api/users',{
        method: 'POST',
        headers :{
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(user),
    });

    return;

  
}
export {registerUser ,loginUser};


