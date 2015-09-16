var songs;
var songs2;

$.ajax({
  url: "javascripts/songs.json",
  context: document.body
}).done(function(response) {
 console.log(response.mySongs);
 songs=response.mySongs;
 //var songs = response;
 
 	for (var i = 0; i < songs.length; i++) {
		$("#songList").append("Song "+ i);
		$("#songList").append(songs[i].songTitle);
		$("#songList").append(songs[i].artist);
		$("#songList").append(songs[i].album);
		$("#songList").append(songs[i].gener);
		$("#songList").append("<button>Delete</button>");
		$("#songList").append('<br>');
	}
 });	
$("#fetchSongs").on("click", function (){

	$.ajax({
  		url: "javascripts/get-more-songs.json",
  		context: document.body
		}).done(function(response) {
 		console.log(response.songsList);
 		songs2=response.songsList;
 //var songs = response;
 
 	for (var i = 0; i < songs2.length; i++) {
		$("#songList2").append("Song "+ i);
		$("#songList2").append(songs2[i].songTitle);
		$("#songList2").append(songs2[i].artist);
		$("#songList2").append(songs2[i].album);
		$("#songList2").append(songs2[i].gener);
		$("#songList2").append("<button>Delete</button>");
		$("#songList2").append('<br>');
	}	
 
 	
 });
 });
 	


// var favoriteSongs = document.getElementById("songList");

// for (var i = 0; i< songs.length; i++) {
// 	var currentSong = songs[i];
// 	currentSong = currentSong.a(">", "-");
// 	currentSong = currentSong.replace("*", "");
// 	currentSong = currentSong.replace("!", "");
// 	currentSong = currentSong.replace("@", "");
// 	currentSong = currentSong.replace("(", "");
// 	favoriteSongs.innerHTML += "<h4 class= 'song'>" + currentSong + "</h4>";

	

// }