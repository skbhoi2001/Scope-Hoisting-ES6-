
function Teacher(a,b){
    this.subject = "abc";
    this.course ="def";
    return `${this.subject} with ${this.course}`
}

function Person(a,b){
    this.fname = a;
    this.lname = b;
}


var y = new Person("ghi1","jkl1")

function display(arg1,arg2){
    console.log(`${y.fname} ${y.lname} ${Teacher()}  have student ${arg1} ${arg2}`)
}
display.call(Person,"ggg","hhh")
display.call(Person,"ggg1","hhh3")
display.call(Person,"ggg2","hhh2")


display.apply(Person,["dfs","sfs"])

d1 = display.bind(Person,"","")
d1()
