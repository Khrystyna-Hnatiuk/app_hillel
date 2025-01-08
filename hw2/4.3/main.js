const birthYear = +prompt("enter year of your birthday");
const city = prompt("Enter your city");
const favouriteSport = prompt("Enter favourite type of sport");
let message = "";

if (birthYear>0) {
  const age = 2025 - birthYear;
  message += `Your age : ${age} \n`;
} else {
  message += `Unfortunately, you don't want to enter your birthday year\n`;
}

if (city) {
  if (city === "Kyiv") {
    message += `You live in the capital of Ukraine. \n`;
  } else if (city === "Washington") {
    message += `You live in the capital of USA. \n`;
  } else if (city === "London") {
    message += `You live in the capital of Great Britain. \n`;
  } else {
    message += `You live in the ${city} city. \n`;
  }
} else {
  message += `Unfortunately, you don't want to enter your city. \n`;
}

if (favouriteSport) {
  if (favouriteSport === "football") {
    message += `Great! Do you wanna be Cristiano Ronaldo \n? `;
  } else if (favouriteSport === "athletics") {
    message += `Great! Do you wanna be Serhiy Bubka? \n`;
  } else if (favouriteSport === "jumping") {
    message += `Great! Do you wanna be Yaroslava Mahuchikh?\n`;
  } else {
    message += `Your favourite sport is ${favouriteSport} \n`;
  }
} else {
  message += `Unfortunately, you don't want to enter your favourite sport\n`;
}

alert(message);
