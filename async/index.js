/**
 * create a function that returns a promise
 * do the operations of the previous function
 * function takes a callback function
 * resolve when the data has been fetched
 * or reject if it fails
 */

const fetchData = () => {
  // function created
  return new Promise((resolve, reject) => {
    let data;
    setTimeout(() => {
      data = "Data fetched successfully";
      if (!data) reject("Unable to fetch");
      resolve(data);
    }, 1000);
  });

};


function callva(callback){
    setTimeout(() => {
        data = "Data fetched successfully";
        callback(null,data);
      }, 1000);
}

callva((err,data)=>{
    if (err) {
        console.error(err);
    }else{
        console.log('====================================');
        console.log(data);
        console.log('====================================');
    }
})
fetchData()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
