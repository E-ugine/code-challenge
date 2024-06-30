function studentGradeGenerator(marks){//  Defines a function  studentGradeGenerator with an argument 'marks'.
//The function `studentGradeGenerator` uses a series of `if-else` statements .
//They evaluate the value of `marks` and return the corresponding grade ('A', 'B', 'C', 'D', or 'E') based on predefined ranges.
    if (marks<40){
        return 'E';
    }else if(marks>40 && marks<50){
        return 'D';
    }else if (marks>=50 && marks<60){
        return 'C';
    }else if(marks>=60 && marks <79){
        return 'B';
    }else {
        return 'A';
    }
    
    }
    console.log(studentGradeGenerator())
  