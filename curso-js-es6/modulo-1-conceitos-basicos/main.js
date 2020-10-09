// // === Classes ===

// class List {
//     constructor() {
//         this.data = [];
//     }

//     add(data) {
//         this.data.push(data)
//         console.log(this.data);
//     }
// }

// class TodoList extends List {
//     constructor() {
//         super();

//         this.usuario = 'Wesley';
//     }

//     mostraUsuario() {
//         console.log(this.usuario);
//     }
// }

// const minhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function () {
//     minhaLista.add('Novo todo');
// }

// minhaLista.mostraUsuario();




// // === CONST & LET ===

// const a = 1;

// const usuario = { nome: 'Wesley' }
// usuario.nome = 'Ana';

// function teste(x) {
//     let y = 2;

//     if (x > 5) {
//         console.log(x, y);
//     }
// }

// teste(10);




// // === Operações em Array ===

// const arr = [1, 2, 3, 4, 5];
// const newArray = arr.map(function (item, index) {
//     return item + index;
// });
// console.log(newArray);

// const sum = arr.reduce(function (total, next) {
//     return total + next;
// });
// console.log(sum);

// const filter = arr.filter(function (item) {
//     return item % 2 == 0;
// });
// console.log(filter);

// const find = arr.find(function (item) {
//     return item === 4;
// });
// console.log(find);




// // === Arrow Functions ===

// const arr = [1, 2, 3, 4, 5];
// const newArray = arr.map(item => item * 2);
// console.log(newArray);

// // const teste = () => {
// //     return 'teste';
// // }

// const teste = () => ({ nome: 'Wesley' });

// console.log(teste());




// // === Valores padrão ===

// const soma = (a = 3, b = 6) => a + b;

// console.log(soma(1));
// console.log(soma());




// // === Desestruturação ===

// const usuario = {
//     nome: 'Wesley',
//     idade: 22,
//     endereco: {
//         cidade: 'Santa Maria',
//         uf: 'RS'
//     }
// }

// const { nome, idade, endereco: { cidade } } = usuario
// console.log(nome, idade, cidade);

// function mostraUsuario({ nome, idade }) {
//     console.log(nome, idade);
// }
// mostraUsuario(usuario);




// // === Operadores rest/spread ===

// // REST
// const usuario = {
//     nome: 'Wesley',
//     idade: 22,
//     empresa: 'Nenhuma'
// }

// const { nome, ...resto } = usuario;

// console.log(nome, resto);

// const arr = [1, 2, 3, 4];
// const [a, b, ...c] = arr;

// console.log(a, b, c);

// // function soma(...params) {
// //     return params.reduce((total, next) => total + next);
// // }

// function soma(a, b, ...params) {
//     return params;
// }

// console.log(soma(1, 2, 3, 4, 5));

// // // SPREAD
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];

// console.log(arr3);

// const usuario1 = {
//     nome: 'Wesley',
//     idade: 22
// }

// const usuario2 = { ...usuario1, nome: 'Ana' };
// console.log(usuario2);




// // === Template Literals ===

// const nome = 'Wesley';
// const idade = 22;
// console.log(`Meu nome é ${nome} e tenho ${idade}`);




// // === Object Short Syntax ===

// const nome = 'Wesley';
// const idade = 22;

// const usuario = {
//     nome,
//     idade
// }

// console.log(usuario);
