var Variable = 10;

(() => {
  console.log(Variable);

  Variable = 20

  console.log(Variable);  
})(); //

console.log(Variable);
var Variable = 30;
