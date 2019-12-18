var lightButton = document.querySelector('.light-button');
var context = new AudioContext();
var buffer, source, destination; 
var analyser = context.createAnalyser;



var loadSoundFile = function(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', "https://song.link/by/i/1440836970", true);
  xhr.responseType = 'arraybuffer';
  xhr.onload = function(e) {
    context.decodeAudioData(this.response,
      function(decodedArrayBuffer) {
        buffer = decodedArrayBuffer;
      }, function(e) {
        console.log('Error decoding file', e);
      });
    };
    xhr.send();
  }

  var play = function(){
    source = context.createBufferSource();
    source.buffer = buffer;
    destination = context.destination;
    source.connect(destination);
    source.start(0);
  }

  