function getIndex(value, arr, prop) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i][prop] === value) {
            return i;
        }
    }
    return -1; //to handle the case where the value doesn't exist
}
function getNameById(users,id){
    console.info(users,id);
    return users.find(function(user){
        return user.id==id;
    })
}
export {getIndex, getNameById}