package com.example.employeeapi.service;

import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import com.example.employeeapi.model.Employee;
import com.example.employeeapi.repository.EmployeeRepository;

@Service
public class EmployeeService {

    private final EmployeeRepository repository;

    public EmployeeService(EmployeeRepository repository) {
        this.repository = repository;
    }

    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    public Optional<Employee> getEmployeeById(Integer id) {
        return repository.findById(id);
    }

    public Employee addEmployee(Employee employee) {
        return repository.save(employee);
    }

    public Employee updateEmployee(Integer id, Employee updatedEmployee) {
        return repository.findById(id)
                .map(emp -> {
                    emp.setName(updatedEmployee.getName());
                    emp.setRole(updatedEmployee.getRole());
                    return repository.save(emp);
                })
                .orElse(null);
    }

    public void deleteEmployee(Integer id) {
        repository.deleteById(id);
    }
}
