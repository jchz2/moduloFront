let mentorData = [
  [
    ["name", "Israel"] /*entry*/,
    ["lastName", "Salinas Martínez"],
    ["age", 31],
    [
      ["spanish", 9],
      ["math", 9],
      ["physics", 9],
      ["chemistry", 7],
      ["bio", 7],
    ],
  ],
  [
    ["name", "David"],
    ["lastName", "Cermeño Moranchel"],
    ["age", 24],
    [
      ["spanish", 8],
      ["math", 8],
      ["physics", 10],
      ["chemistry", 7],
      ["bio", 7],
    ],
  ],
  [
    ["name", "Chales"],
    ["lastName", "Silva"],
    ["age", 23],
    [
      ["spanish", 8],
      ["math", 10],
      ["physics", 8],
      ["chemistry", 10],
      ["bio", 9],
    ],
  ],
  [
    ["name", "Brenda"],
    ["lastName", "González Quesada"],
    ["age", 25],
    [
      ["spanish", 9],
      ["math", 9],
      ["physics", 9],
      ["chemistry", 10],
      ["bio", 8],
    ],
  ],
  [
    ["name", "Alfredo"],
    ["lastName", "Altamirano"],
    ["age", 34],
    [
      ["spanish", 9],
      ["math", 10],
      ["physics", 9],
      ["chemistry", 10],
      ["bio", 8],
    ],
  ],
];
//Función constructora-----------------------------------
function Mentor(nombre, apellidos, edad, notas) {
  this.name = nombre;
  this.lastName = apellidos;
  this.age = edad;
  this.notes = notas;
  /*this.greeting = function(){
  },
  this.getBestNote = function(){
  },
  this.getWorseNote = function(){
  }*/
}

let newMentorData = mentorData.map((item) => {
  let name = item[0][1];
  let lastName = item[1][1];
  let age = item[2][1];
  let notasObject = {
    spanish: item[3][0][1],
    math: item[3][1][1],
    physics: item[3][2][1],
    chemistry: item[3][3][1],
    bio: item[3][4][1],
  };
  let newArryMentor = new Mentor(name, lastName, age, notasObject);
  return newArryMentor;
});
console.log("Arreglo de mentores: ", newMentorData);
//Fin función contructora---------------------------------

let presentarse = saludo => {
  return `Hola, mi nombre es: ${this.name} ${this.lastName}`;
};
console.log(presentarse);

/* ["name","Israel"],
      ["lastName","Salinas Martínez"],
      ["age",31],
      [
        ["spanish",9],
        ["math",9],
        ["physics",9],
        ["chemistry",7],
        ["bio",7]
      ]
    ] 
  */
/*
    Mentor{
      name:"Brenda",
      lastName:"González Quesada",
      age:25,
      notes:{
        spanish:9,
        math:9,
        physics:9,
        chemistry:10,
        bio:8
      }
      greeting:function(),
      getAverage:function(),
      getBestNote:function(),
      getWorseNote:function()
    } 
*/

/* -El método greeting debe devolver un string con la siguiente estructura:
    "Hola, soy {name} {lastName}"
  -El método getAverage debe devolver el promedio general del mentor
  -El método getBestNote debe devolver un string con la siguiente estructura:
    "Mi mejor calificación es en {materia} y es de {calificacion} puntos"
  -El método getWorseNote debe devolver un string con la siguiente estructura:
    "Mi peor calificación es en {materia} y es de {calificacion} puntos"
  -Crear una función que me permita saber cuál es el mentor con mejor promedio
  -crear una función que me permita saber cuál es el mentor con menor promedio
  -Crear una fucnión que me permita saber cuál es el promedio general del grupo de mentores
  -Crear una función que me permita saber el promedio general del grupo
  en una materia específica
*/
/*extraer promedio*/
/*filtrar un array*/
/*filtar un array*/
/*extraer promedio de muchos objetos*/
