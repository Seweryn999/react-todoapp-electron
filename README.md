# Task Manager App

A simple yet powerful React-based task management application that allows users to create tasks, track their progress with timers, and summarize completed tasks with total time spent. The app features a clean, modern UI with smooth animations and a dark theme.

## Features
- **Add Tasks**: Easily add new tasks via an input field.
- **Track Time**: Start and stop timers for individual tasks.
- **Complete Tasks**: Move tasks to the "Done" section with their completion time.
- **Summarize Time**: Calculate the total time spent on completed tasks.
- **Responsive Design**: Optimized for various screen sizes with a fluid layout.
- **Interactive UI**: Hover effects, transitions, and a polished dark theme.

## Demo
Check out the demo version of the app here: [React Todo App Demo](https://seweryn999.github.io/react-todoapp-electron/)

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/task-manager-app.git
   cd task-manager-app
   ```

2. **Install Dependencies**:
   Using npm:
   ```bash
   npm install
   ```
   Or using Yarn:
   ```bash
   yarn install
   ```

3. **Run the App**:
   ```bash
   npm start / npm run electron:serve for desktop version.
   ```
   Or with Yarn:
   ```bash
   yarn start
   ```
   The app will launch in your default browser at `http://localhost:3000`.

## Usage
1. **Add a Task**:
   - Type a task description in the input field and click "Add Task".
2. **Start a Task**:
   - Click the "Start" button next to a task to begin timing.
3. **Complete a Task**:
   - Click "Done" to finish a task and move it to the "Done" section with its duration.
4. **View Timers**:
   - Active task timers are displayed in the "Time for Task" section.
5. **Sum Up Completed Tasks**:
   - Click "Sum Up" in the "Done" section to see the total time spent on all completed tasks.

## File Structure
```
task-manager-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── CompletedTasks.js   # Displays completed tasks with time summation
│   │   ├── TaskInput.js       # Input field for adding new tasks
│   │   ├── TaskList.js        # Displays active tasks with start/done buttons
│   │   └── Timer.js          # Shows real-time timers for active tasks
│   ├── styles/
│   │   ├── App.css           # Global styles and layout
│   │   ├── CompletedTasks.css # Styles for completed tasks section
│   │   ├── TaskInput.css     # Styles for task input
│   │   ├── TaskList.css      # Styles for task list
│   │   └── Timer.css         # Styles for timer display
│   ├── App.js                # Main app component
│   └── index.js             # Entry point
├── package.json             # Project metadata and dependencies
└── README.md                # This file
```

## Technologies Used
- **React**: Frontend library for building the UI.
- **JavaScript (ES6+)**: Core logic and state management.
- **CSS**: Custom styles with variables, transitions, and shadows for a modern look.

## Styling Highlights
- Dark theme with CSS variables for easy customization.
- Smooth transitions and hover effects for better UX.
- Responsive design with flexbox and percentage-based widths.
- Subtle shadows and rounded corners for a polished appearance.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m "Add your message"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Built with inspiration from classic to-do list apps.
- Thanks to the React community for amazing tools and resources.

## Contact
For questions or feedback, feel free to reach out:
- GitHub: [your-username](https://github.com/your-username)
- Email: your-email@example.com
```

### Instructions for Customization:
1. **Replace Placeholders**:
   - Change `https://github.com/your-username/task-manager-app.git` to your actual repository URL.
   - Update `your-username` and `your-email@example.com` with your GitHub username and email.
   - Add a demo link if you deploy the app (e.g., via Vercel or Netlify).

2. **Add a License File**:
   - If you want to include an MIT License, create a `LICENSE` file in the root directory with the standard MIT text.

3. **Screenshots or GIFs** (Optional):
   - Add a section like `## Screenshots` and include images or GIFs of the app in action by uploading them to the repo and linking them (e.g., `![Screenshot](screenshots/app.png)`).

This README is professional, concise, and provides all the necessary information for someone to understand, install, and contribute to your project. Paste it into your repository’s `README.md` file, and you’re good to go!
