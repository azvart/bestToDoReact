import {ADD_CATEGORY,ADD_SUB_CATEGORY} from './action';


const initialState = {
   
    data:
    {
        category:{
            content:[],
            subCategory:{
                content: [],
                task:{
                    content: []
                }
            }
        }
    }
}


export const stateCategory = (state=initialState,action)=>{
    switch(action.type){
        case ADD_CATEGORY:{
        return(
            {
                ...state,
                data:{
                    ...state.data,
                    category:{
                        content:[...state.data.category.content,action.payload.content],
                        subCategory:{
                            content:[...state.data.category.subCategory.content],
                            task:{
                                content:[...state.data.category.subCategory.task.content]
                            }
                        }
                    },
                },
                
            }
        )
        }
        case ADD_SUB_CATEGORY:{
            return(
                {
                    ...state,
                    data:{
                        ...state.data,
                        category:{
                            content:[...state.data.category.content],
                            subCategory:{
                                content:[...state.data.category.subCategory.content,action.payload.content],
                                task:{
                                    content:[...state.data.category.subCategory.task.content]
                                }
                            }
                        },
                    },
                }
            )
        }
        default:{
            return state
        }
    }
}







