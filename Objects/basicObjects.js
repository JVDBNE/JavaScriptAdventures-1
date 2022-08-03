//individual object

var movie = {
    title: 'Wonder Woman',
    time: '2pm'
}; 


alert(movie.title);     //accessing a prop

//add a new property to an exisiting object
movie.status = 'unavalible';
console.log(movie)


//placing objects inside an array

var movies = [ {
    title: 'Wonder Woman',
    status: 'avalible',
    time: '2pm'
}, 
{
    title: 'Batman',
    status: 'avalible',
    time: '12pm'
}, 
{
    title: 'Superman',
    status: 'avalible',
    time: '1pm'
}, 
{
    title: 'Darkwing Duck',
    status: 'unavalible',
    time: '4pm'
}
]


//create a show times program that shows the movie title and show time if it is avalible. 

for (var movie of movies) {
    if (movie.status === 'avalible'){
        console.log("The Movie " + movie.title + "plays at" + movie.time);    //long way of doing it... 
    } else {
        console.log(`Sorry, the movie ${movie.title} is sold out`);       // template literal ...do this!         
    }
}



//--------------------------------------------------------------------------------------------------------------------------

//Create an object named player.
// Add three properties to this object: name, color, and score. Set the value of name and color to a string, and the value of score to a number.

var player = {
    name: 'Scorpian',
    color: 'Yellow',
    score:  45
};


//Using dot (.) notation, change the value of the score property to a different number.

player.score = 38

