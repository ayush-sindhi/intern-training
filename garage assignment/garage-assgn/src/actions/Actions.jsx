export const AddEntry=(item)=>{
    return {type:'ADD', payload:item}
}
export const AddLike=(id)=>{
    return {type:'LIKE',
            payload:id
}
}