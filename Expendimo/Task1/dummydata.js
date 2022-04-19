const students = [
    { name: 'John', id: 123, marks: [{ "physics": "60", "maths": "55", 'hindi': '75', 'history': '55', 'geography': '66' }] },
    { name: 'Baba', id: 101, marks: [{ "physics": "30", "maths": "15", 'hindi': '25', 'history': '45', 'geography': '16' }] },
    { name: 'yaga', id: 200, marks: [{ "physics": "20", "maths": "35", 'hindi': '33', 'history': '25', 'geography': '06' }] },
    { name: 'Wick', id: 115, marks: [{ "physics": "60", "maths": "45", 'hindi': '65', 'history': '85', 'geography': '66' }] }
]


console.log("-----------------------------");

// // 1. Print the name of the students
const studentName = students
    .map(student => `${student.name}`);

console.log(studentName.join(" "));

console.log("-----------------------------");

// // 2. Calculate the total marks of a student

students.forEach((item) => {
    let sum = 0
    item.marks.forEach((item) => {
        sum += (+(item.physics) + (+(item.maths)) + (+(item.hindi)) + (+(item.history)) + (+(item.geography)))
        console.log(sum)
    });
});



// // 3. print the name of the student whose total sum of  marks are less than 200

console.log("-----------------------------");

let sum;
students.forEach((item) => {
     sum = 0
    item.marks.forEach((item) => {
        sum += (+(item.physics) + (+(item.maths)) + (+(item.hindi)) + (+(item.history)) + (+(item.geography)))
    //    console.log(sum)
    });
  
        const filterStudent =students.filter(x=>x.sum<200).map(student => `${student.name}`);
        console.log(filterStudent);
    
   
});



