var tag = document.createElement('script');

tag.src = "http://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
// function onYouTubeIframeAPIReady(id) {
//   player = new YT.Player('player', {
//     height: '100',
//     width: '100',
//     videoId: id,
//     events: {
//       'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//     }
//   });
// }

function createPlayer(id) {
  player = new YT.Player('player', {
    height: '100',
    width: '100',
    videoId: id,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  // event.target.playVideo();
  playYT();
  $('#playPause').show();
}

var done = false;
function onPlayerStateChange(event) {
  // if (event.data == YT.PlayerState.PLAYING && !done) {
  //   setTimeout(stopYT, 6000);
  //   done = true;
  // }
  console.log('onPlayerStateChange');
}

function playYT() {
  player.playVideo();
  $('#playPause').find('img').attr('src', 'pics/play_p.svg');
}
function pauseYT() {
  player.pauseVideo();
  $('#playPause').find('img').attr('src', 'pics/pause_p.svg');
}
function stopYT() {
  player.stopVideo();
}

function toggleYT() {
  var state = player.getPlayerState();
  console.log(state);
  switch(state){
    case 1: 
      pauseYT();
      break;
    case 2:
      playYT();
      break;
    default:
  }
}