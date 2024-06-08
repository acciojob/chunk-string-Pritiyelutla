function stringChop(str, size) {
    // your code here
	if(str == null){return [];}
    const chunks = [];
    for (let i = 0; i < str.length; i = i+ size) {
        chunks.push(str.slice(i, i + size));
    }
    return chunks;
  }

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
