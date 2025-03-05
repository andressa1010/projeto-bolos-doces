import { useState } from "react";
import styled from "styled-components";

const images = [
  "/bolopote05.jpg",
  "/bolopote06.jpg",
  "/bolopote07.jpg",
  "/bolopote08.jpg",
  "/travessaDoce02.jpg",
  "/travessaDoce03.jpg",
  "/travessaDoce04.jpg",
  "/travessaDoce05.jpg",
  "/travessaDoce02.jpg",
  "/travessaDoce06.jpg",
  "/travessaDoce02.jpg",
  "/bolopote10.jpg",
  "/bolopote08.jpg",
  "/travessaDoce02.jpg",
  "/travessaDoce03.jpg",
  "/travessaDoce04.jpg",
  "/travessaDoce05.jpg",
  "/travessaDoce02.jpg",
  "/travessaDoce06.jpg",
  "/travessaDoce02.jpg",
  "/bolopote10.jpg",
  "/bolopote08.jpg",
  "/travessaDoce02.jpg",
  "/travessaDoce03.jpg",
  "/travessaDoce04.jpg",
  "/travessaDoce05.jpg",
  "/travessaDoce02.jpg",
  "/travessaDoce06.jpg",
  "/travessaDoce02.jpg",
  "/bolopote10.jpg",
];

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 80%;
  margin: auto;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  display: flex;
  transition: transform 0.1s ease-in-out;
  transform: ${({ index }) => `translateX(-${index * 10}%)`};
`;

const Image = styled.img`
   width: 300px;
   margin: 20px;
   border-radius: 40px;
  object-fit: cover;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const PrevButton = styled(Button)`
  left: 10px;
`;

const NextButton = styled(Button)`
  right: 10px;
`;

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  return (
    <SliderContainer>
      <PrevButton onClick={prevSlide}>❮</PrevButton>
      <ImageWrapper index={index}>
        {images.map((img, i) => (
          <Image key={i} src={img} alt={`Imagem ${i + 1}`} />
        ))}
      </ImageWrapper>
      <NextButton onClick={nextSlide}>❯</NextButton>
    </SliderContainer>
  );
}
