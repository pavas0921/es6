const courses = [
    { _id: 1, title: "JavaScript I" },
    { _id: 2, title: "HTML y CSS I" },
  ]
  
  const students = [
    { _id: 1, name: "Pedro Perez" },
    { _id: 2, name: "Maria Gomez" },
  ]
  
  const enrollments = [
    { course_id: 1, student_id: 1 },
    { course_id: 2, student_id: 1 },
    { course_id: 2, student_id: 2 }
  ]


  const _students = []
  let courses_students = []

  for (let i=0; i < enrollments.length; i++) {
    let x = enrollments[i]

    if(x.course_id === 1 && x.student_id === 1){
        courses_students[i] = {
            course_id: 1,
            title: "JavaScript I",
            _student_id: 1,
            _name: "Pedro Perez"
        }
    }
    
    if(x.course_id === 2 && x.student_id === 1){
            courses_students[i] = {
                course_id: 2,
                title: "HTML y CSS I",
                _student_id: 1,
                _name: "Pedro Perez"
            }
        }

        if(x.course_id === 2 && x.student_id === 2){
            courses_students[i] = {
                course_id: 2,
                title: "HTML y CSS I",
                _student_id: 2,
                _name: "Maria Gomez"
            }
        }
        
    
}



for(let i=0; i<courses_students.length; i++){
    if(courses_students[i].course_id === 1){
        console.log(`- ${courses_students[i].title}`)
        console.log(`  * ${courses_students[i]._name}`)
    }
    else{
        console.log(`- ${courses_students[i].title}`)
        console.log(`  * ${courses_students[i]._name}`)
        console.log(`  * ${courses_students[i+1]._name}`)
        i = courses_students.length
    }
}

for(let i=0; i<courses_students.length; i++){
    if(courses_students[i]._student_id === 1){
        console.log(`- ${courses_students[i]._name}`)
        console.log(`  * ${courses_students[i].title}`)
        console.log(`  * ${courses_students[i+1].title}`)
        i++
    }
    else{
        console.log(`- ${courses_students[i]._name}`)
        console.log(`  * ${courses_students[i].title}`)
        i = courses_students.length
    }
}

 




  
