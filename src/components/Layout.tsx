import { Box } from '@chakra-ui/layout'

type Props = {
  children: React.ReactNode
}

export const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <>
      <Box mb={24}>{children}</Box>
    </>
  )
}
