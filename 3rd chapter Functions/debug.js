function greet(name) {
  let message = "Hello " + name;
  return message;
}

function main() {
  let user = "Alice";
  let result = greet(user);
  console.log(result);
}

main();