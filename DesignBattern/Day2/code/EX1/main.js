class Store {
    constructor(name)
    {
        this._name =name ;
        this._ProductName ="";
        this._ProductPrice=0 ;
        this._Customers =[] ;
    }

    addNewProduct(name ,price)
    {
        this._ProductName =name;
        this._ProductPrice=price ;

        //call notify method
        this.notifyAllCustomer();
    }

    notifyAllCustomer()
    {
        if(this._Customers.length != 0)
            this._Customers.forEach((sub)=> sub.update(this._ProductName , this._ProductPrice));
    }
    subscriberNewCustomer(customerName)
    {
        this._Customers.push(customerName);
    }

    unSubscriberCustomer(customerName)
    {
        if(this._Customers.length != 0)
        {
            this._Customers = this._Customers.filter((user)=> {
                return user != customerName;
            })
        }
    }
}

class Customers {
    update(productName , productPrice)
    {
        console.log(`Hi our new product is ${productName} and price of it ${productPrice}`);
        
    }
}

var maKupStore = new Store("Makup");
var clothesStore =new Store("Clothes")

var cust1 =new Customers();
var cust2 =new Customers();
var cust3 =new Customers();


maKupStore.subscriberNewCustomer(cust1);
maKupStore.subscriberNewCustomer(cust2);
clothesStore.subscriberNewCustomer(cust3);

maKupStore.addNewProduct("eye liner" ,455);
maKupStore.unSubscriberCustomer(cust2);
maKupStore.addNewProduct("eye liner" ,455);

clothesStore.addNewProduct("T-Shirt" ,1000);