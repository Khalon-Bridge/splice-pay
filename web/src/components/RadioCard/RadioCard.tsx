import { useRadio, Box, UseRadioProps, Heading, Text } from '@chakra-ui/react'

interface RadioCardTypes extends UseRadioProps {
  children?: React.ReactNode
  title?: string
  description?: string
}

const RadioCard = ({
  title,
  description,
  children,
  ...rest
}: RadioCardTypes) => {
  const { getInputProps, getCheckboxProps } = useRadio({ ...rest })

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        background="white"
        borderRadius="md"
        borderColor="Background"
        boxShadow="md"
        _checked={{
          color: 'paragraph',
          borderColor: 'primary',
        }}
        _focus={{
          boxShadow: 'none',
        }}
        _hover={{
          borderColor: 'primary',
        }}
        px={6}
        py={4}
      >
        {title && (
          <Heading mb={2} size="sm">
            {title}
          </Heading>
        )}
        {description && <Text fontSize="sm">{description}</Text>}
        {children}
      </Box>
    </Box>
  )
}

export default RadioCard
