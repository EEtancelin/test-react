const getJsonSource = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response) {
      console.log(response)
    })
    .catch(function(err) {
  	   console.log("Unable to Log the Url")
    });
}
  
export default getJsonSource;
