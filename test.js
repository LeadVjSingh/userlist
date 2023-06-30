const { applyMiddleware } = require("@reduxjs/toolkit");

//Write a function which returns a promise and resolved in 1 sec.
const resolve = () => {
    setTimeout(() => {
        console.log("resolved");
    }), 1000
}
const reject = () => {

}

const promiseObj = new Promise(resolve, reject);

web applyMiddleware

