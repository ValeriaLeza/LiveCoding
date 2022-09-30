let btn = document.getElementById("button");

btn.addEventListener("click", function(e){
    e.preventDefault();

    // API
    const API_ENDPOINT = async()=>{

    try {
        let respuesta = await fetch('https://yesno.wtf/api');
        console.log(respuesta);
        let datos = await respuesta.json();
        console.log(datos);
    } catch (error) {
        console.log(error);
    }
}
    API_ENDPOINT();
});



/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
