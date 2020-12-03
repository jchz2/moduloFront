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
    ["age", 47],
    [
      ["spanish", 9],
      ["math", 10],
      ["physics", 9],
      ["chemistry", 7],
      ["bio", 8],
    ],
  ],
];

//************Inicio************
/* 1 - Obtener un array de objetos del tipo Mentor, cada mentor debe tener la siguiente forma:
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

//Funcion constructora
function Mentor(name, lastname, age, notes) {
  this.name = name;
  this.lastname = lastname;
  this.age = age;
  this.notes = {
    spanish: notes.spanish,
    math: notes.math,
    physics: notes.physics,
    chemistry: notes.chemistry,
    bio: notes.bio,
  };
  this.presentarse = function () {
    return `Hola, soy ${this.name} ${this.lastname} `;
  };
  this.getAverage = function () {
    let average =
      Object.values(this.notes).reduce((accum, note) => {
        return accum + note;
      }, 0) / Object.values(this.notes).length;
    return average;
  };
  this.getBestNote = function () {
    let best = Object.entries(this.notes).sort((a, b) => b[1] - a[1]);
    return `Mi mejor calificación es en ${best[0][0]} y es de ${best[0][1]} puntos`;
  };
  this.getWorstNote = function () {
    let worst = Object.entries(this.notes).sort((a, b) => a[1] - b[1]);
    return `Mi peor calificación es en ${worst[0][0]} y es de ${worst[0][1]} puntos`;
  };
}

//Contruyendo a Objetos
function makeMentor(arrayMentor) {
  let newArray = mentorData.map((mentor) => {
    let [name, lastName, age, notes] = mentor; /*Asignación destructurante*/
    let mentorNotes = Object.fromEntries(notes);
    return new Mentor(name[1], lastName[1], age[1], mentorNotes);
  });
  return newArray;
}
//************Fin************

//************Inicio************
//Despliegue de los resultados de los métodos
//2 - El método greeting debe devolver un string con la siguiente estructura: "Hola, soy {name} {lastName}"
//3 -El método getAverage debe devolver el promedio general del mentor
//4 -El método getBestNote debe devolver un string con la siguiente estructura: "Mi mejor calificación es en {materia} y es de {calificacion} puntos"
//5 - El método getWorseNote debe devolver un string con la siguiente estructura: "Mi peor calificación es en {materia} y es de {calificacion} puntos"
function displayingMethods(arrayMentor) {
  arrayMentor.forEach((mentor) => {
    console.log("-----------------------------------------");
    console.log(mentor.presentarse());
    console.log("Promedio general es de:", mentor.getAverage());
    console.log(mentor.getBestNote());
    console.log(mentor.getWorstNote());
  });
}
//************Fin************

//************Inicio************ Math.max.apply(Math, array.map(function(o) { return o.y; }))
//6 - Crear una función que me permita saber cuál es el mentor con mejor promedio
function bestAverageMentor(arrayMentor) {
  let maxAverage = arrayMentor.sort(function (a, b) {
    return b.getAverage() - a.getAverage();
  });
  let theBest = arrayMentor[0].name + " " + arayMentor[0].lastname;
  return theBest;
}
//************Fin************

//************Inicio************
//7 -crear una función que me permita saber cuál es el mentor con menor promedio
function worstAverageMentor(arrayMentor) {
  let minAverage = arrayMentor.sort(function (a, b) {
    return a.getAverage() - b.getAverage();
  });
  let theWorst = arrayMentor[0].name + " " + arrayMentor[0].lastname;
  return theWorst;
}
//************Fin************

//************Inicio************
//8 -Crear una función que me permita saber cuál es el promedio general del grupo de mentores
/* Pasos a seguir 
1. Iterar entre cada mentor 
2. Entrar a la propiedad getAverage de cada mentor y hacer una suma de todos su promedios // reduce
3. Saber la cantidad de mentores // length
4. Division entre la suma de los promedios y la cantidad de mentores reduce / length
*/
function averageMentor(arrayMentor) {
  let sum = arrayMentor.reduce((accum, mentor) => {
    return accum + mentor.getAverage();
  }, 0);
  let average = sum / arrayMentor.length;
  return average;
}
//************Fin************

//************Inicio************
//9 -Crear una función que me permita saber el promedio general del grupo en una materia específica
/*1. Primero iterar por cada objeto = map
2. Debemos acceder a objeto.notes e iterar cada propiedad = for .. in
3. Guardar en algun lugar la suma de cada materia = un array y el index cambia en cada iteracion 
Object.fromEntries*/

function averageAllSubjects(arrayMentor) {
  var qtyMentors = arrayMentor.length;
  var averages = [
    ["spanish", 0],
    ["math", 0],
    ["physics", 0],
    ["chemistry", 0],
    ["bio", 0],
  ];
  arrayMentor.forEach((mentor) => {
    let i = 0;
    for (let key in mentor.notes) {
      averages[i][1] += mentor.notes[key] / qtyMentors;
      i++;
    }
  });
  averages = Object.fromEntries(averages);
  return averages;
}

function subjectDisplayAverage(averagesSubjects) {
  let criteria = prompt(
    "Indicar la materia a conocer el promedio general del grupo (spanish,math,physics,chemistry,bio): "
  );
  console.log(
    `El promedio de la materia ${criteria} es: ${averagesSubjects[criteria]}`
  );
}
//************Fin************

//******Llamando las Funciones*******
//1 - Crea un nuevo arreglo de objetos
console.log("*****************************************");
let newArray = makeMentor(mentorData);
console.log("Arreglo de mentores es: ", newArray);

//Puntos 2 - 5: Despliegue de metodos presentarse, getAverage, getBestNote, getWorstNote
console.log("*****************************************");
displayingMethods(newArray);

//6 - Crear una función que me permita saber cuál es el mentor con mejor promedio
console.log("*****************************************");
let bestMentor = bestAverageMentor(newArray);
console.log("El mentor con el mejor promedio es:", bestMentor);

//7 -crear una función que me permita saber cuál es el mentor con menor promedio
console.log("*****************************************");
let worstMentor = worstAverageMentor(newArray);
console.log("El mentor con el peor promedio es:", worstMentor);

//8 -Crear una función que me permita saber cuál es el promedio general del grupo de mentores
console.log("*****************************************");
let averageMentors = averageMentor(newArray);
console.log("Promedio general del grupo de mentores", averageMentors);

//9 -Crear una función que me permita saber el promedio general del grupo en una materia específica
console.log("*****************************************");
let averagesSubjects = averageAllSubjects(newArray);
//console.log("El promedio de cada materia es:",averagesSubjects)
subjectDisplayAverage(averagesSubjects);
r;
