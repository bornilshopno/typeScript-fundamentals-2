//Generic Array
type GenericArray<T> = Array<T>

const rollNumbers1: number[] = [1, 2, 3, 4, 5]
const rollNumbers2: Array<number> = [1, 2, 3, 4, 5]
const rollNumbers3: GenericArray<number> = [1, 2, 3, 4, 5]
//uses
const names: GenericArray<string> = ['kamal', 'jamal', 'rahim']
const factss: GenericArray<boolean> = [true, false, true]

const userss: GenericArray<{ name: string; age?: number }> = [
    { name: 'kamal', age: 40 }, { name: 'jamal', age: 45 }, { name: 'rasel' }
]

//Generic Tuple

type GenericTuple<X,Y>=[X,Y]
//uses
const manus:GenericTuple<string,string>=['Mr. X', 'Mrs. Y']
const userWithId : GenericTuple<number, {name:string; age:number; email:string}>= [325, {name: 'Asad', age: 40, email: 'asad@sad.com'}]