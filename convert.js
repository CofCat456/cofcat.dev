const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const grayMatter = require('gray-matter');

const contentDir = 'content';
const pagesDir = 'pages';
const postsDir = 'posts';
const projectsDir = 'projects';

const processDirectory = (dir) => {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const fileStat = fs.lstatSync(filePath);
    if (fileStat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.md')) {
      const mdxFile = file.replace('.md', '.mdx');
      const mdxFilePath = path.join(dir, mdxFile);
      fs.readFile(filePath, 'utf8', (err, fileData) => {
        if (err) {
          console.error(err);
          return;
        }
        const { content, data } = grayMatter(fileData, { frontmatter: 'yaml' });
        const mdxContent = `---\n${yaml.dump(data)}---\n\n${content}`;
        fs.writeFile(mdxFilePath, mdxContent, (err) => {
          if (err) {
            console.error(err);
          } else {
            fs.unlinkSync(filePath);
          }
        });
      });
    }
  });
};

processDirectory(path.join(contentDir, pagesDir));
processDirectory(path.join(contentDir, postsDir));
processDirectory(path.join(contentDir, projectsDir));
