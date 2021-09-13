const { appendFile } = require("fs")

let arr = ['one','two','three']
console.log(arr[0])         //one

arr = [1,2,3,'a','b',{x:0,y:1},{name:'algml'}]

// 특정 함수의 기능과 반환하는 값은 다르다.************************************

console.log(arr.push({age:"26"}))  // ===================push  //배열에 요소추가
// 변경된 배열의 길이 반환   //8
// 배열에 요소 추가
console.log(arr) 
//[ 1, 2, 3, 'a', 'b', { x: 0, y: 1 }, { name: 'algml' }, { age: '26' } ]


// 배열의 요소 삭제
arr.splice(0,3)     // =====================splice  // 배열에 요소 삭제
//첫번째 인자값의 인덱스부터 두번째 인자값만큼 삭제
console.log(arr)
//[ 'a', 'b', { x: 0, y: 1 }, { name: 'algml' }, { age: '26' } ]

//Array.isArray()  -> 해당 인자로 준 값이 배열인지 아닌지 판별, 배열이면 true, 배열이 아니면 false
console.log(Array.isArray(arr))   // Array.isArray()  //해당 요소가 배열인지 판별
//true

console.log(arr.pop())  // =====================================pop  // 배열의 마지막 요소 제거 
//배열에서 제거된 요소 반환
//{ age: '26' }
console.log(arr)
//[ 'a', 'b', { x: 0, y: 1 }, { name: 'algml' } ]

console.log(arr.shift())   // ===========================================shift()   // 배열의 첫번째 요소 제거
// 제거된 요소 반환

console.log(arr)
// [ 'b', { x: 0, y: 1 }, { name: 'algml' } ]

console.log(arr.unshift('new'))   // =================unshift()// 배열의 처음에 요소 추가
// 4
// 값을 추가한 후 배열의 크기 반환 
console.log(arr)
//[ 'new', 'b', { x: 0, y: 1 }, { name: 'algml' } ]

//arr.splice(start,deleteCount,el)
// arr.splice(수정할배열요소의 인덱스,삭제할 요소 개수,배열에 추가할 요소)
let arr2 = [1,4,5]
console.log(arr2.splice(1,1,2,3,4)) 
// [4]
// 삭제한 요소 반환
// 즉 위의 코드는 arr2의 배열의 index 1의 위치에서 1개의 요소를 삭제후 그 다음에 오는 요소들을 배열에 추가.
console.log(arr2)   //[1,2,3,4,5]
