import Link from 'next/link';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #090909;
`;

const FooterSection = styled.footer`
  display: flex;
  justify-content: space-around;
  background-color: #090909;
`;

const FooterContainer = styled.div`
  height: 20vh;
  width: 71%;
  display: flex;
  padding-top: 56px;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 16px;
  width: 50%;
  a {
    text-decoration: none;
    color: #fff;
    height: 10%;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 16px;
  width: 50%;
  color: #fff;
  a {
    height: 10%;
  }
`;

const Copyright = styled.div`
  display: flex;
  justify-content: center;
  color: #fff;
  padding-bottom: 16px;
`;

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <SectionContainer>
      <FooterSection>
        <FooterContainer>
          <LinksContainer>
            <Link href='/'>Home</Link>
            <Link href='/prizedraw'>Sorteios</Link>
            <Link href='/terms'>Termos</Link>
            <Link href='/contact'>Contato</Link>
          </LinksContainer>
          <SocialContainer>
            ESTAMOS NAS REDES SOCIAIS
            <Link href='#'>
              <FontAwesomeIcon icon={faFacebook} color='#FF8A29' height={20} />
            </Link>
            <Link href='#'>
              <FontAwesomeIcon icon={faInstagram} color='#FF8A29' height={20} />
            </Link>
            <Link href='https://api.whatsapp.com/send?l=pt_br&phone=5562994505518'>
              <FontAwesomeIcon icon={faWhatsapp} color='#FF8A29' height={20} />
            </Link>
          </SocialContainer>
        </FooterContainer>
      </FooterSection>
      <Copyright>
        <p>PIGBURGUER!</p>
        <span>&copy; {currentYear}</span>
      </Copyright>
    </SectionContainer>
  );
}
