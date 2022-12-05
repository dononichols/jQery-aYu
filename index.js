/*
// how to manipulate style using jQuery
// if there's two values in the .css(), then you are setting the value of the selected item
$('h1').css('color', 'red');

// how to get the color of something (h1)
//if there's one value in the .css(), then you are getting the value of it
console.log($('h1').css('color'));

// how to get the font size of something (h1)
console.log($('h1').css('font-size'));
*/

// -----------------
/*
// use jQuery to add the .big-title css class
$('h1').addClass('big-title');

// $('h1').removeClass('big-title'); // to remove

// to include more than one style: add all styles within the same quotation marks, seperated a space.
// $('h1').addClass('big-title margin-50'); // to remove

// to find out if a class exists, use- hasClass:
// $('h1').hasClass('margin-50'); // use in console
*/

// manipulating text -------

// this will change the displayed text to what's in the ('?')
// $('h1').text('don don don');

// manipulating attribute -------
/*
console.log($('img').attr('src'));

// select all a tags and change the href to yahoo.com
// change from google to yahoo
$('a').attr('href', 'https://www.yahoo.com')

// a class is also an attribute
// in console, type this to get all the classes applied to h1
// $('h1').attr('class');
*/

// Adding Event Listeners with jQuery -------
/*
$('h1').click(function() {
    $('h1').css('color', 'purple');
});
*/

/*
// using vanilla javaScript to select and add an Event Listener to all the buttons-a lot of code compared to jQuery
for (var i = 0; i<5; i++){
    document.querySelectorAll('button')[i].addEventListener('click', function(){
        document.querySelector('h1').style.color = 'purple';
    });
}
*/

/*
// do the same thing easier with jQuery
$('button').click(function(){
    $('h1').css('color', 'green');
});
*/

/*
// how to detect for keystrokes inside the text box using jQuery
$('input').keypress(function(event){
    console.log(event.key);
    // make input key display as h1
    $('h1').text(event.key);
})
*/
/*
// another way/more flexible way to do this
$('h1').on('mouseover', function(){
    $('h1').css('color', 'orange');
});
*/

// Adding and Removing Elements with jQuery ---
/*
// add html before h1:
$('h1').before('<button>new</button>');
// before, after, prepend, append
*/

/*
// remove items
//remove buttons
$('button').remove();
*/

// Website Animation with jQuery -----

// -- jQuery Effect Methods --- m3schools.com
// - api.jquery.com/category/effects/

// make the h1 disappear when we click a button:
/*
$('button').on('click', function(){
    $('h1').hide(); // you can also use: .show
});
*/

/*
// use toggle, to hide and show
$('button').on('click', function(){
    $('h1').toggle(); 
});
// hide is not the best option, because it is sudden and caused the html to beremoved from the layout. this impaces the layout.
*/

/*
// use fadeOut and fadeIn
// $('h1').fadeOut();
// fadeToggle();
$('button').on('click', function(){
    $('h1').fadeToggle(); 
});
*/

/*

// slideUp(); colapses upwards
// $('h1').slideUp();
// slideDown(); colapses downwards
// $('h1').slideDown();
// slideToggle(); allows from slide toggle up/down
$('button').on('click', function(){
    $('h1').slideToggle(); 
});
*/

// For More Control over Animation-using css
/*
$('button').on('click', function(){
    $('h1').animate({opacity: 0.5}); 
});
*/
/*
$('button').on('click', function(){
    $('h1').animate({opacity: 0.5}); //the css rule used here has to have a numeric value.
});
*/
// chain a few animations together *******
$('button').on('click', function(){
    $('h1').slideUp().slideDown().animate({opacity: 0.5}); 
});