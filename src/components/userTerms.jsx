import styled from 'styled-components';

const PageTitle = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  padding: 16px 0 8px 0;
  border-bottom: 1px solid white;
`;

const TermContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20%;
`;

const TermTitle = styled.h1`
  color: #fff;
  padding-bottom: 8px;
`;

const TermDescription = styled.p`
  color: #fff;
  width: 80%;
  padding-bottom: 48px;
  letter-spacing: 0.05rem;
`;

export default function UserTerms() {
  return (
    <>
      <PageTitle>TERMOS E CONDIÇÕES DE USO</PageTitle>;
      <TermContainer>
        <TermTitle>Da Participação nas Rifas</TermTitle>
        <TermDescription>
          Toda e qualquer pessoa maior de 18 anos pode participar das ações
          disponíveis.
        </TermDescription>
      </TermContainer>
      <TermContainer>
        <TermTitle>Adiamento da Rifa</TermTitle>
        <TermDescription>
          Caso a Rifa não tenha 100% dos Certificados Pagos o sorteio será
          adiado até que ocorra o pagamento de todos os certificados.
        </TermDescription>
      </TermContainer>
      <TermContainer>
        <TermTitle>Da Definição do Ganhador</TermTitle>
        <TermDescription>
          O ganhador do sorteio será sempre o participante que possuir seu NOME,
          CELULAR e E-MAIL gravados no Certificado premiado. No caso de
          pagamento em duplicidade, ou seja, em casos raros onde duas pessoas
          clicam no mesmo bilhete simultaneamente o ganhador do sorteio será o
          participante que possuir o NOME, CELULAR e E-MAIL gravados no bilhete
          no momento do sorteio. O participante que, no caso de compra em
          duplicidade não possuir o nome gravado no bilhete deverá solicitar
          reembolso do valor pago pelo bilhete em questão.
        </TermDescription>
      </TermContainer>
      <TermContainer>
        <TermTitle>Do Cancelamento da Rifa</TermTitle>
        <TermDescription>
          O site poderá, sem aviso prévio, cancelar qualquer ação que viole um
          ou mais termos aqui dispostos.
        </TermDescription>
      </TermContainer>
      <TermContainer>
        <TermTitle>Do Reembolso</TermTitle>
        <TermDescription>
          O reembolso de bilhetes ocorre exclusivamente em casos de cancelamento
          da ação, ou seja, o criador da ação ou O site não se obriga a
          reembolsar participantes que adquirirem bilhetes presencialmente ou
          on-line caso a ação não tenha sido cancelada.
        </TermDescription>
      </TermContainer>
      <TermContainer>
        <TermTitle>Das Proibições</TermTitle>
        <TermDescription>
          É completamente vedado o uso de perfis falsos visando criar ações sem
          a genuína intenção de realizá-las seguindo os termos aqui dispostos. É
          completamente vedado a participação do organizador em sua própria
          ação. O site pode alterar a qualquer momento estes termos visando
          melhorar a qualidade do serviço oferecido. O site informará a todos os
          usuários sempre que ocorrer uma alteração nos termos de uso e o
          usuário deverá aceitar as mudanças para continuar utilizando o site.
        </TermDescription>
      </TermContainer>
    </>
  );
}
