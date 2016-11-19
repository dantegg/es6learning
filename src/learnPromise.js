/**
 * Created by dantegg on 2016/11/3.
 */



let firstPromise = new Promise((resolve,reject)=>{
    console.log('first')
    resolve()
}).then(function(){
    console.log('resolve')
}).then(function () {
    console.log('resolve again?')
})

console.log('second')


console.log(typeof 36)
console.log(typeof 36.36)
console.log(typeof -36.36)


