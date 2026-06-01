const animal = {
    nome: "Zeus",
    especie: "Cachorro", //string
    idade: 4, //number
    vacinado: true, //boolean (true = verdadeiro e false = falso)
    tutor: false
};

console.log(animal.vacinado);
//console.log(animal.idade);

animal.idade = 3;
animal.especie = "Cane Corso";
animal.tutor = true;
console.log(animal.idade);
console.log(animal);

console.log(`O ${animal.especie} chama-se ${animal.nome}!`);
console.log(`Sua idade é ${animal.idade} e sua vacina está em dia: ${animal.vacinado}`);
