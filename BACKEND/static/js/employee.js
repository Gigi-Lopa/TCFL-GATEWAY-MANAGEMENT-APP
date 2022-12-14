document.querySelector(".create_guard")
.addEventListener("submit", (e)=>{
    e.preventDefault()
    fetch(`/create/guard`, {
        method : "POST",
        headers:{
            "Accept":"application/json, text/plain, */*",
            "Content-type":"application/json"
        },
        body:JSON.stringify({
           name : e.target.name.value,
           username  : e.target.username.value,
           password : e.target.password.value
        })

    })
    .then(res=> res.json())
    .then(res =>{
        
        if(res.creation_done == true){
            location.reload()
        }
        else{
           alert("An error occured!")
        }

    })  
    .catch(err =>{
        console.log(err)
    })  
})