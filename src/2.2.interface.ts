// interface only for non-primitive type
// Multiple interface declarations with the same name are automatically merged. With type, you’d get an error for redeclaration.
// Interfaces are designed with object-oriented programming in mind. They're ideal when you want to define contracts for classes.
// Best Practice: Use interface when defining the shape of an object or class. Use type for everything else (unions, primitives, intersections, tuples, mapped types, etc.).

type TUser = {
    name: string;
    age: number;
}

interface IUser {
    name: string;
    age: number;
}

//difference is intersection (&) and extends
type TUserWithROle = TUser & { role: string }
interface IUserwithRole extends IUser {
    role: string
}

const tuser: TUserWithROle = {
    name: 'Manna', age: 37, role: 'developer'
}
const iuser: IUserwithRole = {
    name: 'Manna', age: 37, role: 'developer'
}

//Array
type ArrayT = string[]
const arrayT: ArrayT = ['Kamal', 'Jamal', 'Rasel']

interface ArrayI {
    [index: number]: string
}
const arrayI: ArrayI = ['Kamal', 'Jamal', 'Rasel']

//function
type functionT =(a:number, b:number)=> number
const addT :functionT=(x,y)=>x+y

interface functionI{
    (a:number, b:number): number
}
const addI : functionI=(x,y)=>x+y