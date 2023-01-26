import { PageSEO } from '@/components/SEO';
import ContainerWrapper, { Size } from '@/components/Wrapper/ContainerWrapper';
import ProjectLayout from '@/layouts/ProjectLayout';

import siteMetadata from '@/data/siteMetadata';

const Projects: React.FC = () => {
  return (
    <>
      <PageSEO title={`${siteMetadata.title} All Projects`} />
      <ContainerWrapper size={Size.lg}>
        <ProjectLayout />
      </ContainerWrapper>
    </>
  );
};

export default Projects;
