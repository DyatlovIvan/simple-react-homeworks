type initStateType = {
    theme:string
}
const initState:initStateType = {
    theme:'some'
};

export const themeReducer = (state = initState, action: any): any => { // fix any
    switch (action.type) {
        case 'CHANGE_THEME': {
            return {...state,theme:action.value}
        }
        default: return state;
    }
};

export const changeThemeC = (value:any) => {

    return{type:'CHANGE_THEME',value}as const
}; // fix any