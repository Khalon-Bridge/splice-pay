/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { useMutation } from '@redwoodjs/web'
import { Fragment } from 'react'

type MutationProviderProps= {
  options?: GraphQLMutationHookOptions<any, GraphQLOperationVariables>
  mutation?: any
  children?: (result:MutationOperationResult<any,any>) => React.ReactNode
}

const MutationProvider: React.FC<MutationProviderProps> = ({
  children,
  ...props
}) => {
  const result = useMutation(props.mutation, props.options)


  return <Fragment>{children && children(result)}</Fragment>
}

export default MutationProvider
