module.exports = {
  pathPrefix: "/solution-wca4z",
  siteMetadata: {
    title: 'solution-wca4z',
    description: 'IBM Client Engineering | Watsonx Code Assist for Z',
    keywords: 'IBM, Client Engineering, wca4z, watsonx',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'IBM Client Engineering | Watsonx Code Assist for Z',
        icon: 'src/images/favicon.svg',
        short_name: 'solution-wca4z',
        start_url: '/solution-wca4z',
        background_color: '#ffffff',
        theme_color: '#161616',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        theme: {
          homepage: 'g10',
          interior: 'g10',
        },
        isSwitcherEnabled: false,
        titleType: 'prepend',
        repository: {
          baseUrl: 'https://github.com/ibm-client-engineering/solution-wca4z',
        },
      },
    },
    { 
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          "G-GB0XWXF3GE",
        ],
        gtagConfig: {
          anonymize_ip: true
        },
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-mermaid`,
            options: /** @type {import('gatsby-remark-mermaid').Options} */ ({
              mermaidConfig: {
                theme: 'neutral',
                themeCSS: '.node rect { fill: #fff; }'
              }
            })
          }
        ],
      },
    },
  ],
};
