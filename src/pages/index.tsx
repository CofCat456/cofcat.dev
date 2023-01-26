import type { NextPage } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

import AuthorLayout from '@/layouts/AuthorLayout';
import AboutMe from '@/components/PagesComponents/Aboout/AboutMe';
import ContainerWrapper from '@/components/Wrapper/ContainerWrapper';

import { allPages, Page } from '@/lib/contentLayerAdapter';
import mdxComponents from '@/lib/mdxComponents';
import { PageSEO } from '@/components/SEO';

export function getStaticProps() {
  const page = allPages.find((page) => page.slug === 'about-me');
  return { props: { page } };
}

type Props = {
  page: Page;
};

const Home: NextPage<Props> = ({ page }) => {
  const MDXContent = useMDXComponent(page.body.code);
  return (
    <>
      <PageSEO />
      <ContainerWrapper>
        <AboutMe />
        <AuthorLayout>
          <MDXContent components={mdxComponents} />
        </AuthorLayout>
      </ContainerWrapper>
    </>
  );
};

export default Home;
