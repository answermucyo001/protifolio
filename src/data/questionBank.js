export const javascriptQuestions = [
  // --- BEGINNER (1-17) ---
  {
    id: "js-q1",
    topic: "Variables",
    difficulty: "Beginner",
    type: "multiple-choice",
    question: "Which keyword is used to declare a block-scoped variable that can be reassigned?",
    options: ["var", "let", "const", "static"],
    correct: 1,
    explanation: "The 'let' keyword declares a block-scoped local variable, optionally initializing it to a value and allowing reassignment."
  },
  {
    id: "js-q2",
    topic: "Variables",
    difficulty: "Beginner",
    type: "multiple-choice",
    question: "What happens if you attempt to reassign a variable declared with \`const\`?",
    options: [
      "The value updates normally.",
      "A TypeError is thrown.",
      "The variable is deleted.",
      "It converts into a global variable."
    ],
    correct: 1,
    explanation: "Assigning a value to a const variable after its initial declaration throws a TypeError."
  },
  {
    id: "js-q3",
    topic: "Data Types",
    difficulty: "Beginner",
    type: "true-false",
    question: "True or False: JavaScript is a case-sensitive programming language.",
    options: ["True", "False"],
    correct: 0,
    explanation: "JavaScript is strictly case-sensitive. Variables 'score' and 'Score' are distinct."
  },
  {
    id: "js-q4",
    topic: "Data Types",
    difficulty: "Beginner",
    type: "multiple-choice",
    question: "What is the result of \`typeof NaN\` in JavaScript?",
    options: ["\"NaN\"", "\"number\"", "\"undefined\"", "\"object\""],
    correct: 1,
    explanation: "Despite standing for 'Not-a-Number', NaN is classified as a number primitive in JavaScript."
  },
  {
    id: "js-q5",
    topic: "Operators",
    difficulty: "Beginner",
    type: "predict-output",
    question: "What will \`console.log(3 + 2 * 4);\` output?",
    options: ["20", "11", "14", "9"],
    correct: 1,
    explanation: "Multiplication has higher precedence than addition: 2 * 4 = 8, then 3 + 8 = 11."
  },
  {
    id: "js-q6",
    topic: "Operators",
    difficulty: "Beginner",
    type: "multiple-choice",
    question: "Which operator checks both value and data type equality strictly?",
    options: ["==", "===", "=", "!="],
    correct: 1,
    explanation: "The strict equality operator (===) returns true only if both operands have the same value and the same type."
  },
  {
    id: "js-q7",
    topic: "Conditions",
    difficulty: "Beginner",
    type: "multiple-choice",
    question: "Which statement is used to execute different blocks of code based on multiple distinct values?",
    options: ["if...else", "switch", "for...in", "try...catch"],
    correct: 1,
    explanation: "The switch statement evaluates an expression against multiple case clauses."
  },
  {
    id: "js-q8",
    topic: "Conditions",
    difficulty: "Beginner",
    type: "predict-output",
    question: "What does \`Boolean(0)\` evaluate to in JavaScript?",
    options: ["true", "false", "undefined", "null"],
    correct: 1,
    explanation: "0 is a falsy value in JavaScript, so Boolean(0) evaluates to false."
  },
  {
    id: "js-q9",
    topic: "Loops",
    difficulty: "Beginner",
    type: "multiple-choice",
    question: "Which loop guarantees that the code block executes at least once?",
    options: ["for", "while", "do...while", "for...of"],
    correct: 2,
    explanation: "do...while checks the condition after executing the code block, guaranteeing at least one execution."
  },
  {
    id: "js-q10",
    topic: "Loops",
    difficulty: "Beginner",
    type: "multiple-choice",
    question: "Which keyword immediately exits a loop entirely?",
    options: ["continue", "break", "return", "exit"],
    correct: 1,
    explanation: "The break statement jumps out of a loop immediately."
  },
  {
    id: "js-q11",
    topic: "Functions",
    difficulty: "Beginner",
    type: "multiple-choice",
    question: "What is the syntax for an ES6 arrow function?",
    options: [
      "function = () => {}",
      "const fn = () => {}",
      "arrow fn() => {}",
      "=> function()"
    ],
    correct: 1,
    explanation: "Arrow functions are assigned using fat arrow syntax: const fn = () => {}."
  },
  {
    id: "js-q12",
    topic: "Functions",
    difficulty: "Beginner",
    type: "predict-output",
    question: "What does \`const add = (a, b) => a + b; console.log(add(2, 3));\` output?",
    options: ["23", "5", "undefined", "Error"],
    correct: 1,
    explanation: "The arrow function implicitly returns a + b, which is 2 + 3 = 5."
  },
  {
    id: "js-q13",
    topic: "Arrays",
    difficulty: "Beginner",
    type: "multiple-choice",
    question: "Which array method adds one or more elements to the end of an array?",
    options: ["pop()", "shift()", "push()", "unshift()"],
    correct: 2,
    explanation: "push() adds elements to the end of an array and returns the new length."
  },
  {
    id: "js-q14",
    topic: "Arrays",
    difficulty: "Beginner",
    type: "predict-output",
    question: "What is \`['a', 'b'].length\`?",
    options: ["0", "1", "2", "3"],
    correct: 2,
    explanation: "The array contains two elements ('a' and 'b'), so its length is 2."
  },
  {
    id: "js-q15",
    topic: "Objects",
    difficulty: "Beginner",
    type: "multiple-choice",
    question: "How do you access property \`name\` on object \`user\` using dot notation?",
    options: ["user[name]", "user.name", "user->name", "name.user"],
    correct: 1,
    explanation: "Dot notation uses objectName.propertyName (e.g. user.name)."
  },
  {
    id: "js-q16",
    topic: "DOM",
    difficulty: "Beginner",
    type: "multiple-choice",
    question: "Which method selects the first element matching a CSS selector?",
    options: ["getElementById", "querySelector", "querySelectorAll", "getElementsByClassName"],
    correct: 1,
    explanation: "querySelector() returns the first element within the document that matches the specified CSS selector."
  },
  {
    id: "js-q17",
    topic: "Events",
    difficulty: "Beginner",
    type: "multiple-choice",
    question: "What method is standard for attaching event listeners to DOM elements?",
    options: ["onclick()", "attachEvent()", "addEventListener()", "listen()"],
    correct: 2,
    explanation: "addEventListener() is the modern and standard method for attaching event handlers."
  },

  // --- INTERMEDIATE (18-34) ---
  {
    id: "js-q18",
    topic: "Array Methods",
    difficulty: "Intermediate",
    type: "multiple-choice",
    question: "Which array method creates a new array populated with the results of calling a provided function on every element?",
    options: ["filter()", "map()", "reduce()", "forEach()"],
    correct: 1,
    explanation: "map() transforms each element and returns a brand new array."
  },
  {
    id: "js-q19",
    topic: "Array Methods",
    difficulty: "Intermediate",
    type: "predict-output",
    question: "What will \`[1, 2, 3].map(n => n * 2)\` return?",
    options: ["[1, 2, 3]", "[2, 4, 6]", "[3, 6, 9]", "6"],
    correct: 1,
    explanation: "Each element is multiplied by 2, resulting in [2, 4, 6]."
  },
  {
    id: "js-q20",
    topic: "Array Methods",
    difficulty: "Intermediate",
    type: "multiple-choice",
    question: "Which method tests whether all elements in the array pass the test implemented by the provided function?",
    options: ["some()", "every()", "filter()", "find()"],
    correct: 1,
    explanation: "every() returns true if all elements pass the test, otherwise false."
  },
  {
    id: "js-q21",
    topic: "Objects",
    difficulty: "Intermediate",
    type: "multiple-choice",
    question: "What syntax is used for object destructuring in JavaScript?",
    options: [
      "const [name] = user;",
      "const { name } = user;",
      "const (name) = user;",
      "const <name> = user;"
    ],
    correct: 1,
    explanation: "Object destructuring uses curly braces: const { name } = user;"
  },
  {
    id: "js-q22",
    topic: "ES6+",
    difficulty: "Intermediate",
    type: "multiple-choice",
    question: "What are template literals enclosed by in JavaScript?",
    options: ["Single quotes ''", "Double quotes \"\"", "Backticks ``", "Curly braces {}"],
    correct: 2,
    explanation: "Template literals are enclosed by backticks (``) and allow string interpolation."
  },
  {
    id: "js-q23",
    topic: "ES6+",
    difficulty: "Intermediate",
    type: "predict-output",
    question: "What will \`const name = 'Mucyo'; console.log(\`Hi \${name}\`);\` output?",
    options: ["Hi ${name}", "Hi Mucyo", "Hi undefined", "Error"],
    correct: 1,
    explanation: "Template literals interpolate the variable name into 'Hi Mucyo'."
  },
  {
    id: "js-q24",
    topic: "ES6+",
    difficulty: "Intermediate",
    type: "multiple-choice",
    question: "What does the spread operator (...) do when applied to an array?",
    options: [
      "Combines array into a string",
      "Expands an array into individual elements",
      "Freezes array mutations",
      "Reverses array order"
    ],
    correct: 1,
    explanation: "The spread operator expands iterable elements into individual places."
  },
  {
    id: "js-q25",
    topic: "DOM",
    difficulty: "Intermediate",
    type: "multiple-choice",
    question: "What is the difference between \`textContent\` and \`innerHTML\`?",
    options: [
      "There is no difference.",
      "textContent returns/sets raw text; innerHTML parses HTML tags.",
      "innerHTML is faster and safer than textContent.",
      "textContent executes scripts inside the string."
    ],
    correct: 1,
    explanation: "textContent deals with pure text nodes, while innerHTML parses HTML markup strings."
  },
  {
    id: "js-q26",
    topic: "Events",
    difficulty: "Intermediate",
    type: "multiple-choice",
    question: "How do you prevent the default browser behavior of a form submit event?",
    options: ["e.stop()", "e.preventDefault()", "e.cancel()", "return false;"],
    correct: 1,
    explanation: "e.preventDefault() prevents the default action associated with the event (like form reload)."
  },
  {
    id: "js-q27",
    topic: "Asynchronous JS",
    difficulty: "Intermediate",
    type: "multiple-choice",
    question: "What object represents the eventual completion (or failure) of an asynchronous operation?",
    options: ["Callback", "Promise", "Thread", "Observer"],
    correct: 1,
    explanation: "A Promise is an object representing the eventual completion or failure of an async operation."
  },
  {
    id: "js-q28",
    topic: "Asynchronous JS",
    difficulty: "Intermediate",
    type: "multiple-choice",
    question: "What keyword allows you to pause execution in an async function until a promise settles?",
    options: ["pause", "wait", "await", "yield"],
    correct: 2,
    explanation: "The await operator is used to wait for a Promise and get its fulfillment value."
  },
  {
    id: "js-q29",
    topic: "Fetch API",
    difficulty: "Intermediate",
    type: "multiple-choice",
    question: "What does calling \`fetch(url)\` return?",
    options: ["Parsed JSON data", "A Promise resolving to a Response object", "An HTML string", "An HTTP status code number"],
    correct: 1,
    explanation: "fetch() returns a Promise that resolves to the Response object representing the HTTP response."
  },
  {
    id: "js-q30",
    topic: "Fetch API",
    difficulty: "Intermediate",
    type: "predict-output",
    question: "What must you call on a fetch Response object to parse its body as JSON?",
    options: ["res.parse()", "res.json()", "JSON.parse(res)", "res.getData()"],
    correct: 1,
    explanation: "res.json() parses the response body stream as JSON and returns a Promise."
  },
  {
    id: "js-q31",
    topic: "Classes",
    difficulty: "Intermediate",
    type: "multiple-choice",
    question: "Which keyword is used inside a class constructor to refer to the current instance?",
    options: ["self", "me", "this", "super"],
    correct: 2,
    explanation: "The 'this' keyword refers to the current object instance in classes and constructor functions."
  },
  {
    id: "js-q32",
    topic: "Classes",
    difficulty: "Intermediate",
    type: "multiple-choice",
    question: "Which keyword is used in class inheritance to extend a parent class?",
    options: ["inherits", "implements", "extends", "super"],
    correct: 2,
    explanation: "The extends keyword is used in class declarations to create a subclass."
  },
  {
    id: "js-q33",
    topic: "Modules",
    difficulty: "Intermediate",
    type: "multiple-choice",
    question: "How do you export a single default value from an ES6 module file?",
    options: ["export default value;", "export { value };", "module.exports = value;", "share default value;"],
    correct: 0,
    explanation: "export default is used to export a single default member from a module file."
  },
  {
    id: "js-q34",
    topic: "Error Handling",
    difficulty: "Intermediate",
    type: "multiple-choice",
    question: "Which block in try...catch...finally executes regardless of whether an error occurred?",
    options: ["catch", "finally", "error", "done"],
    correct: 1,
    explanation: "The finally block always executes after try and catch execution finishes."
  },

  // --- ADVANCED (35-50) ---
  {
    id: "js-q35",
    topic: "Closures",
    difficulty: "Advanced",
    type: "multiple-choice",
    question: "What is a closure in JavaScript?",
    options: [
      "A function bundled together with references to its lexical environment.",
      "A method that closes browser windows.",
      "A secure way to encrypt variables.",
      "An anonymous function with no parameters."
    ],
    correct: 0,
    explanation: "A closure gives an inner function access to an outer function's scope even after the outer function has closed/returned."
  },
  {
    id: "js-q36",
    topic: "Prototypes",
    difficulty: "Advanced",
    type: "multiple-choice",
    question: "What is prototypal inheritance in JavaScript?",
    options: [
      "Classes inheriting from Java classes.",
      "Objects inheriting properties and methods directly from other objects via prototype chain.",
      "Copying objects by value.",
      "Static method sharing."
    ],
    correct: 1,
    explanation: "JavaScript uses prototypal inheritance where objects can inherit directly from other prototype objects."
  },
  {
    id: "js-q37",
    topic: "Event Loop",
    difficulty: "Advanced",
    type: "multiple-choice",
    question: "In the JavaScript event loop, where do resolved Promise callbacks (microtasks) go before execution?",
    options: ["Task Queue (Macrotask Queue)", "Microtask Queue (Job Queue)", "Render Tree", "Call Stack directly"],
    correct: 1,
    explanation: "Promise callbacks are placed in the microtask queue, which has higher priority than the macrotask queue."
  },
  {
    id: "js-q38",
    topic: "Event Loop",
    difficulty: "Advanced",
    type: "predict-output",
    question: "What order will console.log print: \`setTimeout(() => console.log('1'), 0); Promise.resolve().then(() => console.log('2')); console.log('3');\`?",
    options: ["1, 2, 3", "3, 1, 2", "3, 2, 1", "2, 3, 1"],
    correct: 2,
    explanation: "Sync code ('3') runs first, then microtasks ('2'), then macrotasks ('1')."
  },
  {
    id: "js-q39",
    topic: "This Keyword",
    difficulty: "Advanced",
    type: "multiple-choice",
    question: "How does an arrow function handle the \`this\` keyword compared to regular functions?",
    options: [
      "It binds its own dynamic \`this\` based on caller.",
      "It inherits lexical \`this\` from its enclosing scope.",
      "It has no \`this\` reference whatsoever.",
      "It binds \`this\` to the global window object always."
    ],
    correct: 1,
    explanation: "Arrow functions do not create their own execution context; they lexically bind 'this' from their parent scope."
  },
  {
    id: "js-q40",
    topic: "Generators",
    difficulty: "Advanced",
    type: "multiple-choice",
    question: "What syntax is used to define a generator function in JavaScript?",
    options: ["function* gen()", "async function gen()", "generator gen()", "gen() *"],
    correct: 0,
    explanation: "Generator functions are denoted by function* and use the yield keyword."
  },
  {
    id: "js-q41",
    topic: "Proxies",
    difficulty: "Advanced",
    type: "multiple-choice",
    question: "What is the purpose of the JavaScript Proxy object?",
    options: [
      "To proxy network requests to servers.",
      "To define custom behavior for fundamental operations (e.g. property lookup, assignment).",
      "To cache HTTP responses.",
      "To encrypt local storage."
    ],
    correct: 1,
    explanation: "Proxy objects wrap another object and intercept operations like property get/set using traps."
  },
  {
    id: "js-q42",
    topic: "Memory Management",
    difficulty: "Advanced",
    type: "multiple-choice",
    question: "What mechanism does JavaScript use to automatically reclaim memory occupied by unreachable objects?",
    options: ["Manual delete", "Garbage Collection", "Memory compiling", "Reference dumping"],
    correct: 1,
    explanation: "JavaScript engines feature automatic garbage collection (typically mark-and-sweep)."
  },
  {
    id: "js-q43",
    topic: "Coercion",
    difficulty: "Advanced",
    type: "predict-output",
    question: "What is the result of \`[] + []\` in JavaScript?",
    options: ["0", "[]", "\"\"", "NaN"],
    correct: 2,
    explanation: "Both arrays coerce to empty strings via toString(), resulting in \"\" + \"\" = \"\"."
  },
  {
    id: "js-q44",
    topic: "Coercion",
    difficulty: "Advanced",
    type: "predict-output",
    question: "What is the result of \`[] == ![]\`?",
    options: ["true", "false", "TypeError", "undefined"],
    correct: 0,
    explanation: "![] evaluates to false, then [] coerces to 0 and false coerces to 0, so 0 == 0 is true."
  },
  {
    id: "js-q45",
    topic: "Currying",
    difficulty: "Advanced",
    type: "multiple-choice",
    question: "What is function currying in JavaScript?",
    options: [
      "Spicy syntax optimization.",
      "Transforming a function with multiple arguments into a sequence of nested functions taking a single argument.",
      "Freezing function parameters.",
      "Executing functions in parallel."
    ],
    correct: 1,
    explanation: "Currying translates f(a, b, c) into f(a)(b)(c)."
  },
  {
    id: "js-q46",
    topic: "Memoization",
    difficulty: "Advanced",
    type: "multiple-choice",
    question: "What is memoization?",
    options: [
      "Writing detailed documentation comments.",
      "An optimization technique storing results of expensive function calls to return cached results for identical inputs.",
      "Compressing JSON payloads.",
      "Minifying JavaScript code."
    ],
    correct: 1,
    explanation: "Memoization caches function return values based on parameter keys."
  },
  {
    id: "js-q47",
    topic: "Symbols",
    difficulty: "Advanced",
    type: "multiple-choice",
    question: "What is a Symbol in JavaScript?",
    options: [
      "A punctuation mark like $ or #.",
      "A unique and immutable primitive data type often used as object property keys.",
      "A reference to DOM nodes.",
      "An alias for string literals."
    ],
    correct: 1,
    explanation: "Symbols are unique primitive values created with Symbol() to guarantee non-colliding object property keys."
  },
  {
    id: "js-q48",
    topic: "Iterators",
    difficulty: "Advanced",
    type: "multiple-choice",
    question: "What protocol must an object implement to be considered iterable in JavaScript?",
    options: [
      "The Iterator Protocol with a \`next()\` method returning \`{ value, done }\`.",
      "The Array Protocol.",
      "The JSON Protocol.",
      "The Event Protocol."
    ],
    correct: 0,
    explanation: "Iterables implement Symbol.iterator returning an iterator object with a next() method."
  },
  {
    id: "js-q49",
    topic: "Strict Mode",
    difficulty: "Advanced",
    type: "multiple-choice",
    question: "What does \`'use strict';\` do at the top of a JavaScript script or function?",
    options: [
      "Enables stricter parsing and error handling, disallowing unsafe practices like undeclared variables.",
      "Minifies code for production.",
      "Forces TypeScript compilation.",
      "Disables async functions."
    ],
    correct: 0,
    explanation: "Strict mode catches silent errors, throws on accidental globals, and prohibits bad syntax."
  },
  {
    id: "js-q50",
    topic: "Reflect API",
    difficulty: "Advanced",
    type: "multiple-choice",
    question: "What is the purpose of the built-in \`Reflect\` object in JavaScript?",
    options: [
      "To reflect browser windows.",
      "To provide interceptable methods for JavaScript operations matching Proxy traps.",
      "To mirror CSS styles.",
      "To generate source maps."
    ],
    correct: 1,
    explanation: "Reflect provides static methods for intercepting JavaScript operations corresponding to proxy traps."
  }
];

export const reactQuestions = [
  // --- BEGINNER (51-67) ---
  {
    id: "react-q1",
    topic: "Introduction",
    difficulty: "Beginner",
    type: "multiple-choice",
    question: "What is React.js?",
    options: [
      "A backend database management system.",
      "A declarative, component-based JavaScript library for building user interfaces.",
      "A compiled systems programming language.",
      "An operating system shell."
    ],
    correct: 1,
    explanation: "React is a UI library maintained by Meta centered around reusable components."
  },
  {
    id: "react-q2",
    topic: "Introduction",
    difficulty: "Beginner",
    type: "true-false",
    question: "True or False: React directly manipulates the real DOM on every state change for maximum performance.",
    options: ["True", "False"],
    correct: 1,
    explanation: "False. React uses a Virtual DOM and efficient reconciliation diffing before updating the real DOM."
  },
  {
    id: "react-q3",
    topic: "Vite & Setup",
    difficulty: "Beginner",
    type: "multiple-choice",
    question: "What modern build tool is widely used to scaffold and serve React applications lightning-fast?",
    options: ["Webpack", "Vite", "Grunt", "Gulp"],
    correct: 1,
    explanation: "Vite is an ultra-fast modern build tool leveraging native ES modules."
  },
  {
    id: "react-q4",
    topic: "JSX",
    difficulty: "Beginner",
    type: "multiple-choice",
    question: "What does JSX stand for?",
    options: ["JavaScript XML", "Java Syntax Extension", "JSON XML", "JQuery Scripting XHTML"],
    correct: 0,
    explanation: "JSX stands for JavaScript XML, allowing HTML syntax directly inside JavaScript files."
  },
  {
    id: "react-q5",
    topic: "JSX",
    difficulty: "Beginner",
    type: "predict-output",
    question: "What attribute is used in JSX instead of HTML's \`class\` attribute?",
    options: ["class", "className", "class-name", "css"],
    correct: 1,
    explanation: "className is used in JSX because 'class' is a reserved keyword in JavaScript."
  },
  {
    id: "react-q6",
    topic: "JSX",
    difficulty: "Beginner",
    type: "multiple-choice",
    question: "What must a React component return if it renders multiple sibling elements?",
    options: [
      "Nothing, sibling elements are forbidden.",
      "A single wrapper element or React Fragment (<></>).",
      "An array of strings.",
      "A stylesheet object."
    ],
    correct: 1,
    explanation: "Components must return a single root node, which can be a React Fragment (<></>)."
  },
  {
    id: "react-q7",
    topic: "Props",
    difficulty: "Beginner",
    type: "multiple-choice",
    question: "What are props in React?",
    options: [
      "Internal mutable state variables.",
      "Read-only properties passed from parent to child components.",
      "CSS stylesheets.",
      "Server endpoints."
    ],
    correct: 1,
    explanation: "Props (properties) are read-only inputs passed down from parent components."
  },
  {
    id: "react-q8",
    topic: "Props",
    difficulty: "Beginner",
    type: "true-false",
    question: "True or False: A child component can directly modify props received from its parent.",
    options: ["True", "False"],
    correct: 1,
    explanation: "False. Props are strictly immutable (read-only) from the perspective of the child component."
  },
  {
    id: "react-q9",
    topic: "State",
    difficulty: "Beginner",
    type: "multiple-choice",
    question: "Which hook is used to add state to functional components in React?",
    options: ["useEffect", "useContext", "useState", "useReducer"],
    correct: 2,
    explanation: "useState is the fundamental hook for managing component state."
  },
  {
    id: "react-q10",
    topic: "State",
    difficulty: "Beginner",
    type: "predict-output",
    question: "What does \`useState(0)\` return?",
    options: [
      "Just the state value number 0.",
      "An array containing the current state value and a state setter function.",
      "An object with getter and setter methods.",
      "A Promise."
    ],
    correct: 1,
    explanation: "useState returns a pair [state, setState]."
  },
  {
    id: "react-q11",
    topic: "Events",
    difficulty: "Beginner",
    type: "multiple-choice",
    question: "How are React event handlers named?",
    options: ["lowercase (onclick)", "camelCase (onClick)", "snake_case (on_click)", "kebab-case (on-click)"],
    correct: 1,
    explanation: "React events use camelCase naming convention (e.g. onClick, onSubmit)."
  },
  {
    id: "react-q12",
    topic: "Conditional Rendering",
    difficulty: "Beginner",
    type: "multiple-choice",
    question: "Which operator is commonly used for inline conditional rendering in JSX?",
    options: ["if...else", "ternary operator (? :)", "switch", "case"],
    correct: 1,
    explanation: "The ternary operator (condition ? trueJSX : falseJSX) is standard for inline conditional rendering."
  },
  {
    id: "react-q13",
    topic: "Lists & Keys",
    difficulty: "Beginner",
    type: "multiple-choice",
    question: "Why does React require a \`key\` prop when rendering lists of elements?",
    options: [
      "For styling purposes.",
      "To help React identify which items have changed, been added, or removed.",
      "To encrypt list data.",
      "To sort items alphabetically."
    ],
    correct: 1,
    explanation: "Keys provide stable identities for Virtual DOM reconciliation."
  },
  {
    id: "react-q14",
    topic: "Forms",
    difficulty: "Beginner",
    type: "multiple-choice",
    question: "What is a 'controlled component' in React forms?",
    options: [
      "An input whose value is driven by React state.",
      "An input locked by the browser.",
      "An input styled with Tailwind.",
      "An input connected to a database."
    ],
    correct: 0,
    explanation: "In controlled components, form input values are synchronized with React state."
  },
  {
    id: "react-q15",
    topic: "useEffect",
    difficulty: "Beginner",
    type: "multiple-choice",
    question: "What hook is used for performing side effects in functional components?",
    options: ["useState", "useEffect", "useMemo", "useRef"],
    correct: 1,
    explanation: "useEffect handles side effects such as data fetching, subscriptions, and DOM mutations."
  },
  {
    id: "react-q16",
    topic: "useEffect",
    difficulty: "Beginner",
    type: "multiple-choice",
    question: "When does \`useEffect(callback, [])\` run?",
    options: [
      "On every single render.",
      "Only once when the component mounts.",
      "Only when component unmounts.",
      "Never."
    ],
    correct: 1,
    explanation: "An empty dependency array [] ensures the effect runs only once upon initial mount."
  },
  {
    id: "react-q17",
    topic: "Components",
    difficulty: "Beginner",
    type: "multiple-choice",
    question: "What naming convention should React component function names follow?",
    options: ["camelCase", "PascalCase", "snake_case", "kebab-case"],
    correct: 1,
    explanation: "React components must start with a capital letter (PascalCase) to distinguish them from HTML tags."
  },

  // --- INTERMEDIATE (68-84) ---
  {
    id: "react-q18",
    topic: "Custom Hooks",
    difficulty: "Intermediate",
    type: "multiple-choice",
    question: "What naming prefix must custom hooks follow in React?",
    options: ["custom", "hook", "use", "get"],
    correct: 2,
    explanation: "Custom hooks must start with 'use' so React linter can verify hook rules."
  },
  {
    id: "react-q19",
    topic: "React Router",
    difficulty: "Intermediate",
    type: "multiple-choice",
    question: "What component is used to define client-side routes in React Router?",
    options: ["<Link>", "<Route>", "<Navigate>", "<SwitchRouter>"],
    correct: 1,
    explanation: "The <Route> component links a URL path to a component element."
  },
  {
    id: "react-q20",
    topic: "React Router",
    difficulty: "Intermediate",
    type: "multiple-choice",
    question: "Why use \`<Link to=\"/path\">\` instead of \`<a href=\"/path\">\` in React SPAs?",
    options: [
      "Links load faster.",
      "Link prevents full browser page reloads and enables client-side routing.",
      "a tags are prohibited in JSX.",
      "Link automatically adds CSS."
    ],
    correct: 1,
    explanation: "Link prevents full page reloads and updates the URL client-side seamlessly."
  },
  {
    id: "react-q21",
    topic: "Context API",
    difficulty: "Intermediate",
    type: "multiple-choice",
    question: "What problem does the React Context API solve?",
    options: ["Slow rendering", "Prop drilling across deep component trees", "CSS specificity conflicts", "Memory leaks"],
    correct: 1,
    explanation: "Context provides a way to share data globally without passing props down manually at every level."
  },
  {
    id: "react-q22",
    topic: "Context API",
    difficulty: "Intermediate",
    type: "multiple-choice",
    question: "What hook is used to consume a React Context value?",
    options: ["useContext", "useProvider", "useConsumer", "useGlobal"],
    correct: 0,
    explanation: "useContext accepts a context object and returns the current context value."
  },
  {
    id: "react-q23",
    topic: "State Management",
    difficulty: "Intermediate",
    type: "predict-output",
    question: "What happens if you update state using previous state: \`setCount(prev => prev + 1)\` vs \`setCount(count + 1)\` inside rapid batch calls?",
    options: [
      "They behave identically.",
      "Functional updates guarantee correct accumulation based on the latest state queue.",
      "Functional updates cause infinite loops.",
      "Count resets to zero."
    ],
    correct: 1,
    explanation: "Functional updates ensure you operate on the most up-to-date queued state during batched updates."
  },
  {
    id: "react-q24",
    topic: "Component Lifecycle",
    difficulty: "Intermediate",
    type: "multiple-choice",
    question: "How do you perform cleanup (like clearing a timer or removing an event listener) in \`useEffect\`?",
    options: [
      "Return a cleanup function from the effect callback.",
      "Call useEffectCleanup().",
      "Pass a second cleanup argument.",
      "Cleanup is automatic."
    ],
    correct: 0,
    explanation: "Returning a function from useEffect executes it when the component unmounts or before re-running the effect."
  },
  {
    id: "react-q25",
    topic: "Refs",
    difficulty: "Intermediate",
    type: "multiple-choice",
    question: "What hook is used to access a DOM element directly or persist mutable values without triggering re-renders?",
    options: ["useState", "useRef", "useMemo", "useCallback"],
    correct: 1,
    explanation: "useRef returns a mutable ref object whose .current property is persisted across renders without causing re-renders."
  },
  {
    id: "react-q26",
    topic: "Performance",
    difficulty: "Intermediate",
    type: "multiple-choice",
    question: "What is the purpose of \`useMemo\`?",
    options: [
      "To memorize student quiz scores.",
      "To cache the result of expensive calculations between renders.",
      "To memoize component files.",
      "To fetch data from memory."
    ],
    correct: 1,
    explanation: "useMemo caches expensive calculation results until its dependencies change."
  },
  {
    id: "react-q27",
    topic: "Performance",
    difficulty: "Intermediate",
    type: "multiple-choice",
    question: "What is the purpose of \`useCallback\`?",
    options: [
      "To trigger callback functions on error.",
      "To cache a function definition between renders to prevent unnecessary child re-renders.",
      "To handle asynchronous callbacks.",
      "To call APIs."
    ],
    correct: 1,
    explanation: "useCallback caches function instances between renders."
  },
  {
    id: "react-q28",
    topic: "Data Fetching",
    difficulty: "Intermediate",
    type: "multiple-choice",
    question: "What three states are commonly managed when fetching API data in React components?",
    options: ["Data, Loading, Error", "State, Props, Ref", "Get, Post, Put", "Start, Middle, End"],
    correct: 0,
    explanation: "Tracking data, loading boolean, and error state provides robust UI feedback."
  },
  {
    id: "react-q29",
    topic: "Composition",
    difficulty: "Intermediate",
    type: "multiple-choice",
    question: "What prop allows wrapper components (like Cards or Modals) to render arbitrary nested child markup?",
    options: ["content", "children", "elements", "innerHtml"],
    correct: 1,
    explanation: "The children prop represents whatever elements are placed between opening and closing component tags."
  },
  {
    id: "react-q30",
    topic: "Error Boundaries",
    difficulty: "Intermediate",
    type: "multiple-choice",
    question: "What is a React Error Boundary?",
    options: [
      "A CSS border around error messages.",
      "A React component that catches JavaScript errors anywhere in its child component tree and displays a fallback UI.",
      "A server firewall.",
      "A try/catch block inside useEffect."
    ],
    correct: 1,
    explanation: "Error boundaries catch runtime JavaScript errors in child trees and display graceful fallbacks."
  },
  {
    id: "react-q31",
    topic: "Portals",
    difficulty: "Intermediate",
    type: "multiple-choice",
    question: "What feature does \`ReactDOM.createPortal\` provide?",
    options: [
      "Teleporting state between apps.",
      "Rendering children into a DOM node that exists outside the DOM hierarchy of the parent component.",
      "Routing pages.",
      "Async component loading."
    ],
    correct: 1,
    explanation: "Portals render children into a different DOM subtree (e.g. modals/tooltips attached to document.body)."
  },
  {
    id: "react-q32",
    topic: "Strict Mode",
    difficulty: "Intermediate",
    type: "multiple-choice",
    question: "What does \`<React.StrictMode>\` do in development mode?",
    options: [
      "Blocks all console logs.",
      "Detects unsafe lifecycles, legacy API usage, and runs double-invocations to spot side-effect bugs.",
      "Forces production builds.",
      "Encrypts state."
    ],
    correct: 1,
    explanation: "StrictMode highlights potential problems and inspects components in dev mode."
  },
  {
    id: "react-q33",
    topic: "Fragments",
    difficulty: "Intermediate",
    type: "multiple-choice",
    question: "Why use React Fragments \`<></>\` instead of \`<div>\` wrappers?",
    options: [
      "They run faster.",
      "They let you group children without adding extra unnecessary DOM nodes to the HTML structure.",
      "They support state.",
      "Divs are deprecated in React."
    ],
    correct: 1,
    explanation: "Fragments avoid polluting the DOM tree with empty wrapper divs."
  },
  {
    id: "react-q34",
    topic: "Reducers",
    difficulty: "Intermediate",
    type: "multiple-choice",
    question: "Which hook is an alternative to \`useState\` for managing complex state logic with action dispatchers?",
    options: ["useReducer", "useContext", "useMemo", "useRef"],
    correct: 0,
    explanation: "useReducer is ideal for complex state logic involving multiple sub-values or actions."
  },

  // --- ADVANCED (35-50 / 85-100) ---
  {
    id: "react-q35",
    topic: "Fiber Architecture",
    difficulty: "Advanced",
    type: "multiple-choice",
    question: "What is React Fiber?",
    options: [
      "A high-speed fiber optic network plugin.",
      "React's internal reconciliation engine designed to enable incremental rendering of UI updates.",
      "A CSS styling framework.",
      "A database connector."
    ],
    correct: 1,
    explanation: "Fiber is React's reimplementation of the core reconciliation algorithm, supporting pause/resume and priority scheduling."
  },
  {
    id: "react-q36",
    topic: "Concurrent Mode",
    difficulty: "Advanced",
    type: "multiple-choice",
    question: "What is the benefit of Concurrent React features (like \`useTransition\` and \`useDeferredValue\`?)",
    options: [
      "They eliminate the need for CSS.",
      "They allow React to prepare multiple versions of the UI concurrently, keeping apps responsive during heavy renders.",
      "They replace Redux.",
      "They connect directly to WebSockets."
    ],
    correct: 1,
    explanation: "Concurrent features let React interrupt rendering work to keep user interactions snappy."
  },
  {
    id: "react-q37",
    topic: "Server Components",
    difficulty: "Advanced",
    type: "multiple-choice",
    question: "What are React Server Components (RSC)?",
    options: [
      "Components that run exclusively on the server and send zero JavaScript to the client bundle.",
      "Node.js express routes.",
      "Components rendered in Web Workers.",
      "Cloud database schemas."
    ],
    correct: 0,
    explanation: "RSCs execute entirely on the server, streaming HTML/JSON to the client without adding to bundle size."
  },
  {
    id: "react-q38",
    topic: "Custom Hooks",
    difficulty: "Advanced",
    type: "multiple-choice",
    question: "Do custom hooks share state when used in multiple different components?",
    options: [
      "Yes, their state is shared globally.",
      "No, each component using a custom hook gets a completely isolated, independent copy of state and effects.",
      "Only if wrapped in Context.",
      "Only in development mode."
    ],
    correct: 1,
    explanation: "Custom hooks encapsulate stateful logic, but every component calling the hook receives isolated state."
  },
  {
    id: "react-q39",
    topic: "State Batching",
    difficulty: "Advanced",
    type: "multiple-choice",
    question: "How does React 18 handle multiple state updates triggered within async events or timeouts?",
    options: [
      "It triggers a re-render for every single setter call (no batching).",
      "It automatically batches all state updates together into a single re-render.",
      "It throws a batching error.",
      "It cancels subsequent updates."
    ],
    correct: 1,
    explanation: "React 18 introduced automatic batching across promises, timeouts, and native event handlers."
  },
  {
    id: "react-q40",
    topic: "Imperative Handle",
    difficulty: "Advanced",
    type: "multiple-choice",
    question: "What does \`useImperativeHandle\` do?",
    options: [
      "Forces components to render imperatively.",
      "Customizes the instance value exposed to parent components when using \`forwardRef\`.",
      "Handles imperative routing.",
      "Executes SQL queries."
    ],
    correct: 1,
    explanation: "useImperativeHandle customizes the ref value exposed by parent components."
  },
  {
    id: "react-q41",
    topic: "Layout Effects",
    difficulty: "Advanced",
    type: "multiple-choice",
    question: "When does \`useLayoutEffect\` fire compared to standard \`useEffect\`?",
    options: [
      "Before paint, synchronously after all DOM mutations.",
      "After the browser has painted.",
      "Only on server-side render.",
      "At random intervals."
    ],
    correct: 0,
    explanation: "useLayoutEffect fires synchronously before the browser paints, useful for measuring layout dimensions."
  },
  {
    id: "react-q42",
    topic: "Suspense",
    difficulty: "Advanced",
    type: "multiple-choice",
    question: "What is the primary purpose of \`<Suspense>\` in React?",
    options: [
      "To suspend user accounts.",
      "To display a fallback UI (like a loading spinner) while child components or lazy-loaded modules are loading.",
      "To catch JavaScript runtime errors.",
      "To pause timers."
    ],
    correct: 1,
    explanation: "Suspense lets components 'wait' for something before rendering, displaying a fallback."
  },
  {
    id: "react-q43",
    topic: "Code Splitting",
    difficulty: "Advanced",
    type: "multiple-choice",
    question: "How do you achieve component lazy loading and code splitting in React?",
    options: [
      "import { lazy } from 'react'",
      "React.lazy() combined with dynamic \`import()\`",
      "Webpack config only",
      "async components"
    ],
    correct: 1,
    explanation: "React.lazy() and dynamic import() allow loading component code on demand."
  },
  {
    id: "react-q44",
    topic: "Reconciliation",
    difficulty: "Advanced",
    type: "multiple-choice",
    question: "What two heuristic assumptions does React's diffing algorithm make to achieve O(n) complexity?",
    options: [
      "Two elements of different types produce different trees; element keys can be flagged as stable across renders.",
      "Arrays must be sorted alphabetically; state must be immutable.",
      "Components must be pure; props must be numbers.",
      "DOM nodes cannot be deleted; styles must be inline."
    ],
    correct: 0,
    explanation: "React assumes different element types produce different subtrees, and stable keys identify child elements across renders."
  },
  {
    id: "react-q45",
    topic: "Server-Side Rendering",
    difficulty: "Advanced",
    type: "multiple-choice",
    question: "What function renders a React app to an HTML string on the server side?",
    options: ["ReactDOM.renderToString()", "React.toHTML()", "server.render()", "Vite.ssr()"],
    correct: 0,
    explanation: "ReactDOMServer.renderToString() renders component trees into HTML strings for SSR."
  },
  {
    id: "react-q46",
    topic: "Testing",
    difficulty: "Advanced",
    type: "multiple-choice",
    question: "What philosophy does React Testing Library promote?",
    options: [
      "Test component implementation details and private methods.",
      "Test components from the user's perspective, focusing on behavior rather than internal implementation.",
      "Only test snapshot strings.",
      "Mock every JavaScript function."
    ],
    correct: 1,
    explanation: "Testing Library encourages testing user-facing behavior over internal component state."
  },
  {
    id: "react-q47",
    topic: "State Architecture",
    difficulty: "Advanced",
    type: "multiple-choice",
    question: "What is the best practice for derived state in React?",
    options: [
      "Store derived state in useState and sync it with useEffect.",
      "Calculate derived values during rendering rather than duplicating them in state.",
      "Store everything in global Redux.",
      "Avoid derived values entirely."
    ],
    correct: 1,
    explanation: "Calculating derived values on the fly during render avoids state synchronization bugs."
  },
  {
    id: "react-q48",
    topic: "Composition vs Inheritance",
    difficulty: "Advanced",
    type: "multiple-choice",
    question: "Does React recommend inheritance or composition for code reuse between components?",
    options: [
      "Class inheritance",
      "Composition (using props and children)",
      "Prototype cloning",
      "Mixin injection"
    ],
    correct: 1,
    explanation: "React has a powerful composition model; component reuse is achieved via composition rather than inheritance."
  },
  {
    id: "react-q49",
    topic: "Prop Drilling",
    difficulty: "Advanced",
    type: "multiple-choice",
    question: "Besides Context API, what is another pattern to avoid deep prop drilling in React?",
    options: [
      "Global window variables",
      "Component composition (passing rendered element trees down as props/children)",
      "Eval injection",
      "Monkey patching"
    ],
    correct: 1,
    explanation: "Lifting components or passing component subtrees as props ('slot' pattern) avoids prop drilling."
  },
  {
    id: "react-q50",
    topic: "React Ecosystem",
    difficulty: "Advanced",
    type: "multiple-choice",
    question: "What is the primary role of state management libraries like Zustand or Redux Toolkit in modern React?",
    options: [
      "Replacing HTML entirely.",
      "Managing complex global or cross-component application state outside standard React component trees.",
      "Compiling JSX.",
      "Running CSS animations."
    ],
    correct: 1,
    explanation: "Global state libraries manage complex state stores accessible across disparate components."
  }
];
