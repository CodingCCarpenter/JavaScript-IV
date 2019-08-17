// CODE here for your Lambda Classes

/*START OF PERSON CLASS*/
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

/*NEW PEOPLE*/
const christineDenton = new Person({
    name: 'Christine Denton',
    age: 31,
    location: 'Nashville'

})

/*TESTS*/
christineDenton.speak();


/*START OF INSTRUCTOR CLASS*/
class Instructor extends Person{
    constructor(obj){
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }
    demo(subject){
        console.log('Today we are learning about ' + subject);
    }
    grade(student, subject){
        console.log(`${student} receives a perfect score on ${subject}`)
    }
}

/*NEW INSTRUCTORS*/
const ryan = new Instructor({
    name: 'Ryan Hamblin',
    age: 30,
    location: 'Lambda Town, USA',
    specialty: 'JavaScript',
    favLanguage:'Python',
    catchPhrase:"Hopefully we've all studied training kit."
})

/*TESTS*/
ryan.demo('JavaScript IV');
ryan.grade('Jordan', 'JavaScript IV');


/*START OF STUDENT CLASS*/
class Student extends Person{
    constructor(obj){
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
    }
    listsSubjects(){
        console.log(Student.favSubjects.map());
    }
    PRAssignment(){
        console.log(`${Student.name} has submitted a PR for ${Student.subject}`);
}
    }

const mary = new Student({
    name: 'Mary Ledger',
    age: 28,
    location: 'Boulder, Colorado',
    specialty: 'JavaScript',
    favLanguage:'Python',
    catchPhrase:"Hopefully we've all studied training kit."
})

/*START OF TEAM LEAD CLASS */
class TeamLead extends Instructor{
    constructor(obj){
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }
    standup(slackChannel){
        console.log(`${obj.name} announces to ${slackChannel}, @channel standy times!`);
    }
}
