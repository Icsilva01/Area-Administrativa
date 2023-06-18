import IProffisional from "./types/IProfissional"
import useFetch from "./useFetch"

const useDadosProfissional = () => {
    return useFetch<IProffisional[]>({url: 'profissionais'})
}

export default useDadosProfissional;