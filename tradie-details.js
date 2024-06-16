
// Toggle the visibility of the notes popup
function toggleNotesPopup() {
    const popup = document.getElementById('notes-popup');
    if (popup) {
        popup.classList.toggle('hidden');
    }
}

// Function to save notes (mock implementation)
function saveNotes() {
    // Close the popup after saving notes
    toggleNotesPopup();
    alert('Note saved!');
}

// Toggle the visibility of the job popup
function toggleJobPopup() {
    const popup = document.getElementById('job-popup');
    if (popup) {
        popup.classList.toggle('hidden');
    }
}

// Function to save jobs (mock implementation)
function saveJob() {
    // Close the popup after saving jobs
    toggleJobPopup();
    alert('Job saved!');
}