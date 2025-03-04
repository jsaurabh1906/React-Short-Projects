import {
  Calculator,
  BarChart,
  Dice5,
  Image,
  Cloud,
  Notebook,
  Book,
  Star,
  FileText,
  QrCode,
  PaintBucket,
  Calendar,
  ScrollText,
  List,
  SunMoon,
  NotebookIcon as Notes,
  User,
  Palette,
  Scissors,
} from "lucide-react";

import BasicCalculator from "./Projects/BasicCalculator/BasicCalculator";
import BmiCalculator from "./Projects/BMI_Calculator/BmiCalculator";
import CustomScroll from "./Projects/CustomScroll/CustomScroll";
import DiceGame from "./Projects/DiceGame/DiceGame";
import ImageSlider from "./Projects/ImageSlider/ImageSlider";
import LightDarkMode from "./Projects/LightDarkMode/LightDarkMode";
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
import RandomUserGenerator from "./Projects/RandomUserProfileGenerator/RandomUserGenerator";
import ColorPicker from "./Projects/ColorPicker/ColorPicker";
import RockPaperScissor from "./Projects/RockPaperScissorGame/RockPaperScissor";
import RPSGameApp from "./Projects/RockPaperScissorGame/RPSGameApp";

const projects = [
  {
    name: "Basic Calculator",
    path: "/basic-calculator",
    component: BasicCalculator,
    icon: <Calculator size={20} />,
  },
  {
    name: "BMI Calculator",
    path: "/bmi-calculator",
    component: BmiCalculator,
    icon: <BarChart size={20} />,
  },
  {
    name: "Dice Game",
    path: "/dice-game",
    component: DiceGame,
    icon: <Dice5 size={20} />,
  },
  {
    name: "Image Slider",
    path: "/image-slider",
    component: ImageSlider,
    icon: <Image size={20} />,
  },
  {
    name: "Weather App",
    path: "/weather-app",
    component: WeatherApp,
    icon: <Cloud size={20} />,
  },
  {
    name: "Notes App",
    path: "/notes-app",
    component: NotesApp,
    icon: <Notebook size={20} />,
  },
  {
    name: "Dictionary App",
    path: "/dictionary-app",
    component: DictionaryApp,
    icon: <Book size={20} />,
  },
  {
    name: "Star Rating",
    path: "/star-rating",
    component: StarRating,
    icon: <Star size={20} />,
  },
  {
    name: "Text Analyzer",
    path: "/text-analyzer",
    component: TextAnalyzer,
    icon: <FileText size={20} />,
  },
  {
    name: "QR Code Generator",
    path: "/qr-code-generator",
    component: QRCodeGenerator,
    icon: <QrCode size={20} />,
  },
  {
    name: "Random Color Generator",
    path: "/random-color-generator",
    component: RandomColorGenerator,
    icon: <PaintBucket size={20} />,
  },
  {
    name: "Age Calculator",
    path: "/age-calculator",
    component: AgeCalculator,
    icon: <Calendar size={20} />,
  },
  {
    name: "Custom Scroll",
    path: "/custom-scroll",
    component: CustomScroll,
    icon: <ScrollText size={20} />,
  },
  {
    name: "Load More Data",
    path: "/load-more-data",
    component: LoadMoreData,
    icon: <List size={20} />,
  },
  {
    name: "Random User Generator",
    path: "/random-user-generator",
    component: RandomUserGenerator,
    icon: <User size={20} />,
  },
  {
    name: "Light/Dark Mode",
    path: "/light-dark-mode",
    component: LightDarkMode,
    icon: <SunMoon size={20} />,
  },
  {
    name: "Notes App with RTK",
    path: "/notes-with-rtk",
    component: NotesWithRTKApp,
    icon: <Notes size={20} />,
  },
  {
    name: "Color Picker",
    path: "/color-picker",
    component: ColorPicker,
    icon: <Palette size={20} />,
  },
  {
    name: "Rock Paper Scissors",
    path: "/rock-paper-scissors",
    component: RPSGameApp,
    icon: <Scissors size={20} />,
  },
];

export default projects;
