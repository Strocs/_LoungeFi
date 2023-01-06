const isDarkMode = localStorage.getItem('dark')
document.documentElement.className = isDarkMode ? 'dark' : ''
