const obj = {
    x:0,
    y:1
}

console.log(obj.x)      // 0
console.log(obj['x'])   // 0
console.log(obj)        // { x: 0, y: 1 }

delete obj.x
console.log(obj)        // { y: 1 }


//메소드 -> 객체의 속성을 통해 사용하는 함수
const obj2 = {
    x:1,
    increaseX:function(){
        this.x = this.x+1
    },
    decreaseX:function(){
        this.x = this.x - 1
    }    
}
obj2.increaseX()
console.log(obj2.x)   // 2
obj2.decreaseX()
console.log(obj2.x)   // 1
obj2.decreaseX()
console.log(obj2.x)   // 0
//console.log(obj2.decreaseX)

