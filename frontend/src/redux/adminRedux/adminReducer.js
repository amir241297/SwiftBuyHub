const initialState={
    isLoading:false,
    isError:false,
    products:[],
    token:'',
    isAuth:false
}

export const adminReducer=(state=initialState,{type,payload})=>{
    console.log(type,payload)
    switch(type){
        default: return state
    }
}