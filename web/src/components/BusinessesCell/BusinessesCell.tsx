import type { BusinessesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Wrap, WrapItem } from '@chakra-ui/react'
import CardListItem from '../CardListItem/CardListItem'
import BusinessStatusItem from '../BusinessStatusItem/BusinessStatusItem'
import { Link, routes } from '@redwoodjs/router'
import CreateBusinessButton from '../CreateBusinessButton/CreateBusinessButton'
export const QUERY = gql`
  query BusinessesQuery {
    businesses {
      id
      name
      status
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ businesses }: CellSuccessProps<BusinessesQuery>) => {
  return (
    <Wrap spacing={4}>
      {businesses.map((item, key) => {
        return (
          <WrapItem
            to={routes.dashboard({ storeId: item.id })}
            as={Link}
            key={key}
            w="2xs"
          >
            <CardListItem name={item.name}>
              <BusinessStatusItem activeText="ACTIVE" label={item.status} />
            </CardListItem>
          </WrapItem>
        )
      })}
      <WrapItem h={'full'} to={routes.createBusiness()} as={Link} w="2xs">
        <CreateBusinessButton />
      </WrapItem>
    </Wrap>
  )
}
