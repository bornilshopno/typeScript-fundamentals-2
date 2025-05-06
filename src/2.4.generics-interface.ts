//interfaces-generics

interface Developer<X,Y> {
    name:string;
    computer:{
        brand:string;
        model:string;
        releaseYear:number;
    }
    phone:X,
    bike?:Y //if we pass default value as Y=null then we dont need to pass argument when declaring variable with no bike
}

//even no element in bike we can ommit this in declaration as this is optional chained but need to pass as an argument.
const developer1 : Developer<{brand:string;model:string},null>={
    name: 'Manna',
    computer:{
        brand: 'HP',
        model: 'EliteBook',
        releaseYear:2020
    },
    phone:{
        brand:"Xiaomi",
        model:"Redmi Note 12"
    }

}

interface Phone {
    brand: string;
    model:string;
    faceId?:boolean;
    camera?:boolean;
}

const developer2 : Developer<Phone,null>={
    name: 'Manna',
    computer:{
        brand: 'HP',
        model: 'EliteBook',
        releaseYear:2020
    },
    phone:{
        brand:"Xiaomi",
        model:"Redmi Note 12",
        faceId:true,
    }

}