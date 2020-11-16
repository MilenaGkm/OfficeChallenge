//write your code here to make the tests pass

class Document {
	constructor(EmployeeName){
		this.EmployeeName = EmployeeName
	}
}


class Employee {
	constructor(name){
		this.name = name
	}

	work(Office) {
        for (let i = 0; i < 10; i++) {
            Office.documents.push(new Document(this.name))
        }
    }
}


class Manager {
	constructor(name){
		this.name = name
		this.employees = []
	}

	hireEmployee(name){
		this.employees.push(new Employee(name))
	}

	askEmployeesToWork(Office){
		this.employees.forEach(employee => employee.work(Office))
	}
}


class Cleaner {
	constructor(name){
		this.name = name
	}

	clean(){
		console.log('Clean');
	}
}


class Office {
	constructor(){
	this.documents = []
	this.managers = []
	this.cleaners = []
	}

	hireManager(name){
		this.managers.push(new Manager(name))
	}

	hireCleaner(name){
		this.cleaners.push(new Cleaner(name))
	}

	startWorkDay(){
		this.managers.forEach(manager => manager.askEmployeesToWork(this));
        this.cleaners.forEach(cleaner => cleaner.clean());
	}
}