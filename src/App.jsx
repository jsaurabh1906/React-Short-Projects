import { ToastContainer } from "react-toastify";
import "./App.css";
import BasicCalculator from "./Projects/BasicCalculator/BasicCalculator";
import BmiCalculator from "./Projects/BMI_Calculator/BmiCalculator";
import CustomScroll from "./Projects/CustomScroll/CustomScroll";
import DiceGame from "./Projects/DiceGame/DiceGame";
import ImageSlider from "./Projects/ImageSlider/ImageSlider";
import LightDarkMode from "./Projects/LightDarkMode/LightDarkMode";
import { ThemeProvider } from "./Projects/LightDarkMode/ThemeContext";
import LoadMoreData from "./Projects/LoadMoreData/LoadMoreData";
import NotesApp from "./Projects/NotesApp/NotesApp";
import NotesWithRTKApp from "./Projects/NotesAppWithRTK/NotesWithRTKApp";
import QRCodeGenerator from "./Projects/QRCodeGenerator/QRCodeGenerator";
import RandomColorGenerator from "./Projects/RandomColorGenerator/RandomColorGenerator";
import StarRating from "./Projects/StarRating/StarRating";
import TextAnalyzer from "./Projects/TextAnalyzer/TextAnalyzer";
import WeatherApp from "./Projects/WeatherApp/WeatherApp";
import AgeCalculator from "./Projects/AgeCalculator/AgeCalculator";
import DictionaryApp from "./Projects/DictionaryApp/DictionaryApp";
import Dashboard from "./components/Dashboard";
import Layout from "./Routes/Layout";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/router";
function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router}>
        <ToastContainer />
      </RouterProvider>
    </ThemeProvider>
  );
}

export default App;
