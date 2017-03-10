function fetchAsset(assetItem){
  if(assetItem.trim().length === 0)
  {
      document.getElementById("oneAsset").innerHTML = "Field cannot be empty";
  }
  else
  {
    var xmlhttp = new XMLHttpRequest();
    var url = "http://localhost:5000/getOneAsset/" + assetItem;
    xmlhttp.open("GET", url, true);  
    xmlhttp.send(null); 
      xmlhttp.onreadystatechange = function() {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              var obj = JSON.parse(xmlhttp.responseText); 
              console.log(obj);          
              document.getElementById("oneAsset").innerHTML = "Asset Name : " + obj.assetName + '<br><br>Asset Type : ' + obj.assetType 
          + '<br><br>Asset Class : ' +  obj.assetClass;
          }
          else if(xmlhttp.status == 400){
              var obj = JSON.parse(xmlhttp.responseText);
              document.getElementById("oneAsset").innerHTML = obj.response;
          }
          else
          {
            document.getElementById("oneAsset").innerHTML = "Server is Busy. Try Again Later";
          }

      };
  }
}