window.onload=function()
{

  //Streaming
  var url = "https://gamac.tech:8443";
  var video = document.getElementById('video');

  if (video.canPlayType('application/vnd.apple.mpegurl')) {
    //Soporta hls nativamente
    video.src = url + '/live/victoria559/index.m3u8';
    video.addEventListener('loadedmetadata',function() {
    video.play();
    });
  }
  else if (flvjs.isSupported() && !window.navigator.userAgent.match(/Trident.*rv\:11\./) && window.navigator.userAgent.indexOf("MSIE") == -1) {
    //Soporta flvjs
    var flvPlayer = flvjs.createPlayer({
        type: 'flv',
        isLive: true,
        enableStashBuffer:false,
        url: url + '/live/victoria559.flv'
    });
    flvPlayer.attachMediaElement(video);
    flvPlayer.load();
    flvPlayer.play();
  }
  else
  {
    var dashPlayer = dashjs.MediaPlayer().create();
    dashPlayer.initialize(video, url + '/live/victoria559/index.mpd', true)

  }


}
