const flatten = (arrays) => {
    return arrays.reduce( (acc, cv) =>{
       return acc.concat(cv)
    },[])
}
console.log(flatten([[1,2,3],[4,5],[6]]))
