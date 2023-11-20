let signUp_btn = document.getElementById("signUp-btn")
let login_btn = document.getElementById("login-btn")
let login = document.getElementById("login")
let signUp = document.getElementById("signUp")
let error = document.getElementById("error")
let Loginerror = document.getElementById("Loginerror")

signUp_btn.addEventListener("click", () => {
    window.location.href = "signUp.html"
})

login_btn.addEventListener("click", () => {
    window.location.href = "login.html"
})
signUp.addEventListener("click", () => {
    let name1 = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    // console.log(name);
    const nameRegex = /^[a-zA-Z]{5,20}$/
    const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/ 
    const passwordRegex = /^[A-Za-z]\w{7,14}$/

    if(name1.length === 0 || email.length === 0 || password.length === 0){
        // console.log("dddd");
        errorMassege("the input is empty")
    }else if(!nameRegex.test(name1)){
        errorMassege("the name is not correct")
    }else if(!emailRegex.test(email)){
        errorMassege("the email is not correct")
    }else if(!passwordRegex.test(password)){
        errorMassege("the password is not correct")
    }else{
        fetch('https://655309665449cfda0f2e03c5.mockapi.io/users', {
            method: 'POST',
            body: JSON.stringify({
                name: name1,
                email: email,
                password: password,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((data) => window.location.href = "login.html");
    }
    
})
login.addEventListener("click", () => { 
    let email = document.getElementById("Lemail").value
    let password = document.getElementById("Lpassword").value
    if( email.length === 0 || password.length === 0){
        LerrorMassege("the input is empty")
    }else{
        fetch('https://655309665449cfda0f2e03c5.mockapi.io/users')
            .then((response) => response.json())
            .then((data) => {
                console.log("dddddd");
                let user = data.find(element => {
                    element.email === email && element.password === password;
                })
                if(!user){
                    LerrorMassege("the email or passward is not correct")
                }else{
                    let username = data.map(element => {
                        element.email === email && element.password === password;
                    })
                    localStorage.setItem("user", username.name)
                }

            });
    }
})
function addUser(){
    
}
function checkOnUser(){

}

function errorMassege(Str){
    error.value = Str
    error.innerHTML = error.value
    error.style.display = "block"
}
function LerrorMassege(Str){
    Loginerror.value = Str
    Loginerror.innerHTML = Loginerror.value
    Loginerror.style.display = "block"
}