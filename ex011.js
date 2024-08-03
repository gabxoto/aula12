// Declare a variable called 'idade' and assign it a value of 17
// var idade = 17;

// Check if 'idade' is less than 18
// if (idade < 18) {
    // If 'idade' is less than 18, print 'menor de idade' to the console
    // console.log('menor de idade');
// }

// The code will continue executing here if 'idade' is not less than 18
// console.log('maior de idade'); 1 parte. 

var idade = 22
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65){
        console.log('Voto opcional')
}else {
        console.log('Voto obrigatório')
}
   
