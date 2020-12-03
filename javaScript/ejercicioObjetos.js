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
/*Obtener un array de objetos del tipo Mentor, cada mentor debe tener la siguiente forma:
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
    * -El método greeting debe devolver un string con la siguiente estructura:
      "Hola, soy {name} {lastName}"
    * -El método getAverage debe devolver el promedio general del mentor
    * -El método getBestNote debe devolver un string con la siguiente estructura:
      *"Mi mejor calificación es en {materia} y es de {calificacion} puntos"
    *-El método getWorseNote debe devolver un string con la siguiente estructura:
      "Mi peor calificación es en {materia} y es de {calificacion} puntos"
    -Crear una función que me permita saber cuál es el mentor con mejor promedio
    -crear una función que me permita saber cuál es el mentor con menor promedio
    -Crear una fucnión que me permita saber cuál es el promedio general del grupo de mentores
    -Crear una función que me permita saber el promedio general del grupo en una materia específica
    */

// FUNCIÓN CONSTRUCTORA DE OBJETOS DE TIPO MENTOR
function Mentor(nombre, apellidos, edad, notas) {
  this.name = nombre;
  this.lastName = apellidos;
  this.age = edad;
  this.notes = notas;
  (this.greeting = function () {
    // Creamos una función de saludo en la cuál imprimimos el nombre de la función que se construirá
    // cuando se mande a ejecutar la funcion constructora Mentor().
    // ${this.name} contiene el valor del parámetro nombre que asignamos a nuestra propiedad this.name
    // Lo mismo ocurre con ${this.lastName}
    return `Hola, soy ${this.name} ${this.lastName}`; //Este será un array que convertiremos en un objeto
  }),
    // Creamos una función que para obtener el promedio de las calificaciones por materia
    (this.getAverage = function () {
      // en this.notes contenemos el objeto de calificaciones de ese mentor particular
      averageArray = Object.values(this.notes); // Aquí obtenemos específicamente los valores de las
      //propiedades de ese objeto y los guarda en un array [9, 9, 9, 7, 7]
      //console.log(averageArray);
      let average = averageArray.reduce((accum, current, index) => {
        //Recorremos el array de averageArray
        // que contiene ya los valores [9, 9, 9, 7, 7] cada posición está representada por el parámetro "current"
        // y representa en esa iteración de elementos cada calificación en cada posición del array [9, 9, 9, 7, 7]
        accum += current; // en este caso se van sumando uno a uno los valores del array en la iteración
        // y al ser números se sumarán uno a uno
        return accum; // el valor de accum es la suma de cada calificación
      }, 0);
      return average / averageArray.length; //El "average" representa la suma de las calificaciones
      // y se estan dividiendo entre el largo de array con la propiedad length del array "averageArray"
      //que representa el número de calificaciones para obtener el promedio
    }),
    (this.getBestNote = function () {
      //console.log(this.notes)
      //El método Object.entries(objeto) convierte un objeto en un array que contendrá arrays los cuales
      // en la primera posición array[0]= al nombre de la propiedad en string y en la posición array[1]
      // el valor de esa propiedad del objeto, ejemplo: el objeto {spanish: 9, math: 9, physics: 9, chemistry: 7, bio: 7}
      // será convertido a un array ["chemistry", 7],["bio", 7],["spanish", 9],["math", 9],["physics", 9]
      var notesArray = Object.entries(this.notes); // Convierte mi objeto en un array de arrays de este
      //tipo  ["spanish", 9] por cada calificación y materia,
      //La función sort() se utiliza para ordenar un array y en este caso, ordena por la diferencia a[1] - b[1] entre
      // los valores del array de array de elementos de este tipo ["chemistry", 7] en base al valor de la
      // posición[1] de ese array, que contiene la calificación de la materia, osea en base a la calificación
      // de menor a mayory que sea en la última posición del array que es el largo del array, menos 1 posición
      // porque el length del array es mayor que el número de posiciones por comenzar en la posición cero "0"
      bestNote = notesArray.sort(function (a, b) {
        return a[1] - b[1];
      })[notesArray.length - 1];
      // Nos regresa la mejor nota que se encuentra en el array ya ordenado en la última posición,
      // Porque el orden en la función sort se estableció de menor a mayor calificación
      // "bestNote[0]" representa la materia y bestNote[1] representa la calificación
      // En la siguiente línea se regresa el String con la materia y la mejor calificación
      // al ejecutarse la función "getBestNote()" de algún mentor creado, en el ejemplo abajo muy abajo
      // en esta línea "let mentors = getMentors(mentorData);" creamos mentors y los convierte en array de
      // objetos del tipo Mentor, aquí por cada mentor regresa la mejor nota decada uno en particular
      // Si damos console.log(mentors) nos arroja todo el array de mentores Objetos
      // para ejecutar o mandar llamar en método en consola, se accesa así
      //mentors[0].getBestNote()
      //ESTE ES EL RESULTADO DE ESE MENTOR EN ESA POSICIÓN QUE ES ISRAEL EN mentors[1]= se encuentra el objeto
      // Mentor {name: "David", lastName: "Cermeño Moranchel", age: 24, notes: {…}, greeting: ƒ, …}
      //
      //"Mi mejor calificación es en physics y es de 9 puntos"
      return `Mi mejor calificación es en ${bestNote[0]} y es de ${bestNote[1]} puntos`;
    }),
    (this.getWorseNote = function () {
      // notesArray = Object.values(this.notes);
      var notesArray = Object.entries(this.notes);
      worstNote = notesArray.sort(function (a, b) {
        return a[1] - b[1];
      })[0];
      return `Mi peor calificación es en ${worstNote[0]} y es de ${worstNote[1]} puntos`;
    });
}
// Se crea la función Para obtener cada mentor del array de mentores dados por Israel.
// Esta función recibe el parámetro mentorData que cuando mandemos a llamar la función tendremos que incluirla
// En el llamado aquí -- let mentors = getMentors(mentorData);
function getMentors(mentorData) {
  //Utilizamos en método map para recorrer (iterar) el array completo
  let subjectsObject = mentorData.map((subjects, item) => {
    // cada subjects representa un array
    //como acontinuación se muestra:
    //                                                Estos valores se envían como parámetros en
    // subjects =  Representa el siguiente array      el llamado de la función constructora
    // Inicio del array  [                                    let mentorOne = new Mentor(subjects[0][1], subjects[1][1], subjects[2][1], notes)
    //subjects[0] ["name","Israel"],                  subjects[0][1] = "Israel"
    //subjects[1] ["lastName","Salinas Martínez"],    subjects[1][1] = "Salinas Martínez"
    //subjects[2] ["age",31],                         subjects[2][1] = 31
    //subjects[3] [
    //               ["spanish",9],
    //               ["math",9],
    //               ["physics",9],
    //               ["chemistry",7],
    //               ["bio",7]
    //             ]
    //Final del Array    ]
    notes = Object.fromEntries(subjects[3]); // este método convierte en un Objeto el subject[3]
    // O sea convierte este array de arrays de calificaciones como ell ejemplo de abajo
    // subjects[3] =
    // notes = [                            notes =  {
    //          ["spanish",9],                         spanish:  9
    //          ["math",9],            =>              math:     9
    //          ["physics",9],                         physics:  9
    //          ["chemistry",7],                       chemistry:7
    //          ["bio",7]                              bio:      7
    //         ]                                      }
    //
    // En esta parte creamos un mentor mandando llamar la función constructora Mentor()
    // con la sintaxis let mentorOne = new Mentor(nombre, apellidos, edad, notas)
    // como vemos en la sintaxis anterior estamos enviando los parámetros nombre, apellidos, edad, notas
    // subjects[0][1] representa un item de la función map() en posición[0] = ["name","Israel"]
    // en la posición[1]= "Israel", osea el nombre del mentor. subjects[0][1] = "Israel"
    // subjects[1][1] = "Salinas Martínez", subjects[2][1] = 31, y notes que es el objeto creado arriba con
    // las calificaciones de ese mentor
    let mentorOne = new Mentor(
      subjects[0][1],
      subjects[1][1],
      subjects[2][1],
      notes
    );
    return mentorOne; // se regresa el mentor que se acaba de crear al iterar el array "mentorData"
    // Y lo recibe la variable "subjectsObject" que creará un array por el metodo map()
  });
  return subjectsObject; //Este es el array creado por map() al terminar de iterar en cada posición del
  //array "mentorData"
}
let mentors = getMentors(mentorData); //Asignamos a mentors el valor de retorno de la función getMentors(mentorData)
// Y le enviamos el array "mentorData" que nos proporcionó Israel para iterar en él
console.log(mentors); // imprimimos la variable "mentor" que contiene en Array de los objetos de los mentores
// ya construido como acontinuación:
//  [
//     [0]: Mentor {name: "Israel", lastName: "Salinas Martínez", age: 31, notes: {…}, greeting: ƒ, …}
//     [1]: Mentor {name: "David", lastName: "Cermeño Moranchel", age: 24, notes: {…}, greeting: ƒ, …}
//     [2]: Mentor {name: "Chales", lastName: "Silva", age: 23, notes: {…}, greeting: ƒ, …}
//     [3]: Mentor {name: "Brenda", lastName: "González Quesada", age: 25, notes: {…}, greeting: ƒ, …}
//     [4]: Mentor {name: "Alfredo", lastName: "Altamirano", age: 47, notes: {…}, greeting: ƒ, …}
//  ]
// CADA OBJETO QUEDARÍA COMO ACONTINUACIÓN
// Mentor{
//         age: 31
//         getAverage: ƒ ()
//         getBestNote: ƒ ()
//         getWorseNote: ƒ ()
//         greeting: ƒ ()
//         lastName: "Salinas Martínez"
//         name: "Israel"
//         notes: {spanish: 9, math: 9, physics: 9, chemistry: 7, bio: 7}
//      }
