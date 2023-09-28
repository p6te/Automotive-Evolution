import images from "src/assets/images/slider";
import { CarInfo, Carousel, InnerCarousel, Item } from "./styled";
import { useEffect, useRef, useState } from "react";

const Slider = () => {
  const [width, setWidth] = useState(0);
  const [showInfoIndex, setShowInfoIndex] = useState(-1);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current != null) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, []);

  return (
    <Carousel ref={carouselRef} whileTap={{ cursor: "grabbing" }}>
      <InnerCarousel drag="x" dragConstraints={{ right: 0, left: -width }}>
        {images.map((car, index) => {
          return (
            <Item
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
  );
};

export default Slider;
