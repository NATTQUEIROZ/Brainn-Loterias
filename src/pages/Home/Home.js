import React, { useEffect, useState } from "react"
import { BASE_URL } from "../../constants/urls"
import { ContestName, ScreenContainer, SidebarContainer, SelectContainer, Path3, Path2, Lotteries, ContestInfos, Note, Results, Elipse, ResultsContainer } from './styled'
import sidebarMega from '../../assets/desktop/sidebar-mega.svg'
import sidebarQuina from '../../assets/desktop/sidebar-quina.svg'
import sidebarLotofacil from '../../assets/desktop/sidebar-lotofacil.svg'
import sidebarLotomania from '../../assets/desktop/sidebar-lotomania.svg'
import sidebarTimemania from '../../assets/desktop/sidebar-timemania.svg'
import sidebarDiaDeSorte from '../../assets/desktop/sidebar-diaDeSorte.svg'
import path2 from '../../assets/logo/path2.png'
import path3 from '../../assets/logo/path3.png'
import Ellipse from "../../assets/Ellipse.svg"
import useRequestData from '../../hooks/useRequestData'

export const Home = () => {
    const [sidebar, setSidebar] = useState(sidebarMega)
    const [color, setColor] = useState(`#6BEFA3`)
    const [name, setName] = useState("MEGA-SENA")
    const [id, setId] = useState(2359)
    const [data, getData] = useRequestData([], `${BASE_URL}/concursos/${id}`)

    useEffect(() => {
        if (sidebar === sidebarLotofacil) {
            setName("LOTOFACIL")
            setId("2200")
            setColor(`#DD7AC6`)
        } else if (sidebar === sidebarMega) {
            setName("MEGA-SENA")
            setId("2359")
            setColor(`#6BEFA3`)
        } else if (sidebar === sidebarQuina) {
            setName("QUINA")
            setId("5534")
            setColor(`#8666EF`)
        } else if (sidebar === sidebarLotomania) {
            setName("LOTOMANIA")
            setId("2167")
            setColor(`#FFAB64`)
        } else if (sidebar === sidebarTimemania) {
            setName("TIMEMANIA")
            setId("1622")
            setColor(`#5AAD7D`)
        } else if (sidebar === sidebarDiaDeSorte) {
            setName("DIA DE SORTE")
            setId("440")
            setColor(`#BFAF83`)
        }
    }, [sidebar])

    const onChangeSelect = (event) => {
        setSidebar(event.target.value)
    }

    const concurso = () => {
        const id = data.id

        let date = data.data
        let dateTime = new Date(date)
        let options = {
            year: 'numeric', month: 'numeric', day: 'numeric'
        }
        let result = dateTime.toLocaleString('pt', options)


        return (`${id} - ${result}`)
    }

    const resultados = () => {
        return (
            <Results>
                {!!data.numeros > 0 ? data.numeros.map((item) => {
                    return (

                        <Elipse
                            elipse={Ellipse}
                        >{item}</Elipse>

                    )
                }) : "carregando"}
            </Results>

        )
    }

    return (
        <ScreenContainer>
            <SidebarContainer
                sidebarColor={sidebar}>
                <SelectContainer onChange={onChangeSelect}>
                    <option value={sidebarMega}>MEGA-SENA</option>
                    <option value={sidebarQuina}>QUINA</option>
                    <option value={sidebarLotofacil}>LOTOFACIL</option>
                    <option value={sidebarLotomania}>LOTOMANIA</option>
                    <option value={sidebarTimemania}>TIMEMANIA</option>
                    <option value={sidebarDiaDeSorte}>DIA DE SORTE</option>
                </SelectContainer>

                <Lotteries color={color}>{name}</Lotteries>
                <Path2 src={path2} alt="Logo" />
                <Path3 src={path3} alt="Logo" />

                <ContestInfos>CONCURSO</ContestInfos>
                <ContestName>{concurso()}</ContestName>
            </SidebarContainer>
            
            <ResultsContainer>
                {resultados()}
                <Note>* Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</Note>
            </ResultsContainer>

        </ScreenContainer>
    )
}
export default Home