function getAkanName() {
  var maleNames = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]; 
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; 
  var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 

  var day = parseInt(document.getElementById("date").value);
  var month = parseInt(document.getElementById("month").value);
  var year = parseInt(document.getElementById("year").value);
  var femaleGender = document.getElementById("femaleGender");
  var maleGender = document.getElementById("maleGender");
  var date = new Date(year + "-" + month + "-" + day);
  var dayBorn = date.getDay();
  
  if (day < 1 || day > 31) {
    alert("Day must be greater than 1 and less than 31!"); // checks inputted day
  }
  
  if (month < 1 || month > 12) {
    alert("Month must be greater than 1 and less than 12"); // checks inputted month
  }








   

   
  }
  