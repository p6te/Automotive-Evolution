import images from "src/assets/images/slider";
import {
  ButtonsContainer,
  CarInfo,
  Carousel,
  InnerCarousel,
  Item,
  StyledArrow,
  StyledArrowLeft,
  StyledButton,
} from "./styled";
import { useEffect, useRef, useState } from "react";
import { useAnimation } from "framer-motion";
import arrow from "src/assets/images/arrow.png";

const Slider = () => {
  const [width, setWidth] = useState(0);
  const [widthItem, setWidthItem] = useState(0);
  const [showInfoIndex, setShowInfoIndex] = useState(-1);
  const [currentPosition, setCurrentPosition] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const animation = useAnimation();

  useEffect(() => {
    if (carouselRef.current != null) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }

    if (itemRef.current != null) {
      setWidthItem(itemRef.current.clientWidth);
    }
  }, []);
  2;

  const handlePrevClick = () => {
    animation.start({
      x: currentPosition < -widthItem ? currentPosition + widthItem : 0,
    });
  };
  const handleNextClick = () => {
    animation.start({
      x: currentPosition + width > 0 ? currentPosition - widthItem : -width,
    });
  };

  return (
    <>
      <Carousel ref={carouselRef} whileTap={{ cursor: "grabbing" }}>
        <InnerCarousel
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          animate={animation}
          onUpdate={(e) => setCurrentPosition(Number(e.x))}
        >
          {images.map((car, index) => {
            return (
              <Item
                ref={itemRef}
                key={index}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.1 },
                }}
                onHoverStart={() => {
                  setShowInfoIndex(index);
                }}
                onHoverEnd={() => {
                  setShowInfoIndex(-1);
                }}
              >
                <img src={car.image} alt="car image" />
                {showInfoIndex === index && (
                  <CarInfo>
                    <h3>{car.years}</h3>
                    <h2>{car.name}</h2>
                    <h3>{car.speed}</h3>
                  </CarInfo>
                )}
              </Item>
            );
          })}
        </InnerCarousel>
      </Carousel>
      <ButtonsContainer>
        <StyledButton
          onClick={handlePrevClick}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1 },
          }}
        >
          <StyledArrowLeft src={arrow} alt="left" />
        </StyledButton>
        <StyledButton
          onClick={handleNextClick}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1 },
          }}
        >
          <StyledArrow src={arrow} alt="right" />
        </StyledButton>
      </ButtonsContainer>
    </>
  );
};

export default Slider;
