import IProfissional from "./IProfissional";

export default interface IConsulta {
    filter(arg0: (consulta: any) => any): unknown;
    id: number; 
    data: string;
    horario: string;
    profissional: Array<IProfissional>;
    especialidade: string;
    paciente: string;
    modalidade: string;
}