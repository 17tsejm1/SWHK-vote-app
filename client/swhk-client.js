Template.homepage.helpers({
	teams: function () {
		return Teams.find({});
	}
});

Template.homepage.events({
	"click .btn": function () {
		var voted = Session.get("voted");

		if (voted != "yes") {
			Teams.update(this._id, {$inc: {votes: 1}});	
			$(".top").hide();
		}

		Session.setPersistent("voted", "yes");	
	}
});

