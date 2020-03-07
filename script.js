let taskList;
/*  I am putting my const in function to get the "fresh" values from te input fields*/
function bring() {
  const taskId = document.getElementById("taskId").value;
  const userId = document.getElementById("userId").value;
  const myTitle = document.getElementById("title-filter").value;
  const box = document.getElementById("completed").checked;
  const myText = document.getElementById('list-container');
  
  const fetchURL= 'https://jsonplaceholder.typicode.com/todos';
/* I am using only filter becouse I dont't think i need a new array for this. 
Maybe if i wanted to save this and use it somwhere else it would be usefull, otherwise its just excessive code*/
  fetch(fetchURL)
    .then(response => response.json())
    .then(json => {
/* I am using or, not and because i want to get more results. This databesa is relly small. While using and one might not get any results at all*/    
      let filteredResults = json.filter(function(task) {
        return task.id == parseInt(taskId) 
          || task.userId == parseInt(userId)
          || task.completed == box
          || (myTitle.length > 0 && task.title.indexOf(myTitle) >= 0);
      });
    
    console.dir(filteredResults);
  });
}