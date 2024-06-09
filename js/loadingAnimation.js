// Function to start loading animation
export function startLoadingAnimation() {
    const pinwheel = document.getElementById('pinwheel');
    const placeholder = document.getElementById('placeholder');

    pinwheel.style.display = 'block'; // Show pinwheel
    placeholder.style.display = 'none'; // Hide placeholder
    console.log('Loading animation started');
}

// Function to stop loading animation
export function stopLoadingAnimation() {
    const pinwheel = document.getElementById('pinwheel');
    const placeholder = document.getElementById('placeholder');

    pinwheel.style.display = 'none'; // Hide pinwheel
    placeholder.style.display = 'block'; // Show placeholder
    console.log('Loading animation stopped');
}
