
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

// Function to mark a job as done
function markAsDone(button) {
    if (confirm("Is it done?")) {
        // Replace the checkmark icon with "DONE" text
        button.outerHTML = `<span class="text-green-500 font-bold">DONE</span>`;
    }
}

// Function to delete a job
function deleteJob(button) {
    if (confirm("Are you sure you want to delete this job?")) {
        const jobCard = button.closest('.job-card');
        jobCard.remove();
    }
}

// Function to toggle the Money Transaction Popup
function toggleMoneyPopup() {
    const popup = document.getElementById('money-popup');
    popup.classList.toggle('hidden');
}

function toggleMoneyTransactionPopup() {
    const popup = document.getElementById('money-transaction-popup');
    popup.classList.toggle('hidden');
}


// Function to toggle the Add Note Popup
function toggleNotePopup() {
    const popup = document.getElementById('note-popup');
    popup.classList.toggle('hidden');
}

// Function to replace the content with icons once the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    feather.replace();
});
