import { Avatar, Heading, HStack, VStack } from '@chakra-ui/react'

type CardListItemProps = {
  name?: string
  src?: string
  children?: React.ReactNode
}

const CardListItem = ({ name, src, children }: CardListItemProps) => {
  return (
    <HStack
      justify="start"
      align="start"
      bgColor="white"
      w="full"
      h="full"
      color="paragraph"
      borderRadius="lg"
      shadow={'md'}
      px={5}
      py={4}
    >
      {(name || src) && (
        <Avatar
          bgColor={'orange.100'}
          color={'primary'}
          name={name}
          src={src}
        />
      )}
      <VStack h="full" w={'full'} align="start">
        {name && <Heading size={'sm'}>{name}</Heading>}
        {children}
      </VStack>
    </HStack>
  )
}

export default CardListItem
