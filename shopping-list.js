// Project Selector

document.addEventListener("DOMContentLoaded", function() {
    const projectDropdownBtn = document.getElementById('projectDropdownBtn');
    const projectDropdownList = document.getElementById('projectDropdownList');

    projectDropdownBtn.addEventListener('click', function() {
        projectDropdownList.classList.toggle('hidden');
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(e) {
        if (!projectDropdownBtn.contains(e.target)) {
            projectDropdownList.classList.add('hidden');
        }
    });
});

// Toggle the Upload Dropdown List visibility
document.getElementById('uploadBtn').addEventListener('click', function () {
    const dropdown = document.getElementById('uploadDropdownList');
    dropdown.classList.toggle('hidden');
});

// Close the Upload Dropdown if clicked outside
window.addEventListener('click', function (e) {
    const uploadBtn = document.getElementById('uploadBtn');
    const uploadDropdownList = document.getElementById('uploadDropdownList');
    
    if (!uploadBtn.contains(e.target) && !uploadDropdownList.contains(e.target)) {
        uploadDropdownList.classList.add('hidden');
    }
});