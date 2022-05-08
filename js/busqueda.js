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
            <legend> <strong> Primera vacuna </Strong> </legend>
            <p>laboratorio: Pfizer</p
            <p>Fecha de aplicación: 20/01/2022</p>
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
        <h3>Usuario 2no registrado</h3>
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
