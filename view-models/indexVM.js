var IndexViewModel = function() {
    this.username = ko.observable();
    this.password = ko.observable();
    this.confirmPassword = ko.observable();
	this.email = ko.observable();
	this.isSignUpOn = ko.observable(true);

	this.toggleSignUp = function() {
		this.isSignUpOn(!this.isSignUpOn());
	};

	this.loginHandler = function() {
		var data = {};
		data.username = this.username;
		data.password = this.password;
		$.ajax({
			method:'POST',
			url: 'http://localhost:1337/login/',
			data: data,
			crossDomain: true,
			dataType: 'json',
			success: function(returnedData) { alert("Success" + returnedData);  },
			error: function() { alert('Failed!');  }
		});
	};
};
 
ko.applyBindings(new IndexViewModel());
