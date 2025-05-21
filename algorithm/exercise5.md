# Exercise 5

Draw the flowchart for the following:

Accept the name and marks obtained by a student in Computer Project.

Display the grades as per the table given below:

| Marks obtained                | Grade    |
| ----------------------------- | -------- |
| 80% or more                   | A        |
| 60% or more but less than 80% | B        |
| 40% or more but less than 60% | C        |
| Less than 40%                 | No Grade |

## Code:

```plaintext
Start
Input Name, Marks
If Marks >= 80
    Grade = "A"
Else if Marks >= 60
    Grade = "B"
Else if Marks >= 40
    Grade = "C"
Else
    Grade = "No Grade"
Print Name and Grade
End
```

```ts
function getGrade(name: string, marks: number): string {
  let grade: string;

  if (marks >= 80) grade = "A";
  else if (marks >= 60) grade = "B";
  else if (marks >= 40) grade = "C";
  else grade = "No Grade";

  return `${name}'s grade is ${grade}`;
}
```

## Flowchart

<img src="/flowcharts/exercise5.png">
