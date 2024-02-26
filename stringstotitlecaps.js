let strings = ["hello", "world", "javascript"];

let titleCaps = strings.map(str => str.charAt(0).toUpperCase() + str.slice(1));
console.log(titleCaps);