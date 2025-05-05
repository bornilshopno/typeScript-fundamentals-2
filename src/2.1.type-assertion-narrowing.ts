//type assertion
//code writer (developer) is sure of the type more than the typeScript

let anything:any;

anything="web development";
(anything as string)  //putting . after that will provide all string functionality

anything=2222;
(anything as number) //putting . after that will provide all number functionality


const kgToGm=(value: string | number) : string | number | undefined=>{
    if (typeof value === "string"){
        let convertedValue= parseFloat(value)*1000
        return `coverted value is ${convertedValue}`
    }

    else if (typeof value==="number"){
        let convertedValue=value*1000
        return convertedValue;
    }
}
//Example 2

const result1= kgToGm("1000") as string // developer is sure of string outcome
const result2=kgToGm(1000) as number // developer is sure of number outcome

type CustomError={
    message:string
}
try{

}catch(error){
    console.log( (error as CustomError).message)
}