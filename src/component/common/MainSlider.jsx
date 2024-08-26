
import slime100 from "asset/image/slime100.png";
import slime25 from "asset/image/slime25.png";
import slime50 from "asset/image/slime50.png";
import slime75 from "asset/image/slime75.png";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MainSlider = () => {

    const imageData = [
        {
          label: "Image 1",
          alt: "image1",
          url: slime25,
        },
      
        {
          label: "Image 2",
          alt: "image2",
          url: slime50,
        },
      
        {
          label: "Image 3",
          alt: "image3",
          url: slime75,
        },
      
        {
          label: "Image 4",
          alt: "image4",
          url: slime100,
        },
      ];

      const renderSlides = imageData.map(image => (
        <div key={image.alt}>
          <img src={image.url} alt={image.alt} />
      </div>
    ));

    const [currentIndex, setCurrentIndex] = useState();
    function handleChange(index) {
      setCurrentIndex(index);
    }


    return (
        <Carousel
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          selectedItem={imageData[currentIndex]}
          onChange={handleChange} >
          {renderSlides}
        </Carousel>
    );
  };
  
  export default MainSlider;
