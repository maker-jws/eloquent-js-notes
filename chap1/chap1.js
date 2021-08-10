// General Notes || Sandbox for Code

// set "total" to 0
let total = 0, count = 1
// set "count" to 1
// [loop]
while (count <= 10 ){
  total += count
  count++
// Implicit Instruction: set "compare"  to "count"
  // Note: in this case test "count" (temp value in memory) for evaluation
// Implicit Instruction: subtract 11 from 'compare'
  // if you evaluate 'compare-11' is 0, then count is 11 (11 (target) -1(start) == 10 (desired value))
  // Note: if "compare" is zero continue at [end]
  // Note: if desired state (11)-11 == 0 > end
// Instruction: add "count" to "total".
  // Note: increment total by current count 1,2,3,4,5,6,7,8,9,10
// Instruction: add 1 to "count"
  // Note: increment count
  // Instruction: Continue at [loop]
// [end]
}
// Instruction: output "total"
console.log(total)
// output 55
