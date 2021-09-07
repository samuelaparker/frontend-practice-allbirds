module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "frontend practice allbirds",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "wmdnwQkfe-emre_HxqJwu3cQ6cO1lWj0jUZ9EAqYzZA",
        spaceId: "jtnb4d50fsjd",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
