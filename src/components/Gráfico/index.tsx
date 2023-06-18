import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import styled from "styled-components";
import IConsulta from "../../types/IConsulta";
import IProffisional from "../../types/IProfissional";
import useDadosGrafico from "./useDadosGrafico";

interface props {
    profissionais: IProffisional[] | null,
    consultas: IConsulta[] | null,
}

interface IDados {
    nome: string,
    consultas: number
}

const SecaoEstilizada = styled.section` 
    background-color: var(--branco);
    border-radius: 16px;
`

function Grafico({ profissionais, consultas }: props) {

    let dados: Array<IDados> = useDadosGrafico({ profissionais, consultas });

    return (
        <SecaoEstilizada>
            <ResponsiveContainer width='100%' height={350}>
                <BarChart
                    layout="vertical"
                    data={dados}
                    margin={{ top: 25, right: 40, bottom: 20, left: 40 }}
                >
                    <XAxis type="number"> </XAxis>
                    <YAxis type="category" dataKey="nome"> </YAxis>
                    <Bar dataKey="consultas" fill="#083860" barSize={30}></Bar>
                </BarChart >
            </ResponsiveContainer >
        </SecaoEstilizada>
    )
}

export default Grafico;