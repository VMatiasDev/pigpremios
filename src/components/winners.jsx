import styled from 'styled-components';
import Image from 'next/image';
import { Choose, TextContainer, Title } from './activePrizes';
import { faTrophy, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GeneralContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const WinnersContainer = styled.div`
  height: 22vh;
  display: flex;
  justify-content: center;
  width: 30%;
`;

const PaymentPix = styled.button`
  display: flex;
  align-items: center;
  align-self: center;
  cursor: pointer;
  background-color: #090909;
  color: #fff;
  padding: 12px;
  border: none;
  font-size: 1rem;
  border-radius: 10px;
  gap: 10px;
  &:hover {
    transition: 300ms;
    background-color: #74741d;
  }
`;

export default function Winners() {
  return (
    <GeneralContainer>
      <WinnersContainer>
        <TextContainer>
          <Title>
            <FontAwesomeIcon icon={faTrophy} color='#FF8A29' height={20} />
            GANHADORES
          </Title>
          <Choose>Escolha um de nossos sorteios</Choose>
        </TextContainer>
      </WinnersContainer>
      <WinnersContainer>
        <TextContainer>
          <Title>
            <FontAwesomeIcon icon={faCreditCard} color='#FF8A29' height={20} />
            FORMAS DE PAGAMENTO
          </Title>
          <Choose>Clique para exibir as informações</Choose>
          <br />
          <br />
          <PaymentPix>
            <Image src='./pix.svg' alt='pix logo' width={50} height={50} />
            PAGAR COM PIX (RECOMENDADO)
          </PaymentPix>
        </TextContainer>
      </WinnersContainer>
    </GeneralContainer>
  );
}
