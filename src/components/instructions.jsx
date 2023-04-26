import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faBuildingColumns,
  faHandsPraying,
  faDice,
} from '@fortawesome/free-solid-svg-icons';

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #282828;
`;

const InstructionsContainer = styled.div`
  height: 22vh;
  display: flex;
  width: 71%;
  padding-top: 32px;
`;

const Steps = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`;

const InstructionTitle = styled.h3`
  color: #888888;
  padding-bottom: 12px;
`;

const InstructionDescription = styled.p`
  color: #888888;
  text-align: left;
  width: 70%;
`;

export default function Instructions() {
  return (
    <SectionContainer>
      <InstructionsContainer>
        <Steps>
          <InstructionTitle>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              color='#FF8A29'
              height={20}
            />
            Escolha o sorteio
          </InstructionTitle>
          <InstructionDescription>
            Escolha o prêmio que gostaria de concorrer, verifique a descrição,
            regulamento do sorteio e fotos em caso de dúvidas entre em contato
            com o administrador
          </InstructionDescription>
        </Steps>
        <Steps>
          <InstructionTitle>
            <FontAwesomeIcon icon={faDice} color='#FF8A29' height={20} />
            Selecione os números
          </InstructionTitle>
          <InstructionDescription>
            Você pode escolher quantos números desejar! Mais números, mais
            chances de ganhar
          </InstructionDescription>
        </Steps>
        <Steps>
          <InstructionTitle>
            <FontAwesomeIcon
              icon={faBuildingColumns}
              color='#FF8A29'
              height={20}
            />
            Faça o pagamento
          </InstructionTitle>
          <InstructionDescription>
            Faça o pagamento via transferência bancária ou MercadoPago. Envie o
            comprovante da transferência ao administrador via whatsapp
          </InstructionDescription>
        </Steps>
        <Steps>
          <InstructionTitle>
            <FontAwesomeIcon
              icon={faHandsPraying}
              color='#FF8A29'
              height={20}
            />
            Aguarde o sorteio
          </InstructionTitle>
          <InstructionDescription>
            Cruze os dedos. Você pode ser o próximo sorteado
          </InstructionDescription>
        </Steps>
      </InstructionsContainer>
    </SectionContainer>
  );
}
