Stories = new Mongo.Collection('stories');
Stories._ensureIndex({'location': '2dsphere'});
