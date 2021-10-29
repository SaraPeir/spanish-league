import styled from 'styled-components'
import {colors} from '../../../../styles/styled-components/commons'

export const Wrapper = styled.div.attrs(() => ({
    className: 'col-6 col-sm-3 col-md-2',
  }))`
    background-color: ${colors.secondaryColor};
    display: flex;
    flex-direction: column;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    min-width: 300px;
`