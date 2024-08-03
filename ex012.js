//ex desafio proposto
var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`);
if (hora >= 6 && hora <= 12) {
    console.log('Bom dia!');
} else if (hora >= 13 && hora <= 18) {
    console.log('Boa tarde!');
} else if (hora <= 5) {
    console.log('Boa madrugada!');
} else {
    console.log('Boa noite!');
}

//ex guanabara usado no video
// var hora = 23;
// console.log(`Agora são exatamente ${hora} horas`);
// if (hora < 12) {
//     console.log('Bom dia!');
// } else if (hora <= 18) {
//     console.log('Boa tarde!');
// } else {
//     console.log('Boa noite!');
// }