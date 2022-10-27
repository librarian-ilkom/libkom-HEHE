import React from 'react';
import LogoWrap from './Logo.style';
import { logo } from '../../../../../assets';
const Logo = () => {
    return (
        <LogoWrap>
            <img src={logo} alt="logo e-lib" />
        </LogoWrap>
    );
}

export default Logo;