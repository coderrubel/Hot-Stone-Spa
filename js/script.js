/*Add class when scroll down*/
$(window).scroll(function(event){
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $(".go-top").addClass("show");
    } else {
        $(".go-top").removeClass("show");
    }
});
/*Animation anchor*/
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
});



// js code for calendar plugin
var events = [

    {'Date': new Date(2016, 6, 7), 'Title 1': 'Doctor appointment at 3:25pm.'},

    {'Date': new Date(2016, 6, 18), 'Title 2': 'New Garfield movie comes out!', 'Link': 'https://garfield.com'},

    {'Date': new Date(2016, 6, 27), 'Title 3': '25 year anniversary', 'Link': 'https://www.google.com.au/#q=anniversary+gifts'},

];

var settings = {
    Color: '',
    LinkColor: '',
    NavShow: true,
    NavVertical: false,
    NavLocation: '',
    DateTimeShow: true,
    DateTimeFormat: 'mmm, yyyy',
    DatetimeLocation: '',
    EventClick: '',
    EventTargetWholeDay: false,
    DisabledDays: [],
    // ModelChange: model
};

var element = document.getElementById('caleandar');
caleandar(element, events, settings);

//slider
$("#ex2").slider({});

