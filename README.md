# To Do List ✦

A simple and aesthetic to-do list web app built with HTML, CSS and vanilla JavaScript. Tasks are saved in the browser, so they are still there after a page refresh.

**Live demo:** https://agalya141.github.io/To_Do_List/

<!-- Add a screenshot or GIF here:
![To Do List screenshot](screenshot.png)
-->

## Features

- Add tasks with an optional due date
- Press **Enter** or click **ADD** to add a task
- Mark tasks as completed with a checkbox (text gets a strike-through)
- Delete tasks
- Inline error message when the task name is empty (no `alert` popups)
- Tasks are saved with `localStorage`, so they stay after refresh
- Soft pastel design with hover effects and smooth transitions

## Built With

- **HTML5**: page structure
- **CSS3**: Flexbox, gradients, transitions, pseudo-elements (`::before`, `::after`)
- **JavaScript (ES6)**: DOM manipulation, template literals, arrays and objects
- **Google Fonts**: Playfair Display

## How It Works

Each task is stored as an object in an array:

```js
{ name: "Apply 5 jobs", dueDate: "2026-10-12", done: false }
```

- `renderTodolist()` loops through the array and builds the task rows
- `addTodo()` validates the input, adds the task and saves it
- `toggleDone(i)` flips the `done` value to mark a task complete or not
- `deleteTodo(i)` removes a task
- `saveToStorage()` saves the array to `localStorage` as JSON

## Run Locally

1. Clone the repository
   ```bash
   git clone https://github.com/agalya141/To_Do_List.git
   ```
2. Open the project folder
3. Open `index.html` in your browser

No installation or build step needed.

## Project Structure

```
To_Do_List/
├── index.html
├── style.css
├── script.js
└── README.md
```

## What I Learned

- Updating the page with JavaScript using `innerHTML` and template literals
- Storing and reading data with `localStorage` and `JSON`
- Using the ternary operator to show or hide parts of the UI
- Styling with Flexbox, transitions and pseudo-elements
- Debugging with the browser console and Inspect tool
- Deploying a project with GitHub Pages

## Future Improvements

- Edit an existing task
- Filter tasks (All / Active / Completed)
- Sort tasks by due date
- Dark mode toggle

## Author

Built by [agalya141](https://github.com/agalya141)
