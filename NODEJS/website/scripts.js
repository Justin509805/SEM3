const list = document.querySelector('ul');
// add evenlistener to button 
document.querySelector('button').addEventListener('click', () => {
    // Check if button works
    console.log('Button clicked!');
    fetch("http://localhost:8080").then(response => {
        return response.json()
    }).then(data => {
        console.log(data);

        //replaces the data
        list.replaceChildren()
        // Create list item for every item in array
        data.Cars.forEach(element => {
            const listItem = document.createElement('li');
            listItem.textContent = element;
            list.appendChild(listItem);
        });
    }).catch(err => {
        console.log(err);
    });
});