let a =
  "shadikbashajkjfasjdflkasfj;alfajkfjaljflflkajdfklafkajflalkfjlaksjfdlas";
let b = "";
console.time("hello");
for (let i = a.length; i >= 0; i--) {
  b += a[i];
}
console.timeEnd("hello");

let d = performance.now();
let c = a.split("").reverse().join("");
let e = performance.now();

let joker = {
  name: "shadik",
  age: 20,
  salary: [1, 2, 3, 4], 
};
console.log("the_object", Object.keys(joker));
console.log("the_object", Object.entries(joker));
console.log("the_object", joker.hasOwnProperty("age"));
