'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import siteMetadata from '~/config/siteMetadata'

const Avatar = () => {
  const [isShowAvatar] = useState(false)

  const { siteLogo } = siteMetadata

  // const toggleShowAvatar = useCallback(() => {
  //   setIsShowAvatar((preStatus) => !preStatus)
  // }, [])

  return (
    <motion.div
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      key={isShowAvatar ? 'logo' : 'logoReal'}
      transition={{ duration: 0.3, type: 'tween' }}
    >
      <Image
        alt="Site Owner Avatar"
        height={200}
        priority
        quality={100}
        src={siteLogo}
        width={200}
      />
    </motion.div>
  )
}

export default Avatar
