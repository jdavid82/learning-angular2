import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const productDetailGuard: CanActivateFn = (route, state) => {
  const id = Number(route.paramMap.get('id'));
  if (isNaN(id) || id < 1) {
    alert('Invalid product id'); // in a real app we don't show an alert, we do something else like displaying an error page
    const router: Router = inject(Router);
    router.navigate(['/products']);
    return false;
  }
  return true;
};
