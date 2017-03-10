from mongoengine import *
connect('planet')

class Asset(Document):
	assetName = StringField(required=True, min_length=4, max_length=64, unique=True,regex=r'^[a-zA-Z0-9][A-Za-z0-9_-]*$')
	assetType = StringField(required=True)
	assetClass = StringField(required=True)