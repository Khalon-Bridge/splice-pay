import create from 'zustand'
import { produce } from 'immer'
import { merge } from 'lodash'

type formInput = {
  name?: string
  type?: string
  information?: Record<string, unknown>
  settings?: Record<string, unknown>
}

type TStore = {
  input: formInput
  save: (data: Record<string, unknown>) => void
}

export const useStore = create<TStore>((set) => ({
  input: {},
  save: (data) => {
    set(
      produce((draft) => {
        draft.input = merge(draft.Input, data)
      })
    )
  },
}))
