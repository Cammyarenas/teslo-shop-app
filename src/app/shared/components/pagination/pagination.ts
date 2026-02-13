import { Component, computed, input, linkedSignal, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagination',
  imports: [RouterLink],
  templateUrl: './pagination.html',
})
export class Pagination {

  pages=input(0);
  currentPage = input<number>(1);

  //algo que se inicializa con algo que puede cambiar desde del input -> se recomienda linkedsignal
  activePage = linkedSignal(this.currentPage);

  getPagesList = computed(() => {
    return Array.from({ length: this.pages()}, (_, i) => i+1);
  });


 }
