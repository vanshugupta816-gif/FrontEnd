async function wait3sec(){
    console.log("waiting for 3 seconds..."); // main thread
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("done waiting!");
}
console.log("start waiting"); // main thread
wait3sec();
console.log("this will run while waiting..."); // main thread

