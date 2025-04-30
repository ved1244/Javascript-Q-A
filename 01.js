/* Hoisting in JavaScript :-
    Hoisting is a JavaScript mechanism where variables and function declarations are
    moved to the top of their scope, prior to execution of the code.
 */

//Example

function showdata(){
  console.log(`Variable name is ${name}`);
  console.log(`Variable age is ${age}`);
  var name = "Thor";
  let age = 1000;
};
showdata()