// task 1
let user = {
    firstname: 'giorgi',
    lastname: 'smith',
    age: 25,
    studentstatus: 'active'
};

let status = user.studentstatus;

//task 2
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

//task 3
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) numbers.splice(i, 1);
}

//task 4
if (user.age < 18 && user.status === 'active') {
    console.log('hello');
} else if (user.firstname === 'levani') {
    console.log('hello levani');
} else if (user.status === 'active' || user.age < 25) {
    console.log('hello world');
} else {
    console.log('error');
}

//task 5 
let array = [[2, -3, 5, 10], [25, -24, -11, 100], [-6, -7, 10]]
let flat = array.flat();

for (let i = 0; i < flat.length; i++) {
    if (flat[i] > 0) {
        console.log(flat[i]);
    }
}

//task 6
let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10]

// 1
for (let i = 0; i < array6.length; i++) {
    if (array6[i] % 2 === 0) {
        console.log(array6[i])
    }
}

//2
for (let i = 0; i < array6.length; i++) {
    if (array6[i] % 2 !== 0) {
        console.log(array6[i])
    }
}

//task 7
function addPositiveNumbers(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        if (args[i] > 0) {
            sum += args[i];
        }
    }
    return sum;
}

console.log(addPositiveNumbers(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8));

//task 8
let user8 = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
}

function userStatus(obj) {
    return `${obj.firstname} ${obj.lastname} ${obj.isloggedin}`
}

console.log(userStatus(user8));

//task 9
function returnHighest(arr) {
    let highest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highest) highest = arr[i];
    }
    return highest;
}

console.log(returnHighest([1, 2, 3, 4]));

//task 10
let array10 = [1, 2, 4, 10, 34, 5, 7, 87];

for (let i = 0; i < array10.length; i++) {
    if (10 > array10[i] > 0) {
        console.log(array10[i]);
    }
}

//task 11
let numbers11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers11.length; i++) {
    if (numbers11[i] === 5) {
        break;
    }
}