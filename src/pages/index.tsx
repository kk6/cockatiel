import { Box } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import { Editor } from '@/components/editor'

const Home: NextPage = () => {
  return (
    <Box maxW="960px">
      <Editor />
    </Box>
  )
}

export default Home
