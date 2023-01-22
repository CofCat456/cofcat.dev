import Image from 'next/image';
import { FaCat } from 'react-icons/fa';

import siteMetadata from '@/data/siteMetadata';

const AboutMe: React.FC = () => {
  return (
    <div className="mb-12 flex items-center pt-4 md:flex-row">
      <div className="aspect-square w-44 overflow-hidden rounded-full md:mr-10">
        <Image src="/me.jpg" width={180} height={180} alt="CofCat" />
      </div>
      <div>
        <h1 className="mb-4 inline-flex items-end gap-1 text-4xl font-extrabold">
          {siteMetadata.title}
          <FaCat className="m-1 h-5 w-5" />
        </h1>
        <p className="text-lg leading-[1.75] text-cc-text transition-colors dark:text-cc-dark-text">
          {siteMetadata.industry}
          <br />
          {siteMetadata.motto}
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
