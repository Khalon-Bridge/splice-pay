import create from 'zustand'
import { produce } from 'immer'

type TStore = {
  currentStoreId?: string
  setStoreId?: (id: string) => void
}

export const useStore = create<TStore>((set) => ({
  currentStoreId: null,
  setStoreId: (id) => {
    set(
      produce((draft) => {
        draft.currentStoreId = id
      })
    )
  },
}))
