function getUserData(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const data = { name : "vanshu", age : 20 };
            resolve(data);
        }, 2000);
    });
}
console.log("start fetching user data...");

getUserData()
   .then((data) =>{
      console.log("User data fetched:", data);
   })
   .catch((error) => {
    console.log("error fetching user data:", error);
   });
