function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6mQajyaLQdc":
        Script1();
        break;
      case "6lwTVoJgPE7":
        Script2();
        break;
      case "5f9FXLgnSGz":
        Script3();
        break;
      case "5eyLSolekor":
        Script4();
        break;
  }
}

function Script1()
{
  // Get the player object
var player = GetPlayer();

// Define the variable name in Storyline
var recognizedSpeechVar = "SL_transcript";

// Create a new SpeechRecognition object
var recognition = new webkitSpeechRecognition(); // Chrome uses the 'webkit' prefix

// Set the language for speech recognition
recognition.lang = 'en-US'; // Specify the language

// Enable continuous speech recognition
recognition.continuous = true;

// Create a new SpeechSynthesisUtterance object for updating the transcript
var utterance = new SpeechSynthesisUtterance();

// Variable to store the speech-to-text transcript
var transcript = '';

// Event handler for capturing interim results (partial transcriptions)
recognition.onresult = function(event) {
  var interimTranscript = '';
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      transcript += event.results[i][0].transcript + ' ';
    } else {
      interimTranscript += event.results[i][0].transcript;
    }
  }
  player.SetVar("recognizedSpeechVar", transcript);
  utterance.text = interimTranscript;
  speechSynthesis.speak(utterance);
};

// Start speech recognition
recognition.start();
}

function Script2()
{
  // Get the player object
var player = GetPlayer();

// Define the variable name in Storyline
var recognizedSpeechVar = "SL_transcript";

// Create a new SpeechRecognition object
var recognition = new webkitSpeechRecognition(); // Chrome uses the 'webkit' prefix

// Set the language for speech recognition
recognition.lang = 'en-US'; // Specify the language

// Enable continuous speech recognition
recognition.continuous = true;

// Create a new SpeechSynthesisUtterance object for updating the transcript
var utterance = new SpeechSynthesisUtterance();

// Variable to store the speech-to-text transcript
var transcript = '';

// Event handler for capturing interim results (partial transcriptions)
recognition.onresult = function(event) {
  var interimTranscript = '';
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      transcript += event.results[i][0].transcript + ' ';
    } else {
      interimTranscript += event.results[i][0].transcript;
    }
  }
  player.SetVar("recognizedSpeechVar", transcript);
  utterance.text = interimTranscript;
  speechSynthesis.speak(utterance);
};

// Start speech recognition
recognition.start();
}

function Script3()
{
  // Get the player object
var player = GetPlayer();

// Define the variable name in Storyline
var recognizedSpeechVar = "SL_transcript";

// Create a new SpeechRecognition object
var recognition = new webkitSpeechRecognition(); // Chrome uses the 'webkit' prefix

// Set the language for speech recognition
recognition.lang = 'en-US'; // Specify the language

// Enable continuous speech recognition
recognition.continuous = true;

// Create a new SpeechSynthesisUtterance object for updating the transcript
var utterance = new SpeechSynthesisUtterance();

// Variable to store the speech-to-text transcript
var transcript = '';

// Event handler for capturing interim results (partial transcriptions)
recognition.onresult = function(event) {
  var interimTranscript = '';
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      transcript += event.results[i][0].transcript + ' ';
    } else {
      interimTranscript += event.results[i][0].transcript;
    }
  }
  player.SetVar("recognizedSpeechVar", transcript);
  utterance.text = interimTranscript;
  speechSynthesis.speak(utterance);
};

// Start speech recognition
recognition.start();
}

function Script4()
{
  // Get the player object
var player = GetPlayer();

// Define the variable name in Storyline
var recognizedSpeechVar = "SL_transcript";

// Create a new SpeechRecognition object
var recognition = new webkitSpeechRecognition(); // Chrome uses the 'webkit' prefix

// Set the language for speech recognition
recognition.lang = 'en-US'; // Specify the language

// Enable continuous speech recognition
recognition.continuous = true;

// Create a new SpeechSynthesisUtterance object for updating the transcript
var utterance = new SpeechSynthesisUtterance();

// Variable to store the speech-to-text transcript
var transcript = '';

// Event handler for capturing interim results (partial transcriptions)
recognition.onresult = function(event) {
  var interimTranscript = '';
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      transcript += event.results[i][0].transcript + ' ';
    } else {
      interimTranscript += event.results[i][0].transcript;
    }
  }
  player.SetVar("recognizedSpeechVar", transcript);
  utterance.text = interimTranscript;
  speechSynthesis.speak(utterance);
};

// Start speech recognition
recognition.start();
}

