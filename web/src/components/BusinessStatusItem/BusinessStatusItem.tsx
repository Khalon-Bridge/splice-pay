import { Circle, Text, HStack } from '@chakra-ui/react'
import { lowerCase, capitalize } from 'lodash'
type BusinessStatusItemProps = {
  label: string
  activeText: string
}

const BusinessStatusItem = ({ label, activeText }: BusinessStatusItemProps) => {
  const isActive = label === activeText
  return (
    <HStack color={'gray.500'} text="xs">
      <Circle h={2} w={2} bgColor={isActive ? 'lightgreen' : 'red.300'} />
      <Text fontSize="xs">{capitalize(lowerCase(label))}</Text>
    </HStack>
  )
}

export default BusinessStatusItem
