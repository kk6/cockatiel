import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const MDEditor = dynamic(
  // @ts-ignore
  () => import('@uiw/react-md-editor').then((mod) => mod.default),
  { ssr: false }
)

function HomePage() {
  const [value, setValue] = useState('**Hello world!!!**')
  return (
    <div data-color-mode="light">
      <MDEditor value={value} onChange={setValue} />
    </div>
  )
}

export default HomePage
