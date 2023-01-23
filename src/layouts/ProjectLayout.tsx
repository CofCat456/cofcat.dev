import { Tab } from '@headlessui/react';

import Card from '@/components/PagesComponents/Project/Card';
import CustomTab from '@/components/PagesComponents/Project/CustomTab';
import ContainerWrapper, { Size } from '@/components/Wrapper/ContainerWrapper';

import { allProject, Project } from '@/data/projects';
import { compareDesc } from 'date-fns';

export function convertNew2Old(projects: Project[]): Project[] {
  return (
    projects?.sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    }) || []
  );
}

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
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                {convertNew2Old(projects).map((project) => (
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
