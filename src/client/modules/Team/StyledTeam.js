import styled from 'styled-components'
import {colors, size, CardTextBodyDiv} from '../../styles/styled-components/commons'

export const blackColor = colors.blackColor;

export const Wrapper = styled.div`
    background-color: ${colors.secondaryColor};
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    min-width: 300px;
    width: 100%;

    @media (min-width: ${size.tablet}) {
        width: 70%;
    }   
`

export const CardItemsDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-radius: 0;
    height: 100px;
    width: 100%;
    text-align: center;
  `;

  export const TeamCardTextBodyDiv = styled(CardTextBodyDiv)`
    display: flex;
    flex-direction: column;
    width: 100%;
  `