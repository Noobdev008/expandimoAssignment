//print the appearance of each alphabet using reduce method

let name ="BazzarIsfaraway"

const counter = char => [...char].reduce((acc, cur) => (acc[cur] = acc[cur] + 1 || 1) && acc,[])



  console.log(counter(name));