import styled from 'styled-components';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PrizeRunning from './prizeRunning';

const Principal = styled.main`
  height: 70vh;
  background-color: #181818;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
`;

const Banner = styled.img`
  width: 72%;
  height: 35%;
  border-radius: 70px 0 70px 0;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 71%;
  padding-top: 20px;
`;

export const Title = styled.h1`
  border-left: 5px solid #0b0d32;
  font-size: 1.7rem;
  color: #fff;
  span {
    color: #b62b2b;
  }
`;

export const Choose = styled.p`
  color: #dddddd;
  margin-top: 10px;
`;

export default function ActivePrizes() {
  return (
    <>
      <Principal>
        <Banner src='/moto.png' />
        <TextContainer>
          <Title>
            <FontAwesomeIcon icon={faStar} color='#FF8A29' height={20} />
            NOSSOS <span>SORTEIOS</span>
          </Title>
          <Choose>Escolha um de nossos sorteios</Choose>
        </TextContainer>
        <PrizeRunning />
      </Principal>
    </>
  );
}
