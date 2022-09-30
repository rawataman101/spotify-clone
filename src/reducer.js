export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // remove after finished developing...
    // token: "BQC03dsPDKemUte3Y9-_evlDSe_FXWlJ2POqNovWscsCx67RzcIfi380jBstJkexHSShOVP3GXwjFG_gsWsIxLAfA01RKuRNl2qhGpI1Kf5uof2GgcjYhO-h5pm8L3lwpF8vzgZ21h_Yj4B6hvyfWM6eiBgglMzYN-30S5Evc8oIlD7CeZH8zfwOaFrYVmpvWYE35nPbbG1Wsscg",
}

const reducer = (state, action) => {
    console.log(action);

//Action -> type, [payload]
    switch(action.type) {
        case 'SET_USER': 
        return {
            ...state,
            user: action.user,
        };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
          
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }; 
        default: return state;  
    }
};

export default reducer;