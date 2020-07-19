export const ADD_CATEGORY ="ADD_CATEGORY";
export const ADD_SUB_CATEGORY = "ADD_SUB_CATEGORY";




export const addCategory = (content) =>(
    {
        type: ADD_CATEGORY,
        payload:{
            content
        }
    }
);


export const addSubCategory = (content) => (
    {
        type:ADD_SUB_CATEGORY,
        payload:{
            content
        }
    }
);