let degiskenAdi ='icerik';
let degiskenAdi2 ="icerik2";
console.log(degiskenAdi)
console.log(degiskenAdi2)

let undefinedDemo;
console.log('undefinedDemoSonuc')
if(undefinedDemo===''&&undefinedDemo===undefined&&undefinedDemo===null)
{

}

console.log(undefinedDemo)

const sabitTanimi = 'Sabit Degisken 1'
console.log(sabitTanimi)

// sabitTanimi ='deneme 2'
// console.log(sabitTanimi)

var degiskenTuru2 = 'degisken3'
console.log(degiskenTuru2)

let numericType = 1
let numericType2 = 1.5

console.log(numericType)
console.log(numericType2)

numericType = 'Numan'
console.log(numericType)

let x=true
let y= false

let date = new Date('2022-03-25')
console.log(date)

let bigInt = BigInt('123123123131312313131312313')
console.log(bigInt)

const user = {

    name :'Ali',
    surName : 'Yılmaz',
    greet () {
        console.log('Hello')
        console.log(this.name)
    }
}

console.log(user)
user.greet()

let user2= {...user, name:'Numan'}
console.log(user2)

class User 
{
    constructor(name,surname)
    {
        this.Name = name
        this.Surname = surname

    }

    greet () {
        console.log('Hello')
        console.log(this.name)
    }
}

let usr = new User('Ayşe','Yılmaz')
console.log(usr)
