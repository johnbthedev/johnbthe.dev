class Project {
  constructor(title, stack) {
    this.title = "myLibrary";
    this.stack = ["html", "css", "javascript"];
  }

  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Create a new person object
const john = new Person("John", 30);

// Call the sayHello method on the person object
john.sayHello(); // Output: Hello, my name is John and I am 30 years old.
