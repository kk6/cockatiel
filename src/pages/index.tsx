import type { NextPage } from 'next'
import { Editor } from '@/components/Editor'
import { Layout } from '@/components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Editor />
    </Layout>
  )
}

export default Home
