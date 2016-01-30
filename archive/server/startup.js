Meteor.startup( function () {
    Stories._ensureIndex({'location.index': '2dsphere'});
});
