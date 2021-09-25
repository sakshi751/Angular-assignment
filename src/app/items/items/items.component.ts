import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatRipple } from '@angular/material/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface Items {
  itemCode: string;
  itemName: string;
  manufacturerName: string;
  unitPrice: number;
  manufacturingYear: string;
  itemCategory: string;
}

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.itemsData.paginator = this.paginator;
    this.itemsData.sort = this.sort;
  }

  itemsForm: FormGroup;
  currentItem: any = {};
  items = JSON.parse(localStorage.getItem("Items"));
  itemsData = new MatTableDataSource<Items>(this.items);
  currentYear = new Date().getFullYear();
  displayedColumns: string[] = ["itemCode", "itemName", "manufacturerName", "unitPrice", "manufacturingYear", "itemCategory"];
  
  constructor(formBuilder: FormBuilder) { 
    this.itemsForm = formBuilder.group({
      itemCode: ['', Validators.required],
      itemName: ['', Validators.required],
      manufacturerName: ['', Validators.required],
      unitPrice: ['', [Validators.required, Validators.pattern(/^[.\d]+$/)]],
      manufacturingYear: ['', [Validators.required, Validators.max(this.currentYear), Validators.pattern("[0-9]{4}")]],
      itemCategory: ['', Validators.required]
    })
  }

  postData() {
    this.currentItem = Object.assign(this.currentItem, this.itemsForm.value);
    this.addData(this.currentItem);
    this.itemsForm.reset();
    location.reload();
  }

  addData(currentItem) {
    let items = [];
    if (localStorage.getItem("Items")) {
      items = JSON.parse(localStorage.getItem("Items"));
      items = [...items, currentItem];
    }
    else {
      items = [currentItem];
    }
    localStorage.setItem('Items', JSON.stringify(items));
  }

  applyFilter(filterValue: string) {
    this.itemsData.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
  }

}
