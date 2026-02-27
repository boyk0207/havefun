document.addEventListener('DOMContentLoaded', function() {
    // Check which page we're on
    const isHomePage = document.querySelector('.home-page');
    const isLogInPage = document.querySelector('.Log-In-page');
    
    if (isHomePage) {
        initHomePage();
    } else if (isLogInPage) {
        initLogInPage();
    } else if (isMemoryPage) {
        initMemoryPage();
    }
});

// ============================================
// HOME PAGE - some shit
// ============================================

function initHomePage() {
    
}