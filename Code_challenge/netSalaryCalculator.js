function netSalary(grossSalary){
    return Math.abs(grossSalary-(grossSalary*0.12))//This function calculates the net salary by deducting 12% from the gross salary.
    }
    function grossSalary(basicSalary,benefits){
        return basicSalary+ benefits;  //This function calculates the gross salary by adding the basic salary and benefits.
    }
   // grossSalary=50000;
    //benefits=5000;
    console.log(netSalary(grossSalary))