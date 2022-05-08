
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

});

const iconEye = document.querySelector('.icon-eye');

iconEye.addEventListener("click", function () {
    const icon = this.querySelector("i");

    //Cambiar tipo del input (visualizar contraseña)
    if(this.nextElementSibling.type === "password"){
        this.nextElementSibling.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
    else{
        this.nextElementSibling.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }//Cambiar tipo del input (ocultar contraseña)
});


