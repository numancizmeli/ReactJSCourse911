let arr = ['a','b','c']

console.log(arr)

let arr2 = ['d','e',...arr]

console.log('arr2')

console.log(arr2)

console.log(arr[1])

arr.push('x')
console.log(arr)


arr.map((item,index)=>{

    console.log(index)

    console.log(item)

})

let itemIndex = arr.findIndex((item)=>{
    return item==='c'
})

console.log(itemIndex)