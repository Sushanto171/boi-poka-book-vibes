
const CheckedDb =(id)=> {
    const getLocalStorageList = ()=>{
        const storedListStr = localStorage.getItem("read-List")
        if(storedListStr){
            const storedList = JSON.parse(storedListStr)
            return storedList
        }else{
            return [];
        }
    }
    const addStoredList = (id)=>{
        const storedList = getLocalStorageList();
        if(storedList.includes(id)){
            console.log(storedList)
        }else{
            storedList.push(id);
            const storedListStr= JSON.stringify(storedList);
            localStorage.setItem("read-List",storedListStr);
        }
    }
    addStoredList(id);

}

export default CheckedDb;