module.exports = {
  siteMetadata: {
    title: `Headquarters`,
    siteUrl: `https://www.headquarters.kw.com`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: `tms2c0gop64p`,
  accessToken: `i_9XtYcW9WzPzX__-dR0LTsU6LzHVuMWaDpP_1BXvs4`
    }
  }, {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /images/
      }
    }
  },
  "gatsby-plugin-sass",
   "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};