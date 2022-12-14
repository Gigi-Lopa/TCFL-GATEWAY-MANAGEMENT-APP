document.querySelector("form.needs-validation").addEventListener("submit", e=>{
    e.preventDefault()
    let accessLabel = document.querySelector("input[name='accessLabel']").value
    let password = document.querySelector("input[name='password']").value
    if (accessLabel.length > 0 && password.length > 0){
        document.querySelector("#login-btn").disabled =true
        fetch("/auth/company", {
            method:"POST",
            headers:{
            "Accept":"application/json, text/plain, */*",
            "Content-type":"application/json"
            },
            body:JSON.stringify({
                accessLabel,
                password
            })
        })
        .then((res) => res.json())
        .then((data)=>{
            if(data.status){
                window.sessionStorage.setItem("id", data.id)
                $(location).attr("href","/main/page")
            }
            else{
                alert("No Account was found")
                document.querySelector("#login-btn").disabled = false

            }
        })
        .catch(err=>{

        })
    
    }
})