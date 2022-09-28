const input1 = document.querySelector("#inpt1");

const input2 = document.querySelector("#inpt2");

const output = document.querySelector(".output");

const button1 = document.querySelector("#btn1");

const button2 = document.querySelector("#btn2");

const heading = document.querySelector("#head");

// const url = "https://mock-practice.prakhar10v.repl.co/items";

// const url = "https://nftbaazarapi.rawheatg.repl.co/product";

// const url = "https://stock-api.desaihetav.repl.co/list";

// button.addEventListener("click", () => {
//   var string = input.value;

//   var splitString = string.split(" ");
//   console.log(splitString);

//   var reverseString = splitString.reverse();
//   console.log(reverseString);

//   var newString = reverseString.join(" ");
//   console.log(newString);

//   output.innerHTML = newString;
// });

// button.addEventListener("click", () => {
//   fetch(url)
//     .then((Response) => Response.json())
//     .then((json) => {
//       console.log(json);
//       for (var i = 0; i < json.data.length; i++) {
//         output.innerHTML += `<li>${json.data[i].id} -> ${json.data[i].name}</li>`;
//       }
//     });
// });

// button.addEventListener("click", () => {
//   var inputText = input.value;
//   if (input.value.length > 10) {
//     output.innrText = inputText.length;
//   } else {
//     output.innrText = "10";
//   }
// });

// button.addEventListener("click", () => {
//   var string = input.value;
//   var splitString = string.split("");
//   var reverseString = splitString.reverse();
//   var newString = reverseString.join("");
//   console.log(newString);
// });

// -----------------------21)

// const url = "https://jsonplaceholder.typicode.com/todos";

// button.addEventListener("click", () => {
//   fetch(url)
//     .then((Response) => Response.json())
//     .then((json) => {
//       for (var i = 0; i < json.length; i++) {
//         output.innerHTML += `<li>${json[i].title}</li>`;
//       }
//     });
// });

//-------------------------22)

// button.addEventListener("click", () => {
//   var inputText = input.value;
//   if (inputText.length > 10) {
//     output.innerText = "Error";
//     output.innerText = 10 - inputText.length;
//   } else {
//     output.innerText = "Succed";
//   }
// });

//---------------------------23)

// button1.addEventListener("click", () => {
//   heading.style.border = "5px solid black";
// });
// button2.addEventListener("click", () => {
//   heading.style.border = "10px solid black";
// });

//---------------------------------24)

// const url = "https://quick-access-api.desaihetav.repl.co/";

// button.addEventListener("click", () => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((json) => console.log(json.message));
// });

//---------------------------------26)

// const url = "https://mystery-api.kushanksriraj.repl.co/get";

// function showError(error) {
//   output.innerHTML = error;
// }

// function FetchCall() {
//   fetch(url)
//     .then((Response) => Response.json())
//     .then((json) => console.log(json))
//     .catch(showError);
// }

// button.addEventListener("click", FetchCall);

//----------------------------------27)

// button.addEventListener("click", () => {
//   var inputText = input1.value;
//   var passText = input2.value;
//   if (inputText.includes(passText)) {
//     console.log("Change the password");
//   } else {
//     console.log("Succed password");
//   }
// });

//----------------------------------------29)

// const url1 = "https://mock-practice.prakhar10v.repl.co/bollywood?name=ZNMD";

// const url2 = "https://mock-practice.prakhar10v.repl.co/bollywood?name=YJHD";

// function FetchCall(url) {
//   fetch(url)
//     .then((Response) => Response.json())
//     .then((json) => console.log(json.message));
// }

// button1.addEventListener("click", () => {
//   FetchCall(url1);
// });

// button2.addEventListener("click", () => {
//   FetchCall(url2);
// });

//-------------------------------31)

// const url = "https://otpgenerator.ishanjirety.repl.co/get-otp?name=";

// function constructUrl(text) {
//   return url + text;
// }

// var temp;

// function FetchCall() {
//   var name = input1.value;
//   var newUrl = constructUrl(name);

//   fetch(newUrl)
//     .then((response) => response.json())
//     .then((json) => {
//       temp = json.otp;
//       console.log(temp);
//     });
// }

// button1.addEventListener("click", FetchCall);

// button2.addEventListener("click", () => {
//   if (input2.value == temp) {
//     output.innerHTML = "Correct";
//     output.style.color = "Green";
//   } else {
//     output.innerHTML = "Failed!!!";
//     output.style.color = "Red";
//   }
// });
