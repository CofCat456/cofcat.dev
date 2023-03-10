import Image from 'next/image';

import siteMetadata from '@/data/siteMetadata';

interface Props {}

const AboutMe: React.FC<Props> = () => {
  return (
    <div className="mb-12 flex flex-col items-center pt-4 md:flex-row">
      <div className="mb:mb-0 mb-4 aspect-square w-44 overflow-hidden rounded-full md:mr-10">
        <Image src={siteMetadata.siteLogo} width={180} height={180} alt="CofCat" />
      </div>
      <div>
        <h1 className="mb-4 inline-flex items-end gap-1 text-4xl font-extrabold">
          {siteMetadata.title}
        </h1>
        <p className="text-lg leading-[1.75]">
          {siteMetadata.industry}
          <br />
          {siteMetadata.motto}
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
