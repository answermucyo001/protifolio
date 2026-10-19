export const reactCourse = {
  id: "react",
  title: "React.js Frontend Development",
  description: "Learn React from components and JSX to state management, hooks, Context API, and building full single-page web applications.",
  icon: "⚛",
  color: "#61dafb",
  lessons: [
    {
      id: "react-1",
      title: "1. Introduction to React.js",
      duration: "15 min read",
      introduction: "React is a popular declarative, efficient, and flexible JavaScript library for building user interfaces developed by Meta.",
      objectives: [
        "Understand what React is and why it's used",
        "Learn the concept of a component-based architecture",
        "Understand the Virtual DOM"
      ],
      notes: `React allows you to compose complex UIs from small and isolated pieces called "components".

### Key Concepts:
- **Declarative**: React makes UI predictable and easier to debug by describing what the UI should look like for any given state.
- **Component-Based**: Encapsulated components manage their own state and render UI.
- **Virtual DOM**: React keeps a lightweight representation of the real DOM in memory and efficiently updates only what changes.`,
      syntax: `// A simple React component
function Welcome() {
  return <h1>Hello, React!</h1>;
}`,
      examples: [
        {
          title: "React Functional Component",
          code: `function Greeting({ name }) {
  return <p>Welcome back, {name}!</p>;
}`,
          output: "Component renders dynamic greeting based on props."
        }
      ],
      commonMistakes: [
        "Thinking React is a full framework (it's a library focused on the view layer).",
        "Trying to modify the DOM directly instead of updating component state."
      ],
      exercise: {
        prompt: "Write a React functional component named \`Header\` that returns \`<h1>My Portfolio</h1>\`.",
        starterCode: "// Write component here\n",
        solution: "function Header() {\n  return <h1>My Portfolio</h1>;\n}"
      },
      quiz: [
        {
          question: "Who developed and maintains React.js?",
          options: ["Google", "Meta (Facebook)", "Microsoft", "Apple"],
          correct: 1,
          explanation: "React was created and is maintained by Meta (formerly Facebook)."
        }
      ]
    },
    {
      id: "react-2",
      title: "2. Setting Up React with Vite",
      duration: "20 min read",
      introduction: "Vite is a modern, ultra-fast frontend build tool that provides lightning-fast hot module replacement (HMR) for React applications.",
      objectives: [
        "Create a new React project using Vite",
        "Understand project folder structure (`src`, `public`, `package.json`)",
        "Run the development server"
      ],
      notes: `Vite replaces older tools like Create React App with lightning-fast native ESM-based builds.

### Commands:
- \`npm create vite@latest my-app -- --template react\`
- \`npm install\`
- \`npm run dev\``,
      syntax: `# Terminal setup
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev`,
      examples: [
        {
          title: "Vite Dev Server Output",
          code: `  VITE v5.4.0  ready in 320 ms\n\n  ➜  Local:   http://localhost:5173/`,
          output: "Server running at localhost:5173"
        }
      ],
      commonMistakes: [
        "Forgetting to run \`npm install\` after cloning or creating a project.",
        "Running build commands in the wrong directory."
      ],
      exercise: {
        prompt: "Write the npm command to start the Vite development server.",
        starterCode: "// Type command\n",
        solution: "npm run dev"
      },
      quiz: [
        {
          question: "What is the primary advantage of Vite over older bundlers like Webpack in development?",
          options: [
            "It requires zero JavaScript.",
            "It uses native ES modules for lightning-fast HMR and startup.",
            "It only works with Vue.",
            "It runs on the cloud."
          ],
          correct: 1,
          explanation: "Vite leverages native ES modules in the browser to serve source modules instantly without bundling during dev."
        }
      ]
    },
    {
      id: "react-3",
      title: "3. Components and JSX",
      duration: "25 min read",
      introduction: "JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.",
      objectives: [
        "Write JSX elements and attributes",
        "Understand that JSX compiles to \`React.createElement\`",
        "Return single root elements from components"
      ],
      notes: `JSX combines the power of JavaScript with the readability of HTML.

- JSX tags must be properly closed.
- Components must return a single root element (or a React fragment \`<></>\`).`,
      syntax: `const element = <div className="card"><h2>Title</h2></div>;`,
      examples: [
        {
          title: "Fragment Usage",
          code: `function App() {
  return (
    <>
      <h1>Title</h1>
      <p>Description</p>
    </>
  );
}`,
          output: "Renders sibling elements using a React Fragment."
        }
      ],
      commonMistakes: [
        "Returning multiple adjacent root elements without wrapping them in a fragment or div.",
        "Using \`class\` instead of \`className\` in JSX attributes."
      ],
      exercise: {
        prompt: "Write a React component \`Card\` that returns a div containing an \`h2\` with text \`'Hello'\`.",
        starterCode: "// Write Card component\n",
        solution: "function Card() {\n  return (\n    <div>\n      <h2>Hello</h2>\n    </div>\n  );\n}"
      },
      quiz: [
        {
          question: "What attribute is used in JSX instead of the HTML \`class\` attribute?",
          options: ["class", "className", "class-name", "cssClass"],
          correct: 1,
          explanation: "className is used in JSX because class is a reserved keyword in JavaScript."
        }
      ]
    },
    {
      id: "react-4",
      title: "4. Props: Passing Data to Components",
      duration: "25 min read",
      introduction: "Props (short for properties) allow you to pass data from a parent component down to child components.",
      objectives: [
        "Pass props into child components",
        "Destructure props in component parameters",
        "Validate or set default prop values"
      ],
      notes: `Props make components reusable and dynamic. Data flows downward in React (one-way data flow).`,
      syntax: `function UserCard({ name, role }) {
  return <div>{name} - {role}</div>;
}
// Usage: <UserCard name="Mucyo" role="Developer" />`,
      examples: [
        {
          title: "Passing Props",
          code: `function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}`,
          output: "Renders a button with dynamic label."
        }
      ],
      commonMistakes: [
        "Attempting to modify props inside a child component (props are read-only / immutable).",
        "Forgetting curly braces when passing non-string prop values like numbers or objects."
      ],
      exercise: {
        prompt: "Write a component \`Greeting\` that accepts prop \`username\` and displays \`Hello, {username}\`.",
        starterCode: "function Greeting({ username }) {\n  // Return JSX\n}",
        solution: "function Greeting({ username }) {\n  return <h1>Hello, {username}</h1>;\n}"
      },
      quiz: [
        {
          question: "Are props mutable (changeable) inside the component that receives them?",
          options: ["Yes", "No, props are read-only"],
          correct: 1,
          explanation: "Props are strictly read-only from the perspective of the receiving component."
        }
      ]
    },
    {
      id: "react-5",
      title: "5. State and useState Hook",
      duration: "30 min read",
      introduction: "State allows React components to change their output over time in response to user actions, network responses, and other events.",
      objectives: [
        "Import and use the \`useState\` hook",
        "Initialize state variables and update functions",
        "Understand how state updates trigger re-renders"
      ],
      notes: `Unlike props which are passed from outside, state is managed from within the component.`,
      syntax: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`,
      examples: [
        {
          title: "Counter State Example",
          code: `const [count, setCount] = useState(0);
// Incrementing state
setCount(prev => prev + 1);`,
          output: "Updates count state and re-renders component."
        }
      ],
      commonMistakes: [
        "Directly mutating state (\`count = 5\`) instead of using the state setter function (\`setCount(5)\`).",
        "Expecting state updates to happen synchronously immediately after calling the setter."
      ],
      exercise: {
        prompt: "Initialize a state variable \`isLiked\` to \`false\` using \`useState\`.",
        starterCode: "import { useState } from 'react';\n\nfunction LikeButton() {\n  // Add useState here\n}",
        solution: "import { useState } from 'react';\n\nfunction LikeButton() {\n  const [isLiked, setIsLiked] = useState(false);\n}"
      },
      quiz: [
        {
          question: "What does the \`useState\` hook return?",
          options: [
            "A single value representing the state.",
            "An array containing the current state value and a setter function.",
            "An object with state properties.",
            "A boolean flag."
          ],
          correct: 1,
          explanation: "useState returns a pair: the current state and a function to update it."
        }
      ]
    },
    {
      id: "react-6",
      title: "6. Event Handling in React",
      duration: "25 min read",
      introduction: "Handling events with React elements is very similar to handling events on DOM elements, using camelCase naming conventions.",
      objectives: [
        "Pass event handler functions to JSX elements (\`onClick\`, \`onChange\`, \`onSubmit\`)",
        "Prevent default form submission behavior",
        "Capture input values from event objects"
      ],
      notes: `React events are named using camelCase (e.g. \`onClick\`, \`onSubmit\`, \`onMouseEnter\`) rather than lowercase.`,
      syntax: `function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };
  return <form onSubmit={handleSubmit}><button>Submit</button></form>;
}`,
      examples: [
        {
          title: "Click Handler",
          code: `const handleClick = () => alert("Clicked!");\nreturn <button onClick={handleClick}>Click Me</button>;`,
          output: "Triggers alert when clicked."
        }
      ],
      commonMistakes: [
        "Calling the function immediately during render: \`onClick={handleClick()}\` instead of \`onClick={handleClick}\`.",
        "Forgetting \`e.preventDefault()\` on form submission."
      ],
      exercise: {
        prompt: "Write an \`onClick\` handler on a button that calls a function \`handleClick\`.",
        starterCode: "function App() {\n  const handleClick = () => console.log('Clicked');\n  return <button /* add onClick */>Click</button>;\n}",
        solution: "function App() {\n  const handleClick = () => console.log('Clicked');\n  return <button onClick={handleClick}>Click</button>;\n}"
      },
      quiz: [
        {
          question: "How do you write an onClick event attribute in JSX?",
          options: ["onclick={fn}", "onClick={fn}", "on-click={fn}", "CLICK={fn}"],
          correct: 1,
          explanation: "React events use camelCase, so it is written as onClick."
        }
      ]
    },
    {
      id: "react-7",
      title: "7. Conditional Rendering",
      duration: "25 min read",
      introduction: "In React, you can create distinct components that encapsulate behavior you need, and then render only some of them depending on application state.",
      objectives: [
        "Use JavaScript \`if\` statements and element variables",
        "Use logical \`&&\` operator for short-circuit rendering",
        "Use ternary operator \`?:\` for inline conditions"
      ],
      notes: `Conditional rendering in React works the same way conditions work in JavaScript.`,
      syntax: `function Greeting({ isLoggedIn }) {
  return <div>{isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}</div>;
}`,
      examples: [
        {
          title: "Logical AND Rendering",
          code: `const [unreadMessages, setUnreadMessages] = useState(3);\nreturn <div>{unreadMessages > 0 && <p>You have unread messages.</p>}</div>;`,
          output: "Renders message paragraph only when unreadMessages > 0."
        }
      ],
      commonMistakes: [
        "Using \`&&\` with a number like \`0 && <p>Count</p>\` which incorrectly renders \`0\` on screen.",
        "Nesting ternary operators too deeply, making code hard to read."
      ],
      exercise: {
        prompt: "Render a paragraph \`<p>Admin Panel</p>\` conditionally only if \`isAdmin\` is true using the \`&&\` operator.",
        starterCode: "function Dashboard({ isAdmin }) {\n  return <div>{/* Add condition */}</div>;\n}",
        solution: "function Dashboard({ isAdmin }) {\n  return <div>{isAdmin && <p>Admin Panel</p>}</div>;\n}"
      },
      quiz: [
        {
          question: "What does \`isLoggedIn && <Dashboard />\` render if \`isLoggedIn\` is false?",
          options: ["false", "null / nothing", "Error", "Undefined"],
          correct: 1,
          explanation: "In React, boolean false and null are ignored and render nothing in JSX."
        }
      ]
    },
    {
      id: "react-8",
      title: "8. Rendering Lists and Keys",
      duration: "30 min read",
      introduction: "To render lists of data in React, you typically use array methods like \`map()\` to transform an array of data into an array of JSX elements.",
      objectives: [
        "Use \`Array.prototype.map()\` to render lists",
        "Understand why unique \`key\` props are required for list items",
        "Choose stable unique keys (like item IDs)"
      ],
      notes: `Keys help React identify which items have changed, been added, or been removed.`,
      syntax: `const items = ['Apple', 'Banana', 'Cherry'];
return (
  <ul>
    {items.map((item, index) => <li key={index}>{item}</li>)}
  </ul>
);`,
      examples: [
        {
          title: "Mapping Projects List",
          code: `const projects = [{ id: 1, title: "Portfolio" }, { id: 2, title: "E-Learning" }];
return projects.map(p => <div key={p.id}><h3>{p.title}</h3></div>);`,
          output: "Renders each project with a unique key."
        }
      ],
      commonMistakes: [
        "Using array indices as keys when list items can reorder, filter, or delete (causes state bugs).",
        "Forgetting to include the \`key\` prop entirely."
      ],
      exercise: {
        prompt: "Map over \`const list = ['A', 'B'];\` to render \`<li>\` elements with a key.",
        starterCode: "const list = ['A', 'B'];\nfunction List() {\n  return <ul>{list.map((item, i) => <li key={i}>{item}</li>)}</ul>;\n}",
        solution: "const list = ['A', 'B'];\nfunction List() {\n  return <ul>{list.map((item, i) => <li key={i}>{item}</li>)}</ul>;\n}"
      },
      quiz: [
        {
          question: "Why does React require a \`key\` prop when rendering lists?",
          options: [
            "To style items with CSS.",
            "To efficiently identify which items changed, were added, or removed.",
            "To sort items alphabetically.",
            "To count total items."
          ],
          correct: 1,
          explanation: "Keys give React a stable identity for DOM reconciliation and performance."
        }
      ]
    },
    {
      id: "react-9",
      title: "9. Forms and Controlled Inputs",
      duration: "30 min read",
      introduction: "In React, HTML form elements typically maintain their own state and update it based on user input. In controlled components, React state is the 'single source of truth'.",
      objectives: [
        "Create controlled input elements with \`value\` and \`onChange\`",
        "Handle form submission and input state",
        "Manage multiple form fields efficiently"
      ],
      notes: `Controlled components tie input values directly to React state.`,
      syntax: `const [name, setName] = useState("");
return <input value={name} onChange={e => setName(e.target.value)} />;`,
      examples: [
        {
          title: "Controlled Input",
          code: `const [email, setEmail] = useState("");\nreturn <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />;`,
          output: "Input value is synchronized with email state."
        }
      ],
      commonMistakes: [
        "Forgetting to provide an \`onChange\` handler for a controlled input (making it read-only).",
        "Not preventing default form submission on submit."
      ],
      exercise: {
        prompt: "Create a state variable \`query\` and bind it to an input's \`value\` and \`onChange\`.",
        starterCode: "const [query, setQuery] = useState('');\nreturn <input value={query} /* add onChange */ />;",
        solution: "const [query, setQuery] = useState('');\nreturn <input value={query} onChange={e => setQuery(e.target.value)} />;"
      },
      quiz: [
        {
          question: "What is a 'controlled component' in React forms?",
          options: [
            "An input whose value is controlled by React state.",
            "An input locked by the browser.",
            "An input that cannot be edited.",
            "An input controlled by CSS."
          ],
          correct: 0,
          explanation: "In controlled components, form data is handled by React state."
        }
      ]
    },
    {
      id: "react-10",
      title: "10. useEffect Hook",
      duration: "35 min read",
      introduction: "The \`useEffect\` hook lets you perform side effects in function components, such as data fetching, subscriptions, or manually changing the DOM.",
      objectives: [
        "Understand side effects in React",
        "Use dependency arrays correctly to control when effects run",
        "Cleanup side effects when components unmount"
      ],
      notes: `useEffect runs after every completed render by default, or conditionally based on dependencies.`,
      syntax: `useEffect(() => {
  console.log("Component mounted or dependency changed");
}, [dependency]);`,
      examples: [
        {
          title: "Data Fetching Effect",
          code: `useEffect(() => {\n  fetch('https://api.github.com/users/mucyoanswer001')\n    .then(res => res.json())\n    .then(data => console.log(data));\n}, []);`,
          output: "Fetches user data once when component mounts."
        }
      ],
      commonMistakes: [
        "Omitting the dependency array \`[]\`, causing an infinite re-render loop.",
        "Forgetting cleanup functions for event listeners or timers."
      ],
      exercise: {
        prompt: "Write a \`useEffect\` hook with an empty dependency array that logs \`'Mounted'\`.",
        starterCode: "useEffect(() => {\n  // Log here\n}, []);",
        solution: "useEffect(() => {\n  console.log('Mounted');\n}, []);"
      },
      quiz: [
        {
          question: "What does passing an empty array \`[]\` as the second argument to \`useEffect\` do?",
          options: [
            "Runs the effect on every render.",
            "Runs the effect only once when the component mounts.",
            "Never runs the effect.",
            "Throws an error."
          ],
          correct: 1,
          explanation: "An empty dependency array means the effect has no dependencies and runs only once upon mount."
        }
      ]
    },
    {
      id: "react-11",
      title: "11. React Custom Hooks",
      duration: "30 min read",
      introduction: "Custom Hooks let you extract component logic into reusable functions.",
      objectives: [
        "Identify when to create a custom hook",
        "Extract stateful logic into functions starting with \`use\`",
        "Share reusable logic across components"
      ],
      notes: `Custom hooks are normal JavaScript functions whose names start with \`use\` and that may call other hooks.`,
      syntax: `function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);
  // hook logic
  return [value, setValue];
}`,
      examples: [
        {
          title: "Custom Hook Example",
          code: `function useWindowSize() {\n  const [width, setWidth] = useState(window.innerWidth);\n  // ... listener setup\n  return width;\n}`,
          output: "Encapsulates window width tracking."
        }
      ],
      commonMistakes: [
        "Not starting custom hook function names with \`use\` (violating React's lint rules).",
        "Calling hooks conditionally inside custom hooks."
      ],
      exercise: {
        prompt: "Write a custom hook skeleton named \`useCounter\` that returns \`[count, increment]\`.",
        starterCode: "// Write custom hook\n",
        solution: "function useCounter() {\n  const [count, setCount] = useState(0);\n  const increment = () => setCount(c => c + 1);\n  return [count, increment];\n}"
      },
      quiz: [
        {
          question: "What naming convention must custom hooks follow in React?",
          options: ["Must start with 'hook'", "Must start with 'use'", "Must start with 'custom'", "Any name"],
          correct: 1,
          explanation: "React relies on the 'use' prefix to enforce hook rules and linting."
        }
      ]
    },
    {
      id: "react-12",
      title: "12. React Router and Navigation",
      duration: "35 min read",
      introduction: "React Router is the standard routing library for React, enabling navigation between different views without full page reloads.",
      objectives: [
        "Set up BrowserRouter, Routes, and Route",
        "Use Link and NavLink for navigation",
        "Read URL parameters using useParams"
      ],
      notes: `Single Page Applications (SPAs) use client-side routing for seamless navigation.`,
      syntax: `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';`,
      examples: [
        {
          title: "Router Setup",
          code: `<BrowserRouter>\n  <Routes>\n    <Route path="/" element={<Home />} />\n    <Route path="/about" element={<About />} />\n  </Routes>\n</BrowserRouter>`,
          output: "Enables client-side routing."
        }
      ],
      commonMistakes: [
        "Using standard HTML \`<a>\` tags for internal navigation instead of \`<Link>\` (causing page reloads).",
        "Forgetting to wrap route components in \`<BrowserRouter>\`."
      ],
      exercise: {
        prompt: "Write a React Router \`<Link>\` component pointing to \`'/dashboard'\` with text \`'Dashboard'\`.",
        starterCode: "// Write Link here\n",
        solution: "<Link to='/dashboard'>Dashboard</Link>"
      },
      quiz: [
        {
          question: "Why should you use \`<Link>\` from react-router-dom instead of a standard \`<a>\` tag in React apps?",
          options: [
            "Links are styled better by default.",
            "Links enable client-side navigation without full page reloads.",
            "Links are required by JSX.",
            "Links support HTTP POST."
          ],
          correct: 1,
          explanation: "Link prevents full browser reloads and updates the URL client-side."
        }
      ]
    },
    {
      id: "react-13",
      title: "13. Fetching Data from APIs in React",
      duration: "35 min read",
      introduction: "Fetching data in React involves combining \`useEffect\` for triggering the request and \`useState\` for storing the retrieved data and loading state.",
      objectives: [
        "Fetch data on component mount",
        "Manage loading and error states in UI",
        "Display data dynamically in components"
      ],
      notes: `Robust data fetching handles loading spinners and error messages gracefully.`,
      syntax: `const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);`,
      examples: [
        {
          title: "API Data Fetching Pattern",
          code: `useEffect(() => {\n  fetch('https://api.github.com/users/github')\n    .then(res => res.json())\n    .then(data => { setData(data); setLoading(false); })\n    .catch(err => { setError(err); setLoading(false); });\n}, []);`,
          output: "Loads data and handles loading/error states."
        }
      ],
      commonMistakes: [
        "Not setting loading back to false when a fetch fails.",
        "Trying to access properties of \`null\` data before the fetch resolves."
      ],
      exercise: {
        prompt: "Write conditional rendering for \`loading\` state: if \`loading\` is true, return \`<p>Loading...</p>\`.",
        starterCode: "if (loading) return // Return loading markup;",
        solution: "if (loading) return <p>Loading...</p>;"
      },
      quiz: [
        {
          question: "What three states are commonly managed when fetching remote API data in React?",
          options: ["Data, Loading, Error", "State, Props, Ref", "Get, Post, Put", "Start, Middle, End"],
          correct: 0,
          explanation: "Managing data, loading status, and error state ensures robust user feedback."
        }
      ]
    },
    {
      id: "react-14",
      title: "14. Context API and State Management",
      duration: "35 min read",
      introduction: "Context provides a way to pass data through the component tree without having to pass props down manually at every level (prop drilling).",
      objectives: [
        "Create context using \`React.createContext()\`",
        "Provide context using \`Context.Provider\`",
        "Consume context using the \`useContext\` hook"
      ],
      notes: `Context is designed to share data that can be considered 'global' for a tree of React components (such as current authenticated user or theme).`,
      syntax: `const ThemeContext = createContext('dark');
const theme = useContext(ThemeContext);`,
      examples: [
        {
          title: "Context Provider",
          code: `const AuthContext = createContext();\nfunction AuthProvider({ children }) {\n  const [user, setUser] = useState(null);\n  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;\n}`,
          output: "Shares auth state globally across nested components."
        }
      ],
      commonMistakes: [
        "Overusing Context for every local state (use local state when data is only needed by one component).",
        "Forgetting to wrap parent components in the Context Provider."
      ],
      exercise: {
        prompt: "Create a context named \`UserContext\` using \`createContext()\`;",
        starterCode: "import { createContext } from 'react';\n// Create context",
        solution: "import { createContext } from 'react';\nconst UserContext = createContext();"
      },
      quiz: [
        {
          question: "What problem does the React Context API solve?",
          options: ["Slow rendering", "Prop drilling", "CSS styling conflicts", "Memory leaks"],
          correct: 1,
          explanation: "Context eliminates prop drilling by allowing data to be accessed anywhere in the tree."
        }
      ]
    },
    {
      id: "react-15",
      title: "15. Reusable Components & Best Practices",
      duration: "30 min read",
      introduction: "Building modular, reusable components is the hallmark of professional React development.",
      objectives: [
        "Design flexible, reusable component APIs",
        "Compose components using children props",
        "Follow clean project structure and naming conventions"
      ],
      notes: `Good component design leads to maintainable codebases.

- Use the \`children\` prop to pass arbitrary markup into wrapper components like Cards or Modals.`,
      syntax: `function Card({ children }) {\n  return <div className="card">{children}</div>;\n}`,
      examples: [
        {
          title: "Composition with children",
          code: `<Card>\n  <h2>Title</h2>\n  <p>Content goes here</p>\n</Card>`,
          output: "Wraps child elements inside a reusable card container."
        }
      ],
      commonMistakes: [
        "Creating massive monolithic components instead of splitting them into smaller focused components.",
        "Hardcoding data instead of accepting props."
      ],
      exercise: {
        prompt: "Write a component \`Container\` that accepts \`children\` prop and renders it inside a \`<div className=\"container\">\`.",
        starterCode: "function Container({ children }) {\n  // Return div\n}",
        solution: "function Container({ children }) {\n  return <div className=\"container\">{children}</div>;\n}"
      },
      quiz: [
        {
          question: "What prop is used to pass child elements into a wrapper component in React?",
          options: ["content", "children", "elements", "inner"],
          correct: 1,
          explanation: "The children prop automatically passes whatever is nested inside the component tags."
        }
      ]
    },
    {
      id: "react-16",
      title: "16. Building a Complete React Mini-Project",
      duration: "45 min read",
      introduction: "Put your skills into practice by building a fully functional React application featuring components, state, effects, and local storage persistence.",
      objectives: [
        "Plan state and component hierarchy for a Todo or Notes app",
        "Implement CRUD operations (Create, Read, Update, Delete)",
        "Persist state to localStorage"
      ],
      notes: `Building real projects is the best way to solidify your React expertise. Combine components, state management, and user events into a cohesive application.`,
      syntax: `// Final Project Milestone
// Build a responsive React Todo / Notes App with local storage persistence.`,
      examples: [
        {
          title: "Project Milestone",
          code: `console.log("Building real React apps empowers your developer portfolio!");`,
          output: "Building real React apps empowers your developer portfolio!"
        }
      ],
      commonMistakes: [
        "Starting coding without planning component state and data flow.",
        "Forgetting to test error states and mobile responsiveness."
      ],
      exercise: {
        prompt: "Write a console log celebrating completing the React course: 'React Mastered!'.",
        starterCode: "// Celebrate\n",
        solution: "console.log('React Mastered!');"
      },
      quiz: [
        {
          question: "What is the best way to master React development?",
          options: [
            "Reading syntax manuals without coding.",
            "Building real projects and interactive applications.",
            "Only watching videos.",
            "Memorizing API docs."
          ],
          correct: 1,
          explanation: "Building real projects provides practical experience solving actual engineering challenges."
        }
      ]
    }
  ]
};
