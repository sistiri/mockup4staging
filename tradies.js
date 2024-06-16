
    // Toggle the visibility of the notes popup
    function toggleNotesPopup(popupId) {
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.classList.toggle('hidden');
        }
    }

    // Function to save notes (mock implementation)
    function saveNotes(popupId) {
        // Close the popup after saving notes
        toggleNotesPopup(popupId);
        alert('Notes saved!');
    }

    // Function to toggle the visibility of the Add New Tradie section
    function toggleAddTradieSection() {
        var section = document.getElementById('addTradieSection');
        if (section.classList.contains('hidden')) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    }