const body = document.getElementById("keyboard-body"); // the element from the html document
fetch("keyboard.json") // fetching the information from the JSON that has all the information in it
  .then(res => res.json()) // gets the response from the fetch
  .then(data => {
    // gets the data that has been retreived from the JSON
    for (let i = 0; i < data.length; i++) {
      const row = body.insertRow(i);
      const imageCell = row.insertCell(0);
      const nameCell = row.insertCell(1);
      const descriptionCell = row.insertCell(2);
      const priceCell = row.insertCell(3);
      const rating = row.insertCell(4);
      // Creates the rows with their values (pretty much the values that are in the JSON)
      imageCell.innerHTML = `<img src=${data[i].image} />`; // Grayson heled with this line
      nameCell.innerHTML = data[i].name;
      descriptionCell.innerHTML = data[i].description;
      priceCell.innerHTML = data[i].price;
      // so for each item in the JSON plant it correctly into each of these rows of the table that has been made in the mouse html
      rating.innerHTML = `
        <div class="rating">
            <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="text"></label>
            <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="text"></label>
            <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="text"></label>
            <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="text"></label>
            <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="text"></label>
        </div>     
      `;
      // adds the static rating system to the final row of the page, i did the best i could.
    }
  });
