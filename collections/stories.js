Stories = new Mongo.Collection('stories');
Stores._ensureIndex({'location': '2dsphere'});
