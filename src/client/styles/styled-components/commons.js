import styled from 'styled-components'

export const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const colors = {
    mainColor: '#AA3A3B',
    secondaryColor: '#fffff',
    blackColor: '#00000'
}

export const TitleH2 = styled.h2`
    font-size: 24px;
    text-align: center;
    font-weight: bold;

    @media (min-width: ${size.tablet}) {
        font-size: 28px
    }   

    @media (min-width: ${size.desktop}) {
        font-size: 36px
    }
`;

export const TitleH4 = styled.h4`
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

export const TitleH5 = styled.h5`
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

export const Paragraph = styled.p`
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

export const CardBodyRelativeDiv = styled.div.attrs(() => ({
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

  export const ItemsDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    text-align: center;
  `;