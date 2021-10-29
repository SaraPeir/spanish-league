import React from 'react'
import { PageWrapper } from './StyledPage'

const Page = ({children}) => {
    return (
        <PageWrapper>
            {children}
        </PageWrapper>
    )
}

export default Page