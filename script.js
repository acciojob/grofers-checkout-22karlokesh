const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

let table = document.getElementById("table")
const getSum = () => {
//Add your code here
	let sum=0;
	const allPrice = document.querySelectorAll(.price);
	for(int i =0;i<allPrice.length;i++){
		sum = sum+parseInt(allPrice[i]);
	}

	let newElement = document.createElement("tr");
	newElement.innerHTML = sum;
  
};

getSumBtn.addEventListener("click", getSum);

