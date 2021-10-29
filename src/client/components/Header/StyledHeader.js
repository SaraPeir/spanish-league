import styled from 'styled-components'
import {colors} from '../../styles/styled-components/commons';

export const mainColor = colors.mainColor;

export const HeaderWrapper = styled.div`
    background-color: ${mainColor};
    display: flex;
    justify-content: end;
    height: auto;
    margin: auto 0;
    padding: 20px
    width: 100%;
`