import { type Project } from 'contentlayer/generated';
import { allProjects } from 'contentlayer/generated';
import { type MDXComponents } from 'mdx/types';
import { notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer/hooks';

import Layout from '~/components/md/Layout';
import { compareDesc } from '~/lib/compareDesc';
import mdxComponents from '~/lib/mdxComponents';

function getProject(slug: string) {
  const projects = allProjects.sort((a, b) =>
    compareDesc(a.createdAt, b.createdAt)
  );

  const projectIndex = projects.findIndex(
    (project: Project) => project.slug === slug
  );

  if (projectIndex === -1) {
    notFound();
  }

  const project: Project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  return {
    project,
  };
}

export default function BlogPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { project } = getProject(slug);

  const {
    body: { code },
  } = project;

  const MDXContent = useMDXComponent(code);

  return (
    <Layout markdownPost={project}>
      <MDXContent components={mdxComponents as MDXComponents} />
    </Layout>
  );
}
