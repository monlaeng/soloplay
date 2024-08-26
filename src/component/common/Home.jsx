import React from "react";
import Slider from "../home/Slider";
import Services from "../home/Services";
import completeIcon from "asset/image/completeIcon.png";
import controller from "asset/image/controller.png";
import "asset/css/home.css";
import testImage from "asset/img/blog1.jpg"; // 실제 파일 경로로 수정
import Raid from "../raid/RaidHistory"
import CardList from "component/card/CardList";
import ThemeSearchMain from "component/theme/ThemeSearchMain";
function Home() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slides = [
    { src: testImage, alt: "Slide 1", title: "우리는 멤버십이다", description: "우리 뭔 서비스인지 소개" },
    { src: completeIcon, alt: "Slide 2", title: "테마 관련 ~", description: "테마테마 및 스탬프" },
    { src: controller, alt: "Slide 3", title: "레이드 관련~", description: "레이드레이드" }
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      {/* <Slider slides={slides} currentSlide={currentSlide} goToSlide={goToSlide} /> */}
      <Services />
      <Raid></Raid>
      <ThemeSearchMain></ThemeSearchMain>
      <CardList></CardList>
    </div>
  );
}

export default Home;
