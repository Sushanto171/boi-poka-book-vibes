const CheckLocalStorage = ( key) =>{
    const strLocalList = localStorage.getItem(key);
    const localList = JSON.parse(strLocalList);
    if(localList){
        const num = localList.map(m => parseInt(m));
        return(num)
    }
    return []
}
export default CheckLocalStorage;