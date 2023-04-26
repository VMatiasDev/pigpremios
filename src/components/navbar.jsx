import styled from 'styled-components';
import {
  faStar,
  faTrophy,
  faUserPlus,
  faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBarContainer = styled.div`
  width: 100vw;
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
      <Logo src='/pig.png' />
      <NavBarPages>
        <button>
          <FontAwesomeIcon icon={faStar} color='#dddddd' height={15} />
          SORTEIOS
        </button>
        <button>
          <FontAwesomeIcon icon={faTrophy} color='#dddddd' height={15} />
          GANHADORES
        </button>
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
