var hora = new Date()
var hora = hora.getHours()
var paragrafo = document.getElementById('horas')
var img = document.getElementById('imagem')
paragrafo.innerHTML = `Agora são ${hora} horas`
if(hora >= 0 && hora<12){
    document.body.style.background = '#d0bd93'
    img.src = 'foto-manha.jpg'
}
else if(hora >= 12 && hora<18){
    document.body.style.background = '#ac817a'
    img.src = 'foto-tarde.jpg'
}
else{
    document.body.style.background = '#2a3e56'
    img.src = 'foto-noite.jpg'
    paragrafo.style.color = 'black'
    document.body.style.color = 'white'
}