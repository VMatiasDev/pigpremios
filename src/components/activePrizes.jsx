import styled from 'styled-components';

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
  width: 60%;
  height: 35%;
  border-radius: 70px 0 70px 0;
  object-fit: cover;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding-top: 20px;
`;

const Title = styled.h1`
  border-left: 5px solid #0b0d32;
  color: #fff;
  span {
    color: #b62b2b;
  }
`;

const Choose = styled.p`
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
            NOSSOS <span>SORTEIOS</span>
          </Title>
          <Choose>Escolha um de nossos sorteios</Choose>
        </TextContainer>
      </Principal>
    </>
  );
}
