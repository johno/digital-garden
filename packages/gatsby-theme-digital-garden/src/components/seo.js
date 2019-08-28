import React from 'react'
import { Helmet } from 'react-helmet'
import getSiteMetadata from '../get-site-metadata'

const seoTitle = title =>
  title ? `${title} | ${getSiteMetadata().title}` : getSiteMetadata().title

const metaDescription = (title, description) => {
  if (description) {
    return description
  } else if (title && getSiteMetadata().description) {
    return `${title} | ${getSiteMetadata().description}`
  } else if (getSiteMetadata().description) {
    return getSiteMetadata().description
  } else {
    return seoTitle(title)
  }
}

export const SEO = props => (
  <Helmet title={seoTitle(props.title)} defer={false}>
    <meta
      name="description"
      content={metaDescription(props.title, props.description)}
    />
    {/* TODO add more SEO fields here */}
  </Helmet>
)
