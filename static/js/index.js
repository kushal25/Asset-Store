function createAsset(){
      var xmlhttp = new XMLHttpRequest();
      var url = "http://localhost:5000/createAsset";

      var json = {
                "assetName" : document.forms["myForm"]["inputAssetName"].value,
                "assetType" :document.forms["myForm"]["assetType"].value,
                "assetClass" : document.forms["myForm"]["assetClass"].value
              }

            
      xmlhttp.open("POST", url, true);
      xmlhttp.setRequestHeader("Content-type", "application/json");      
      xmlhttp.send(JSON.stringify(json));
      xmlhttp.onreadystatechange = function() {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              var obj = JSON.parse(xmlhttp.responseText);
              console.log(obj);           
              document.getElementById("createAsset").innerHTML = "Asset Name : " + obj.assetName + '<br><br>Asset Type : ' + obj.assetType 
          + '<br><br>Asset Class : ' +  obj.assetClass + "<br><br><br>Asset Created Successfully";
          }
          else if(xmlhttp.status == 400){
              var obj = JSON.parse(xmlhttp.responseText);
              document.getElementById("createAsset").innerHTML = obj.response;
          }
          else
          {
            document.getElementById("createAsset").innerHTML = "Server is Busy. Try Again Later";
          }

      };

    }
