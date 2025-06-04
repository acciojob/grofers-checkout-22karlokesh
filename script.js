const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

let table = document.getElementById("table")
const getSum = () => {
//Add your code here
	let sum=0;
	const allPrice = document.querySelectorAll(.price);

	// NA code
	
	// Calculate total price
    allPrice.forEach(priceCell => {
        sum += parseInt(priceCell.textContent);
    });

    // Create new row and cell
    let newRow = document.createElement("tr");
    let newCell = document.createElement("td");
    newCell.setAttribute("colspan", "2");
    newCell.style.textAlign = "center";
    newCell.textContent = `Total Price: Rs ${sum}`;

    newRow.appendChild(newCell);
    table.appendChild(newRow);
  
};

getSumBtn.addEventListener("click", getSum);

