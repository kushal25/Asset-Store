function fetchAsset(assetItem){
    var xmlhttp = new XMLHttpRequest();
    var url = "http://localhost:5000/getOneAsset/" + assetItem;
    xmlhttp.open("GET", url, true);  
    xmlhttp.send(null); 
      xmlhttp.onreadystatechange = function() {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              var myArr = JSON.parse(xmlhttp.responseText); 
              console.log(myArr);          
              myFunction(myArr);
          }
      };
      function myFunction(obj) {
        $("#fetchAsset > tbody").empty()             
          for (var i = 0; i < obj.length; i++) {
              addRow(obj[i].assetName, obj[i].assetType, obj[i].assetClass);
          }
      }

      function addRow(assetName, assetType, assetClass)
      {
        var row = "<tr><td>"+ assetName + "</td><td>" + assetType + "</td><td>" + assetClass + "</td></tr>";
        $("#fetchAsset > tbody").append(row)
      }
}