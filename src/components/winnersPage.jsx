import styled from 'styled-components';
import { Choose, TextContainer, Title } from './activePrizes';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TermContainer } from './userTerms';

const PreviousWinners = styled.p`
  color: #fff;
  padding: 48px 0 48px 16px;
`;

export default function WinnersPage() {
  return (
    <TextContainer>
      <TermContainer>
        <Title>
          <FontAwesomeIcon icon={faTrophy} color='#FF8A29' height={20} />
          GANHADORES
        </Title>
        <Choose>Confira os sortudos que já foram premiados.</Choose>
      </TermContainer>
      <TermContainer>
        <PreviousWinners>Nenhum Ganhador até o momento</PreviousWinners>
      </TermContainer>
    </TextContainer>
  );
}
