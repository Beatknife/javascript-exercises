const currentYear = new Date().getFullYear();

function calculateAge(person) {
    const deathYear = person.yearOfDeath || currentYear;
    return deathYear - person.yearOfBirth 
}

const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        const oldestAge = calculateAge(oldest);
        const currentAge = calculateAge(current);
        return currentAge > oldestAge ? current : oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
