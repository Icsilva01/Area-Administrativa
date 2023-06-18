/* eslint-disable jsx-a11y/anchor-is-valid */
import facebook from './assets/facebook.png'
import instagram from './assets/instagram.png'
import google from './assets/google.png'
import whatsapp from './assets/whatsapp.png'
import styled from 'styled-components'

const RodapeEstilizado = styled.footer`
height: 100%;
color: #fff;
padding: 1em;
background-color: var(--azul-escuro);
text-align: center;
`
const ListaEstilizada = styled.ul`
display: flex;
justify-content: space-around;
width: 10%;
margin: 1em auto;
`
const ItemEstilizado = styled.li`
list-style-type: none;
display: flex;
justify-content: space-around;
gap:24px;
`

function Rodape() {
    return (
        <RodapeEstilizado>
            <ListaEstilizada>
                <ItemEstilizado>
                    <a href="#">
                        <img src={facebook} alt="logo do facebook" />
                    </a>
                    <a href="#">
                        <img src={whatsapp} alt="logo do whatsapp" />
                    </a>
                    <a href="#">
                        <img src={google} alt="logo do google" />
                    </a>
                    <a href="#">
                        <img src={instagram} alt="logo do instagram" />
                    </a>
                </ItemEstilizado>
            </ListaEstilizada>
            <p>2023 © Desenvolvido por Icaro | Projeto fictício sem fins comerciais.</p>
        </RodapeEstilizado>
    )
}
export default Rodape