module.exports = {
  siteMetadata: {
    title: "Ladies that UX Boston",
    titleTemplate: "A Boston meetup group",
    description:
      "Ladies that UX Boston (LTUX Boston) is a meetup group for people interested in user experience and other design topics in the Boston area",
    author: "@katielangerman",
    twitterUsername: "@LadiesThatUXBOS",
    image: "ltuxboston-share.jpg",
    url: "https://www.ladiesthatuxboston.com",
    siteUrl: "https://www.ladiesthatuxboston.com",
  },
  plugins: [
    "gatsby-plugin-eslint",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-less",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `ltuxbos`,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://ladiesthatux.us12.list-manage.com/subscribe/post?u=b96f7627f43794d6c133035bd&amp;id=8c099cce18",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#ff5d40",
        theme_color: "#ff5d40",
        display: "minimal-ui",
        icon: "src/images/ltuxbostonicon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-137392271-1",
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "ladiesthatuxboston.com",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
