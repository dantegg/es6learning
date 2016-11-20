/**
 * Created by dantegg on 2016/11/20.
 * get comfortable with closures
 */

function Container() {
    var store = []
    return{
        getItem:function (index) {
            return store[index]
        },
        addItem:function (obj) {
            var index = store.push(obj)
            return index-1
        },
        length:function () {
            return store.length
        }
    }
}

var c = Container()

console.log(c.length())

var index1 = c.addItem({name:'dreamapple'})

console.log(index1)
console.log(c.length())
console.log(c.getItem(index1))
