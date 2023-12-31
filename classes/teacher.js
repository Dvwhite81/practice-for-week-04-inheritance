const Person = require('./person');

class Teacher extends Person {
    constructor(firstName, lastName, subject, yearsOfExperience) {
        super(firstName, lastName)
        this.subject = subject;
        this.yearsOfExperience = yearsOfExperience;
    }

    static combinedYearsOfExperience(teachers) {
        const totalYears = teachers.reduce(function(accumulator, current) {
            let years = current.yearsOfExperience;
            return accumulator + years;
        }, 0);
        return totalYears;
    }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
    module.exports = Teacher;
} catch {
    module.exports = null;
}