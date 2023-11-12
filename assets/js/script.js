// Define a function to load JSON content
function loadJSON(language) {
    // Load the content JSON file
    fetch('./assets/js/content.json')
      .then((response) => response.json())
      .then((data) => updateContent(data[language]))
      .catch((error) => console.error('Error loading JSON:', error));
  }
  
  // Define a function to update the webpage content
  function updateContent(data) {
    // Replace content on the webpage using data loaded from the JSON
    document.getElementById('title').textContent = data.title;
    document.getElementById('subtitle').textContent = data.subtitle;
    // Add more elements as needed

    const selectedLanguage = document.getElementById('languageSelector').value;
    if (selectedLanguage === 'en') {
      history.pushState(null, '', window.location.pathname);
    } else {
      history.pushState(null, '', `/${selectedLanguage}`);
    }
  }
  
  // Add an event listener to the language selector dropdown
  document.getElementById('languageSelector').addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    loadJSON(selectedLanguage);
  });
  
  // Load the default language content
  loadJSON('en');
  