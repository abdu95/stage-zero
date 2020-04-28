function sumAll(array) {
  let result = 0;
  for (let i = array[0]; i <= array[1]; i++) {
    result += i;
  }
  return result;
}

function uppercaseName(name) {
  let array = name.split(" ");

  let firstName =
    array[0][0].toUpperCase() + array[0].substring(1, array[0].length);
  let lastName =
    array[1][0].toUpperCase() + array[1].substring(1, array[1].length);

  return firstName + " " + lastName;
}
