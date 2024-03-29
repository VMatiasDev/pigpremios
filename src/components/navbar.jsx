import styled from 'styled-components';
import {
  faStar,
  faTrophy,
  faUserPlus,
  faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const NavBarContainer = styled.div`
  height: 8vh;
  background-color: #090909;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

const NavBarPages = styled.div`
  display: flex;
  gap: 15px;

  button {
    cursor: pointer;
    padding: 27px;
    color: #dddddd;
    font-size: 1rem;
    border: none;
    border-bottom: 5px solid #0b0d32;
    background: transparent;
    display: flex;
    gap: 5px;
    &:hover {
      transition: 300ms;
      border-bottom: 3px solid #b62b2b;
    }
  }
  a {
    text-decoration: none;
  }
`;

const NavBarSign = styled.div`
  display: flex;
  border: 1px solid red;
  border-radius: 10px;
  padding: 5px 20px;
  gap: 10px;
  button {
    cursor: pointer;
    border: none;
    color: #b62b2b;
    background: transparent;
    display: flex;
    gap: 5px;
    &:hover {
      transition: 300ms;
      color: #fff;
    }
  }
`;

export default function NavBar() {
  return (
    <NavBarContainer>
      <Link href='/'>
        <Logo src='/pig.png' />
      </Link>
      <NavBarPages>
        <Link href='/prizedraw'>
          <button>
            <FontAwesomeIcon icon={faStar} color='#dddddd' height={15} />
            SORTEIOS
          </button>
        </Link>
        <Link href='/winners'>
          <button>
            <FontAwesomeIcon icon={faTrophy} color='#dddddd' height={15} />
            GANHADORES
          </button>
        </Link>
      </NavBarPages>
      <NavBarSign>
        <button>
          <FontAwesomeIcon
            icon={faArrowRightToBracket}
            color='#dddddd'
            height={15}
          />
          ENTRAR
        </button>
        <button>
          <FontAwesomeIcon icon={faUserPlus} color='#dddddd' height={15} />
          CADASTRO
        </button>
      </NavBarSign>
    </NavBarContainer>
  );
}
