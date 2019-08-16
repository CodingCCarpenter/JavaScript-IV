// CODE here for your Lambda Classes

class Person{
    constructor(obj){
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
    }
    speak(){
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`)
    }
}

const christineDenton = new Person({
    name: 'Christine Denton',
    age: 31,
    location: 'Nashville'

})

christy.speak();

// const mage = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//       length: 2,
//       width: 1,
//       height: 1,
//     },
//     healthPoints: 5,
//     name: 'Bruce',
//     team: 'Mage Guild',
//     weapons: [
//       'Staff of Shamalama',
//     ],
//     language: 'Common Tongue',
//   });

class Instructor extends Person{
    constructor(obj){
        super(attributes);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }
    demo(subject){
        console.log('Today we are learning about ' + subject);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person{
    constructor(obj){
        super(attributes);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
    }
    listsSubjects(){
        console.log(this.favSubjects.map());
    
    }
}