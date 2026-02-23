const name = "John Doe"; // Issue: 'var' debe ser cambiada por 'let' or 'const'
const age = 30; // Issue: 'var' debe ser cambiada por 'let' or 'const'
const unusedVar = "This is never used"; // Issue: variable sin usar

function getUserName() {  
  return name + age + unusedVar;
}

function calculateAge(yearOfBirth) {
  var currentYear = new Date().getFullYear();
  return currentYear - yearOfBirth;
}

// issue: codigo duplicado
function calculateUserAge(user) {
  var currentYear = new Date().getFullYear();
  return currentYear - user.yearOfBirth;
}

function unsafeFunction(userInput) {
  // Issue: eval() introduce problemas de seguridad.
  return userInput;
}

console.log(getUserName());
console.log(calculateAge(1990));
console.log(calculateUserAge({ yearOfBirth: 1990 }));
console.log(unsafeFunction("2 + 2")); // Potencial problema de seguridad

export default {
  unsafeFunction,
};