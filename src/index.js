
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  if(!matrix) return res;
  for(let i = 0; i < matrix.length; i++)
  	if(i%2) {
  		res.push(...matrix[i].reverse());
  	} else {
  		res.push(...matrix[i]);
  	}
  	
  return res;
}
