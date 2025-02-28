# React Projects

## Technologies and Frameworks

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS v4**: A utility-first CSS framework for rapidly building custom user interfaces.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **JSON**: A lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate.

## Installation and Usage

```sh
# Clone this repository
git clone https://github.com/jsaurabh1906/React-Short-Projects
cd React-Short-Projects

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Projects Overview

### 1. Image Slider

**Location:** `src/Projects/ImageSlider/ImageSlider.jsx`

An interactive image slider that allows users to navigate through images smoothly. The slider includes:

- Next and Previous buttons for navigation.
- Preloaded images to prevent loading delays.
- Navigation dots for direct slide selection.
- Used https://picsum.photos/ api to fetch and display images in slider

### 2. Random Color Generator

**Location:** `src/Projects/RandomColorGenerator/RandomColorGenerator.jsx`

A simple yet engaging application that generates random colors at the click of a button. Features include:

- Dynamically changing background color.
- Generate Random Hex Code and RGB Code
- Smooth animations for better UI experience.

### 3. Star Rating Component

**Location:** `src/Projects/StarRating.jsx`

A customizable star rating component that allows users to rate items using stars. Features include:

- Hover and click-based rating selection.
- Interactive UI with smooth transitions.
- Support for different rating scales.

### 4. QR Code Generator

**Location:** `src/Projects/QRCodeGenerator/QRCodeGenerator.jsx`

A QR code generator that allows users to create QR codes from text input. Features include:

- Dynamic QR code generation based on user input.
- Responsive UI with tailwind css.
- Used `qrcode.react` library for QR code generation.

### 5. Text Analyzer

**Location:** `src/Projects/TextAnalyzer/TextAnalyzer.jsx`

A text analyzer that provides insights into the content of a given text. Features include:

- Word count.
- Character count.
- Sentence count.
- Special Character count.

### 6. BMI Calculator

**Location:** `src/Projects/BMI_Calculator/BmiCalculator.jsx`

A BMI (Body Mass Index) calculator that helps users determine their body mass index based on their height and weight. Features include:

- Input fields for height and weight.
- Calculation of BMI.
- Responsive UI with tailwind css.

### 7. Scroll Progress Bar

**Location:** `src/Projects/CustomScroll/CustomScroll.jsx`

A custom scroll progress bar that visually represents the user's scroll progress. Features include:

- Real-time scroll tracking using `useState` and `useEffect`.
- Smooth animation with Tailwind CSS.
- Fixed positioning at the top of the page for consistent visibility.

### 8. Load More Data

**Location:** `src/Projects/LoadMoreData/LoadMoreData.jsx`

A data loading component that allows users to load more data dynamically. Features include:

- Implemented infinite scrolling behavior by fetching data in batches.
- Optimized API fetching using a custom useFetch hook.
- Designed UI using Tailwind CSS for a clean and responsive layout. Used the built in card from UI-Verse and modified it in in product Card.
- Disabled "Load More" button when the total products reach 100. Enhanced user experience with loading indicators on button while loading data in batches.

### 9. Dice Game

**Location:** `src/Projects/DiceGame/DiceGame.jsx`

A fun and interactive Dice Game built using React, featuring modular components and smooth UI interactions.

#### Key Components Created

- GameModal → Manages the main game logic and UI
- InfoModal → Displays game rules in a pop-up modal
- GameHeader → Contains title, info button, and close button
- NumberSelector → Handles number selection (1-6)
- DiceRoller → Displays and rolls the dice

#### Features:

- Separation of Concerns and Modularized React Components
- Score update with each dice roll
- Showing error if not selected number and stopping dice to roll
- Responsive UI using tailwind css

#### How to Play the Dice Game?

1️⃣ Select a number (1-6) from the options
2️⃣ Click the dice to roll it
3️⃣ If the rolled number matches your selection → Score increases by that number
4️⃣ If it doesn't match → Score decreases by 2
5️⃣ Keep playing & aim for a high score! 🎲✨

### 10. Toggle Light and Dark Mode

**Location:** `src/Projects/LightDarkMode/LightDarkMode.jsx`

Created a toggle light and dark mode component using React, featuring a custom hook and smooth UI interactions.

Key Components Created

- ToggleButton → Handles the toggle button logic and UI
- ThemeContext → Manages the theme state and provides context to child components

Features:

- Custom hook to manage theme state
- Smooth transition between light and dark modes
- Responsive UI using tailwind css and css modules

### 11. Basic Calculator

**Location:** `src/Projects/BasicCalculator/BasicCalculator.jsx`

A basic calculator built using React with tailwind css. Features include:

- Input fields for numbers.
- Basic arithmetic operations (addition, subtraction, multiplication, division).
- Advanced operations (square root, squares, percentage, Reciprocal).
- Clear button to reset the calculator.
- Responsive UI with tailwind css.

### 12. Notes App

**Location:** `src/Projects/NotesApp/NotesApp.jsx`

A notes app built using React with tailwind css. Features include:

- Input field for note title and content.
- Save button to save the note.
- Display of saved notes with title and content.
- Edit button to edit the note.
- Delete button to delete the note.
- Responsive UI with tailwind css.

### 13. Notes App with Redux Toolkit and Appwrite as backend Database

**Location:** `src/Projects/NotesAppWithRTK/`

A notes app built using React with tailwind css and Redux Toolkit. All the base features of Notes App are implemented along with Redux Toolkit for state management and Appwrite as backend database for storing notes.

### 14. Weather App

**Location:** `src/Projects/WeatherApp/WeatherApp.jsx`

A weather app built using React with tailwind css. Features include:

- Input Search field for city name.
- Display of weather data including temperature, humidity, wind speed, and weather icon and much more.
- Responsive UI with tailwind css.
- Weather data is fetched from OpenWeatherMap API.
- Error handling.
- Forecast data is displayed for 5 days.

### 16. Age Calculator

**Location:** `src/Projects/AgeCalculator/AgeCalculator.jsx`

A simple age calculator built using React with tailwind css. Features include:

- Input fields for date of birth.
- Display of age in years, months, and days.
- Responsive UI with tailwind css.
- Error handling for invalid date input.
- Age is calculated based on the current date.
