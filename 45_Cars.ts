function storeCarInfo( manufacturer : string, ModelName: string, ...extraInfo: { [ key : string] : any} []  ) : object{
    let carInfo = {
        manufacturer,
        ModelName,
        ...Object.assign({}, ...extraInfo)
    }

    return carInfo ; 
};
 let Info = storeCarInfo( "TOYOTA" , "SUPRA", {color : "BLACK"}, {features : ["Navigation", "Exhaust","Manual"]})

 console.log(Info)