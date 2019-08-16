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
        super(attributes);
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