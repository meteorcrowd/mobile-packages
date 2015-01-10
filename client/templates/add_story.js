Template.addStory.events({
    'click button': function () {
        text = $('#story').val();
        Stories.add({story: text});
    }
});
