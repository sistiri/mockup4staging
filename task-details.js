// Function to show the Add Note Popup
function showAddNotePopup() {
    document.getElementById('addNotePopup').classList.remove('hidden');
}

// Function to hide the Add Note Popup
function hideAddNotePopup() {
    document.getElementById('addNotePopup').classList.add('hidden');
}

// Placeholder function for adding a note
function addNote() {
    // Implement adding note functionality
    alert('Note added');
    hideAddNotePopup();
}

// Placeholder functions for photo actions
function uploadPhoto() {
    // Implement photo upload functionality
    alert('Upload photo functionality to be implemented');
}

function useCamera() {
    // Implement camera capture functionality
    alert('Use camera functionality to be implemented');
}

// Feather icons initialization
feather.replace();

