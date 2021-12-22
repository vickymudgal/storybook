import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

import  Icon  from '../icons/Icon'

interface Props {
    status: boolean;
}

const ToDoContainer = styled.div<Props>`
    padding: 10px;
    margin: 20px 0;
    width: 100%;
    background-color: ${props => props.status ? '#deffe9' : '#ffe6e6'}; 
`;

const IconWrapper = styled.span`
    margin-left:2rem;
`;

const ToDo = ({title, status}: {title: string, status: boolean}) => {

    return (
        <ToDoContainer status = {status}>
            {title}
            <IconWrapper>
                <Icon icon={faCheck} />
                <Icon icon={faTimes} />
            </IconWrapper>
        </ToDoContainer>

    )
} 

export default ToDo;


ToDo.propTypes = {
    title: PropTypes.string,
    status: PropTypes.bool
  };
  
  ToDo.defaultProps = {
    title: '',
    status: false
  };
  