document.addEventListener('DOMContentLoaded', () => {

    // Function to toggle the status dropdown
    window.toggleStatusDropdown = (button) => {
        const dropdown = button.nextElementSibling;
        dropdown.classList.toggle('hidden');
    };

    // Function to confirm task completion
    window.confirmCompletion = (button) => {
        if (confirm("Is it done?")) {
            // Change the icon to DONE text
            button.outerHTML = '<span class="text-green-600 font-bold">DONE</span>';
        }
    };

    // Close dropdowns if clicked outside
    document.addEventListener('click', (event) => {
        const statusDropdowns = document.querySelectorAll('.status-dropdown');
        statusDropdowns.forEach(dropdown => {
            if (!dropdown.previousElementSibling.contains(event.target)) {
                dropdown.classList.add('hidden');
            }
        });
    });
});


function showPhotoPopup() {
    document.getElementById('photoPopup').classList.remove('hidden');
}

function hidePhotoPopup() {
    document.getElementById('photoPopup').classList.add('hidden');
}


// Function to add a new photo via Upload Photo option
function uploadPhoto() {
    // Add your logic to upload a photo (placeholder for now)
    addPhotoPlaceholder();
}

// Function to add a new photo via Use Camera option
function useCamera() {
    // Add your logic to use a camera (placeholder for now)
    addPhotoPlaceholder();
}

// Function to add a photo placeholder
function addPhotoPlaceholder() {
    const photoGallery = document.querySelector('#photoPopup .space-y-4');
    const newPhotoDiv = document.createElement('div');
    newPhotoDiv.className = 'relative';
    
    const deleteButton = document.createElement('button');
    deleteButton.className = 'absolute top-1 right-1 text-gray-600 hover:text-red-600';
    deleteButton.setAttribute('aria-label', 'Delete Photo');
    deleteButton.onclick = function() {
        confirmDelete(this);
    };
    
    const deleteIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    deleteIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    deleteIcon.setAttribute('width', '20');
    deleteIcon.setAttribute('height', '20');
    deleteIcon.setAttribute('viewBox', '0 0 20 20');
    deleteIcon.setAttribute('fill', 'currentColor');
    deleteIcon.innerHTML = '<path fill-rule="evenodd" d="M3 5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1H3V5zm2 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8zm5-3V3a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0z" clip-rule="evenodd" />';
    deleteButton.appendChild(deleteIcon);
    
    const newPhoto = document.createElement('img');
    newPhoto.src = 'https://via.placeholder.com/600x400'; // Placeholder image URL
    newPhoto.alt = 'New Photo';
    newPhoto.className = 'w-full';
    
    newPhotoDiv.appendChild(deleteButton);
    newPhotoDiv.appendChild(newPhoto);
    photoGallery.appendChild(newPhotoDiv);
}

// Function to confirm deletion of a photo
function confirmDelete(button) {
    if (confirm('Are you sure you want to delete this photo?')) {
        const photoDiv = button.closest('div.relative');
        photoDiv.remove(); // Remove the photo div
    }
}