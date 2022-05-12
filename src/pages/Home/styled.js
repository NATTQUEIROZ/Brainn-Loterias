import styled from 'styled-components'

export const ScreenContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    font-family: 'Montserrat';
    background-color: #dbdbdb;
`

export const SidebarContainer = styled.div`
    height: 100%;
    width: 500px;
    background: url(${props => props.sidebarColor}) center center;
`

export const SelectContainer = styled.select`
    font-family: 'Montserrat';
    font-style: normal;
    width: 12vw;
    height: 3vw;
    position: absolute;
    left: 8%;
    right: 80.51%;
    top: 10%;
    bottom: 87.3%;
    border: none;
    border-radius: 10px;
    background: #FFFFFF;
`

export const Lotteries = styled.p`
    position: absolute;
    left: 12%;
    right: 73.57%;
    top: 42%;
    bottom: 48.52%;
    height: 50px;
    width: 300px;
    font-weight: 700;
    font-size: 25px;
    line-height: 37px;
    color: #FFFFFF;
`

export const Path2 = styled.img`
    position: absolute;
    left: 5.99%;
    right: 90.31%;
    top: 44.41%;
    bottom: 49.47%;
    height: 55.31px;
    width: 59.29px;
    background-color: transparent;
`

export const Path3 = styled.img`
    position: absolute;
    left: 5.99%;
    right: 90.31%;
    top: 44.41%;
    bottom: 49.47%;
    height: 55.31px;
    width: 59.29px;
    background-color: transparent;
`

export const ContestInfos = styled.p`
    position: absolute;
    left: 8%;
    right: 84.83%;
    top: 86.76%;
    bottom: 11.84%;
    height: 30px;
    width: 200px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.135em;
    background-color: transparent;
    color: #FFFFFF;
`

export const ContestName = styled.p`
    position: absolute;
    left: 8%;
    right: 77.69%;
    top: 89.49%;
    bottom: 8.59%;
    height: 50px;
    width: 200px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    background-color: transparent;
    color: #FFFFFF;
`

export const ResultsContainer = styled.div`
    display: flex;
    height: 100%;
    width: 71%;
`

export const Results = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    align-items: center;
    gap: 2%;
    max-height: 400px;
    width: 55vw;
    position: absolute;
    left: 39.97%;
    margin-top: 8%;
`

export const Elipse = styled.div`
    width: 111.2px;
    height: 107.26px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 27px;
    background: url(${props => props.elipse});
`

export const Note = styled.p`
    position: absolute;
    left: 40%;
    right: 11.75%;
    top: 89.17%;
    bottom: 15%;
    max-height: 50px;
    max-width: 800px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
`