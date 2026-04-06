import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'home',
	},
	{
		path: 'home',
		title: 'Home | Murrel Fish Seeds & Honey Farms',
		loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
	},
	{
		path: 'products',
		title: 'Products | Murrel Fish Seeds & Honey Farms',
		loadComponent: () => import('./pages/products/products.component').then((m) => m.ProductsComponent),
	},
	{
		path: 'about',
		title: 'About | Murrel Fish Seeds & Honey Farms',
		loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
	},
	{
		path: 'gallery',
		title: 'Gallery | Murrel Fish Seeds & Honey Farms',
		loadComponent: () => import('./pages/gallery/gallery.component').then((m) => m.GalleryComponent),
	},
	{
		path: 'contact',
		title: 'Contact | Murrel Fish Seeds & Honey Farms',
		loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent),
	},
	{
		path: '**',
		redirectTo: 'home',
	},
];
