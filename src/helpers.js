Array.prototype._findWhereId = function findWhereId(objectID){
    let thisIndex = null
    this.find((x,index)=>{
        if(x.id == Number(objectID)){
            return thisIndex = index
        }
    })
    return thisIndex
}

Array.prototype.__findWhereInnerKeyHasValue = function __innerKeyHasValue(key, value){
    return this.findIndex((innerObj) => innerObj[key] === value)
}

String.prototype.__toSentenceCase = function toSentenceCase(){
	let string = this
	return string.slice(0,1).toUpperCase() + string.substring(1).toLowerCase()
}

Array.prototype.__getWhereInnerKeyHasValue = function __innerKeyHasValue(key, value){
    return this[this.__findWhereInnerKeyHasValue(key, value)]
}
