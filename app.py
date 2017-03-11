from flask import Flask, render_template, json, request, Response, jsonify
from model import Asset

app = Flask(__name__)

@app.route("/")
def main():
	return render_template('index.html')

@app.route('/createAsset', methods=["POST"])
def createAsset():
	if request.headers['Content-Type'] == 'application/json':
		json = request.json
		_assetName = json.get("assetName").strip()
		_assetType = json.get("assetType").strip()
		_assetClass = json.get("assetClass").strip()

		if(_assetType == "satellite"):
			if(_assetClass =="dove" or _assetClass=="rapideye"):	
				a = Asset(assetName=_assetName,assetType= _assetType, assetClass=_assetClass)
				try:
					a.save()
					return a.to_json()
				except Exception as e:
					return jsonify({'response' : e.message}), 400
			else:
				return jsonify({'response' : 'Incorrect Request Class'}), 400
		elif(_assetType=="antenna"):
			if(_assetClass =="dish" or _assetClass=="yagi"):	
				a = Asset(assetName=_assetName,assetType= _assetType, assetClass=_assetClass)
				try:
					a.save()
					return a.to_json()
				except Exception as e:
					return jsonify({'response' : e.message}), 400
			else:
				return jsonify({'response' : 'Incorrect Request Class'}), 400
		else:
			return jsonify({'response' : 'Incorrect Request Type'}), 400			

	else:
 		return jsonify({'response' : 'Cannot Find JSON type'}), 400


@app.route('/getOneAsset/<string:name>', methods=['GET'])
def getOneAsset(name):
	resp = Asset.objects(assetName=name.strip()).limit(1)
	if len(resp)>0:
		return resp[0].to_json()
	else :
		return jsonify({'response' : "No Asset Found"}), 400


@app.route('/getAllAssets', methods=['GET'])
def getAllAssets():
	resp = Asset.objects
	if len(resp)>0:
		return resp.to_json();
	else :
		return jsonify({'response' : "No Assets Found"}), 400

if __name__ == "__main__":
	app.run(debug=True)