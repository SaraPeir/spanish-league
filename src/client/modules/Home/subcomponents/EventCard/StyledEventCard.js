import styled from 'styled-components'
import {colors} from '../../../../styles/styled-components/commons'

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

// I could not use the makeContainer mixing otherwise I got no alignment
export const Wrapper = styled.div.attrs(() => ({
  className: 'col-12 col-md-6',
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

export const Title = styled.h4`
    font-size: 22px;
    text-align: center;
    font-weight: bold;

    @media (min-width: ${size.mobileL}) {
        font-size: 18px
    }   

    @media (min-width: ${size.desktop}) {
        font-size: 16px
    }
`;

export const Text = styled.h5`
    font-size: 22px;
    text-align: center;
    font-weight: normal;

    @media (min-width: ${size.mobileL}) {
        font-size: 18px
    }

    @media (min-width: ${size.desktop}) {
        font-size: 16px
    }
`;

export const CardTextBodyDiv = styled.div`
    padding: 16px
`

export const CardBodyDiv = styled.div.attrs(() => ({
    className: 'col-9',
  }))`
    position: relative
`

export const Row = styled.div.attrs(() => ({
    className: 'row g-0',
  }))`
  padding: 5px
`;

export const DivWithBorder = styled.div.attrs(() => ({
    className: 'border col-12',
  }))`
    border-radius: 0;
  `;
