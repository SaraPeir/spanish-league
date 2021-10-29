import React from 'react'
import {ItemsDiv} from '../../styles/styled-components/commons';

const Spinner = () => {
    return (
        <ItemsDiv>
            <div className="spinner-border" role="status">
                <span className="sr-only"></span>
            </div>
        </ItemsDiv>
    )
}

export default Spinner;

