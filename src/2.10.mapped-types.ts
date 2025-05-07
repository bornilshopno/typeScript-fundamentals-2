
const arrayOfNumbers: number[]=[1,3,5]
const arrayOfStrings1: string[]=['1','3','5']
const arrayOfSAtrings: string[]=arrayOfNumbers.map((num)=> num.toString()); //output:['1','3','5']

// console.log(arrayOfSAtrings, arrayOfStrings1)

type AreaNumber ={
    height: number;
    width: number;
}
type Height= AreaNumber['height'] //look up type

type AreaString1={
    height: string;
    width: string
}

type AreaString={
    [index in keyof AreaNumber] : string  //   map all the key of AreaNumber(as index) and set type as string for all key
}


type AreaStringGeneric1<T>={
    [key in keyof T]:string // map all the key of object declared as T and set type as string for all key 
}

//below one gives flexibility as deals with T[key]
type AreaStringGeneric<T>={
    [key in keyof T]:T[key] // map all the key of object declared as T and set type as in object T accordingly 
}

const area1:AreaStringGeneric<{height:string, width:number}>= {
    height:'100', width:200
}