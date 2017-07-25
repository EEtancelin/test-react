const URL = "https://jsonplaceholder.typicode.com/users" ;

const getJsonSource = () => {
  fetch(URL).then(
   function(response){
     return response.json();
  }
);
}

export default getJsonSource;
