// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Page = defineDocumentType(() => ({
  computedFields: {
    url: {
      resolve: (page) => `/pages/${page._raw.flattenedPath}`,
      type: 'string',
    },
  },
  contentType: 'mdx',
  fields: {
    date: { required: true, type: 'date' },
    public: { required: true, type: 'boolean' },
    slug: { required: true, type: 'string' },
    title: { required: true, type: 'string' },
  },
  filePathPattern: `**/*.mdx`,
  name: 'Page',
}));

export default makeSource({ contentDirPath: 'content', documentTypes: [Page] });
