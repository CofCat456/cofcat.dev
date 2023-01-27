import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { BlogSEO } from '@/components/SEO';
import ProjectLayout from '@/layouts/ProjectLayout';

import mdxComponents from '@/lib/mdxComponents';
import { allProjects, Project } from '@/lib/contentLayerAdapter';

import siteMetadata from '@/data/siteMetadata';

type Props = {
  project: Project;
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = allProjects.map((project: Project) => project.path);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
  const projectIndex = allProjects.findIndex((project: Project) => project.slug === params?.slug);
  if (projectIndex === -1) {
    return {
      notFound: true,
    };
  }
  const projectFull = allProjects[projectIndex];
  const project: Project = {
    _id: projectFull._id,
    _raw: projectFull._raw,
    title: projectFull.title,
    slug: projectFull.slug,
    date: projectFull.date,
    path: projectFull.path,
    type: projectFull.type,
    description: projectFull.description,
    body: {
      code: projectFull.body.code,
      raw: projectFull.body.raw,
    },
  };

  if (!project) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      project,
    },
  };
};

const PostPage: NextPage<Props> = ({ project }) => {
  const {
    description,
    title,
    date,
    socialImage = '',
    path,
    body: { code },
  } = project;

  const MDXContent = useMDXComponent(code);

  return (
    <>
      <BlogSEO
        url={`${siteMetadata.siteUrl}${path}`}
        title={`${title} - ${siteMetadata.title}`}
        description={description}
        date={date}
        socialImage={socialImage}
      />
      <ProjectLayout project={project}>
        <MDXContent components={mdxComponents} />
      </ProjectLayout>
    </>
  );
};

export default PostPage;
