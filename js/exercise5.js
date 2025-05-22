function getGrade(name, marks) {
  let grade;

  if (marks >= 80) grade = "A";
  else if (marks >= 60) grade = "B";
  else if (marks >= 40) grade = "C";
  else grade = "No Grade";

  return `${name}'s grade is ${grade}`;
}
