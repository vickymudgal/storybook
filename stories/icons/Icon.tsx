import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {IconType} from './types';

const IconContainer = styled.a`
    padding: 5px 10px;
    margin: 20px 0;
    width: 100%;
    background-color: #fafeff;
    cursor: pointer
`;

const Icon = (props: IconType) => {
    return (
        <IconContainer>
           <FontAwesomeIcon icon={props.icon} />
        </IconContainer>
    )
}

export default Icon;
