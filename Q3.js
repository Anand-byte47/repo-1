// Q.>> Problem No.3 >>

var Employee =
{
      company: 'Rohit'
}
var Emp1 = Object.create(employee);
delete Emp1.company;
Console.log(emp1.company);


// Output
// Uncaught SyntaxError:employee is not defined


