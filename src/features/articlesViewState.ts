import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ArticleViewState {
  displayMode: 'grid' | 'list'
}

const initialState: ArticleViewState = {
    displayMode: 'list'
}

export const articleViewState = createSlice({
  name: 'viewState',
  initialState,
  reducers: {
    toggleDisplayMode: (state, action: PayloadAction<ArticleViewState['displayMode']>) => {
      state.displayMode = action.payload
    },
  },
})

export const { toggleDisplayMode } = articleViewState.actions

export default articleViewState.reducer