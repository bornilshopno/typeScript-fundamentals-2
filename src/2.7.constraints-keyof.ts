//keyof operator

type Vehicle={
    bike:string;
    car:string;
    ship:string;
}

type Keys = 'bike' | 'car' | 'ship'  //manually
type KeysWithKeyOf = keyof Vehicle // programatically

function propertyValue <X,Y extends keyof X>(object:X, key:Y){
    return object[key]
} // constraint set to Y as it needs to be a key of X

const user4= {
    name: 'manna', age:37
}

const mobile={
    brand: 'xiaomi', model:"redmi note 12"
}

const res11= propertyValue(user4, "name")
const res12=propertyValue(mobile, 'brand')

console.log({res11, res12})