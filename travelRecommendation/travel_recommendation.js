


fetch('travel_recommendation_api.json')
 .then(response => response.json)
 .then(data => {})
 .catch(err => console.error(err));

var searchbtn=document.getElementById("search").innerHTML;
searchbtn.onclick=function(){
    alert("button clicked")
};