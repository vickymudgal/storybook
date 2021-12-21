import React from 'react';
import styled from 'styled-components'
import { TodoType } from './types';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

import  Icon  from '../icons/Icon'

const IconWrapper = styled.span`
    margin-left:2rem;
`;

const ToDo = ({title, status}: {title: string, status: boolean}) => {

    const ToDoContainer = styled.div`
    padding: 10px;
    margin: 20px 0;
    width: 100%;
    background-color: ${status ? '#e6ffea' : '#ffe6e6'}; 
`;
    return (
        <ToDoContainer>
            {title}
            <IconWrapper>
                <Icon icon={faCheck} />
                <Icon icon={faTimes} />
            </IconWrapper>
        </ToDoContainer>

    )
} 

export default ToDo;