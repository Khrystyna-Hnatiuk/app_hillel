const birthYear =prompt("enter year of your birthday");
const city = prompt("Enter your city");
const favouriteSport = prompt("Enter favourite type of sport");
let message = "";
const currentYear = new Date().getFullYear();


if (birthYear === null || birthYear.trim() === "") {
  message += `Unfortunately, you don't want to enter your birthday year\n`;
} else if (birthYear > 1900 && birthYear <=currentYear) {
  const age = currentYear - birthYear;
  message += `Your age : ${age} \n`;
} else {
  message += `Unfortunately, you didn't enter your correct birthday year\n`;
}
if (city) {
  const cityToLowerCase = city.toLowerCase();
  if (cityToLowerCase  === "kyiv") {
    message += `You live in the capital of Ukraine. \n`;
  } else if (cityToLowerCase  === "washington") {
    message += `You live in the capital of USA. \n`;
  } else if (cityToLowerCase  === "london") {
    message += `You live in the capital of Great Britain. \n`;
  } else {
    message += `You live in the ${city} . \n`;
  }
} else {
  message += `Unfortunately, you don't want to enter your city. \n`;
}

if (favouriteSport) {
  if (favouriteSport.toLowerCase() === "football") {
    message += `Great! Do you wanna be Cristiano Ronaldo ?\n`;
  } else if (favouriteSport.toLowerCase()  === "athletics") {
    message += `Great! Do you wanna be Serhiy Bubka? \n`;
  } else if (favouriteSport.toLowerCase()  === "jumping") {
    message += `Great! Do you wanna be Yaroslava Mahuchikh?\n`;
  } else {
    message += `Your favourite sport is ${favouriteSport} \n`;
  }
} else {
  message += `Unfortunately, you don't want to enter your favourite sport\n`;
}

alert(message);
