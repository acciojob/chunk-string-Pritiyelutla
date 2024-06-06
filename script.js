function stringChop(str, size) {
    // your code here
    let res = [];
    //console.log(str);
    for(let i=0; i<str.length; i++)
    {
        let j=1;
        while(j <= size)
        {
            if(j == str.length)
            {
                break;
            }
            j++;
        }
        
        let word = str.slice(i,j); 
        console.log(word);
        res.push(word);
        i = j;
    }
    return res;
  }

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
