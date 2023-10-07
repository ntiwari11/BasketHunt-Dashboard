import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    cards: {
        loading: false, error: false,
        cardsData: [
            {
                id: 1,
                appName: "BasketHunt Academy",
                appLogo: "https://via.placeholder.com/40",
            },
            {
                id: 2,
                appName: "BasketHunt Atlas",
                appLogo: "https://via.placeholder.com/40",
            },
            {
                id: 3,
                appName: "BasketHunt Career",
                appLogo: "https://via.placeholder.com/40",
            },
            {
                id: 4,
                appName: "BasketHunt Office",
                appLogo: "https://via.placeholder.com/40",
            },
            {
                id: 5,
                appName: "BasketHunt Training",
                appLogo: "https://via.placeholder.com/40",
            },
            {
                id: 6,
                appName: "BasketHunt Wiki",
                appLogo: "https://via.placeholder.com/40",
            },
            {
                id: 7,
                appName: "BasketHunt WorkPlace",
                appLogo: "https://via.placeholder.com/40",
            },
            {
                id: 8,
                appName: "BasketHunt Zoho Cliq",
                appLogo: "https://via.placeholder.com/40",
            },
        ]
    }
}

export const cardListSlice = createSlice({
    name: "cardList",
    initialState,
    reducers: {
        removeCard: (state, action) => {
            state.cards.cardsData=state.cards.cardsData.filter(card => card.id !== action.payload)
        }
    },
})

export const { removeCard } = cardListSlice.actions;
export default cardListSlice.reducer;