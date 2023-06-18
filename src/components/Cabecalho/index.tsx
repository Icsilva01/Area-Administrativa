import styled from 'styled-components';
import logo from './assets/logo.png'
import perfil from './assets/perfil.png'

const CabecalhoEstilizado = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 4rem;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-grow: .1;
`

const Link = styled.a`
    color: var(--azul-escuro);
    font-weight: 700;
    text-decoration: none;
`


function Cabecalho () {
  return (
    <CabecalhoEstilizado>
      <img src={logo} alt=" logo da empresa voll" />
        <Container> 
            <img src={perfil} alt="foto de perfil" />
            <Link href="#">Sair</Link>
        </Container>
    </CabecalhoEstilizado>
  )
}

export default Cabecalho;