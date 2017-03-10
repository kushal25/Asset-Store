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
          document.getElementById("oneAsset").innerHTML = "Asset Name : " + obj.assetName + '<br><br>Asset Type : ' + obj.assetType 
          + '<br><br>Asset Class : ' +  obj.assetClass;
          
      }
}