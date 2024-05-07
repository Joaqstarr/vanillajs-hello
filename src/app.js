/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.getElementById("excuse").textContent = GenerateExcuse();
};

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function GenerateExcuse() {
  let out = "";
  out += who[ran(who.length)] + " ";
  out += action[ran(action.length)] + " ";
  out += what[ran(what.length)] + " ";
  out += when[ran(when.length)];
  return out;
}

function ran(max) {
  let ranNum = Math.random();
  ranNum *= max;
  return Math.floor(ranNum);
}
