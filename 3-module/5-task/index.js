function getMinMax(str) {
  let nums =  str.split(' ').filter(num => isFinite(num)).map(num => +num);
  return {
    min: Math.min(...nums),
    max: Math.max(...nums),
  };
}
