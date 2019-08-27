import React from "react";
import { Helmet } from "react-helmet";
import UseSiteMetadata from "../use-site-metadata";

const seoTitle = title =>
  title ? `${title} | ${UseSiteMetadata().title}` : UseSiteMetadata().title;

const metaDescription = (title, description) => {
  if (description) {
    return description;
  } else if (title && UseSiteMetadata().description) {
    return `${title} | ${UseSiteMetadata().description}`;
  } else if (UseSiteMetadata().description) {
    return UseSiteMetadata().description;
  } else {
    return seoTitle(title);
  }
};

export const SEO = props => (
  <Helmet title={seoTitle(props.title)} defer={false}>
    <meta
      name="description"
      content={metaDescription(props.title, props.description)}
    />
    {/* TODO add more SEO fields here */}
  </Helmet>
);
