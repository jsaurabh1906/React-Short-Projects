import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Loader from "../../components/Loader";

const URL = "https://picsum.photos/v2/list";

const ImageSlider = ({ page = 3, limit = 5 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchImages = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`${URL}?page=${page}&limit=${limit}`);
      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }

      const data = await response.json();

      // Preload images as it is being fetched bcoz browser loads images as required and not all at once
      // Hence this browser issue was loading images slowly while sliding through first round of images
      //So preload this images as it is being fetched
      data.forEach((img) => {
        const preloadedImg = new Image();
        preloadedImg.src = img.download_url;
      });

      console.log(data);
      setImages(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  const nextSlide = () => {
    const isLastSlide = currentSlide === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    // console.log(`Next Slide: Changing from ${currentSlide} to ${newIndex}`);
    // console.log("Image URL:", images[newIndex]?.download_url);
    setCurrentSlide(newIndex);
    //OR
    //  setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentSlide - 1;
    // console.log(`Prev Slide: Changing from ${currentSlide} to ${newIndex}`);
    // console.log("Image URL:", images[newIndex]?.download_url);
    setCurrentSlide(newIndex);
    //OR
    // setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  // if (isLoading) return <h1>Loading...</h1>;
  // if (error) return <h1>{error}</h1>;

  return (
    <div className="flex flex-col items-center justify-center bg-indigo-50 p-4">
      {/* Title */}
      <h1 className="text-2xl w-full text-center font-bold bg-indigo-700 text-white mb-6 py-2 rounded-2xl">
        Image Slider
      </h1>
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : error ? (
        <p>Error Occurred: {error}</p>
      ) : (
        <>
          {" "}
          <div className="relative group">
            {/* Images */}
            <div className="flex items-center justify-center transition-all duration-500 ease-in-out ">
              {images.length > 0 && (
                <img
                  key={images[currentSlide].id}
                  src={images[currentSlide].download_url}
                  alt={images[currentSlide].author}
                  className="mx-auto rounded-lg w-72 max-h-72 duration-500"
                />
              )}
            </div>
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="hidden group-hover:block absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/30  text-xl text-white p-2  ml-2 rounded-full cursor-pointer"
            >
              <BsChevronCompactLeft />
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="hidden group-hover:block absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/30   text-xl text-white p-2  mr-2 rounded-full cursor-pointer"
            >
              <BsChevronCompactRight />
            </button>
          </div>
          <div className="flex justify-center items-center mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`mx-1 text-2xl cursor-pointer transition-colors duration-300 ${
                  currentSlide === index ? "text-indigo-700" : "text-gray-200"
                }`}
              >
                <RxDotFilled />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSlider;

{
  /* <div className="flex justify-center items-center mt-4">
{images.map((img) => (
  <div key={img.id} className="mx-1 text-2xl cursor-pointer">
    <RxDotFilled onClick={() => setCurrentSlide(images.indexOf(img))} />
  </div>
))}
</div> */
}
