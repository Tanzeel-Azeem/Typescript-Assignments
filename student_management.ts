import inquirer from 'inquirer'

class student{
    id : string;
    name : string;
    coursesEnrolled : string[];
    feesAmount: number

constructor(id : string, name:string, coursesEnrolled:string[], feesAmount:number){
    this.id =id
    this.name =name
    this.coursesEnrolled=coursesEnrolled
    this.feesAmount= feesAmount
}
}

let baseID = 42069
let studentId = ''
let continueEnrollment = true;

let students :student[]=[]


do{
    let action = await inquirer.prompt({
        type : 'list',
        name : 'ans',
        message : 'please select an option\n',
        choices : ['Enroll a student','Show student status']
    })


if (action.ans === 'Enroll a student' ){
    let studentName = await inquirer.prompt({
        type :"input",
        name :"ans",
        message:"please Enter your name"

    })

    let trimmmedStudentName = (studentName.ans).trim().toLowerCase()
    let studentNameCheck = students.map(obj => obj.name)

    if(studentNameCheck.includes(trimmmedStudentName)=== false){

if (trimmmedStudentName !== ""){
    baseID++
    studentId = "STID" + baseID

    console.log('\nYour account has been created\n');
    console.log(`Welcome ${trimmmedStudentName}! `);
    

let course  = await inquirer.prompt({
    type:"list",
    name:"ans",
    message:"Please select a course",
    choices:['I.T','english','cooking']
})
let courseFee = 0
switch(course.ans){
    case "I.T":
        courseFee = 5000;
        break;

        case "english":
        courseFee = 1000;
        break;

        case "cooking":
        courseFee = 2500;
        break;
}

let courseConfirm = await inquirer.prompt({
    type:"confirm",
    name:"ans",
    message :"Do you want to enroll in this Course?"
})
if(courseConfirm.ans === true){
    let Student = new student(studentId , trimmmedStudentName , [course.ans] , courseFee)

    students.push(Student)
console.log('You have enrolled in this course');

}



}else{
    console.log('Invalid name');
    
}
    }else{
        console.log('This name is already exist');
        
    }


}

else if(action.ans ==='Show student status' ){
    if (students.length !== 0){
        let studentNamecheck = students.map(e=> e.name)

        let selectedStudent =await inquirer.prompt({
            type:"list",
            name :"ans",
            message:"Please select one",
            choices:studentNamecheck
        })
        let foundStudent  = students.find(Student => Student.name === selectedStudent.ans)
        console.log("Student information");
        console.log(foundStudent);
        console.log("\n");
        
        
        



    }else{
        console.log("record is empty");
        
    }

    let userConfirm = await inquirer.prompt({
        type :"confirm",
        name :"ans",
        message:"Do you want to continue?"
    })


    if (userConfirm.ans=== false){
        continueEnrollment = false
    }
}



}while(continueEnrollment)
