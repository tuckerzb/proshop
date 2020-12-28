import React from 'react'
import Helmet from 'react-helmet'

const Meta = ({title, description, keywords}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome to ProShop',
    keywords: 'electronics, buy electronics, consumer electronics',
    description: 'We sell the best electronics on the planet!'
};

export default Meta
