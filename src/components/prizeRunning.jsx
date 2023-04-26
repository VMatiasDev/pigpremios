import styled from 'styled-components';

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 71%;
  padding-top: 80px;
`;

const PulseEffect = styled.div`
  border-radius: 10px;
  height: 150px;
  width: 350px;

  box-shadow: 0 0 0 0 rgba(112, 212, 75, 1);
  transform: scale(1);
  animation: pulse-green 2s infinite;

  @keyframes pulse-green {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(112, 212, 75, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 20px rgba(112, 212, 75, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(112, 212, 75, 0);
    }
  }
`;

const PrizeContainer = styled.div`
  cursor: pointer;
  background-color: #262e1f;
  border-radius: 10px;
  height: 150px;
  width: 350px;
  display: flex;
`;

const PrizeImg = styled.img`
  width: 50%;
  height: 100%;
  border-radius: 10px 0 0 10px;
`;

const TextContainer = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 0 10px 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const PrizeTitle = styled.h3`
  color: #fff;
  padding: 0 8px 0 8px;
`;

const PrizeSubtitle = styled.h5`
  color: #fff;
  padding: 0 8px 0 8px;
`;

const BuyButton = styled.button`
  cursor: pointer;
  border: none;
  color: #fff;
  font-weight: 700;
  background-color: #5ca945;
  padding: 12px 48px;
  align-self: center;
  border-radius: 5px;
  &:hover {
    transition: 300ms;
    background-color: #456e38;
  }
`;

export default function PrizeRunning() {
  return (
    <CardsContainer>
      <PulseEffect>
        <PrizeContainer>
          <PrizeImg src='./prize.jpg'></PrizeImg>
          <TextContainer>
            <PrizeTitle>AJUDE A LÍVIA A IR PRA CASA</PrizeTitle>
            <PrizeSubtitle>BIZ 2018/2018</PrizeSubtitle>
            <BuyButton>COMPRAR</BuyButton>
          </TextContainer>
        </PrizeContainer>
      </PulseEffect>
      <PulseEffect>
        <PrizeContainer>
          <PrizeImg src='./prize.jpg'></PrizeImg>
          <TextContainer>
            <PrizeTitle>AJUDE A LÍVIA A IR PRA CASA</PrizeTitle>
            <PrizeSubtitle>BIZ 2018/2018</PrizeSubtitle>
            <BuyButton>COMPRAR</BuyButton>
          </TextContainer>
        </PrizeContainer>
      </PulseEffect>
      <PulseEffect>
        <PrizeContainer>
          <PrizeImg src='./prize.jpg'></PrizeImg>
          <TextContainer>
            <PrizeTitle>AJUDE A LÍVIA A IR PRA CASA</PrizeTitle>
            <PrizeSubtitle>BIZ 2018/2018</PrizeSubtitle>
            <BuyButton>COMPRAR</BuyButton>
          </TextContainer>
        </PrizeContainer>
      </PulseEffect>
    </CardsContainer>
  );
}
