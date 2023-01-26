import Head from 'next/head';
import { useRouter } from 'next/router';

import siteMetadata from '@/data/siteMetadata';

type PageSEOProps = {
  title?: string;
  description?: string;
};

type CommonSEOProps = {
  title: string;
  description: string;
  ogType: string;
  ogImage: string;
};

type BlogSEOProps = {
  title: string;
  description: string;
  date: string;
  url: string;
  images?: string[];
  socialImage: string;
};

const CommonSEO = ({ title, description, ogType, ogImage }: CommonSEOProps) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" key="description" content={description} />
      <meta property="og:url" key="og:url" content={`${siteMetadata.siteUrl}${router.asPath}`} />
      <meta property="og:type" key="og:type" content={ogType} />
      <meta property="og:site_name" key="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" key="og:description" content={description} />
      <meta property="og:title" key="og:title" content={title} />
      <meta property="og:image" key="og:image" content={ogImage} />
    </Head>
  );
};

export const PageSEO = ({
  title = siteMetadata.title,
  description = siteMetadata.description,
}: PageSEOProps) => {
  const ogImage = siteMetadata.siteUrl + siteMetadata.socialBanner;
  return <CommonSEO title={title} description={description} ogType="website" ogImage={ogImage} />;
};

export const getPostOGImage = (socialImage: string): string => {
  if (socialImage) {
    if (socialImage.startsWith('http')) {
      return socialImage;
    } else {
      return siteMetadata.siteUrl + socialImage;
    }
  }
  return siteMetadata.siteUrl + siteMetadata.socialBanner;
};

export const BlogSEO = ({
  title,
  description,
  date,
  url,
  images = [],
  socialImage,
}: BlogSEOProps) => {
  const router = useRouter();
  const publishedAt = new Date(date).toISOString();
  const imagesArr =
    images.length === 0
      ? [siteMetadata.socialBanner]
      : typeof images === 'string'
      ? [images]
      : images;

  const featuredImages = imagesArr.map((img) => {
    return {
      '@type': 'ImageObject',
      url: `${siteMetadata.siteUrl}${img}`,
    };
  });

  const authorList = {
    '@type': 'Person',
    name: siteMetadata.author,
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: title,
    image: featuredImages,
    datePublished: publishedAt,
    author: authorList,
    publisher: {
      '@type': 'Organization',
      name: siteMetadata.title,
      logo: {
        '@type': 'ImageObject',
        url: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
      },
    },
    description: description,
  };

  const ogImage = getPostOGImage(socialImage);

  return (
    <>
      <CommonSEO title={title} description={description} ogType="article" ogImage={ogImage} />
      <Head>
        {date && <meta property="article:published_time" content={publishedAt} />}
        <link rel="canonical" href={`${siteMetadata.siteUrl}${router.asPath}`} />
        <link rel="icon" href="/favicon/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2),
          }}
        />
      </Head>
    </>
  );
};
