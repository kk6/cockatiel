import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import {
  Box,
  Flex,
  useColorMode,
  Switch,
  FormControl,
  FormLabel,
  Heading,
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const MDEditor = dynamic(
  // @ts-ignore
  () => import('@uiw/react-md-editor').then((mod) => mod.default),
  { ssr: false }
)

export const Editor: React.VFC = () => {
  const [value, setValue] = useState('**Hello world!!!**')
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box data-color-mode={colorMode}>
      <Flex p={4} justify="space-between">
        <Flex>
          <Heading>Markdown Editor</Heading>
        </Flex>
        <Flex>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="mode-switch" mb="0">
              Dark mode?
            </FormLabel>
            <Switch id="mode-switch" onChange={toggleColorMode} />
          </FormControl>
        </Flex>
      </Flex>
      <MDEditor value={value} onChange={setValue} />
    </Box>
  )
}
