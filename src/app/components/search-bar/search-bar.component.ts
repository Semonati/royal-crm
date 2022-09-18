import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styles: [],
})
export class SearchBarComponent implements OnInit {
  @Input() categorys: Array<Category> = [];
  @Input() array: any = [];
  @Input() placeholderText: String =
    'Click the Nevigation botton to choose a category and then enter the item you are looking for here';
  @Output() arrayFiltered = new EventEmitter();

  category: Category | any = { name: '', value: '' };

  onCategoryChange(e: any) {
    const categoryChanged = this.categorys.find(
      (category: Category) => category.value === e.target.value
    );
    if (categoryChanged) this.category = categoryChanged;
  }

  onSearch(e: any) {
    const term = e.target.value;
    const arrayFiltered = [...this.array].filter((item: any) =>
      item[this.category.value]
        .toLowerCase()
        .trim()
        .includes(term.toLowerCase().trim())
    );
    this.arrayFiltered.emit(arrayFiltered);
  }

  ngOnInit(): void { 
    this.category = {
      name: this.categorys[0].name,
      value: this.categorys[0].value,
    }
  }
}
