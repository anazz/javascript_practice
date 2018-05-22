function max(array) {
	//on applique la methode max de la classe Math sur un array
	var maxNumber = Math.max(...array);
	//on utilise alert pour le maxNumber
	alert(maxNumber);
}

max([2,3,5,10,8]);