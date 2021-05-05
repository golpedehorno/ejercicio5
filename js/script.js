alert("Bienvenid@, vamos a hacer un juego!")
var numero= prompt("Ingresá un numero que este entre 0 y 25")

var letras = ['T', 'R', 'W', 'I', 'U', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'A', 'O'];



if(isNaN(numero)){
    alert("No es un numero")
}
else{

    if(numero< 0 || numero > 25){
        alert("El número proporcionado no es válido")
    }
    else{
  
        var letraElegida= prompt("Ingresá una letra")
        
        var letraElegidaMayuscula= letraElegida.toUpperCase()

        var letraNumero = letras[numero]

        if(letraNumero==letraElegidaMayuscula){

         alert("El número y la letra coinciden...Felicitaciones “Has ganado”.")
        }
        else{
            alert(`No coinciden el número y la letra... "Has perdido".`)
        }
    }
}