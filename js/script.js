/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["girls like you", "I like it", "come closer", "too good at goodbye"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images_urls= ["https://i1.sndcdn.com/artworks-000386942226-i4u2y9-t500x500.jpg","https://www.billboard.com/files/styles/768x433/public/media/cardi-b-j-balvin-bad-bunny-i-like-it-2018-billboard-1500.jpg","https://i.ytimg.com/vi/vQwfUMmai_0/maxresdefault.jpg","https://images.genius.com/e06b23fc67d038759ac107f1501fc998.1000x1000x1.jpg" ];
var artist = ["Maroon 5","Cardi b","A boogie wit the hoodie","Sam smith"];
var song lengths = ["270","256","156","264"];
var links = ["https://www.youtube.com/watch?v=aJOTlE1K90k","https://www.youtube.com/watch?v=xTlNMmZKwpA","https://www.youtube.com/watch?v=vQwfUMmai_0","https://www.youtube.com/watch?v=J_ub7Etch2U"]

function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
