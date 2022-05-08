let button = document.getElementById('searchUser'); 

button.onclick = function search(e){
    e.preventDefault();

    let numberDocument = document.getElementById('number-id').value;
    let searchResult=document.querySelector(".modalInfo");
    
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
            <a href="registro.html">
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
            <a href="registro.html">
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

    else{
        window.setTimeout(()=>{
            window.location.href="#modal"
        },500);
        searchResult.innerHTML = `
        <h3>Usuario no registrado</h3>
        <h4>¿Deseas registrar un nuevo paciente?</h4>
        <div class="buttons-modal">
            <a href="registro.html">
                <button class="bton-login">¡Si!, gracias
                </button>
            </a>
            <a href="#dashboard">
                <button class="bton-register">Cancelar</button>
            </a>
        </div>`;
        
        } 
    } 
   



   /*switch(numberDocumento){
       
    case "52368795":
        let searchResult = document.querySelector(".modalP");

        searchResult.innerHTML = `
        <p>Pepito Pérez</p>
        <fieldset>
            <legend> Primera vacuna </legend>
        </fieldet>
        `;

        searchResult.innerHTML = `
        <p>Pepito Pérez</p>
        <fieldset>
            <legend> Primera vacuna </legend>
        </fieldet>
        `;
    }*/
