import Image from 'next/image';

import { Project } from '@/data/projects';
import CustomLink from '@/components/Custom/CustomLink';

type Props = {
  project: Project;
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  const {
    title,
    description,
    date,
    links: { site, post },
    image: { src: imgSrc, alt: imgAlt, placeholder: imgPlaceholder },
  } = project;

  const href = post ? post : site;

  return (
    <div className="group h-full rounded-md transition-colors">
      <CustomLink
        href={href}
        aria-label={`CustomLink to ${title}`}
        className="relative block aspect-video w-full cursor-pointer overflow-hidden rounded-lg object-cover shadow-lg transition-transform duration-500 lg:group-hover:scale-105"
      >
        <Image
          alt={imgAlt}
          src={imgSrc}
          className="bg-gray-300 object-cover object-center dark:bg-gray-700"
          quality="30"
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 344px, 472px"
          placeholder={imgPlaceholder}
        />
      </CustomLink>
      <h2 className="mb-3 mt-6 cursor-pointer text-2xl font-extrabold leading-8 tracking-tight transition-transform duration-1000 group-hover:translate-x-3">
        <CustomLink href={href} aria-label={`Link to ${title}`}>
          {title}
        </CustomLink>
      </h2>
      <p className="mt-2 cursor-pointer font-extrabold text-[#b2938d] transition-transform duration-700 group-hover:translate-x-4">
        {date}
      </p>
      <p
        className="line-clamp-3 mt-4 cursor-pointer transition-opacity group-hover:opacity-100 lg:opacity-40"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </div>
  );
};

export default ProjectCard;
