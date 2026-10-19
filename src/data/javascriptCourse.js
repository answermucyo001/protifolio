export const javascriptCourse = {
  id: "javascript",
  title: "JavaScript Programming",
  description: "Master modern JavaScript from the absolute fundamentals to advanced asynchronous programming, DOM manipulation, and ES6+ features.",
  icon: "JS",
  color: "#f7df1e",
  lessons: [
    {
      id: "js-1",
      title: "1. Introduction to JavaScript",
      duration: "15 min read",
      introduction: "JavaScript is the programming language of the Web. Along with HTML and CSS, it is one of the three core technologies of the World Wide Web.",
      objectives: [
        "Understand what JavaScript is and what it can do",
        "Learn how JavaScript runs in browsers and Node.js",
        "Write your very first JavaScript statement"
      ],
      notes: `JavaScript (often abbreviated as JS) is a high-level, interpreted programming language that conforms to the ECMAScript specification. It enables interactive web pages and is an essential part of web applications.

### What can JavaScript do?
- Add dynamic behavior and interactivity to websites (e.g. popups, sliders, modals).
- Manipulate HTML elements and CSS styles dynamically.
- Handle events like clicks, form submissions, and keyboard inputs.
- Communicate with servers using asynchronous requests (Fetch API / AJAX).
- Build full-stack applications using Node.js.`,
      syntax: `// Writing a message to the browser console
console.log("Hello, World!");`,
      examples: [
        {
          title: "Basic Alert & Console",
          code: `let greeting = "Welcome to JavaScript!";
console.log(greeting);
// alert(greeting);`,
          output: "Welcome to JavaScript!"
        }
      ],
      commonMistakes: [
        "Forgetting quotation marks around string values.",
        "Case sensitivity issues: JavaScript treats \`console.log\` and \`Console.Log\` as completely different things."
      ],
      exercise: {
        prompt: "Declare a variable named \`courseName\` with the value \`'JavaScript Mastery'\` and print it using \`console.log\`.",
        starterCode: "// Write your code here\n",
        solution: "let courseName = 'JavaScript Mastery';\nconsole.log(courseName);"
      },
      quiz: [
        {
          question: "Which of the following is true about JavaScript?",
          options: [
            "JavaScript is only used for backend server development.",
            "JavaScript is a core technology of the web used for adding interactivity.",
            "JavaScript is a compiled-only language with no interpreter.",
            "JavaScript is identical to Java."
          ],
          correct: 1,
          explanation: "JavaScript is a core web technology that adds interactivity and runs in browsers and servers."
        },
        {
          question: "How do you output data to the developer console in JavaScript?",
          options: ["print(data);", "console.log(data);", "document.write(data);", "echo(data);"],
          correct: 1,
          explanation: "console.log() is the standard method to print messages to the developer console."
        }
      ]
    },
    {
      id: "js-2",
      title: "2. Setting Up Your Development Environment",
      duration: "20 min read",
      introduction: "Before you start building powerful applications, you need the right tools installed on your computer.",
      objectives: [
        "Install Visual Studio Code (VS Code)",
        "Understand Node.js and npm",
        "Run JavaScript files using Node or browser developer tools"
      ],
      notes: `A proper developer setup makes coding smoother and faster.

### Essential Tools:
1. **Code Editor**: Visual Studio Code (VS Code) is the industry standard with fantastic extensions.
2. **Runtime**: Node.js allows running JavaScript outside the browser.
3. **Browser DevTools**: Chrome or Firefox Developer Tools for inspecting elements and debugging.

### Useful VS Code Extensions:
- **Prettier**: Code formatter.
- **ESLint**: Linter for identifying code quality issues.
- **Live Server**: Quick local development server for static web pages.`,
      syntax: `# Check Node.js version in terminal
node -v

# Check npm version
npm -v`,
      examples: [
        {
          title: "Running Node Script",
          code: `console.log("Running in Node.js environment!");`,
          output: "Running in Node.js environment!"
        }
      ],
      commonMistakes: [
        "Not adding Node.js to system PATH during installation.",
        "Trying to run browser-specific objects like \`document\` directly in a Node.js terminal."
      ],
      exercise: {
        prompt: "Write a console.log statement showing your development setup status: 'Ready to code!'.",
        starterCode: "// Type your code below\n",
        solution: "console.log('Ready to code!');"
      },
      quiz: [
        {
          question: "What tool allows you to execute JavaScript outside of a web browser?",
          options: ["Node.js", "HTML5", "CSS3", "Git"],
          correct: 0,
          explanation: "Node.js is a JavaScript runtime built on Chrome's V8 engine that executes JS outside browsers."
        }
      ]
    },
    {
      id: "js-3",
      title: "3. Variables: let, const, and var",
      duration: "20 min read",
      introduction: "Variables are containers for storing data values. In modern JavaScript, we use \`let\` and \`const\`.",
      objectives: [
        "Understand the difference between \`let\`, \`const\`, and legacy \`var\`",
        "Learn scoping rules and immutability",
        "Choose the correct variable declaration for your data"
      ],
      notes: `In ES6+, variables are declared using \`let\` and \`const\`.

- **\`const\`**: Use for values that should not be reassigned. (Note: objects and arrays declared with \`const\` can still have their contents mutated).
- **\`let\`**: Use for variables whose values may change over time.
- **\`var\`**: Function-scoped and prone to hoisting bugs; avoid in modern code.`,
      syntax: `const API_URL = "https://api.example.com";
let score = 0;
score = 10; // Valid`,
      examples: [
        {
          title: "Declaring Variables",
          code: `const username = "Mucyo";
let currentLevel = 1;
currentLevel++;
console.log(username, currentLevel);`,
          output: "Mucyo 2"
        }
      ],
      commonMistakes: [
        "Reassigning a \`const\` variable (causes a TypeError).",
        "Using variables before declaring them."
      ],
      exercise: {
        prompt: "Create a \`const\` variable called \`appName\` with value \`'LearnJS'\` and a \`let\` variable \`version\` with value \`1\`.",
        starterCode: "// Declare variables here\n",
        solution: "const appName = 'LearnJS';\nlet version = 1;\nconsole.log(appName, version);"
      },
      quiz: [
        {
          question: "Which keyword should you use for a value that will never be reassigned?",
          options: ["var", "let", "const", "static"],
          correct: 2,
          explanation: "const creates a read-only reference to a value."
        }
      ]
    },
    {
      id: "js-4",
      title: "4. Data Types and Operators",
      duration: "25 min read",
      introduction: "JavaScript supports various data types including strings, numbers, booleans, null, undefined, symbols, and objects.",
      objectives: [
        "Identify primitive vs reference data types",
        "Use arithmetic, comparison, and logical operators",
        "Understand type coercion"
      ],
      notes: `JavaScript is dynamically typed, meaning variables aren't bound to a specific type.

### Primitive Types:
- **String**: Text data (e.g., \`"Hello"\`)
- **Number**: Integers and floats (e.g., \`42\`, \`3.14\`)
- **Boolean**: \`true\` or \`false\`
- **Undefined**: Declared but unassigned value
- **Null**: Intentional absence of any object value

### Operators:
- **Arithmetic**: \`+\`, \`-\`, \`*\`, \`/\`, \`%\`, \`**\`
- **Comparison**: \`===\` (strict equality), \`!==\`, \`>\`, \`<\`
- **Logical**: \`&&\` (AND), \`||\` (OR), \`!\` (NOT)`,
      syntax: `let isStudent = true;
let total = 100 + 50;
let isEqual = (5 === "5"); // false`,
      examples: [
        {
          title: "Operators Example",
          code: `let price = 50;
let tax = 0.15;
let finalPrice = price + (price * tax);
console.log("Total:", finalPrice);`,
          output: "Total: 57.5"
        }
      ],
      commonMistakes: [
        "Using \`==\` instead of strict \`===\` which performs unexpected type coercion.",
        "Assuming string addition \`'5' + 5\` equals \`10\` instead of \`'55'\`."
      ],
      exercise: {
        prompt: "Calculate the area of a rectangle with width 10 and height 5, and print it.",
        starterCode: "let width = 10;\nlet height = 5;\n// Calculate area\n",
        solution: "let width = 10;\nlet height = 5;\nlet area = width * height;\nconsole.log(area);"
      },
      quiz: [
        {
          question: "What is the result of \`typeof null\` in JavaScript?",
          options: ["\"null\"", "\"object\"", "\"undefined\"", "\"number\""],
          correct: 1,
          explanation: "Due to a historical bug in JavaScript, \`typeof null\` returns \`\"object\"\`."
        }
      ]
    },
    {
      id: "js-5",
      title: "5. Conditions: if, else, and switch",
      duration: "25 min read",
      introduction: "Conditional statements are used to perform different actions based on different conditions.",
      objectives: [
        "Write \`if\`, \`else if\`, and \`else\` statements",
        "Use the ternary operator for concise conditions",
        "Use \`switch\` statements for multiple discrete branches"
      ],
      notes: `Control flow allows your code to make decisions.

- **if / else**: Evaluates boolean conditions.
- **Ternary Operator**: \`condition ? trueValue : falseValue\`.
- **switch**: Evaluates an expression against multiple \`case\` clauses.`,
      syntax: `let score = 85;
if (score >= 80) {
  console.log("Grade A");
} else {
  console.log("Keep trying");
}`,
      examples: [
        {
          title: "Ternary Operator",
          code: `let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);`,
          output: "Adult"
        }
      ],
      commonMistakes: [
        "Forgetting \`break\` in a \`switch\` statement, causing fall-through behavior.",
        "Using assignment \`=\` instead of comparison \`===\` inside \`if\` conditions."
      ],
      exercise: {
        prompt: "Write an \`if/else\` statement that prints \`'Eligible'\` if \`age\` is 18 or older, otherwise \`'Not eligible'\`.",
        starterCode: "let age = 20;\n// Write condition here\n",
        solution: "let age = 20;\nif (age >= 18) {\n  console.log('Eligible');\n} else {\n  console.log('Not eligible');\n}"
      },
      quiz: [
        {
          question: "Which operator is shorthand for an \`if...else\` statement?",
          options: ["&&", "??", "?:", "||"],
          correct: 2,
          explanation: "The ternary operator \`?:\` is the conditional operator shorthand."
        }
      ]
    },
    {
      id: "js-6",
      title: "6. Loops: for, while, and do...while",
      duration: "25 min read",
      introduction: "Loops allow you to repeat a block of code multiple times efficiently.",
      objectives: [
        "Use \`for\` loops for counted iterations",
        "Use \`while\` and \`do...while\` loops for condition-based iterations",
        "Use \`break\` and \`continue\` to control loop execution"
      ],
      notes: `Loops automate repetitive tasks.

- **for (let i = 0; i < 5; i++)**: Runs code a specified number of times.
- **while**: Repeats while a condition is true.
- **for...of / for...in**: Modern loops for iterating over arrays and objects.`,
      syntax: `for (let i = 1; i <= 3; i++) {
  console.log("Count:", i);
}`,
      examples: [
        {
          title: "For Loop Example",
          code: `for (let i = 1; i <= 3; i++) {
  console.log("Iteration:", i);
}`,
          output: "Iteration: 1\nIteration: 2\nIteration: 3"
        }
      ],
      commonMistakes: [
        "Creating infinite loops by forgetting to increment the loop counter.",
        "Off-by-one errors in array indexing (\`<` vs \`<=\`)."
      ],
      exercise: {
        prompt: "Write a \`for\` loop that prints numbers from 1 to 3.",
        starterCode: "// Write loop here\n",
        solution: "for (let i = 1; i <= 3; i++) {\n  console.log(i);\n}"
      },
      quiz: [
        {
          question: "Which loop guarantees that the code block runs at least once?",
          options: ["for", "while", "do...while", "for...of"],
          correct: 2,
          explanation: "do...while evaluates the condition after executing the body, guaranteeing at least one execution."
        }
      ]
    },
    {
      id: "js-7",
      title: "7. Functions and Arrow Functions",
      duration: "30 min read",
      introduction: "Functions are reusable blocks of code designed to perform particular tasks.",
      objectives: [
        "Declare functions using function declarations and expressions",
        "Use ES6 arrow functions",
        "Understand parameters, arguments, and return values"
      ],
      notes: `Functions encapsulate logic so you can call it anywhere.

- **Function Declaration**: Hoisted to the top of their scope.
- **Arrow Functions**: Concise syntax introduced in ES6 \`const add = (a, b) => a + b;\`.`,
      syntax: `function greet(name) {
  return \`Hello, \${name}!\`;
}
const square = x => x * x;`,
      examples: [
        {
          title: "Arrow Function",
          code: `const multiply = (a, b) => a * b;
console.log(multiply(4, 5));`,
          output: "20"
        }
      ],
      commonMistakes: [
        "Forgetting the \`return\` keyword in a multi-line arrow function.",
        "Confusing function parameters with arguments passed when calling the function."
      ],
      exercise: {
        prompt: "Write an arrow function named \`cube\` that takes a number \`n\` and returns \`n * n * n\`. Test it with \`3\`.",
        starterCode: "const cube = n => // Complete this;\nconsole.log(cube(3));",
        solution: "const cube = n => n * n * n;\nconsole.log(cube(3));"
      },
      quiz: [
        {
          question: "What is a key feature of ES6 arrow functions?",
          options: [
            "They hoist automatically to the top of the file.",
            "They provide a shorter syntax and lexical \`this\` binding.",
            "They cannot accept parameters.",
            "They must always be named."
          ],
          correct: 1,
          explanation: "Arrow functions provide concise syntax and do not bind their own \`this\`."
        }
      ]
    },
    {
      id: "js-8",
      title: "8. Arrays and Array Methods",
      duration: "35 min read",
      introduction: "Arrays store multiple values in a single variable. Modern JavaScript provides powerful methods like \`map\`, \`filter\`, and \`reduce\`.",
      objectives: [
        "Create and access arrays",
        "Add and remove elements using \`push\`, \`pop\`, \`shift\`, \`unshift\`",
        "Transform data using \`map\`, \`filter\`, and \`find\`"
      ],
      notes: `Arrays are fundamental data structures in web development.

- **map()**: Transforms each item in an array.
- **filter()**: Returns items matching a condition.
- **find()**: Returns the first matching item.
- **reduce()**: Accumulates array values into a single result.`,
      syntax: `const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2); // [2, 4, 6]`,
      examples: [
        {
          title: "Filter Array",
          code: `const scores = [45, 82, 90, 60];
const passing = scores.filter(s => s >= 70);
console.log(passing);`,
          output: "[82, 90]"
        }
      ],
      commonMistakes: [
        "Mutating original arrays directly when immutability is expected.",
        "Forgetting to return a value inside a \`map\` callback."
      ],
      exercise: {
        prompt: "Use \`filter\` on \`const nums = [1, 2, 3, 4, 5, 6];\` to keep only even numbers and print the result.",
        starterCode: "const nums = [1, 2, 3, 4, 5, 6];\nconst evens = nums.filter(n => // condition);\nconsole.log(evens);",
        solution: "const nums = [1, 2, 3, 4, 5, 6];\nconst evens = nums.filter(n => n % 2 === 0);\nconsole.log(evens);"
      },
      quiz: [
        {
          question: "Which array method creates a new array with all elements that pass a test?",
          options: ["map()", "filter()", "reduce()", "forEach()"],
          correct: 1,
          explanation: "filter() creates a new array with elements that pass the test implemented by the callback."
        }
      ]
    },
    {
      id: "js-9",
      title: "9. Objects and Destructuring",
      duration: "30 min read",
      introduction: "Objects allow you to group related data and functionality together using key-value pairs.",
      objectives: [
        "Create objects and access properties with dot and bracket notation",
        "Use object destructuring to extract values",
        "Use shorthand property names and methods"
      ],
      notes: `Objects represent real-world entities in JavaScript.

- **Dot Notation**: \`user.name\`
- **Bracket Notation**: \`user['name']\`
- **Destructuring**: \`const { name, role } = user;\``,
      syntax: `const student = { name: "Mucyo", grade: "A" };
const { name } = student;`,
      examples: [
        {
          title: "Object Destructuring",
          code: `const book = { title: "JavaScript Guide", pages: 350 };
const { title, pages } = book;
console.log(title, pages);`,
          output: "JavaScript Guide 350"
        }
      ],
      commonMistakes: [
        "Trying to access properties on \`null\` or \`undefined\` resulting in TypeError.",
        "Confusing object property syntax \`key: value\` with variable assignment."
      ],
      exercise: {
        prompt: "Create an object \`user\` with \`username: 'Coder'\` and \`level: 5\`. Destructure \`username\` and print it.",
        starterCode: "const user = { username: 'Coder', level: 5 };\n// Destructure and log\n",
        solution: "const user = { username: 'Coder', level: 5 };\nconst { username } = user;\nconsole.log(username);"
      },
      quiz: [
        {
          question: "How do you extract property \`name\` from object \`person\` using destructuring?",
          options: [
            "const name = person.name;",
            "const { name } = person;",
            "const [name] = person;",
            "const person(name) = person;"
          ],
          correct: 1,
          explanation: "Object destructuring uses curly braces \`const { name } = person;\`."
        }
      ]
    },
    {
      id: "js-10",
      title: "10. DOM Manipulation",
      duration: "35 min read",
      introduction: "The Document Object Model (DOM) connects web pages to scripts by representing the document as nodes and objects.",
      objectives: [
        "Select elements using \`querySelector\` and \`querySelectorAll\`",
        "Modify element content using \`textContent\` and \`innerHTML\`",
        "Change styles and toggle CSS classes"
      ],
      notes: `DOM manipulation lets JavaScript change what users see on screen in real time.

- \`document.getElementById()\`, \`document.querySelector()\`, \`document.querySelectorAll()\`
- \`element.textContent\`, \`element.style\`, \`element.classList.add()\``,
      syntax: `const heading = document.querySelector("h1");
heading.textContent = "Welcome to E-Learning";`,
      examples: [
        {
          title: "DOM Query & Text Change",
          code: `// Assuming an element exists in DOM
// const btn = document.querySelector('.btn');
// btn.textContent = 'Clicked!';
console.log("DOM manipulation connects code to HTML.");`,
          output: "DOM manipulation connects code to HTML."
        }
      ],
      commonMistakes: [
        "Running DOM queries before the HTML elements have loaded.",
        "Confusing \`textContent\` with \`innerHTML\` (which parses HTML tags)."
      ],
      exercise: {
        prompt: "Write a query selector snippet to find an element with class \`'title'\` and store it in variable \`titleEl\`.",
        starterCode: "// Write code here\n",
        solution: "const titleEl = document.querySelector('.title');"
      },
      quiz: [
        {
          question: "Which method returns the first element that matches a specified CSS selector?",
          options: ["getElementByClass()", "querySelector()", "querySelectorAll()", "getElements()"],
          correct: 1,
          explanation: "querySelector() returns the first Element within the document that matches the specified selector."
        }
      ]
    },
    {
      id: "js-11",
      title: "11. Events and Event Handling",
      duration: "30 min read",
      introduction: "Events are actions that happen in the browser, such as clicks, scrolls, keypresses, and form submissions.",
      objectives: [
        "Attach event listeners using \`addEventListener\`",
        "Handle click, input, and submit events",
        "Access event object properties (\`e.target\`, \`e.preventDefault()\`)"
      ],
      notes: `User interactions drive web applications.

- \`element.addEventListener('click', (e) => { ... })\`
- \`e.preventDefault()\`: Prevents default browser behavior like page reload on form submit.`,
      syntax: `const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("Button clicked!");
});`,
      examples: [
        {
          title: "Event Listener",
          code: `console.log("Event listeners wait for user interaction.");`,
          output: "Event listeners wait for user interaction."
        }
      ],
      commonMistakes: [
        "Calling the event handler function immediately instead of passing a callback reference: \`btn.click(fn())\` vs \`btn.addEventListener('click', fn)\`.",
        "Forgetting to prevent default form submission."
      ],
      exercise: {
        prompt: "Write an event listener for a button element \`btn\` that logs \`'Submitted'\` on \`'click'\`.",
        starterCode: "// Write event listener\n",
        solution: "const btn = document.querySelector('button');\nbtn.addEventListener('click', () => {\n  console.log('Submitted');\n});"
      },
      quiz: [
        {
          question: "What method is used to attach an event handler to an element in modern JS?",
          options: ["onclick()", "attachEvent()", "addEventListener()", "listen()"],
          correct: 2,
          explanation: "addEventListener() is the standard and recommended method for attaching event handlers."
        }
      ]
    },
    {
      id: "js-12",
      title: "12. ES6+ Modern Features",
      duration: "30 min read",
      introduction: "ES6 (ECMAScript 2015) and later versions introduced modern syntax features that make JavaScript cleaner and more powerful.",
      objectives: [
        "Use template literals for string interpolation",
        "Use spread (\`...\`) and rest parameters",
        "Use default function parameters"
      ],
      notes: `Modern JS features improve code readability.

- **Template Literals**: \`Hello \${name}\`
- **Spread Operator**: \`[...arr1, ...arr2]\`
- **Rest Parameters**: \`function sum(...args)\``,
      syntax: `const name = "Mucyo";
console.log(\`Hello, \${name}!\`);
const combined = [1, 2, ...[3, 4]];`,
      examples: [
        {
          title: "Spread Operator",
          code: `const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);`,
          output: "[1, 2, 3, 4]"
        }
      ],
      commonMistakes: [
        "Using regular single quotes or double quotes when template literals with backticks are needed for variables.",
        "Confusing spread (\`...\` expanding) with rest (\`...\` gathering)."
      ],
      exercise: {
        prompt: "Create an array \`fruits\` with \`['apple', 'banana']\`. Create \`allFruits\` using spread operator to add \`'orange'\` at the end.",
        starterCode: "const fruits = ['apple', 'banana'];\n// Create allFruits\n",
        solution: "const fruits = ['apple', 'banana'];\nconst allFruits = [...fruits, 'orange'];\nconsole.log(allFruits);"
      },
      quiz: [
        {
          question: "What symbol is used for template literals in JavaScript?",
          options: ["Single quotes ''", "Double quotes \"\"", "Backticks ``", "Curly braces {}"],
          correct: 2,
          explanation: "Template literals are enclosed by backticks (``) allowing embedded expressions."
        }
      ]
    },
    {
      id: "js-13",
      title: "13. Promises and Asynchronous JavaScript",
      duration: "35 min read",
      introduction: "JavaScript is single-threaded. Asynchronous programming allows operations like timers or network requests to run without blocking the main thread.",
      objectives: [
        "Understand synchronous vs asynchronous execution",
        "Create and consume Promises (\`.then\`, \`.catch\` / \`async/await\`)"
      ],
      notes: `Asynchronous programming handles operations that take time.

- **Promise**: An object representing the eventual completion or failure of an asynchronous operation.
- **async/await**: Syntactic sugar making asynchronous code look and behave more like synchronous code.`,
      syntax: `const fetchData = async () => {
  try {
    let result = await someAsyncOperation();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};`,
      examples: [
        {
          title: "Async / Await Simulation",
          code: `const delayMessage = async () => {
  console.log("Loading...");
  // Simulated async task
  return "Data loaded successfully!";
};
delayMessage().then(msg => console.log(msg));`,
          output: "Loading...\nData loaded successfully!"
        }
      ],
      commonMistakes: [
        "Forgetting the \`await\` keyword inside an \`async\` function.",
        "Forgetting \`try...catch\` blocks for error handling in async code."
      ],
      exercise: {
        prompt: "Write an \`async\` function \`getWelcome\` that returns \`'Welcome!'\` and log its resolved value using \`.then\`.",
        starterCode: "// Write async function\n",
        solution: "const getWelcome = async () => 'Welcome!);\ngetWelcome().then(console.log);"
      },
      quiz: [
        {
          question: "What keyword must precede a function definition to allow using \`await\` inside it?",
          options: ["promise", "async", "await", "defer"],
          correct: 1,
          explanation: "The async keyword enables the use of the await operator within the function."
        }
      ]
    },
    {
      id: "js-14",
      title: "14. Fetch API and Working with APIs",
      duration: "35 min read",
      introduction: "The Fetch API provides an interface for fetching resources across the network, making it easy to interact with REST APIs.",
      objectives: [
        "Use \`fetch()\` to make HTTP GET requests",
        "Handle JSON responses",
        "Handle network errors gracefully"
      ],
      notes: `APIs (Application Programming Interfaces) let frontend apps talk to backend servers.

- \`fetch('https://api.github.com/users/github')\`
- \`.then(res => res.json())\``,
      syntax: `fetch("https://api.github.com/users/mucyoanswer001")
  .then(res => res.json())
  .then(data => console.log(data.login))
  .catch(err => console.error(err));`,
      examples: [
        {
          title: "Fetch Example",
          code: `// Fetching public API data
console.log("fetch() returns a Promise resolving to the Response object.");`,
          output: "fetch() returns a Promise resolving to the Response object."
        }
      ],
      commonMistakes: [
        "Forgetting to call \`.json()\`. \`fetch\` resolves with a Response object, not the raw JSON data directly.",
        "Not handling CORS or network failure errors."
      ],
      exercise: {
        prompt: "Write a fetch call skeleton for endpoint \`'https://api.example.com/data'\` with \`.then(res => res.json())\`.",
        starterCode: "// Write fetch call\n",
        solution: "fetch('https://api.example.com/data').then(res => res.json()).then(data => console.log(data));"
      },
      quiz: [
        {
          question: "What does \`fetch()\`.then(res => res.json()) do?",
          options: [
            "Converts the response body into JSON format.",
            "Parses the URL string.",
            "Sends a JSON payload to the server.",
            "Clears network cache."
          ],
          correct: 0,
          explanation: "res.json() parses the response body stream as JSON."
        }
      ]
    },
    {
      id: "js-15",
      title: "15. Classes and Object-Oriented Programming",
      duration: "30 min read",
      introduction: "JavaScript classes, introduced in ES6, provide a cleaner and more standard syntax for object-oriented programming (OOP).",
      objectives: [
        "Define classes with constructors and methods",
        "Create object instances using \`new\`",
        "Use class inheritance with \`extends\`"
      ],
      notes: `Classes act as blueprints for creating objects.

- **constructor**: Method executed when creating a new instance.
- **extends**: Inherits properties and methods from a parent class.`,
      syntax: `class User {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    return \`Hi, I am \${this.name}\`;
  }
}`,
      examples: [
        {
          title: "Class Definition",
          code: `class Student {
  constructor(name, school) {
    this.name = name;
    this.school = school;
  }
  introduce() {
    return \`I am \${this.name} from \${this.school}\`;
  }
}
const s = new Student('Mucyo', 'Lycée de Muhura');
console.log(s.introduce());`,
          output: "I am Mucyo from Lycée de Muhura"
        }
      ],
      commonMistakes: [
        "Forgetting the \`new\` keyword when instantiating a class.",
        "Forgetting the constructor method when setting up initial properties."
      ],
      exercise: {
        prompt: "Create a class \`Animal\` with a constructor taking \`name\` and a method \`speak()\` returning \`\`\${this.name} makes a sound\`\`.",
        starterCode: "// Write class Animal\n",
        solution: "class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() {\n    return `${this.name} makes a sound`;\n  }\n}"
      },
      quiz: [
        {
          question: "Which keyword is used to inherit from a parent class in JavaScript?",
          options: ["inherits", "implements", "extends", "super"],
          correct: 2,
          explanation: "The extends keyword is used in class declarations to create a subclass."
        }
      ]
    },
    {
      id: "js-16",
      title: "16. Modules and Error Handling",
      duration: "25 min read",
      introduction: "Modules let you split your code into separate files, and error handling ensures your app doesn't crash unexpectedly.",
      objectives: [
        "Export and import code using ES modules (\`export\`, \`import\`)",
        "Use \`try...catch...finally\` blocks for robust error management"
      ],
      notes: `Clean architecture requires modular files and robust error boundaries.

- **export / import**: \`export const helper = ...;\` / \`import { helper } from './helper.js';\`
- **try / catch**: Catches runtime errors safely.`,
      syntax: `try {
  let result = riskyOperation();
} catch (error) {
  console.error("Caught error:", error.message);
} finally {
  console.log("Cleanup actions");
}`,
      examples: [
        {
          title: "Try/Catch",
          code: `try {
  throw new Error("Something went wrong!");
} catch (err) {
  console.log("Caught:", err.message);
} finally {
  console.log("Execution finished");
}`,
          output: "Caught: Something went wrong!\nExecution finished"
        }
      ],
      commonMistakes: [
        "Forgetting \`type=\"module\"\` in HTML script tags when using ES modules.",
        "Swallowing errors entirely in catch blocks without logging or handling them."
      ],
      exercise: {
        prompt: "Write a \`try...catch\` block that throws a new Error with message \`'Invalid input'\` and catches it.",
        starterCode: "// Write try/catch\n",
        solution: "try {\n  throw new Error('Invalid input');\n} catch (e) {\n  console.log(e.message);\n}"
      },
      quiz: [
        {
          question: "Which block always executes regardless of whether an error was thrown or caught?",
          options: ["catch", "finally", "error", "default"],
          correct: 1,
          explanation: "The finally block executes after try and catch, regardless of the result."
        }
      ]
    }
  ]
};
