
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

//To make BLS fullscreen
const target = $('#target')[0]; // Get DOM element from jQuery collection
$(document).ready(function(){
  $("#enterFullScreen").click(function(){
    console.log(document.coookie);
	   if (screenfull.enabled) {
		     screenfull.request(target);
	 }
 });
});

$(document).ready(function(){
  if (screenfull.enabled) {
  	screenfull.onchange(() => {
      if (screenfull.isFullscreen){
        $("#enterFullScreen").addClass("hidden");
        $("#hideBLS").addClass("hidden");
      }else{
          $("#enterFullScreen").removeClass("hidden");
          $("#hideBLS").removeClass("hidden");
      }
  	});
  }
});

$(document).ready(function(){
    $("#hideBLS").click(function(){
      $("#bls").toggleClass("hidden");
    });

});

//Session set up
$(document).ready(function(){
  var audioQueue = []
  switch (getCookie("mode")) {
    case "easy5":
      audioQueue = ["/Part One/part1segmentx.mp3", "/Part 3/Initial/initialsegx.mp3", "/Part 3/PMR/feetx.mp3", "/Part 3/PMR/shouldersx.mp3", "/Part 3/PMR/neckx.mp3", "/Part 3/PMR/eyesx.mp3", "/Part 3/Mental/countx.mp3", "/Part 3/Finish/finishx.mp3"];
      break;
    case "easy10":
      //Visualization = only one audio? More for more time? Randomized later??
      audioQueue = ["/Part One/part1segmentx.mp3", "/Part 3/Initial/initialsegx.mp3", "/Part 3/PMR/feetx.mp3", "/Part 3/PMR/shouldersx.mp3", "/Part 3/PMR/neckx.mp3", "/Part 3/PMR/upperbackx.mp3", "/Part 3/PMR/lowerbackx.mp3", "/Part 3/PMR/eyesx.mp3", "/Part 3/Mental/countx.mp3", "/Part 3/Visualizations/healingx.mp3", "/Part 3/Finish/finishx.mp3"];
      break;
    case "easy15":
    audioQueue = ["/Part One/part1segmentx.mp3", "/Part 3/Initial/initialsegx.mp3", "/Part 3/PMR/feetx.mp3", "/Part 3/PMR/shouldersx.mp3", "/Part 3/PMR/neckx.mp3", "/Part 3/PMR/upperbackx.mp3", "/Part 3/PMR/lowerbackx.mp3", "/Part 3/PMR/eyesx.mp3", "/Part 3/Mental/countx.mp3", "/Part 3/Visualizations/healingx.mp3", "/Part 3/Finish/finishx.mp3"];
      break;
    case "easy30":
      audioQueue = ["/Part One/part1segmentx.mp3","/Part 3/Initial/initialsegx.mp3"];
      break;
    case "exc15":
      audioQueue = ["/Part One/part1segmentx.mp3","/Part 3/Initial/initialsegx.mp3"];
      break;
    case "exc30":
      audioQueue = ["/Part One/part1segmentx.mp3","/Part 3/Initial/initialsegx.mp3"];
      break;
    case "exc60":
      audioQueue = ["/Part One/part1segmentx.mp3","/Part 3/Initial/initialsegx.mp3"];
    case "exc90":
      audioQueue = ["/Part One/part1segmentx.mp3","/Part 3/Initial/initialsegx.mp3"];
  }
  //cycles through queue of audio until finsished using an event listener to start the next audio when one finishs
  audioQueue = ['audio/Part One/ding.mp3','audio/Part One/ding.mp3','audio/Part One/ding.mp3'];
  var currentAudio = 0;
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', audioQueue[currentAudio]);
  audioElement.play();
  console.log(audioElement.duration);
  audioElement.addEventListener("ended", function() {
    console.log("audio ended")
    if (currentAudio < audioQueue.length){
      audioElement.play();
      console.log(audioElement.duration);
    }
    currentAudio++
  });
});
