import { Component, computed, inject } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '@auth/auth.service';

@Component({
  selector: 'app-admin-dashboard-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './admin-dashboard-layout.html',
})
export class AdminDashboardLayout {
  authService = inject(AuthService);

  user = computed(() => this.authService.user());

}
