import { Tab } from '@headlessui/react';

import Card from '@/components/PagesComponents/Project/Card';
import CustomTab from '@/components/PagesComponents/Project/CustomTab';
import ContainerWrapper, { Size } from '@/components/Wrapper/ContainerWrapper';

import { allProject } from '@/data/projects';

const ProjectLayout = () => {
  return (
    <>
      <CustomTab>
        {Object.values(allProject).map((projects, idx) => (
          <Tab.Panel
            key={idx}
            className="focus:ring-3 p-4 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none"
          >
            <ContainerWrapper duration={0.6} size={Size.lg}>
              <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-12">
                {projects.map((project) => (
                  <Card key={project.title} project={project} />
                ))}
              </div>
            </ContainerWrapper>
          </Tab.Panel>
        ))}
      </CustomTab>
    </>
  );
};

export default ProjectLayout;
