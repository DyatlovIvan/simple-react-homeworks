export type initStateType = {
    value:boolean
}
const initState = {
    value: false
}

export const loadingReducer = (state = initState, action: LoadingACType): initStateType => { // fix any
    switch (action.type) {
        case 'SHOW-LOADING': {
            return {...state,value:action.value}
        }
        default: return state
    }
}


// type LoadingACType = ReturnType<typeof loadingAC>

type LoadingACType = {
    type:'SHOW-LOADING'
    value:boolean
}
export const loadingAC = (value:boolean):LoadingACType => {
    return{
        type:'SHOW-LOADING',value
    }
} // fix any