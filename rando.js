/**
 * A package for generating random user name(completely random user name or random user name based on your fullname) and a random password generator
 * @param string username: fullname of user
 */

const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const appendable = "_";
const randomNumberGenerator = () => Math.floor(Math.random() * 3);
const randomSequenceGenerator = () => {
  let sequence = "";
  [0, 0, 0, 0, 0].map(() => {
    const random = Math.floor(Math.random() * 10);
    sequence += random;
  });
  return sequence;
};

function generator(FirstnameFromArr, secondNamefromArr, appendable) {
  const generatedNames = [FirstnameFromArr, secondNamefromArr, appendable];
  let randomUserName;
  const nameArrangeArr = [];
  for (let i = 0; i < 3; i++) {
    //pick a generated name at random
    let _ = generatedNames[randomNumberGenerator()];
    //while in nameArrangeArr dont push
    while (nameArrangeArr.includes(_)) {
      _ = generatedNames[randomNumberGenerator()];
    }
    //push name to array
    nameArrangeArr.push(_);
  }
  randomUserName = nameArrangeArr.join("") + randomSequenceGenerator();
  return randomUserName;
}

function randomUsernameGenerator(
  firstname = null,
  middlename = null,
  lastname = null,
  random = false
) {
  if (
    random == false &&
    firstname == null &&
    lastname == null &&
    middlename == null
  ) {
    //generate a completely random username
    console.log("this would return a completely random username");
    return;
  }
  //generates a random name based on users name
  const possibleNames = [];
  const fullnameArr = [firstname, lastname, middlename];
  //picks a name at random;
  const FirstnameFromArr = fullnameArr[randomNumberGenerator()];
  let secondNamefromArr = fullnameArr[randomNumberGenerator()];
  while (FirstnameFromArr == secondNamefromArr) {
    secondNamefromArr = fullnameArr[randomNumberGenerator()];
  }
  //generate name in random sequence
  for (let i = 0; i < 3; i++) {
    let randomUserName = generator(
      FirstnameFromArr,
      secondNamefromArr,
      appendable
    );
    possibleNames.push(randomUserName)
  }
  return possibleNames;
}

console.log(randomUsernameGenerator('chukwunonso', 'louis', 'nwosu'))
