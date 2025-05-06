//template promise
//simulate
const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = "something"
        if (data) {
            resolve(data)
        } else {
            reject("failed to load data")
        }
    })
}

//calling data promise function
const showData = async (): Promise<string> => {
    const data: string = await createPromise()
    return data
}

showData()


//fetching data from server 

type toDO={
userId: number;
id:number;
title:string;
completed: boolean;
}

const getTodo = async ():Promise<toDO> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json();
    // console.log(data)
    return data

}
getTodo()