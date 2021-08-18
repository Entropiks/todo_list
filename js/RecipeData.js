fetch("www.themealdb.com/api/json/v1/1/random.php", {
}).then(response => {
	console.log(response);
  return response.recipe();
}).then(recipe => {
  console.log(recipe);
})
