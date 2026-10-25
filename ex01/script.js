// Returns a letter grade (A, B, C, D, F) or "Invalid" for bad input
function calculateGrade(score) {
  // score !== score is only true for NaN
  if (typeof score !== "number" || score !== score || score < 0 || score > 100) {
    return "Invalid";
  }

  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Returns true if the person can enter, false otherwise
// Rule: needs a ticket and must be 12 or older, OR be 65+ (seniors enter free)
function checkAccess(age, hasTicket) {
  if (typeof age !== "number" || age !== age || age < 0) {
    return false;
  }
  if (age >= 65 || (hasTicket === true && age >= 12)) {
    return true;
  }
  return false;
}

// Tests: calculateGrade
console.log("calculateGrade(100):", calculateGrade(100));   // A
console.log("calculateGrade(90):", calculateGrade(90));     // A
console.log("calculateGrade(89):", calculateGrade(89));     // B
console.log("calculateGrade(80):", calculateGrade(80));     // B
console.log("calculateGrade(70):", calculateGrade(70));     // C
console.log("calculateGrade(60):", calculateGrade(60));     // D
console.log("calculateGrade(59):", calculateGrade(59));     // F
console.log("calculateGrade(0):", calculateGrade(0));       // F
console.log("calculateGrade(-1):", calculateGrade(-1));     // Invalid
console.log("calculateGrade(101):", calculateGrade(101));   // Invalid
console.log("calculateGrade('90'):", calculateGrade("90")); // Invalid
console.log("calculateGrade(NaN):", calculateGrade(NaN));   // Invalid

// Tests: checkAccess
console.log("checkAccess(20, true):", checkAccess(20, true));     // true
console.log("checkAccess(20, false):", checkAccess(20, false));   // false
console.log("checkAccess(12, true):", checkAccess(12, true));     // true
console.log("checkAccess(11, true):", checkAccess(11, true));     // false
console.log("checkAccess(65, false):", checkAccess(65, false));   // true
console.log("checkAccess(-5, true):", checkAccess(-5, true));     // false
console.log("checkAccess('20', true):", checkAccess("20", true)); // false
