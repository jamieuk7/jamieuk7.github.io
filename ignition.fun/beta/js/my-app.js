// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add views
var view1 = myApp.addView('#view-1');
var view2 = myApp.addView('#view-2', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var view3 = myApp.addView('#view-3', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

greeting();

var nav = window.navigator;
var ua = nav.userAgent;

function isStandalone(a) {
    console.log(("standalone" in nav) && nav.standalone);
    return ("standalone" in nav) && nav.standalone;
}

if (isStandalone()) {
    console.log('Is Standalone: YES ' + ua);
    console.log('NAVIGATOR: ' + nav);
    // myApp.alert('Is Standalone: YES ' + ua);
    // myApp.alert('NAVIGATOR: ' + nav);
    $$("body").addClass('body-standalone');
    // $$(".navbar").animate({
    //     'height': '64px'
    // }, 100);
    // $$(".navbar .center").animate({
    //     'margin-top': '13px'
    // }, 100);
    $$(".navbar").css('height', '64px');
    $$(".navbar .center").css('margin-top', '13px');
    $$(".statusbar-overlay").show();
} else {
    $$(".statusbar-overlay").hide();
    $$("body").addClass('body-web');
    $$(".navbar").css('margin-top', '0px');
    console.log('Is Standalone: NO ' + ua);
    console.log('NAVIGATOR: ' + nav.standalone);
    // myApp.alert('Is Standalone: NO ' + ua);
    // myApp.alert('NAVIGATOR: ' + nav.standalone);
}

function greeting() {
	var myDate = new Date();
	var hrs = myDate.getHours();

	var greet;

	if (hrs < 12) {
	    greet = 'Good Morning';
	} else if (hrs >= 12 && hrs <= 17) {
	    greet = 'Good Afternoon';
	} else if (hrs >= 17 && hrs <= 24) {
	    greet = 'Good Evening';
	}

	$$(".greeting").text(greet);
}
