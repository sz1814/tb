function deepCopy(obj) {
    var type = getType(obj);
    if(type != 'Object' && type != 'Array') {
        return obj;
    }
    var newObj = type === 'Array' ?  [] : {};
    for(var attr in obj) {
        newObj[attr] = deepCopy(obj[attr]);
    }
    return newObj;
}