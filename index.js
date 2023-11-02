 
 let myform = document.querySelector("form");
 let task = document.getElementById("task");
 let Priority = document.getElementById("priority");
 let tbody = document.querySelector("tbody")  //in tbody get value
 let AllData = []

 myform.addEventListener('submit', function(e)
 {
    e.preventDefault();

    let Data = {};
    Data.input1 = task.value;
    Data.input2 = Priority.value;    //key value pair is created input named
    AllData.push(Data);
    tbody.innerHTML = null;    /// for not repeat value again an agin
    /////console.log(AllData);

    AllData.map((ele)=>    // for print in web
    {
let row = document.createElement("tr");
let td1 = document.createElement("td");
let td2 = document.createElement("td");

td1.innerText = ele.input1;
td2.innerText = ele.input2;

if (ele.input2.toLowerCase() === "high") 
{
    td2.style.backgroundColor = "red";
  } 
  else if (ele.input2.toLowerCase() === "low")
   {
    td2.style.backgroundColor = "green";
  }

   
/*function changeColor() {
    lat priority = document.getElementById("priority").value;
    lat element = document.getElementById("priority");

    if (priority === "High") {
        element.style.backgroundColor = "red";
    } else if (priority === "Low") {
        element.style.backgroundColor = "green";
   
}*/
    
/*if(ele.input2 === "high")
{
    td2.classlist.add("priority-high")
}
else if(ele.input2 === "low")
{
    td2.classlist.add("priority-low")
}*/

row.append(td1,td2)  //appended both

tbody.append(row)
    })
 

 })

