

const text = document.getElementById("text").addEventListener("input", function (event) {
    const input = event.target.value;
    const soloLetras = /^[a-zA-Z\s]*$/;
    if (!soloLetras.test(input)) {
        alert("Solo se permiten letras");
        event.target.value = input.slice(0, -1);
    }
})
const password = document.getElementById("password").addEventListener("input", function (event) {
    const input = event.target.value;
    const soloNumeros = /^[0-9]*$/;
    if (!soloNumeros.test(input)) {
        alert("Solo se permiten Numeros");
        event.target.value = input.slice(0, -1);
    }
})

const boton = document.getElementById("iniciar");
boton.addEventListener("click", () => {
    let text = document.getElementById("text");
    let password = document.getElementById("password");
    

    if (text.value === "" && password.value === "") {
        alert("Introduce un usuario y contraseña");
    }
    
})

const registro = document.getElementById("registro");

registro.addEventListener("click", () => {
    let text = prompt("Introduce tu usuario");
    let password = prompt("Introduce tu contraseña");
    const soloNumeros = /^[0-9]*$/;
    const soloLetras = /^[a-zA-Z\s]*$/;

    if (!soloLetras.test(text)) {
        alert("Usuario no creado, intente con solo letras")
    } else if (!soloNumeros.test(password)){
        alert("Contraseña no creada, intente con solo numeros")
    }else{
        alert("Usuario y contraseña creada");
    }

})
