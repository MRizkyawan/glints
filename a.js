function isAnagram(a, b) {
  const data = {};

  for (let i=0;i<a.length;i++) {
      if(!data[a[i]]) {
          data[a[i]] = 1
      }else {
          data[a[i]++]
      }
  }
  for (let i=0;i<b.length;i++) {
     data[b[i]--]
     console.log(i)
  }
  for(let x in data) {
      if(data[x]>0) {
          return false
      }
  }
console.log(data)
  return true;
}

console.log(isAnagram("azza", "aazz"));
