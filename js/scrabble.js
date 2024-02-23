// Function to populate the list based on the search input
    function searchList() {
      const searchInput = document.getElementById('searchInput').value.toLowerCase();
      const resultList = document.getElementById('resultList');
      const twoLettersList = document.getElementById('twoLettersList');

      resultList.innerHTML = ''; // Clear previous results
      twoLettersList.innerHTML = ''; // Clear previous two_letters list

      // Check if the search input has at least two characters
      if (searchInput.length >= 2) {
        // Uncomment the desired matching criteria
        //const filteredData = all.filter(item => item.toLowerCase().includes(searchInput.toLowerCase()));
        const filteredData = all.filter(item => item.toLowerCase().startsWith(searchInput));
        //const filteredData = all.filter(item => item.toLowerCase() === searchInput.toLowerCase());

        // Populate the result list
        filteredData.forEach(item => {
          const li = document.createElement('li');
          li.className = 'list-item list-group-item';
          li.textContent = item;
          resultList.appendChild(li);
        });
      }

      // Group two_letters by starting letter
      const groupedByLetter = groupByStartingLetter(two_letters);

      // Populate the two_letters list with rows for each starting letter
      for (const startingLetter in groupedByLetter) {
        const words = groupedByLetter[startingLetter];
        words.forEach(word => {
          const span = document.createElement('span');
          span.className = 'list-item';
          span.textContent = word;
          twoLettersList.appendChild(span);
        });
      }
    }

    // Initial population of the list
    searchList();

    // Function to group words by starting letter
    function groupByStartingLetter(words) {
      return words.reduce((result, word) => {
        const startingLetter = word.charAt(0).toLowerCase();
        if (!result[startingLetter]) {
          result[startingLetter] = [];
        }
        result[startingLetter].push(word);
        return result;
      }, {});
    }