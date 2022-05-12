import React from 'react'
import path2 from '../../assets/logo/path2.png'
import path3 from '../../assets/logo/path3.png'
import { LogoImg } from './styled'

const Logo = () => {
    return (
        <LogoContainer>
            <LogoImg src={path2} alt="Logo" />
            <LogoImg src={path3} alt="Logo" />
        </LogoContainer>
    )
}
export default Logo