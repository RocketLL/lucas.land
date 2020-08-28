module.exports = {
  siteMetadata: {
    title: `lucas.land`,
    description: `Website of Lucas Lee.`,
    author: `Lucas Lee`,
    url: `https://lucas.land/`,
    image: `/card.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `lucas.land`,
        short_name: `lucas.land`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#3310b1`,
        display: `browser`,
        icon: `src/images/ll-logo.png`,
        localize: [
          {
            start_url: `/kr/`,
            lang: `kr`,
            name: `lucas.land`,
            short_name: `lucas.land`,
            description: `Website of Lucas Lee.`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        remarkPlugins: [require(`remark-math`)],
        rehypePlugins: [require(`rehype-katex`), require(`rehype-prism`)],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts/kr`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts/en`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require("autoprefixer")()],
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-99631920-3",
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
}
