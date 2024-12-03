document.addEventListener('DOMContentLoaded', function() {
    const authButtons = document.getElementById('authButtons');
    const userProfile = document.getElementById('userProfile');
    const profileButton = document.getElementById('profileButton');
    const profileDropdown = document.getElementById('profileDropdown');
    const usernameDisplay = document.getElementById('usernameDisplay');
    const logoutButton = document.getElementById('logoutButton');

    // Check if user is logged in
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        authButtons.classList.add('hidden');
        userProfile.classList.remove('hidden');
        usernameDisplay.textContent = loggedInUser;
    }

    // Toggle dropdown
    profileButton?.addEventListener('click', () => {
        profileDropdown.classList.toggle('hidden');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (event) => {
        if (!userProfile.contains(event.target)) {
            profileDropdown.classList.add('hidden');
        }
    });

    // Handle logout
    logoutButton?.addEventListener('click', () => {
        localStorage.removeItem('loggedInUser');
        window.location.reload();
    });
});