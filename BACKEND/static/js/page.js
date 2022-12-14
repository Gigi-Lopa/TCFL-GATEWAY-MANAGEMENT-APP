
let studentForm = document.querySelector(".update_infor")

let fillFeids = (data) =>{
    let name = studentForm.querySelector("#name")
    let std_id = studentForm.querySelector("#id")
    studentForm.querySelectorAll("input[name = 'tuition']").forEach(elem =>{
        if (data.tuition.toUpperCase() == "CLEARED" && elem.value == "Yes"){
            elem.checked = true
        }
        else if(data.tuition.toUpperCase() == "NOT CLEARED" && elem.value == "No"){
            elem.checked = true
        }
    })
    studentForm.querySelectorAll("input[name = 'pendings']").forEach(elem =>{
        console.log(data.pendings, elem.value)
        if (data.pendings.toUpperCase() == "YES" && elem.value == "Yes"){
            elem.checked = true
        }
        else if(data.pendings.toUpperCase() == "NONE" && elem.value == "None"){
            elem.checked = true
        }
        
    })
    studentForm.querySelectorAll("input[name = 'access']").forEach(elem =>{
        if (data.access.toUpperCase() == "YES" && elem.value == "Yes"){
            elem.checked = true
        }
        else if(data.access.toUpperCase() == "NO" && elem.value == "No"){
            elem.checked = true
        }
 
    })   
    name.value = ""
    name.value = data.name

    std_id.value = ""
    std_id.value = data.student_Id
}

document.querySelectorAll("tr").forEach(TR =>{
    TR.addEventListener("click", ()=>{
        let student_Id = TR.querySelector(".id").innerHTML
        let name = TR.querySelector(".name").innerHTML
        let tuition = TR.querySelector(".tuition").innerHTML
        let pendings = TR.querySelector(".pendings").innerHTML
        let access = TR.querySelector(".grant_acess").innerHTML

        fillFeids({
            student_Id,
            name,
            tuition,
            pendings,
            access
        })
    })
})
document.getElementById("close-overlay").addEventListener("click", ()=>{
    document.querySelector(".overlay").classList.add("hidden")
})

let updateStudentData = (data, mode) =>{
    console.log(data)
    fetch(`/${mode}/student`, {
        method : "POST",
        headers:{
            "Accept":"application/json, text/plain, */*",
            "Content-type":"application/json"
        },
        body:JSON.stringify({
           data
        })

    })
    .then(res=> res.json())
    .then(res =>{
        
        if(res.update_done == true){
            location.reload()
        }
        else{
           alert("An error occured!")
        }

    })  
    .catch(err =>{
        console.log(err)
    })
}
let viewCode = (id) =>{
    $("#canvas").empty()
    QRCode.toCanvas(document.getElementById('canvas'), id, function (error) {
        if (error) console.error(error)
        console.log('success!');
      })
        document.querySelector(".overlay").classList.remove("hidden")

    }

studentForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    let tuition;
    let pendings;
    let access
    studentForm.querySelectorAll("input[name = 'tuition']").forEach((Element)=>{
        if (Element.checked){
            tuition = Element.value == "Yes" ? ("CLEARED") : ("NOT CLEARED")
        }
    })
    studentForm.querySelectorAll("input[name = 'pendings']").forEach((Element)=>{
        if (Element.checked){
            pendings = Element.value == "Yes" ? ("Yes") : ("None")
        }
    })
    studentForm.querySelectorAll("input[name = 'access']").forEach((Element)=>{
        if (Element.checked){
            access = Element.value == "Yes" ? ("Yes") : ("No")
        }
    })
    let data = {
        std_id  : e.target.id.value,
        name : e.target.name.value,
        tuition,
        pendings,
        access
    }
    if (e.submitter.id === "up-btn" && e.target.name.value.length > 0){
        updateStudentData(data, "update")
   }
   else if (e.submitter.id === "crt-btn" && e.target.name.value.length > 0){
        updateStudentData(data, "create")
   }
   else if(e.submitter.id = "qr-btn" && e.target.name.value.length > 0){
        viewCode(data.std_id)
   } 


})