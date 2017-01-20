var Coupon = function(id, amount_off, percent_off) {
	this.id = ko.observable(id);
	this.amount_off = ko.observable(amount_off);
	this.percent_off = ko.observable(percent_off);
};
 
