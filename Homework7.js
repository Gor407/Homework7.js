   //Exersize 1
   class Author{
	constructor(name, email, gender){
		this.name = name;
		this.email = email;
		this.gender = gender;
	}
    get name(){
        return this._name;
    }
	set name(name){
		this._name = name;
	}
	get email(){
		return this._emil;
	}
	set email(email){
		this._email = email;
	}
	get gender(){
		return this._gender;
	}
	set gender(gender){
		this._gender = gender;
	}
	toString(){
		return `This author is ${this.name}`;
	}

}
class Book{
	constructor(title, author, price, quantity){
		this.title = title;
		this.author = author;
		this.price = price;
		this.quantity = quantity;
	}
    get title(){
        return this._title;
    }
	set title(name){
		this._title = name;
	}
	get price(){
		return this._price;
	}
	set price(value){
		this._price = value;
	}
	get quantity(){
		return this._quantity;
	}
	set quantity(value){
		this._quantity = value;
	}
	get author(){
		return this._author;
	}
	set author(name){
		this._author = name;
	}
	getProfit(){
		return `The title is '${this.title}' and profil is ${this.price * this.quantity}`;
	}
	toString(){
		return  `'${this.title}' book's author is ${this.author}`;
	}

}
   
   
   
   
   
   
   //Exersize 2
   class Account{
	   constructor (id,name,balance){
		   this.id = id;
		   this.name = name;
		   this.balance = balance;
	   }
	   get id(){
	   return this._id;
	   }
	   set id(number){
	   this._id=number;
	   }
	   get name(){
		   return this._name;
	   }
	   set name(name){
		  this._name =name;  
	   }
	   get balance(){
		   return this._balance;
	   }
	   set balance(value){
		   this._balance = value;
	   }
   }
   
   credit(amount){
	   this.balance += amount;
	   return `updated balance is ${this.balance}`;
   }
   
   
   debit(amount){
	   if(amount < this.balance){
		  this.balance = this.balance - amount;
	   }else{
		   return `Amount exceeded balance`;
	   }
   }
   
   transferTo(anotherAccount, amount){
	   if(amount < this.balance){
		  return `Amount exceeded balance`;
	   }else{
		   this.balance = anotherAccount + (this.balance - amount);
		   return this.balance;
	   }   
   }
   
    identifyAccounts(accountFirst, accountSecond){
		if(accountFirst.balance === accountSecond.balance && accountFirst.name === accountSecond.name && accountFirst.id === accountSecond.id){
			return  `they are the same`;
		}else{
			return `they are different`;
		}
	}
   
   toString(){
	   return `Account name is ${this.name}`;
   }
   
   
   
   
   
   
   
   //Exersize 3
class person {
	constructor(firstname,lastname,gender,age)
	this._firstname = firstname;
	this._lastname = lastname;
	this._gender = gender;
	this._age = age;
};
  get firstname(){
	  return this._firstname;
  }
  set firstnamec(value){
	  this._firstname = value;
  }
  
  get lastname(){
	  return this._lastname;
  }
  set lastname(value){
	  this._lastname = value;
  }
  
  get gender(){
	  return this._gender;
  }
  set gender(value){
	  this._gender = value;
  }
  
  get age(){
	  return this._age;
  }
  set age(value){
	  this._age = value;
  }
  
  
  toString(){
	  return '${this.firstname    this.lastname}';
  }
  
  
  class student extends Person{
	  constructor(firstname,lastname,gender,age,programs,year,fee){
		  super(firstname,lastname,gender,age);
		this.programs = programs;  
		this.year = year;
		this.fee = fee;
	  }
	  passExam(program,grade){
		  if(this.programs.indexOf(program) === -1)return 'invalid';
		  if(grade >=50){
			  this.programs.splice(this.programs.indexOf(program),1)
			  if(!this.programs){
				  
			  }
		  }
	  }
  }
  
  class teacher extends Person{
	  constructor(firstname,lastname,gender,age,program,pay){
		  this.program = program;
		  this.pay = pay;
	  }
	  get program(){
		  return this._program;
	  }
	  set program(pn){
		  this._program = pn;
	  }
	  get pay(){
		  return this._pay;
	  }
	  set pay(amount){
		  this._pay = amount;
	  }
  }
  
   toString (){
	   `this ${this.firstname   this.lastname} is ${this.program}s teacher`;
   }
  
  
  
