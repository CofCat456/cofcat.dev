import Projects from '~/app/(main)/projects/Projects'

const title = '我的專案'
const description =
  '從我開始踏上前端之旅時，我就會喜歡到處找設計稿來切版，或是找找有什麼好玩的項目可以練練手，下面這些是我篩選出來的項目合集，裡頭有各式各樣的樣目有開源、大型電商網站、實驗的，也有單純切版練習的，是我最近退伍後，所完成的項目。'

export const metadata = {
  description,
  openGraph: {
    description,
    title,
  },
  title,
}

export default function ProjectPage() {
  return (
    <div className="mt-6 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          我最喜歡的專案們
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          從我開始踏上前端之旅時，我就會喜歡到處找設計稿來切版，或是找找有什麼好玩的項目可以練練手，
          下面這些是我篩選出來的項目合集，裡頭有各式各樣的樣目有<b>開源</b>、
          <b>大型電商網站</b>、<b>實驗</b>
          的，也有單純切版練習的，是我最近退伍後，所完成的項目。
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <Projects />
      </div>
    </div>
  )
}
