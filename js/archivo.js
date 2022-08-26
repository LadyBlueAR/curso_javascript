alert("¡Bienvenido! soy un contador")
let contador = parseInt(prompt("Dime hasta que número quieres que cuente: "))

for (let i = 1; i <= contador ; i ++) {
    if (i > 10) {
        console.warn("¡Lo siento!, solo sé contar hasta 10 :(")
        break
    }
    console.log(i)
}