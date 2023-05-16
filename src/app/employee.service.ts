import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseURL = 'http://localhost:8080/api/v1';

  constructor(private httpClient: HttpClient) {}

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}/employees`);
  }

  getString(): Observable<string> {
    return this.httpClient.get(`${this.baseURL}/test`, {
      responseType: 'text',
    });
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(
      `${this.baseURL}/employees`,
      employee
    );
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/employees/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(
      `${this.baseURL}/employees/${id}`,
      employee
    );
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.httpClient.delete<Employee>(`${this.baseURL}/employees/${id}`);
  }
}
