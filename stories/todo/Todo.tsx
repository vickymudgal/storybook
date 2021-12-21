import React from 'react';
import styled from 'styled-components'
import { TodoType } from './types';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

import  Icon  from '../icons/Icon'

const ToDoContainer = styled.div`
    padding: 5px 10px;
    margin: 20px 0;
    width: 100%;
    background-color: #fafeff;
`;

const ToDo = (taskData: TodoType) => {
    return (
        <ToDoContainer>
            {taskData.title}
            <Icon icon={faCheck} />
            <Icon icon={faTimes} />
        </ToDoContainer>

    )
} 

export default ToDo;