import React from 'react'
import { Helmet } from 'react-helmet'
import useSiteMetadata from '../use-site-metadata'

const seoTitle = title =>
  title ? `${title} | ${useSiteMetadata().title}` : useSiteMetadata().title

const metaDescription = (title, description) => {
  console.log(title, description)
  if (description) {
    return description
  } else if (title && useSiteMetadata().description) {
    return `${title} | ${useSiteMetadata().description}`
  } else if (useSiteMetadata().description) {
    return useSiteMetadata().description
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
