var agora = new Date()
var agora = 11
console.log(`Agora são exatamente ${agora} horas`)
if(agora < 12){
    console.log(`Bom Dia`)
} else if(agora < 18){
    console.log(`Boa Tarde`)
} else {
    console.log(`Boa Noite`)
}