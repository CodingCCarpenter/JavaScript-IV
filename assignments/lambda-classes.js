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