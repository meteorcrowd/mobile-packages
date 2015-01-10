Template.list.helpers({
    stories: function () {
        return Stories.find({}, {sort: {"createdAt": -1}});
    },
    moment: function(date) {
        return moment(date).fromNow();
    }
});
