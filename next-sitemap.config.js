/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://www.cofcat.com'
      : 'http://localhost:3000',
  generateRobotsTxt: true, // (optional)
}
