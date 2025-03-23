/* Beginner Challenge */

const bookList = [
    { title: "Don Quixote", author: "Miguel de Cervantes" },
    { title: "Ulysses", author: "James Joyce" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Moby Dick", author: "Herman Melville" },
  ];
  
  /* Do all of these using proper ES6 syntax
  Using the following array of objects,
  */
  // (1) Write an arrow function that adds a new entry to bookList
  
  const addBook = (title, author) => [...bookList, { title, author }];

  // (2) Write an arrow function that removes a specific book from the bookList
 
  const removeBook = (title) => bookList.filter(book => book.title !== title);

  // (3) Write an arrow function that lists out all the books or all the authors in the book list */
 
  const listBooks = (key) => bookList.map(book => book[key]);
  
  /*
  /* Intermediate Challenge */
  
  /* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
    number is positive or negative using a ternary operator (assume the number will never be zero) */

    const check = number => number > 0 ? "positive" : "negative";

  /* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
    the week it is i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */
    
    const getDayMessage = (day) => {
      switch (day) {
        case "Monday":
          return "good luck";
        case "Tuesday":
          return "yay";
        case "Wednesday":
          return "hump day";
        case "Thursday":
          return "almost there";
        case "Friday":
          return "party";
        default:
          return "just another day";
      }
    };
    
  /* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
    number from 1 up to that number
    ex. sumUp(7) = 28 */
  
    const sumUp = (num) => {
        let sum = 0;
        for (let i = 1; i <= num; i++) {
            sum += i;
        }
        return sum;
        };

  /* Harder Challenge */
  
  /* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
      me what I should wear accordingly */
  
    const temp = 32;
    const convertTemp = (celsius) => {
      const fahrenheit = celsius * 9/5 + 32;
      if (fahrenheit < 50) {
        return "Wear a winter coat and long pants";
      } else if (fahrenheit < 70) {
        return "Wear a jacket";
      } else {
        return "Wear a shirt and shorts";
      }
    };

  /* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
    using .forEach() */
  
    const countTruthy = (arr) => {
        let count = 0;
        arr.forEach(value => {
            if (value) {
            count++;
            }
        });
        return count;
        };

  /* (9) Using the map function and arrow syntax, return an array of object that contain a fullName field
    and an averageGrade field representing the letter grade that corresponds to their GPA */
  
  const attendance = [
    { firstName: "Clay", lastName: "Tondreau", gpa: 4.0 },
    { firstName: "Tucker", lastName: "Wilson", gpa: 2.0 },
    { firstName: "Eliza", lastName: "Tobin", gpa: 3.7 },
    { firstName: "Sofia", lastName: "Ackerman", gpa: 1.1 },
    { firstName: "Thomas", lastName: "Beddow", gpa: 2.3 },
    { firstName: "Jackson", lastName: "Wolf", gpa: 4.0 },
    { firstName: "Jared", lastName: "Nguyen", gpa: 4.0 },
  ];

  const gpaToGrade = (gpa) => {
    if (gpa >= 4.0) return 'A';
    if (gpa >= 3.0) return 'B';
    if (gpa >= 2.0) return 'C';
    if (gpa >= 1.0) return 'D';
    return 'F';
  };
  
  const attendanceGrades = attendance.map(({ firstName, lastName, gpa }) => ({
    fullName: `${firstName} ${lastName}`,
    averageGrade: gpaToGrade(gpa)
  }));
  
  /* Hardest Challenge (Don't do this without completing harder challenges) */
  
  /* Write a function that solves the "every number eventually equals 4" puzzle. The output should be
      an array of the path you took to make it equal four
      ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
      For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */
  
  // assuming num < 1,000,000. Pattern holds with higher numbers but just requires more checks
  // does not support leading zeros

    const equalsFour = (num) => {
        const path = [num];
        while (num !== 4) {
            num = num.toString().split("").reduce((acc, curr) => acc + Math.pow(curr, 2), 0);
            path.push(num);
        }
        return path;
        }
