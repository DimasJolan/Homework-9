"use strict";
function greetings(name) {
  alert(`${this.greetingWord}, ${this.title} ${name}. ${this.wish}!`);
}

const doctor = {
  greetingWord: "Hello",
  title: "dr.",
  wish: "Have a nice day",
};

const colleague = {
  greetingWord: "Hi",
  title: "dear",
  wish: "Best regards, Alex",
};

const helloDoctor = greetings.bind(doctor);
const helloColleague = greetings.bind(colleague);

helloDoctor("Watson"); // “Hello, dr. Watson! Have a nice day”
helloColleague("Kristy"); // “Hi, dear Kristy! Regards, John”