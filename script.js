/*
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

let table = document.getElementById("table")
const getSum = () => {
//Add your code here
	let sum=0;
	const allPrice = document.querySelectorAll(".price");

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
*/

const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const table = document.getElementById("table");

const getSum = () => {
    let sum = 0;
    const allPrice = document.querySelectorAll(".price");

    allPrice.forEach(priceCell => {
        sum += parseInt(priceCell.textContent);
    });

    // Check if the total row already exists (optional, prevents duplicate rows)
    const lastRow = table.lastElementChild;
    if (lastRow && lastRow.getAttribute("id") === "totalRow") return;

    const newRow = document.createElement("tr");
    newRow.setAttribute("id", "totalRow");

    const newCell = document.createElement("td");
    newCell.setAttribute("colspan", "2");
    newCell.style.textAlign = "center";
    newCell.textContent = `Total Price: Rs ${sum}`;

    newRow.appendChild(newCell);
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);


