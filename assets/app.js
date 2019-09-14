window.onload=function()
{

  //Streaming
  var url = "gamac.tech:8443";
  var video = document.getElementById('video');
  /*
  if (video.canPlayType('application/vnd.apple.mpegurl')) {
    //Soporta hls nativamente
    video.src = url + '/live/victoria559/index.m3u8';
    video.addEventListener('loadedmetadata',function() {
    video.play();
    });
  }
  else */
  if (flvjs.isSupported() && /*Hls.isSupported() &&*/ !window.navigator.userAgent.match(/Trident.*rv\:11\./) && window.navigator.userAgent.indexOf("MSIE") == -1) {
    /*
    var hls = new Hls({
      liveBackBufferLength:5
    });
    hls.loadSource(url + '/live/victoria559/index.m3u8');
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED,function() {
      video.play();
  });*/

    //Soporta flvjs
    alert("WS PLAY")
    var flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: 'wss://' + url + '/live/victoria559.flv'
    });

    flvPlayer.attachMediaElement(video);
    flvPlayer.load();
    flvPlayer.play();

  }
  else
  {
    var dashPlayer = dashjs.MediaPlayer().create();
    dashPlayer.initialize(video,'https://' + url + '/live/victoria559/index.mpd', true)

  }


}
