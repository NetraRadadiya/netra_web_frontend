// signup

const signup=document.getElementById("signup")
const arr=JSON.parse(localStorage.getItem("data")) || []

signup.addEventListener("submit",(e)=>{
    e.preventDefault()

    let signupdata={
        first_name:document.getElementById("firstname").value,
        last:document.getElementById("lastname").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    }
    console.log(signupdata)
    arr.push(signupdata)

    // localStorage.setItem("data",JSON.stringify(signupdata))
    localStorage.setItem("data",JSON.stringify(arr))
})

// signin

const signin=document.getElementById("signin")
signin.addEventListener("submit",(e)=>{
    e.preventDefault()

    let signindata={
        email:document.getElementById("signin-email").value,
        password:document.getElementById("signin-password").value
    }
    const data=JSON.parse(localStorage.getItem("data"))

    let store=data.filter((el,i)=>el.mail==signindata.email && el.password==signindata.password)

    console.log(store)

    if(store){
        alert("login")
    }else{
        alert("Invalid")
    }
})