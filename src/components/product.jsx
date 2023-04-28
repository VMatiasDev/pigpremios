import Link from 'next/link';

import {
  faCartShopping,
  faAt,
  faLink,
  faCircleInfo,
  faTriangleExclamation,
  faHandPointer,
} from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebook,
  faWhatsapp,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { SocialContainer } from './footer';
import ImageSlider from './imageSlider';

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 84%;
  padding-left: 14%;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 40px 0;
`;

const ProductTitle = styled.h1`
  color: #fff;
  border-left: 5px solid #0b0d32;
`;

const ProductSubtitle = styled.h3`
  color: #fff;
`;

const BuyButton = styled.button`
  cursor: pointer;
  background-color: #5ca945;
  color: #fff;
  font-size: 1.5rem;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  &:hover {
    transition: 300ms;
    background-color: #456e38;
  }
`;

const InfoContainer = styled.div`
  display: flex;
`;

const ImgSlider = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-bottom: 40px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  background-color: #222222;
  border-radius: 5px;
  padding: 16px;
  gap: 12px;
  margin-bottom: 40px;
  span {
    color: #fff;
    font-size: 0.8rem;
  }
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 35vh;
  p {
    overflow-y: scroll;
    color: #85868f;
    font-size: 1.2rem;
  }
  h4 {
    text-align: center;
    color: #85868f;
  }
`;

const ProductPrice = styled.div`
  background-color: #0b0d32;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  h2 {
    color: #fff;
  }
  h3 {
    color: #85868f;
  }
`;

const NumberButton = styled.button`
  cursor: pointer;
  background-color: #cc4444;
  color: #fff;
  font-size: 1.5rem;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  &:hover {
    transition: 300ms;
    background-color: #852929;
  }
`;

const BuyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AutoBuyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 40px 0;
`;

const AutoBuyTitle = styled.h2`
  color: #fff;
  border-left: 5px solid #b62b2b;
`;

const AutoBuySubtitle = styled.h3`
  color: #fff;
`;

const IncreaseTicketContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 32px;
  button {
    cursor: pointer;
    padding: 3% 10%;
    border: 1px solid #4d4c4c;
    border-radius: 5px;
    font-size: 1.5rem;
    background-color: #282828;
    color: #fff;
    &:hover {
      transition: 300ms;
      background-color: #4d4c4c;
    }
  }
`;

const ChoosedQuantityContainer = styled.div`
  border: 1px solid #4d4c4c;
  border-radius: 5px;
  padding: 16px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: #fff;
  }
`;

const TotalValue = styled.div`
  background-color: #343a40;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  padding: 8px;
`;

const InfoDiv = styled.div`
  background-color: #fff3cd;
  border-radius: 5px;
  padding: 12px;
  color: #c68411;
  margin-top: 8px;
  margin-bottom: 48px;
`;

const Warning = styled.div`
  background-color: #090909;
  border: 1px solid white;
  border-radius: 5px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  h1 {
    color: #85868f;
  }
  h2 {
    color: #c7c8cf;
  }
  h4 {
    color: #e8e8ee;
  }
`;

const WarningPulse = styled.div`
  border-radius: 10px;

  box-shadow: 0 0 0 0 rgba(112, 212, 75, 1);
  animation: pulse-green 2s infinite;

  @keyframes pulse-green {
    0% {
      box-shadow: 0 0 0 0 rgba(112, 212, 75, 0.7);
    }

    70% {
      box-shadow: 0 0 0 30px rgba(112, 212, 75, 0);
    }

    100% {
      box-shadow: 0 0 0 0 rgba(112, 212, 75, 0);
    }
  }
`;

export default function Product() {
  const slides = [
    { url: './moto1.jpg', title: 'Primeira foto' },
    { url: './moto2.jpg', title: 'Segunda foto' },
    { url: './moto3.jpg', title: 'Terceira foto' },
    { url: './moto4.jpg', title: 'Quarta foto' },
    { url: './moto5.jpg', title: 'Quinta foto' },
  ];

  return (
    <ProductContainer>
      <TitleContainer>
        <ProductTitle>AJUDE A LÍVIA A IR PARA CASA</ProductTitle>
        <ProductSubtitle>BIZ 2018/2018</ProductSubtitle>
        <BuyButton>
          <FontAwesomeIcon icon={faCartShopping} color='#FFF' height={20} />
          Compre Aqui
        </BuyButton>
      </TitleContainer>
      <InfoContainer>
        <ImgSlider>
          <ImageSlider slides={slides} />
        </ImgSlider>
        <DescriptionContainer>
          <ProductPrice>
            <h3>POR APENAS</h3>
            <h2>R$ 0,99</h2>
          </ProductPrice>
          <DescriptionBox>
            <h4>AJUDE A LÍVIA IR PARA CASA</h4>
            <p>
              Olá, eu sou a princesinha Lívia Vitória e eu preciso muito da
              ajuda de vocês pois nasci com a Síndrome de Edwards ( Sindrome do
              amor ) que é muito rara e severa, desde o meu primeiro dia de vida
              até atualmente, venho lutando pela vida dentro de uma UTI e passo
              por essa situação há 8 meses. Infelizmente não consigo respirar
              sozinha, me alimento por meio de sonda e preciso de aparelhos
              respiratórios e Homecare com médicos e enfermeiros para cuidarem
              de mim em casa e tudo isso é muito caro! Minha mamãe Lidianne
              Franco e meu papai Marcelo Prado lutam na justiça para conseguirem
              os equipamentos e a equipe homecare mas a justiça só recorre e
              entra com recursos que negam ajuda para mim. Estamos lutando
              contra o tempo pois a medicina afirma que tenho pouco tempo de
              vida por conta da Síndrome. Já passei por 4 cirurgias de alto
              risco, muitas transfusões e intercorrências, mas Deus tem feito
              muitos milagres em minha vida! Ajudem meus pais a realizarem o
              sonho de me levarem para casa, é essencial que eu tenha carinho,
              amor e os cuidados da minha família em casa, nos ajude a realizar
              esse sonho doando qualquer quantia! Pix do meu papai : Nubank
              62992622575 Marcelo Batista do Prado #LIVIAVEMPRACASA
            </p>
          </DescriptionBox>
          <BuyButton>
            <FontAwesomeIcon icon={faCartShopping} color='#FFF' height={20} />
            Compre Aqui
          </BuyButton>
          <span>COMPARTILHE</span>
          <SocialContainer>
            <Link href='https://api.whatsapp.com/send?l=pt_br&phone=5562994505518'>
              <FontAwesomeIcon icon={faWhatsapp} color='#FF8A29' height={20} />
            </Link>
            <Link href='#'>
              <FontAwesomeIcon icon={faFacebook} color='#FF8A29' height={20} />
            </Link>
            <Link href='#'>
              <FontAwesomeIcon icon={faTwitter} color='#FF8A29' height={20} />
            </Link>
            <Link href='#'>
              <FontAwesomeIcon icon={faAt} color='#FF8A29' height={20} />
            </Link>
            <Link href='#'>
              <FontAwesomeIcon icon={faLink} color='#FF8A29' height={20} />
            </Link>
          </SocialContainer>
        </DescriptionContainer>
      </InfoContainer>
      <NumberButton>
        <FontAwesomeIcon icon={faCircleInfo} color='#FFF' height={20} />
        Ver meus números
      </NumberButton>
      <BuyContainer>
        <AutoBuyContainer>
          <AutoBuyTitle>COMPRA AUTOMÁTICA</AutoBuyTitle>
          <AutoBuySubtitle>
            O sistema escolhe números aleatórios para você.
          </AutoBuySubtitle>
        </AutoBuyContainer>
        <IncreaseTicketContainer>
          <button>+10</button>
          <button>+50</button>
          <button>+100</button>
          <button>+200</button>
        </IncreaseTicketContainer>
        <ChoosedQuantityContainer>
          <h2>Quantidade escolhida</h2>
        </ChoosedQuantityContainer>
        <TotalValue>Total: R$ 0,00</TotalValue>
      </BuyContainer>
      <BuyButton>
        <FontAwesomeIcon icon={faSquareCheck} color='#FFF' height={20} />
        Participar do Sorteio
      </BuyButton>
      <InfoDiv>
        Atenção. Pagamento Automático. Após a Reserva prazo para Pagamento é em
        alguns Minutos ou seu QR Code Gerado Ficará inválido.
      </InfoDiv>
      <WarningPulse>
        <Warning>
          <h1>
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              color='#FF8A29'
              height={20}
            />
            Escolhendo seus números
          </h1>
          <h2>
            <FontAwesomeIcon icon={faHandPointer} color='#FF8A29' height={20} />
            Para selecionar os números dessa rifa use a compra automática acima
          </h2>
          <h4>
            Os números serão selecionados automaticamente de forma aleatória
          </h4>
        </Warning>
      </WarningPulse>
      <br />
      <br />
      <br />
    </ProductContainer>
  );
}
