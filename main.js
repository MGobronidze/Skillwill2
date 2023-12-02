// დავალება 1
// დავაბეჭდინოთ ყველაზე უმცროსი იუზერის სახელი
const arr=[
    {
        name: "Temo", 
        age: 25
    },
    {
        name: "Lasha", 
        age: 21
    },
    {
        name: "Ana", 
        age: 28
    }
]

function prinUser(user){
    let ageEl = user[0].age;
    let indexEl = 0;

    user.forEach(function(elem,index){
        if(elem.age < ageEl){
            ageEl = elem.age;
            indexEl = index
        }
    })

    console.log(user[indexEl].name)
}

prinUser(arr);


// დავალება 2
// შევქმნათ ახალი ობიექტი, ძველი ობიექტის მნიშვნელობებით
const user = {
    firstName: "Tekla",
    lastName: "Smith",
    age: 35,
    password: "user135",
    email: "teklasmith@gmail.com"
}

function copyObject(obj){
    const newObj = {}
    for (const x in obj){
        newObj[x]=obj[x]
    }
    return newObj
}

const user1 = copyObject(user);
console.log(user)
console.log(user1)

// after changing  age in user 
user.age = 40;
console.log(user)
console.log(user1)


// დავალება 3
// კამათლის გაგორება 3 -მდე
let userA = Math.floor(Math.random()*6+1);
let userB = Math.floor(Math.random()*6+1); 
let iteration = 1;

while(true){
    if(userA === 3 || userB === 3){

        if(userA === 3 && userB === 3){
            console.log("Draw")
        } else if(userA === 3){
            console.log("Winner is player A") 
        }else{
            console.log("Winner is player B")
        }
        console.log(`iteration = ${iteration}`)
        break;
    } else {
        userA = Math.floor(Math.random()*6+1);
        userB = Math.floor(Math.random()*6+1);
        iteration+=1
    }  
}




