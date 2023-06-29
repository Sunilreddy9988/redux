const redux = require('redux')
const createStore = redux.createStore
const combinedreducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//action
function buycake(){
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}

function buyIcecream(){
    return{
        type: BUY_ICECREAM,
        info: 'second redux action'
    }
}

//initial state
const cakeinitialstate = {
    numofCake: 10
   
}

const icecreaminitialstate = {
    num0fIceCreams: 20
}

//reducer
const cakeReducer = (state=cakeinitialstate, action) =>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numofCake: state.numofCake - 1
        }
        default: return state
    }
}


const icecreamreducer = (state = icecreaminitialstate,action) => {
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            num0fIceCreams: state.num0fIceCreams -2
        }
        default: return state
    }
}

//combined reducer
const rootreducer =combinedreducers({
    cake: cakeReducer,
    icecream: icecreamreducer  
})

const store = createStore(rootreducer)
console.log('Initial State:', store.getState())
const unsubscribe = store.subscribe(()=> console.log('Updated State', store.getState()))
store.dispatch(buycake())
store.dispatch(buyIcecream())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buyIcecream())
unsubscribe()