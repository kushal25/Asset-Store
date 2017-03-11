# Asset-Store
Planet Labs Coding Challenge

#Installation Requirements

1. install pip
2. sudo pip install Flask
3. sudo pip install mongoengine

#To run flask server 
1. python app.py
2. Open browser and type url - http://localhost:5000/ and press enter

#API Details

1. API to create an asset

POST - http://localhost:5000/createAsset

request paramters - {
	"assetName" : "_12345",
	"assetType" : "satellite",
	"assetClass" : "dove"
}

2. API to retrieve only one asset

GET - http://localhost:5000/getOneAsset/<asset-name>

3. API to get all assets

GET - http://localhost:5000/getAllAssets
