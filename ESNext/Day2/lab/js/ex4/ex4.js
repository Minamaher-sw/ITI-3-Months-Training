let obj ={
    _name :"minaMaher",
    _age  :20,
    _address :"sohag"
}

var hanlder =
{
    set(target, property, value) {
        if (property in target) {
            if (property == "_name") {

                if(typeof value === "string"  && value.length == 7)
                {
                    target[property] = value;
                }
                else{
                    throw "name must be string and wuth length 7"
                }
            }
            else if (property == "_age") {

                if(typeof value === "number" && (value >6 && value < 60))
                {
                    target[property] =value;
                }
                else
                {
                    throw "age must be number and more than 60 and less 60"
                }
            }
            else if (property == "_address") {
                    if (typeof value === "string") {
                        target[property] = value;
                    } 
                    else {
                        throw ` this ${value} not string`;
                    }
                }
            else {
                throw "property not belong obj"
            }}
        else {
            throw "property not found"
        }},
    get(target , property) {
        if( property in target)
        {
            console.log(target[property])
        }
        else{
            throw "not found "
        }
    }
}
var myProxy = new Proxy(obj, hanlder)

myProxy._name ="minpepo"
myProxy._name;