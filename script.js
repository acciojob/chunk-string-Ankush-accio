function stringChop(str, size) {
  // your code here
	let arr = []
	let temp = []

	for(let i = 0; i < str.length ; i++){
		if(temp.length == size)
			arr.push(i)
		   arr = []
	}
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
