import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngx-ik-pagination',
  templateUrl: './ngx-ik-pagination.component.html',
  styleUrls: ['./ngx-ik-pagination.component.scss'],
})
export class NgxIkPaginationComponent implements OnInit {
  constructor() {}
  @Input() length: number = 0;
  @Input() pageSize: number = 10;
  @Input() class: string = 'ik-pagination-default';
  chosenPageNumber: number = 1;
  pageNumbers: Array<number> = [];
  @Output() onPageEvent = new EventEmitter();

  ngOnInit(): void {
    this.updatePageNumbers();
  }

  getPageLength() {
    return Math.ceil(this.length / this.pageSize);
  }

  updatePageNumbers() {
    const pageLength = this.getPageLength();
    this.pageNumbers = Array(pageLength > 5 ? 5 : pageLength)
      .fill(0)
      .map((_, i) => {
        if (this.chosenPageNumber > 3 && this.chosenPageNumber < pageLength - 1)
          return i + this.chosenPageNumber - 2;
        else if (this.chosenPageNumber <= 3 || pageLength <= 5) return i + 1;
        else return pageLength - 4 + i;
      });
    this.onPageEvent.emit({
      pageSize: this.pageSize,
      pageNumber: this.chosenPageNumber,
      offset: this.pageSize * (this.chosenPageNumber - 1),
    });
  }

  onSelectPage(pageNumber: number) {
    this.chosenPageNumber = pageNumber;
    this.updatePageNumbers();
  }

  onNextPage() {
    if (this.getPageLength() > this.chosenPageNumber) {
      ++this.chosenPageNumber;
      this.updatePageNumbers();
    }
  }

  onBackPage() {
    if (this.chosenPageNumber > 1) {
      --this.chosenPageNumber;
      this.updatePageNumbers();
    }
  }
}
