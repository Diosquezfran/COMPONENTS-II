// const promesa = () => {
//     return new Promise( (resolve, reject) => {
        
//         let condition = true;
//         if(condition){
//             const student = {
//                 name: "Mariela",
//                 title: "React developer"
//             }
//             resolve(student)
//         }else {
//             reject({status: 400, msg: "Algo salió mal"})
//         }
//     } );
// };

// const otraPromesa = (student) => {
//     return new Promise((resolve, reject) => {
//         if(student){
//             resolve(`Felicidades ${student.name}, pasaste el curso de ${student.title}`)
//         }else {
//             reject("No pasaste :(")
//         }
//     })
// }

// promesa().then((response) => {
//     console.log("Primer then", response)
//     return otraPromesa()
// }).then((response) => {
//     console.log("response del 2do then: ", response)
// }).catch(error => console.log(error))
// .finally(() => console.log("finalicé la promesa"))


const productos = [
    { id: 1, name: "Producto A", price: 10.99, stock: 50 },
    { id: 2, name: "Producto B", price: 19.99, stock: 30 },
    { id: 3, name: "Producto C", price: 5.99, stock: 100 },
    { id: 4, name: "Producto D", price: 25.99, stock: 20 },
    { id: 5, name: "Producto E", price: 14.49, stock: 60 },
    { id: 6, name: "Producto F", price: 8.99, stock: 75 }
];

const getProductos = () => new Promise( (resolve, reject    ) => {
    let status = 200
    setTimeout( () => {
        if(status === 200){
            resolve(productos)
        } else {
            reject("Ups, algo salió mal")
        }
    }, 3000)
})

const data = getProductos().then((response) => console.log(response)).catch((error) =>  console.log(error))