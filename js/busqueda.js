let button = document.getElementById('searchUser'); 

button.onclick = function search(e){
    e.preventDefault();

    let numberDocument = document.getElementById('number-id').value;
    let searchResult=document.querySelector(".modalInfo");
    

    if (numberDocument > 0 ){

        if(numberDocument == 52368795){
            console.log("Correcto");
            
            searchResult.innerHTML = `
            <h3> Pepito Pérez </h3>
            <fieldset>
                <legend> <strong> Primera dosis </Strong> </legend>
                <p> <strong>laboratorio:</strong> Pfizer</p
                <p> <strong>Fecha de aplicación:</strong> 20/01/2022</p>
            </fieldset>
            <h4>¿Deseas registrar datos de vacunación?</h4>
            <div class="buttons-modal">
                <a href="vacunacion.html">
                    <button class="bton-login">¡Si!, gracias
                    </button>
                </a>
                <a href="#dashboard">
                    <button class="bton-register">Cancelar</button>
                </a>
            </div>
            `;

            window.setTimeout(()=>{
                window.location.href="#modal"
            },500);
        }

        else if(numberDocument == 1001235478){
            console.log("Correcto")
            searchResult.innerHTML = `
            <h3> Panaberto Pecopón </h3>
            <fieldset>
                <legend> <strong> Primera dosis </Strong> </legend>
                <p> <strong>laboratorio:</strong> Pfizer</p
                <p> <strong>Fecha de aplicación:</strong> 25/10/2021</p>
            </fieldset>

            <fieldset>
                <legend> <strong> Segunda dosis </Strong> </legend>
                <p> <strong>laboratorio:</strong> Pfizer</p
                <p> <strong>Fecha de aplicación:</strong> 20/02/2022</p>
            </fieldset>

            <h4>¿Deseas registrar datos de vacunación?</h4>
            <div class="buttons-modal">
                <a href="vacunacion.html">
                    <button class="bton-login">¡Si!, gracias
                    </button>
                </a>
                <a href="#dashboard">
                    <button class="bton-register">Cancelar</button>
                </a>
            </div>
            `;
            window.setTimeout(()=>{
                window.location.href="#modal"
            },500);
        }

        else if(numberDocument == 25413574){
            console.log("Correcto")
            searchResult.innerHTML = `
            <h3> Petunia Piggy </h3>
            <fieldset>
                <legend> <strong> Primera dosis </Strong> </legend>
                <p> <strong>laboratorio:</strong> Sinovac </p
                <p> <strong>Fecha de aplicación:</strong> 29/06/2021 </p>
            </fieldset>

            <fieldset>
                <legend> <strong> Segunda dosis </Strong> </legend>
                <p> <strong>laboratorio:</strong> Sinovac </p
                <p> <strong>Fecha de aplicación:</strong> 15/09/2021</p>
            </fieldset>

            <fieldset>
                <legend> <strong> Dosis de refuerzo </Strong> </legend>
                <p> <strong>laboratorio:</strong> Astrazeneca </p
                <p> <strong>Fecha de aplicación:</strong> 18/04/2022</p>
            </fieldset>

            <h4>Esquema de vacunación completo</h4>
            <div class="buttons-modal">
                <a href="#dashboard">
                    <button class="bton-register">Entendido</button>
                </a>
            </div>
            `;
            window.setTimeout(()=>{
                window.location.href="#modal"
            },500);
        }

        else if(numberDocument == 1007203506){
            searchResult.innerHTML = `
            <h3>No existen registros de vacunación</h3>
            <h4>¿Deseas registrar un nuevo paciente?</h4>
            <div class="buttons-modal">
                <a href="vacunacion.html">
                    <button class="bton-login">¡Si!, gracias
                    </button>
                </a>
                <a href="#dashboard">
                    <button class="bton-register">Cancelar</button>
                </a>
            </div>`;  
            window.setTimeout(()=>{
                window.location.href="#modal"
            },500);  
        } 

        else{
            searchResult.innerHTML = `
            <h3>Sin registros en Forja Empresas</h3>
            <h4>No existen registros de esta persona en nuestras bases de datos. Esta persona no se encuentra vinculada a Forja Empresas.</h4>
            <div class="buttons-modal">
                <a href="#dashboard">
                    <button class="bton-register">Entendido</button>
                </a>
            </div>`;  
            window.setTimeout(()=>{
                window.location.href="#modal"
            },500);  
        } 
    }

    else if(numberDocument.length < 5){
        let errorsito=document.querySelector(".warningg");
        errorsito.style.setProperty("visibility","visible");
        errorsito.style.setProperty("opacity","1");
        errorsito.style.setProperty("animation","ocultar 1s 2s forwards");
        errorsito.innerHTML = `<p>Ingresa un número de identificación válido</p> <i id="error" class="fa-solid fa-xmark"></i>`
    }
} 
