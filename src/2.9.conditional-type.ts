type a1= number;
type b1= undefined;
type c1=string;
type d1=null;

//conditional type
type x= a1 extends null ? true : false
type y=  d1 extends null ? true : false
type z = c1 extends null ? true : b1 extends undefined ? undefined : false

type Sheikh = {
    bike:string;
    car:string;
    plane:string;
}

type CheckVehicle <T>= T extends "bike"| 'car'|'plane' ? true : false 

type CheckWithKeyOf <T>= T extends keyof Sheikh ? true : false 

type HasBike = CheckVehicle<'bike'> // output:true
type HasTractor= CheckWithKeyOf<"tractor"> //output:false
