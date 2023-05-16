import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  testValue: string;
  textAreaValue = '';
  employee: Employee = new Employee();
  savedEmployee: Employee;
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployees();
    this.getString();
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe((data) => {
      this.employees = data;
    });
  }

  updateEmployee(id: number) {
    console.log(id);
    this.router.navigate(['update-employee', id]);
  }
  deleteEmployee(id: number) {
    console.log(id);
    this.employeeService.deleteEmployee(id).subscribe((data) => {
      this.getEmployees();
    });
  }

  private getString() {
    this.employeeService.getString().subscribe((data) => {
      console.warn(data);

      this.testValue = data;
    });
  }

  employeeDetails(id: number) {
    this.router.navigate(['employee-details', id]);
  }
}
