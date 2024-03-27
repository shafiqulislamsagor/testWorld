import { getStore } from "../components/store"

export const ActionClick = () =>{
    const stored = getStore();
    const sortedArray = stored.slice().sort((a, b) => b.rating - a.rating);
    // console.log(sortedArray);
    return sortedArray;
    
}