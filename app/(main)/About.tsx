'use client';

import { motion } from 'framer-motion';
import { type PropsWithChildren } from 'react';
import Balancer from 'react-wrap-balancer';

import Avatar from '~/app/(main)/Avatar';
import Resume from '~/app/(main)/Resume';
import SocialLink from '~/components/SocialLink';
import siteMetadata from '~/config/siteMetadata';

const About = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex w-full flex-col flex-wrap items-start justify-center pt-4 font-bold sm:my-12 md:flex-row md:gap-x-10 md:gap-y-6">
      <div className="mb:mb-0 relative mx-auto mb-4 overflow-hidden rounded-full sm:mx-0">
        <Avatar />
      </div>
      <div className="mb-6 flex-1 md:mb-0">
        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          transition={{
            duration: 0.3,
            mass: 0.6,
            stiffness: 100,
            type: 'spring',
          }}
        >
          {siteMetadata.title}
        </motion.h1>
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
          initial={{ opacity: 0, y: 40 }}
          transition={{
            delay: 0.1,
            duration: 0.3,
            mass: 0.6,
            stiffness: 85,
            type: 'spring',
          }}
        >
          <Balancer>
            {siteMetadata.industry}
            <br />
            {siteMetadata.motto}
          </Balancer>
        </motion.p>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 flex gap-4"
          initial={{ opacity: 0, y: 50 }}
          transition={{
            delay: 0.25,
            duration: 0.35,
            mass: 0.5,
            stiffness: 90,
            type: 'spring',
          }}
        >
          <SocialLink
            aria-label="我的推特"
            href={siteMetadata.social.twitter}
            platform="twitter"
          />
          <SocialLink
            aria-label="我的 YouTube"
            href={siteMetadata.social.youtube}
            platform="youtube"
          />
          <SocialLink
            aria-label="我的 GitHub"
            href={siteMetadata.social.github}
            platform="github"
          />
          <SocialLink
            aria-label="我的信箱"
            href={siteMetadata.social.email}
            platform="mail"
          />
        </motion.div>
      </div>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-flow-row gap-6 md:grid-flow-col md:grid-cols-5"
        initial={{ opacity: 0, y: 30 }}
        transition={{
          delay: 0.35,
          duration: 0.8,
          mass: 0.5,
          stiffness: 95,
          type: 'spring',
        }}
      >
        <div className="md:col-span-3">{children}</div>
        <div className="md:col-span-2">
          <Resume />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
