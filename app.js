"use strickt";
//Object

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    color: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() { //Это метод объекта, который я создал
        console.log("Test");
    }
};

options.makeTest();


const {border, bg} = options.color;//Деструктуризация объекта(вытащил)
console.log(border);


// console.log(Object.keys(options).length);


// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     }else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);