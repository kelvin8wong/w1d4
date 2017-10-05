var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


students.sort(function (a,b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase

  if (nameA === nameB) {
    return b.age - a.age
  } else if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
  //return +(a.name > b.name);
})



console.log(students);