
var songsApp = angular.module("songsApp", []);
songsApp.controller("songsController", function ($scope) {
	$scope.songList = songList.songs;

	$scope.playSong = function(index){
		Amplitude.playSongAtIndex( index );
	}
});

/*
	Initializes AmplitudeJS
*/

Amplitude.init(songList);
