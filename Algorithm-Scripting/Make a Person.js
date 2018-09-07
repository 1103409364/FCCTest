// 用下面给定的方法构造一个对象.
// 方法有 getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).
// 所有有参数的方法只接受一个字符串参数.
// 所有的方法只与实体对象交互.
var Person = function (firstAndLast) {
    this.fullName = firstAndLast;
    this.first = firstAndLast.split(" ")[0];
    this.last = firstAndLast.split(" ")[1];
    this.getFullName = function () {
        return this.first + " " + this.last;
    };
    this.getFirstName = function () {
        return this.first;
    };
    this.getLastName = function () {
        return this.last;
    };

};

Person.prototype = {
    setFirstName: function (first) {
        this.first = first;
    },
    setLastName: function (last) {
        this.last = last;
    },
    setFullName: function (firstAndLast) {
        this.first = firstAndLast.split(" ")[0];
        this.last = firstAndLast.split(" ")[1];
        this.fullName = firstAndLast;
    }
};

var bob = new Person('Bob Ross');

bob.getFullName();
