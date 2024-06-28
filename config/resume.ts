import type { StaticImageData } from 'next/image'

import airaLogo from '~/assets/company/aira.png'
import chinalifeLogo from '~/assets/company/chinalife.png'
import skyRecLogo from '~/assets/company/skyRec.jpeg'

export type Resume = {
  company: string
  end: { dateTime: number; label: string } | string
  logo: StaticImageData
  start: { dateTime: number; label: string } | string
  title: string
}

export const resume: Resume[] = [
  // Example
  // {
  //   company: 'Google',
  //   title: '軟體工程師',
  //   logo: gooogleLogo,
  //   start: '2030',
  //   end: {
  //     label: '至今',
  //     dateTime: new Date().getFullYear(),
  //   },
  // },
  //
  {
    company: '城智科技股份有限公司',
    end: '至今',
    logo: airaLogo,
    start: '2024/01',
    title: '軟體工程師',
  },
  {
    company: 'SkyRec',
    end: '2023/01',
    logo: skyRecLogo,
    start: '2022/08',
    title: '前端開發實習生',
  },
  {
    company: '中國人壽保險股份有限公司（總公司）',
    end: '2020/08',
    logo: chinalifeLogo,
    start: '2022/07',
    title: '軟體工程師實習生',
  },
]
