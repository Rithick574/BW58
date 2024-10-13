const obj = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    rating: 4.5,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699.99,
    rating: 4.7,
    category: "Electronics",
  },
  {
    id: 3,
    name: "Coffee Maker",
    price: 49.99,
    rating: 4.3,
    category: "Home Appliances",
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 79.99,
    rating: 4.2,
    category: "Footwear",
  },
];

// obj.map((x)=>(
// console.log(x.name)
// ));

function check(obj, str) {
  if (str.length < 1) {
    return null;
  }
  const res = obj.find((ele) => ele.name === "Smartphone");
  if (res.name) {
    return true;
  } else {
    false;
  }
}

console.log(check(obj, "Smartphone"));

// const result = check(obj, "Smartphone");
// function bubbleSort(obj) {
//   for (let i = 0; i < obj.length; i++) {
//     for (let j =0; j < obj.length - i - 1; j++) {
//       if (obj[j].name[0] > obj[j+1].name[0]) {
//         [obj[j], obj[j+1]] = [obj[j+1], obj[j]];
//       }
//     }
//   }
// }

// bubbleSort(obj);

// const sorted = obj.sort((a,b)=>a.name[0].localeCompare(b.name[0]));

// console.log("aa",obj);

// obj.sort((a, b) => {
//     return a.name.localeCompare(b.name);
//   });

//   console.log(obj);
