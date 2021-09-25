import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Customer {
  customerId: string;
  customerName: string;
  phoneNumber: number;
  customerMailId: string;
  address: string;
}

const customersdata: Customer[] = JSON.parse(localStorage.getItem("Customers"));

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})

export class CustomersComponent implements OnInit {

  customersForm: FormGroup;
  currentCustomer: any =  {};
  customers = JSON.parse(localStorage.getItem("Customers"));
  dataSource = new MatTableDataSource<Customer>(customersdata);
  // dataSource = new MatTableDataSource(this.customers);
  displayedColumns: string[] = ['customerId', 'customerName', 'phoneNumber', 'customerMailId', 'address'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.matSort;
  }

  constructor(private formBuilder: FormBuilder) {
    this.customersForm = formBuilder.group({
      customerId: ['', Validators.required],
      customerName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
      customerMailId: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required]
    })
  }

  postData() {
    console.log(this.customersForm.value);
    this.currentCustomer = Object.assign(this.currentCustomer, this.customersForm.value);
    // console.log(this.currentCustomer);
    this.addCustomer(this.currentCustomer);
    this.customersForm.reset();
    location.reload();
  }

  addCustomer(currentCustomer) {
    let customers = [];
    if(localStorage.getItem('Customers')) {
      customers = JSON.parse(localStorage.getItem('Customers'));
      customers = [...customers, currentCustomer];
    }
    else {
      customers = [currentCustomer];
    }
    localStorage.setItem('Customers', JSON.stringify(customers));
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
  }

}
