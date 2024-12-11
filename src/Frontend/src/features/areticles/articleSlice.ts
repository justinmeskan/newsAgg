import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface ArticleState {
    articles: Array<{ title: string; publishedAt: string; description: string | null; url: string; id: string; content: string; urlToImage: string}>
}

// Define the initial state using that type
export const initialState: ArticleState = {
    articles: [{ title: '', publishedAt: '', description: '', url: '', id: '' ,content: '', urlToImage: ''}],
}

export const articleSlice = createSlice({
    name: 'articles',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setArticles: (state, action: PayloadAction<any>) => {
            state.articles = action.payload
        },
        filterArticles: (state, action: PayloadAction<string>) => {
            console.log('Action.payload', action.payload)
            state.articles = state.articles.filter((item) => {
                if (item?.description === null) {
                    return false
                } else {
                    return item.description?.includes(action.payload)
                }
            })
        },
    },
})

export const { setArticles, filterArticles } = articleSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.articles.value

export default articleSlice.reducer
