//constraints

const addCourseTo1Student=<T extends {name:string; age:number}>(student:T)=>{
    let course="PH"
    return{...student, course}
}

const rakib1={name:'Rakib', age:37, business:"MRH"}
const student11=addCourseTo1Student<{name:string;email:string}>({name: 'Muad', email:"muad@gmail.com"}) //Type '{ name: string; email: string; }' does not satisfy the constraint '{ name: string; age: number; }'.
const student21=addCourseTo1Student<User>({name:'manna', age:37})
const student31=addCourseTo1Student(rakib)