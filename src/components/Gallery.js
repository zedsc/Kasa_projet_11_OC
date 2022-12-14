import React, { useState } from "react";
import { useEffect } from "react";
import { Carousel } from "react-bootstrap";

const Gallery = ({ housing }) => {
  const [index, setIndex] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const carouselChild = [];

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  for (let i = 1; i < housing.pictures.length; i++) {
    carouselChild.push(
      <Carousel.Item key={i + housing.id}>
        <img
          className="d-block w-100"
          src={housing.pictures[i]}
          alt={"Slide " + i}
        />
        <Carousel.Caption>
          <p>{i + 1 + "/" + housing.pictures.length}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  useEffect(() => {
    /* Checking if the carouselChild array is empty (meaning 1 picture). If it is, it is adding a class to the prev and next buttons to hide them. */
    const prevArrow = document.querySelector(".carousel-control-prev");
    const nextArrow = document.querySelector(".carousel-control-next");
    if (carouselChild.length === 0) {
      prevArrow.className = "carousel-control-prev display-none";
      nextArrow.className = "carousel-control-next display-none";
    }
  }, [carouselChild]);

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={null}
      className={"gallery"}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={housing.pictures[0]}
          alt="Slide 1"
        />
        <Carousel.Caption>
          <p>{"1/" + housing.pictures.length}</p>
        </Carousel.Caption>
      </Carousel.Item>
      {carouselChild}
    </Carousel>
  );
};

export default Gallery;
