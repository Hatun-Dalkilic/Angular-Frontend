import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  id: number;
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.employee = new Employee();
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe((data) => {
      console.log(data);
      this.employee = data;
    });
  }

  updateEmployee() {
    this.employeeService
      .updateEmployee(this.id, this.employee)
      .subscribe((data) => {
        console.log(data);
        this.employee = new Employee();
      });
    this.goToEmployeeList();
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

  onSubmit() {
    this.updateEmployee();
  }
}
