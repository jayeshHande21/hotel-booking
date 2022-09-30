const input1 = document.querySelector("#inpt1");

// const input2 = document.querySelector("#inpt2");

const output = document.querySelector(".output");

const button = document.querySelector("#btn1");

// const button2 = document.querySelector("#btn2");

// const heading = document.querySelector("#head");

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

//-----------------------------------------------31)

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

//-------------------------------------------------32)

// const url = "https://jsonplaceholder.typicode.com/todos";

// button.addEventListener("click", () => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((json) => {
//       for (var i = 0; i < json.length; i++) {
//         console.log(json[i].title);
//       }
//     });
// });

//--------------------------------------------------33)

// button.addEventListener("click", () => {
//   var lastDigit = (Number(input1.value) * Number(input1.value)) % 10;

//   if (input1.value == lastDigit) {
//     output.innerHTML = "Automorphic Number";
//   } else {
//     output.innerHTML = "Non-automorphic Number";
//   }
// });

//---------------------------------------------35)

// var funTour = [
//   {
//     task: "Tree climbing",
//     completed: true,
//   },
//   {
//     task: "Scooba Diving",
//     completed: false,
//   },
//   {
//     task: "Tracking",
//     completed: true,
//   },
// ];

// button.addEventListener("click", () => {
//   for (var i = 0; i < funTour.length; i++) {
//     // console.log(funTour[i]);
//     if (funTour[i].completed == true) {
//       console.log(funTour[i].task);
//     }
//   }
// });

//----------------------------------------------------36)

// const url = "https://stock-api.desaihetav.repl.co/current-price/";

// function constructUrl(text) {
//   return url + text;
// }

// function fetchCall() {
//   var text = input1.value;
//   //   var newUrl = constructUrl(text);
//   fetch(url)
//     .then((response) => response.json())
//     .then((json) => {
//       var temp = json.current_price;
//       console.log(temp);
//       if (temp > input2.value) {
//         console.log("Profit of ", temp - input2.value);
//       } else {
//         console.log("Loss");
//       }
//     });
// }

//--------------------------------------------------37)

// button.addEventListener("click", fetchCall);

// const url = "https://stock-api.desaihetav.repl.co/list";

// button.addEventListener("click", () => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((json) => {
//       for (var i = 0; i < json.data.length; i++) {
//         output.innerHTML += `<li>${json.data[i].id} -> ${json.data[i].name}</li>`;
//       }
//     });
// });

//----------------------------------------------------38)

// const url = "https://nftbaazarapi.rawheatg.repl.co/product";
// button.addEventListener("click", () => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((json) => {
//       for (var i = 0; i < json.data.length; i++) {
//         output.innerHTML += `<li>${json.data[i].name}</li>`;
//       }
//     });
// });

// const url = "https://mock-practice.prakhar10v.repl.co/items";

// button.addEventListener("click", () => {
//   fetch(url)
//     .then((Response) => Response.json())
//     .then((json) => {
//       let maxPrice = json[0].price;
//       for (var i = 0; i < json.length; i++) {
//         if (json[i].price > maxPrice) {
//           maxPrice = json[i].price;
//         }
//       }
//       console.log(maxPrice);
//     });
// });

//-------------------------------------20)

// button.disabled = true;

// var temp = 10;

// input1.addEventListener("input", (e) => {
//   if (input1.value.length > 0) {
//     // console.log("clicked");
//     output.innerText = 10 - e.target.value.length;
//     button.disabled = false;
//   } else {
//     button.disabled = true;
//   }
// });
