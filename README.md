# Asset-Store
Planet Labs Coding Challenge

#Installation Requirements

1. install pip
2. install python
3. install mongoDB and start the mongo service
4. sudo pip install Flask
5. sudo pip install mongoengine

#To run flask server 
1. python app.py
2. Open browser and type url - http://localhost:5000/ and press enter

#API Details

# API to create an asset

POST - http://localhost:5000/createAsset

request paramters - {
	"assetName" : "_12345",
	"assetType" : "satellite",
	"assetClass" : "dove"
}

# API to retrieve only one asset

GET - http://localhost:5000/getOneAsset/asset-name

# API to get all assets

GET - http://localhost:5000/getAllAssets
