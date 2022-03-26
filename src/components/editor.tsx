import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import { Box } from '@chakra-ui/layout'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const MDEditor = dynamic(
  // @ts-ignore
  () => import('@uiw/react-md-editor').then((mod) => mod.default),
  { ssr: false }
)

export const Editor: React.VFC = () => {
  const [value, setValue] = useState('**Hello world!!!**')
  return (
    <Box data-color-mode="light">
      <MDEditor value={value} onChange={setValue} />
    </Box>
  )
}
