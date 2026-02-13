import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { ProductsService } from '@products/services/products.service';
import { PaginationService } from '@shared/components/pagination/pagination.service';
import { ProductTable } from "@shared/components/product-table/product-table";
import { Pagination } from "@shared/components/pagination/pagination";

@Component({
  selector: 'app-products-admin-page',
  imports: [ProductTable, RouterLink, Pagination],
  templateUrl: './products-admin-page.html',
})
export class ProductsAdminPage {

  productsService = inject(ProductsService);
  paginationService = inject(PaginationService);


  productsPerPage = signal(10);

  productsResource = rxResource({
    params: () => ({
      page: this.paginationService.currentPage() - 1,
      limit: this.productsPerPage(),
    }),
    stream: ({ params }) => {
      return this.productsService.getProducts({
        offset: params.page * 9,
        limit: params.limit
      });
    },
  });


}
