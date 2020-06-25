function greeting(){
    console.log('Hello,! World')
}
greeting()

// function printGreeting(msg, alertGreet){
//     if(msg === 'Evening'){
//         evening(alertGreet);
//     }else if(msg === 'Morning'){
//         morning(alertGreet);
//     }else{
//         night(alertGreet);
//     }
// }

// function morning(alertGreet){
//     alert("Good Morning, Sarosh");
//     alert("Hello, World");
// }

// function evening(alertGreet){
//     alert("Good Evening, Sarosh");
//     alert("Hello, World");
// }

// function night(alertGreet){
//     alert("Good Night, Sarosh");
//     alert("Hello, World");
// }

// function alertGreet(msg){
//     alert(msg)
// }

// printGreeting("Hello, World", alertGreet);


// let promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('New Promise')
//         resolve()
//     }, 1000)
// })

// promise.then(function(){
//     console.log('Promise Resolve')
// })


// function success(){
//     console.log('Success');
// }

// function failure(){
//     console.log('Failure');
// }

// function chkUserPromise(userInput, success, failure){
//     userInput === true ? success() : failure();
// }

// chkUserPromise(false, success, failure);

// chkUserPromise(true).ifPromiseFulfilled(success).IfNotFulfilled(failure);

// function success(){
//     console.log('Success');
// }

// function failure(){
//     console.log('Failure');
// }

// function chkUserPromise(userInput){
//     new Promise(function(resolve, reject){
//         if(userInput){
//             resolve();
//         }else{
//             reject();
//         }   
//     });
// }

// chkUserPromise(false)

// const anyFunction = () => {
//     return(((Math.floor(Math.random() * 10)) % 2) === 0) ? true : false
// }

// const resolveFunction = () => console.log('Success')
// const rejectFunction = () => console.log('Failure')

// const result = new Promise((resolve, reject) => {
//     setTimeout(() => (anyFunction () ? resolve() : reject()), 2000);
// })

// chkUserPromise(true).IfFulfilled(resolve).ifNotFulfilled(reject)

// result.then(resolveFunction).catch(rejectFunction);
// console.log("Hello World")


// console.log('Start')

// function callBack(){
//     setTimeout(function(){
//         console.log('callBack')
//     }, 300)
// }

// function callBack1(){
//     setTimeout(function(){
//         console.log('callBack1')
//     }, 200)
// }

// function callBack2(){
//     setTimeout(function(){
//         console.log('callBack2')
//     }, 100)
// }

// function callBack3(){
//     setTimeout(function(){
//         console.log('callBack3')
//     }, 50)
// }

// function func(){
//     callBack();
//     console.log('func')
// }
// func()

// function func2(){
//     callBack1()
//     console.log('func2')
// }
// func2()

// function func3(){
//     callBack2();
//     console.log('func3')
// }
// func3()
// console.log('End')


// let promise = new Promise(function(resolve, reject){
//      setTimeout(function(){
//      console.log('New Promise')
//      resolve()
//      }, 1000)
// })

// promise.then(function(){
//     console.log('Successfull')
// })

// .catch(function(){
//     console.log('Failure')
// })


// function apifetch(){
//     let promise = new Promise(function(resolve, reject){
//         setTimeout(function() {
//             console.log('New Promise')
//             reject('data error')
//     }, 1000)
// })
//     return promise
// }


// async function async_JS(){
//     try{
//         let data = await apifetch(); 
//     console.log(data, 'Successfull')
//     }
//     catch(error){
//         console.log(error, 'Reject')
//     }
// }
// async_JS()