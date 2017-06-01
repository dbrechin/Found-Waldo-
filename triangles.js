var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(angle) {
  //var tri;
  return Math.sqrt((angle.x * angle.x) + (angle.y * angle.y))
  //console.log(tri)
  //return (tri)
});
console.log(result)
console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);