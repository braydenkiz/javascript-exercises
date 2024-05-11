const removeFromArray = function(arr,...num) {
    const result = [];
    arr.forEach(element => {
        if(!num.includes(element)){
            result.push(element);
        }
    });
    
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
