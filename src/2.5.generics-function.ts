
const createArray=(param: string):string[]=>{
    return[param]
}
const createArrayWithGeneric=<T>(param:T):T[]=>{
    return [param]
}
const createArrayWithTuple=<X,Y>(param1:X, param2:Y):[X,Y]=>{
    return [param1,param2]
}

interface User { name: string; age:number}

const res1=createArray("words")
const res2=createArrayWithGeneric<string>('words')
const res3=createArrayWithGeneric<{name:string; age:number}>({name:'manna', age:37})
const res4=createArrayWithGeneric<User>({name:'manna', age:37})

// console.log({res1},{res2},{res3},{res4})

const res5=createArrayWithTuple(4,6)
const res6=createArrayWithTuple< string, number>('Manna',37)
const res7=createArrayWithTuple<string, User>("information",{name:'manna', age:37})

// console.log({res5},{res6},{res7})

const addCourseToStudent=<T>(student:T)=>{
    let course="PH"
    return{...student, course}
}

const rakib={name:'Rakib', age:37, business:"MRH"}
const student1=addCourseToStudent<{name:string;email:string}>({name: 'Muad', email:"muad@gmail.com"})
const student2=addCourseToStudent<User>({name:'manna', age:37})
const student3=addCourseToStudent(rakib)
// console.log({student1},{student2},{student3})