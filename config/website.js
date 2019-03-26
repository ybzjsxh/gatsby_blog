const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Blog-Ybzjsxh', // Navigation and Site Title
  siteTitleAlt: 'Ybzjsxh', // Alternative Site title for SEO
  siteTitleShort: 'ybjzsxh', // short_name for manifest
  siteHeadline: 'Just a blog', // Headline for schema.org JSONLD
  siteUrl: 'https://ybzjsxh.top', // Domain of your site. No trailing slash!
  siteLanguage: 'zh-cn', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Personal blog',
  author: 'ybzjsxh', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@ybzjsxh', // Twitter Username
  ogSiteName: 'ybzjsxh', // Facebook Site Name
  ogLanguage: 'zh-CN', // Facebook Language
  // googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
