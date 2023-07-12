fetch('https://api.example.com/drugs')
  .then(response => response.json())
  .then(data => {
    const drugList = document.getElementById('drugList');

    data.forEach(drug => {
        const listItem = document.createElement('li');
        listItem.textContent = drug.name;
        drugList.appendChild(listItem);

    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);


  });