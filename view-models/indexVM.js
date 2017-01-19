var IndexViewModel = function() {
    this.username = ko.observable();
    this.password = ko.observable();
    this.confirmPassword = ko.observable();
	this.email = ko.observable();
	this.isSignUpOn = ko.observable(true);
	this.message = ko.observable();

	this.toggleSignUp = function() {
		this.isSignUpOn(!this.isSignUpOn());
	};

	this.loginHandler = function() {
		var data = {};
		data.username = this.username;
		data.password = this.password;
		that = this;
		$.ajax({
			method:'POST',
			url: 'http://localhost:1337/login/',
			data: data,
			crossDomain: true,
			dataType: 'json',
			success: function(returnedData) 
			{ 
				localStorage.setItem('token', returnedData.token);
				window.location.replace("http://localhost:3000/coupons");
			},
			error: function(returnedData) { 
				if(typeof returnedData.responseJSON.err != Object)
					that.message(returnedData.responseJSON.err.toString());
				else 
					that.message('No fields can be left empty');
					$("#message").show().delay(5000).fadeOut();
			}
		});
	};

	this.signUpHandler = function() {
		var data = {};
		data.username = this.username;
		data.password = this.password;
		data.email = this.email;
		data.confirmPassword = this.confirmPassword;
		that = this;
		$.ajax({
			method:'POST',
			url: 'http://localhost:1337/signup/',
			data: data,
			crossDomain: true,
			dataType: 'json',
			success: function(returnedData) 
			{ 
				localStorage.setItem('token', returnedData.token);
				window.location = "http://localhost:3000/coupons";
			},
			error: function(returnedData) { 
				if(typeof returnedData.responseJSON.err != Object)
					that.message(returnedData.responseJSON.err.toString());
				else 
					that.message('No fields can be left empty');
					$("#message").show().delay(5000).fadeOut();
			}
		});
	};
};
 
ko.applyBindings(new IndexViewModel());
