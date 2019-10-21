const body = document.getElementById('mouse-body')
fetch('mouse.json')
  .then(res => res.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      const row = body.insertRow(i)
      const imageCell = row.insertCell(0)
      const nameCell = row.insertCell(1)
      const descriptionCell = row.insertCell(2)
      const priceCell = row.insertCell(3)
      const rating = row.insertCell(4)
      imageCell.innerHTML = `<img src=${data[i].image} />`
      nameCell.innerHTML = data[i].name
      descriptionCell.innerHTML = data[i].description
      priceCell.innerHTML = data[i].price
      rating.innerHTML = `
        <div class="rating">
            <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="text"></label>
            <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="text"></label>
            <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="text"></label>
            <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="text"></label>
            <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="text"></label>
        </div>     
      `
    }
  })
