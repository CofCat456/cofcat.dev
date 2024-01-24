import './env.mjs';

import { LiveExporter, toKebabCase } from '@inkdropapp/live-export';

const {
  INKDROP_USERNAME = '',
  INKDROP_PASSWORD = '',
  INKDROP_PORT,
  INKDROP_BOOKID_PAGES = '',
} = process.env;

console.log(
  INKDROP_USERNAME,
  INKDROP_PASSWORD,
  INKDROP_PORT,
  INKDROP_BOOKID_PAGES
);

const liveExport = new LiveExporter({
  username: INKDROP_USERNAME,
  password: INKDROP_PASSWORD,
  port: Number(INKDROP_PORT),
});

const basePath = `./content/pages`;
const publicPath = `./public/pages`;

(async () =>
  await liveExport.start({
    live: true,
    bookId: INKDROP_BOOKID_PAGES,
    preProcessNote: ({ note, frontmatter }) => {
      frontmatter.title = note.title;
      // Convert note title to kebab case (eg. "kebab-case-note-title")
    },
    pathForNote: ({ /* note, */ frontmatter }) => {
      // export only if it's public
      if (frontmatter.public) {
        return `${basePath}/${frontmatter.slug}.mdx`;
      } else return false;
    },
    urlForNote: ({ frontmatter }) => {
      if (frontmatter.public) {
        return `/pages/${frontmatter.slug}`;
      } else return false;
    },
    pathForFile: ({ mdastNode, /* note, file, */ extension, frontmatter }) => {
      if (frontmatter.slug && mdastNode.alt) {
        const fn = `${frontmatter.slug}_${toKebabCase(
          mdastNode.alt
        )}${extension}`;
        const res = {
          filePath: `${publicPath}/${fn}`,
          url: `/pages/${fn}`,
        };
        // If the `alt` attribute of the image is 'thumbnail', use it as a hero image
        if (mdastNode.alt === 'thumbnail') {
          frontmatter.heroImage = res.filePath;
        }
        return res;
      } else return false;
    },
    postProcessNote: ({ md }) => {
      // Remove the thumbnail image from the Markdown body
      const md2 = md.replace(/\!\[thumbnail\]\(.*\)\n/, '');
      return md2;
    },
  }))();
