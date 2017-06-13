/* Author: Lily Wu
  Date: June 12, 2017 */

const $addNoteButton = document.querySelector('#addNoteButton');
const $notesDiv = document.querySelector('#notesDiv');

var $numNotesLabel = document.querySelector('#numNotesLabel');
var numNotes = 0;

// uses window.prompt rather than editable content
// function addNote() {
//   numNotes++;
//   console.log('numNotes is ' + numNotes);
//   $numNotesLabel.innerHTML = 'Current number of notes: ' + numNotes;
//   var result = window.prompt('Enter new note:', '');
//   var $newNote = document.createElement('p');
//   $newNote.innerHTML = '<span id="close" onclick="this.parentNode.parentNode.removeChild(this.parentNode); numNotes--; $numNotesLabel.innerHTML = &quot;Current number of notes: &quot; + numNotes; return false;">x</span> <br /><br />' + result;
//   $newNote.className = 'note';
//   $notesDiv.appendChild($newNote);
// }

// uses editable content rather than window.prompt
function addNote() {
  numNotes++;
  $numNotesLabel.innerHTML = 'Current number of notes ' + numNotes;
  var $newX = document.createElement('p');
  $newX.innerHTML = 'x';
  $newX.className = 'x';
  // $newX.style.cursor = 'pointer';
  $newX.onclick = deleteNote;
  var $noteText = document.createElement('p');
  $noteText.contentEditable = true;
  console.log('Date() is ' + Date());
  var $time = document.createElement('p')
  $time.innerHTML = Date();
  $time.className = 'time';

  var $newNote = document.createElement('p')
  $newNote.className = 'note';
  $newNote.appendChild($newX);
  $newNote.appendChild($noteText);
  $newNote.appendChild($time);
  $notesDiv.appendChild($newNote);
}

function deleteNote() {
  this.parentNode.parentNode.removeChild(this.parentNode);
  numNotes--;
  $numNotesLabel.innerHTML = 'Current number of notes: ' + numNotes;
  return false;
}

$addNoteButton.addEventListener('click', addNote);
