import { Text, HStack, Icon } from '@chakra-ui/react'
import CardListItem from 'src/components/CardListItem/CardListItem'
import { AiOutlinePlus } from 'react-icons/ai'
const ADD_ACTION_TEXT = 'Add new business'

const CreateBusinessButton = () => {
  return (
    <CardListItem>
      <HStack
        color="gray.500"
        fontWeight={'semibold'}
        w="full"
        h="full"
        justify={'center'}
        _hover={{ opacity: 0.8 }}
      >
        <Icon w={5} h={5} as={AiOutlinePlus} />
        <Text>{ADD_ACTION_TEXT}</Text>
      </HStack>
    </CardListItem>
  )
}

export default CreateBusinessButton
