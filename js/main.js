/* Author: Lily Wu
  Date: June 12, 2017 */

const $addNoteButton = document.querySelector('#addNoteButton');
const $notesDiv = document.querySelector('#notesDiv');

var $numNotesLabel = document.querySelector('#numNotesLabel');
var numNotes = 0;

// uses window.prompt rather than editable content
function addNote() {
  numNotes++;
  console.log('numNotes is ' + numNotes);
  $numNotesLabel.innerHTML = 'Current number of notes: ' + numNotes;
  var result = window.prompt('Enter new note:', '');
  var $newNote = document.createElement('p');
  $newNote.innerHTML = '<span id="close" onclick="this.parentNode.parentNode.removeChild(this.parentNode); numNotes--; $numNotesLabel.innerHTML = &quot;Current number of notes: &quot; + numNotes; return false;">x</span> <br /><br />' + result;
  $newNote.className = 'note';
  $notesDiv.appendChild($newNote);
}



$addNoteButton.addEventListener('click', addNote);
