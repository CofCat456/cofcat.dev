import ContainerWrapper, { Size } from '@/components/Wrapper/ContainerWrapper';
import ProjectLayout from '@/layouts/ProjectLayout';

const Projects: React.FC = () => {
  return (
    <ContainerWrapper size={Size.lg}>
      <ProjectLayout />
    </ContainerWrapper>
  );
};

export default Projects;
