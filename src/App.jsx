import "./App.css";
import BmiCalculator from "./Projects/BMI_Calculator/BmiCalculator";
import ImageSlider from "./Projects/ImageSlider/ImageSlider";
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
      <BmiCalculator />
    </>
  );
}

export default App;
