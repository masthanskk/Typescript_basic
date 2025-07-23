
                // Interface

interface Student{
        name: string,
        age : number,
        height ? : string
}

const student : Student={
        name:'varun',
        age : 25,
}

console.log(student)

const newStudent : Student= {
          name:'sid',
          age : 26,
          height:'155 cms'
}

console.log(`student name is ${newStudent.name} and ${newStudent.age} his height ${newStudent.height}`)

        // Inheritance

interface Team{
        name: string,
        age : number,
        height ? : string
}   

interface player extends Team{
         play : string
}

const Player:player = {
        name: 'Varun',
        age: 27,
        height: '167cms',
        play:'Righ Hand Batter'
}

console.log(`In our team new person name ${Player.name} he is a ${Player.play}
                age ${Player.age} and heigh ${Player.height}`)

