function getAllAssets(){
    var xmlhttp = new XMLHttpRequest();
    var url = "http://localhost:5000/getAllAssets";
    xmlhttp.open("GET", url, true);  
    xmlhttp.send(null); 
      xmlhttp.onreadystatechange = function() {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              var myArr = JSON.parse(xmlhttp.responseText); 
              console.log(myArr);          
              myFunction(myArr);
          }
          else if(xmlhttp.status = 400)
          {
            var obj = JSON.parse(xmlhttp.responseText); 
            alert(obj.response);
          }
          else
          {
            alert("Server is Busy. Try Again Later");
          }
      };
      function myFunction(obj) {
        $("#getAllAssets > tbody").empty()             
          for (var i = 0; i < obj.length; i++) {
              addRow(obj[i].assetName, obj[i].assetType, obj[i].assetClass);
          }
      }

      function addRow(assetName, assetType, assetClass)
      {
        var row = "<tr><td>"+ assetName + "</td><td>" + assetType + "</td><td>" + assetClass + "</td></tr>";
        $("#getAllAssets > tbody").append(row)
      }
}