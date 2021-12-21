import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {IconType} from './types';

const IconContainer = styled.a`
    padding: 10px 10px;
    margin: 20px 10px;
    width: 100%;
    background-color: transparent;
    cursor: pointer;

`;

const Icon = (props: IconType) => {
    return (
        <IconContainer>
           <FontAwesomeIcon icon={props.icon} />
        </IconContainer>
    )
}

export default Icon;
