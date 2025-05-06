//constraints

const addCourseTo1Student=<T extends {name:string; age:number}>(student:T)=>{
    let course="PH"
    return{...student, course}
}

const rakib1={name:'Rakib', age:37, business:"MRH"}
const student11=addCourseTo1Student<{name:string; age:number; email:string}>({name: 'Muad', age:24, email:"muad@gmail.com"}) //Type '{ name: string; email: string; }' does not satisfy the constraint '{ name: string; age: number; }' when age is not there.
const student21=addCourseTo1Student<User>({name:'manna', age:37})
const student31=addCourseTo1Student(rakib)