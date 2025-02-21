import "./App.css";
import BmiCalculator from "./Projects/BMI_Calculator/BmiCalculator";
import CustomScroll from "./Projects/CustomScroll/CustomScroll";
import DiceGame from "./Projects/DiceGame/DiceGame";
import ImageSlider from "./Projects/ImageSlider/ImageSlider";
import LoadMoreData from "./Projects/LoadMoreData/LoadMoreData";
import QRCodeGenerator from "./Projects/QRCodeGenerator/QRCodeGenerator";
import RandomColorGenerator from "./Projects/RandomColorGenerator/RandomColorGenerator";
import StarRating from "./Projects/StarRating/StarRating";
import TextAnalyzer from "./Projects/TextAnalyzer/TextAnalyzer";

function App() {
  return (
    <>
      {/* ==========================Random Hex Generater========================== */}
      {/* <RandomColorGenerator /> */}
      {/* ==========================Star Rating========================== */}
      {/* <StarRating maxNoOfStars={10} /> */}
      {/* ==========================Image Slider========================== */}
      {/* <ImageSlider /> */}
      {/* ==========================Qr Code Generator========================== */}
      {/* <QRCodeGenerator /> */}
      {/* ==========================Text Analyzer==========================*/}
      {/* <TextAnalyzer /> */}
      {/* ==========================BMI Calculator==========================*/}
      {/* <BmiCalculator /> */}
      {/* ==========================Load More Data==========================*/}
      {/* <LoadMoreData /> */}
      {/* ==========================Custom Scroll Progress Bar==========================*/}
      {/* <CustomScroll /> */}
      {/* ==========================Dice Game==========================*/}
      <DiceGame />
    </>
  );
}

export default App;
