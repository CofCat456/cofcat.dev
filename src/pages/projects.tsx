import ProjectsLayout from '@/layouts/ProjectsLayout';

import { PageSEO } from '@/components/SEO';
import ContainerWrapper from '@/components/Wrapper/ContainerWrapper';

import siteMetadata from '@/data/siteMetadata';
import { Size } from '@/_interface';

const Projects: React.FC = () => {
  return (
    <>
      <PageSEO title={`${siteMetadata.title} All Projects`} />
      <ContainerWrapper size={Size.lg}>
        <ProjectsLayout />
      </ContainerWrapper>
    </>
  );
};

export default Projects;
