🎨 React UI & Body Color Changer
This is a simple React project that allows users to dynamically change the background color of a UI container and the body using child components.

🚀 Features
Change the UI box color using a color picker.

Change the body background color.

React state lifting: color is passed from child to parent.

Uses styled-components for styling.

Responsive layout using inline styles and styled components.

🧱 Tech Stack
React (Vite)

Styled Components

📁 Project Structure
css
Copy
Edit
src/
│
├── components/
│   ├── Inputfile.jsx          # Handles UI box color input
│   └── Bodycolurchange.jsx    # Handles body color input
│
├── App.jsx                    # Main component (manages state)
├── App.css                    # Optional additional styling
├── main.jsx                   # Entry point
📸 Preview


🛠️ Installation
bash
Copy
Edit
npm install
npm run dev
🧠 Logic Summary
Inputfile and Bodycolurchange are child components.

Color values are lifted to the App component via callback functions (getcolor, getbodycolor).

UI container (Container) gets its color from uicolor.

The actual body background color is changed using useEffect to modify document.body.style.

📜 Notes
If you're using Vite, the project is already optimized for fast builds and development.

You can enhance this by using color pickers or allowing users to input hex values.