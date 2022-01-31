import { Status } from 'types/graphql'

// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  businesses: [
    { id: '42', name: 'My First Store', status: 'ACTIVE' as Status },
    { id: '43', name: 'My Second Store', status: 'DISABLED' as Status },
    { id: '44', name: 'My Third Store', status: 'ACTIVE' as Status },
  ],
})
