class UserCrud{
    static url="https://reqres.in/api/users";


    static async get(){
        let response=await fetch(UserCrud.url);
        return await response.json();
    }


    static async delete(id){
        let response=await fetch(`${UserCrud.url}/${id}`,{method:"DELETE"});

        //because the response is emty- we only check if the selete completed successfully
        return response.ok;
    }


    static async post(name, job){
        let response=await fetch(UserCrud.url,{
            method:"POST",
            body: JSON.stringify({name,job}),
            headers:{
                "Content-Type":"application/json",
                "Accept":"*/*"
            }
        });

        return await response.json();
    }


    
    static async put(id,name, job){
        let response=await fetch(`${UserCrud.url}/${id}`,{
            method:"PUT",
            body: JSON.stringify({name,job}),
            headers:{
                "Content-Type":"application/json",
                "Accept":"*/*"
            }
        });

        return await response.json();
    }


}


export default UserCrud;