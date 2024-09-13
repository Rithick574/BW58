// globalThis.a = 5;

// function getParam(){
//     console.log(globalThis.a);
// };

// getParam();

// console.log(globalThis);

// let user = {
//     name: "Rithick",
//     age: 24,
//       getDetails(){
//         const nestedArrow = () => console.log(this.name);
//         nestedArrow()
//       }
//   };

// user.getDetails();

// const user = {
//     firstName: 'Piyush!',
//     getName() {
//        firstName = 'Jen!';
//       return this.firstName;
//     }
//   };
//   console.log(user.getName());

// const str = new String("muhammed")

// console.log(typeof str);

// str.custom = [1,2,4];
// console.log(str.custom);

// const user = {
//     firstName : "Rith!!!ick",
//     getName(){
//         const firstName = "Shihad";
//         return this.firstName;
//     }
// };

// console.log(user.getName());

// function makeUser(){
//     return {
//         name : "John",
//         ref(){
//             return this;
//         },
//     }
// };

// this.a =90;
// let user = makeUser();

// console.log(user.ref().name);

var calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  subtract(a) {
    this.total -= a;
    return this
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
};

const result = calc.add(10).multiply(10).subtract(2).add(1)

console.log(result.total);