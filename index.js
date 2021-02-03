// Your code here

function createEmployeeRecord(details) {
    const record = {
        firstName: details[0],
        familyName: details[1],
        title: details[2],
        payPerHour: details[3],
        timeInEvents: [],
        timeOutEvents: []
    };
    return record;
}

function createEmployeeRecords(employees) {
    return employees.map(createEmployeeRecord);
}

function createEvent(type, timeStamp) {
    return {
        type: type,
        date: timeStamp.slice(0, 10),
        hour: parseInt(timeStamp.slice(11))
    };
}

function createTimeInEvent(employee, timeStamp) {
    employee.timeInEvents.push(createEvent("TimeIn", timeStamp));
    return employee;
}

function createTimeOutEvent(employee, timeStamp) {
    employee.timeOutEvents.push(createEvent("TimeOut", timeStamp));
    return employee;
}

function hoursWorkedOnDate(employee, date) {
    const index = employee.timeInEvents.findIndex(event => event.date === date);
    return (employee.timeOutEvents[index].hour - employee.timeInEvents[index].hour)/100;
}

function wagesEarnedOnDate(employee, date) {
    return employee.payPerHour*hoursWorkedOnDate(employee, date);
}

function allWagesFor(employee) {
    return employee.timeInEvents.map(event => wagesEarnedOnDate(employee, event.date)).reduce((a, b) => a+b);
}

function calculatePayroll(employees) {
    return employees.reduce((a, b) => a + allWagesFor(b),0);
}

function findEmployeeByFirstName(employees, firstName) {
    return employees.find(a => a.firstName === firstName);
}