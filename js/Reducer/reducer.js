
const GithubReducer = (state,action)=>{
   switch(action.type){
      case "SEARCH_USERS":
        return {
            ...state,
            users:action.payload,
            loading:false
        }
      case "STOP_LOADİNG":
         return {
            ...state,
            loading:false
         }
      case "SET_LOADİNG":
       return {
           ...state,
           loading:true
       }
      case "CLEAR_RESULT":
       return {
          ...state,
          users:[],
          loading:false
       }
      case "GET_USER":
       return {
          ...state,
          user:action.payload,
          loading:false
       } 
     default:
       return state
   }
}

export default GithubReducer

