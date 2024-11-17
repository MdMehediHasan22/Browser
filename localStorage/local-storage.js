localStorage.setItem('drinks','water');
localStorage.getItem('drinks');
localStorage.removeItem('drinks');
localStorage.clear();

//localStorage a j kichui set korina keno sob String a convert krbe

const person = {name:'Abul',age:31,profession:'Tailor'}

//convert object to string
const personString = JSON.stringify(person)

//convert string to object
const personObject = JSON.parse(personString)


