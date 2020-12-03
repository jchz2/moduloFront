let personArray = [
  {
    _id: "5fc550e1c9c6046f9d108e02",
    isActive: false,
    balance: "$3,938.67",
    age: 35,
    name: "Campos Schultz",
    gender: "male",
    email: "camposschultz@overfork.com",
    phone: "+1 (962) 497-3378",
    type: "Koder",
    favoriteFruit: "kiwi",
    pictureUrl: "https://picsum.photos/id/100/600",
  },
  {
    _id: "5fc550e1d6fafd4f83243ea5",
    isActive: true,
    balance: "$2,249.69",
    age: 12,
    name: "Marcy Rios",
    gender: "female",
    email: "marcyrios@overfork.com",
    phone: "+1 (802) 418-2723",
    type: "Mentor",
    favoriteFruit: "apple",
    pictureUrl: "https://picsum.photos/id/101/600",
  },
  {
    _id: "5fc550e1b641b3f753407166",
    isActive: false,
    balance: "$1,236.20",
    age: 19,
    name: "Regina Montgomery",
    gender: "female",
    email: "reginamontgomery@overfork.com",
    phone: "+1 (878) 433-3379",
    type: "Koder",
    favoriteFruit: "apple",
    pictureUrl: "https://picsum.photos/id/102/600",
  },
  {
    _id: "5fc550e1b2a5ef8b0b048c84",
    isActive: false,
    balance: "$3,516.66",
    age: 15,
    name: "Debora Wilder",
    gender: "female",
    email: "deborawilder@overfork.com",
    phone: "+1 (818) 537-3416",
    type: "Koordinator",
    favoriteFruit: "mango",
    pictureUrl: "https://picsum.photos/id/103/600",
  },
  {
    _id: "5fc550e153b087a36752e2b0",
    isActive: true,
    balance: "$3,320.58",
    age: 25,
    name: "Mckay Dillon",
    gender: "male",
    email: "mckaydillon@overfork.com",
    phone: "+1 (861) 439-3553",
    type: "Mentor",
    favoriteFruit: "strawberry",
    pictureUrl: "https://picsum.photos/id/104/600",
  },
  {
    _id: "5fc550e184b6e2150f833160",
    isActive: true,
    balance: "$3,887.48",
    age: 18,
    name: "Duncan Rogers",
    gender: "male",
    email: "duncanrogers@overfork.com",
    phone: "+1 (898) 483-3472",
    type: "Koordinator",
    favoriteFruit: "mango",
    pictureUrl: "https://picsum.photos/id/125/600",
  },
  {
    _id: "5fc550e1f440854873851dd1",
    isActive: false,
    balance: "$1,598.80",
    age: 36,
    name: "Miller Campos",
    gender: "male",
    email: "millercampos@overfork.com",
    phone: "+1 (905) 417-2415",
    type: "Koordinator",
    favoriteFruit: "kiwi",
    pictureUrl: "https://picsum.photos/id/106/600",
  },
  {
    _id: "5fc550e1567efabb89397058",
    isActive: true,
    balance: "$1,955.62",
    age: 39,
    name: "Larsen Valenzuela",
    gender: "male",
    email: "larsenvalenzuela@overfork.com",
    phone: "+1 (939) 449-2471",
    type: "Koordinator",
    favoriteFruit: "banana",
    pictureUrl: "https://picsum.photos/id/107/600",
  },
  {
    _id: "5fc550e19dd6acf4895166ee",
    isActive: true,
    balance: "$1,372.63",
    age: 39,
    name: "Kristen Battle",
    gender: "female",
    email: "kristenbattle@overfork.com",
    phone: "+1 (969) 430-2022",
    type: "Staff",
    favoriteFruit: "banana",
    pictureUrl: "https://picsum.photos/id/108/600",
  },
  {
    _id: "5fc550e1ed1a0866331fb205",
    isActive: true,
    balance: "$2,428.07",
    age: 36,
    name: "Candace Lawrence",
    gender: "female",
    email: "candacelawrence@overfork.com",
    phone: "+1 (944) 522-2722",
    type: "Staff",
    favoriteFruit: "kiwi",
    pictureUrl: "https://picsum.photos/id/109/600",
  },
  {
    _id: "5fc550e1f3ddb61b7be83dea",
    isActive: false,
    balance: "$1,547.53",
    age: 32,
    name: "Bright Garcia",
    gender: "male",
    email: "brightgarcia@overfork.com",
    phone: "+1 (960) 532-2477",
    type: "Koordinator",
    favoriteFruit: "kiwi",
    pictureUrl: "https://picsum.photos/id/110/600",
  },
  {
    _id: "5fc550e1c5fd86221cc28411",
    isActive: true,
    balance: "$1,240.39",
    age: 27,
    name: "Hope Hoover",
    gender: "female",
    email: "hopehoover@overfork.com",
    phone: "+1 (828) 503-3344",
    type: "Koder",
    favoriteFruit: "strawberry",
    pictureUrl: "https://picsum.photos/id/111/600",
  },
  {
    _id: "5fc550e18cd4d758d5a1b4c4",
    isActive: false,
    balance: "$1,309.06",
    age: 24,
    name: "Josephine Huff",
    gender: "female",
    email: "josephinehuff@overfork.com",
    phone: "+1 (832) 486-2801",
    type: "Mentor",
    favoriteFruit: "strawberry",
    pictureUrl: "https://picsum.photos/id/112/600",
  },
  {
    _id: "5fc550e1fce533cad2c89fc0",
    isActive: true,
    balance: "$2,646.14",
    age: 22,
    name: "Mercado Hart",
    gender: "male",
    email: "mercadohart@overfork.com",
    phone: "+1 (885) 598-2027",
    type: "Koder",
    favoriteFruit: "apple",
    pictureUrl: "https://picsum.photos/id/113/600",
  },
];


const fillData = (BDdata) => {
  /*Creamos una función que sirva para llenar los datos de una tabla*/
  BDdata.forEach((data) => {
    /*iteramos dentro de nuestro array de datos por cada objeto de datos*/
    let dataRow = document.createElement(
      "div"
    ); /*creamos una fila que será inyectada en la tabla*/
    let cellData1 = document.createElement(
      "img"
    ); /*creamos las celdas que serán inyectadas en la fila*/
    let cellData2 = document.createElement("h5");
    let cellData3 = document.createElement("p");
    let cellData4 = document.createElement("p");
    let cellDtta5 = document.createElement("p");
    let textData1 = document.createTextNode(id);
    let textData2 = document.createTextNode(data.name);
    let textData3 = document.createTextNode(data.email);
    let textData4 = document.createTextNode(data.type);
    cellData1.appendChild(
      textData1
    ); /*inyectamos los textos en las celdas correspondientes*/
    cellData2.appendChild(textData2);
    cellData3.appendChild(textData3);
    cellData4.appendChild(textData4);
    dataRow.appendChild(
      cellData1
    ); /*inyectamos las celdas que ya contienen texto dentro de la fila*/
    dataRow.appendChild(cellData2);
    dataRow.appendChild(cellData3);
    dataRow.appendChild(cellData4);
    document
      .getElementById("general")
      .appendChild(
        dataRow
      ); /*inyectamos la fila en el elemento correspondiente*/
  });
};
