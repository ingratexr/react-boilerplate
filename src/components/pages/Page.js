import React from 'react'
import PageWrap from '../shared/PageWrap'

function Page({ children, title }) {
    return (
        <PageWrap title={title}>
            {children}
        </PageWrap>
    )
}

export default Page
