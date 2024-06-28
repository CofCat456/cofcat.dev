export const seo = {
  description:
    '我叫 CofCat，一名前端工程師，在這裡你可以了解我的生活以及我眼中的世界。',
  title: 'CofCat',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://www.cofcat.com'
      : 'http://localhost:3000',
  ),
} as const
