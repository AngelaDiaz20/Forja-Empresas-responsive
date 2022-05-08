
let form = document.getElementById('form-login');

form.addEventListener('submit', validation=(e)=>{
    e.preventDefault();

    //Estilos aviso de error de credenciales
    let error=document.querySelector(".warning");
    error.style.setProperty("visibility","visible");
    error.style.setProperty("opacity","1");
    error.style.setProperty("transition","4s ease in");
    error.style.setProperty("display","flex");

    userName = document.getElementById('user').value;
    userPassword = document.getElementById('password').value;

    if(userName === "Admin" && userPassword === "Kuepa2022"){
        //Redireccionamiento a Dashboard
        window.setTimeout(()=>{
            window.location.href="dashboard.html"
        },500);
    }
    else{
        error.innerHTML = `<p>Error de credenciales</p> <i id="error" class="fa-solid fa-xmark"></i>`;
    }

})



