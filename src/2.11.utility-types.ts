type Person={
    name: string;
    age:number;
    email?:string;
    contactNo:string;
}


type NameAge= Pick <Person, "name"|"age"> //takes the key name and age and set type accordinlgy
type ContactInfo= Omit<Person, "name"| "age">//takes key except name and age and set type accordingly
type PersonRequired= Required<Person>//takes all the key of <Person> and set all as required(even optional=>required)
type PersonPartial= Partial <Person>//takes all the key of <Person> and set all as optional(even =required=>optional)
type PersonReadonly = Readonly<Person>// makes the keys readonly and cannot be redeclared
type MyObj= Record<string,string>// works as Record<string(keys):string(values)>
type MyObj1= Record <string, unknown>// works as Record<string(keys):unknown(values)>


const person1: Person ={
    name: "Mr. Xy",
    age: 25,
    contactNo: "+88017"
}

person1.name= "My Yx" // allowed to alter value

const person2: PersonReadonly={
    name: "Mr. Xy", //cannot be redeclaired
    age: 25,
    contactNo: "+88017"
}



const justObj :MyObj = {
    name: 'Muad',
    age: '3',
    gender: 'male'
}
const justObj1:MyObj1={
    name: "Muad" ,
    age: 3
}

