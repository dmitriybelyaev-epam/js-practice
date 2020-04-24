const {
    callbackFunction,
    promiseFunction,
    callbackFunctionError,
    promiseFunctionError
} = require("./async_api");

/**
 * console.log data got from callbackFunction
 */
function printDataCallback() {
    function printMe (err, info) {
        console.log(info);
    }
    callbackFunction(printMe);
}

/**
 * console.log data got from promiseFunction
 */
function printDataPromise() {
    promiseFunction().then(data => {
        console.log(data);
    });
}

/**
 * console.log data got from promiseFunction using async/await
 */
async function printDataAsyncAwait() {
    let data = await promiseFunction();
    console.log(data);
}

/**
 * throw error data from callbackFunctionError
 */
function handleErrorCallback() {
    function errorData(error) {
        throw error;
    }
        callbackFunctionError(errorData);
    }

/**
 * throw error come from promiseFunctionError
 */
function handlePromiseError() {
    promiseFunctionError.catch(err => alert(err));
}

/**
 * throw error come from promiseFunctionError using async/await
 */
async function handleAsyncAwaitError() {
    const error = await promiseFunctionError();
    alert(error);
}

module.exports = {
    printDataCallback,
    printDataPromise,
    handleErrorCallback,
    handlePromiseError,
    printDataAsyncAwait,
    handleAsyncAwaitError
};
