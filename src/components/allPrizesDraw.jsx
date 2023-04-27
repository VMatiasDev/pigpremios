import styled from 'styled-components';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TermContainer } from './userTerms';
import { ALL_ROADS } from './roads';
import {
  BuyButton,
  CardsContainer,
  PrizeContainer,
  PrizeImg,
  PrizeSubtitle,
  PrizeTitle,
  PulseEffect,
  TextContainer,
} from './prizeRunning';
import { Title } from './activePrizes';

const FilterContainer = styled.div`
  display: flex;
  padding: 24px 0;
`;

const FilterTitle = styled.h2`
  color: #fff;
  padding-top: 3%;
`;

const ButtonS = styled.button`
  cursor: pointer;
  background: none;
  color: #b62b2b;
  height: 50px;
  border: none;
  padding: 5px 12px;
  border-right: 1px solid gray;
  display: flex;
  align-items: center;
  font-size: 1.75rem;
  font-weight: ${(props) => (!props.clicked ? 500 : 700)};
  text-decoration: ${(props) => (!props.clicked ? 'none' : 'underline')};
`;

const PrizeDrawContainer = styled.div`
  background-color: #181818;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 40vh;
  padding-top: 16px;
`;

export default function AllPrizesDraw() {
  return (
    <>
      <TermContainer>
        <FilterTitle>SE PREFERIR VOCÊ PODE FILTRAR POR:</FilterTitle>
        <FilterContainer>
          {ALL_ROADS.map((item, index) => (
            <ButtonS key={index}>{item.title}</ButtonS>
          ))}
        </FilterContainer>
      </TermContainer>
      <PrizeDrawContainer>
        <Title>
          <FontAwesomeIcon icon={faStar} color='#FF8A29' height={20} />
          NOSSOS <span>SORTEIOS</span>
        </Title>
        <CardsContainer>
          <PulseEffect>
            <PrizeContainer>
              <PrizeImg src='./prize.jpg'></PrizeImg>
              <TextContainer>
                <PrizeTitle>AJUDE A LÍVIA A IR PRA CASA</PrizeTitle>
                <PrizeSubtitle>BIZ 2018;2018</PrizeSubtitle>
                <BuyButton>COMPRAR</BuyButton>
              </TextContainer>
            </PrizeContainer>
          </PulseEffect>
        </CardsContainer>
      </PrizeDrawContainer>
    </>
  );
}
