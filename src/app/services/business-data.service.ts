import { Injectable } from '@angular/core';

export interface BusinessInfo {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  heroImage: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  whatsappLink: string;
  address: string;
  email: string;
  hours: string;
  mapEmbedUrl: string;
}

export interface Product {
  id: string;
  category: 'murrel-fish' | 'honey';
  image: string;
  title: string;
  description: string;
  price: string;
  badge: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  subtitle: string;
  products: Product[];
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class BusinessDataService {
  private readonly businessInfo: BusinessInfo = {
    name: 'Murrel Fish Seeds & Honey Farms',
    shortName: 'MFS & Honey',
    tagline: 'Murrel Fish Seeds & Pure Natural Honey',
    description:
      'Healthy fish seeds for farming and pure organic honey directly from source.',
    heroImage: '/assets/images/hero-farm.svg',
    phone: 'tel:+919876543210',
    phoneDisplay: '+91 98765 43210',
    whatsappNumber: '919876543210',
    whatsappLink:
      'https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20murrel%20fish%20seeds%20and%20natural%20honey.',
    address: 'Village Main Road, Near Fresh Water Ponds, Andhra Pradesh, India',
    email: 'hello@murrelandhoneyfarms.com',
    hours: 'Open daily: 7:00 AM - 7:00 PM',
    mapEmbedUrl: 'https://www.google.com/maps?q=Andhra%20Pradesh%2C%20India&output=embed',
  };

  private readonly productCategories: ProductCategory[] = [
    {
      id: 'murrel-fish',
      title: 'Murrel Fish Seeds',
      subtitle: 'High-quality fingerlings suitable for aquaculture, pond stocking, and dependable fish farming growth.',
      products: [
        {
          id: 'murrel-seeds',
          category: 'murrel-fish',
          image: '/assets/images/pond-view.svg',
          title: 'Murrel Fish Seeds',
          description:
            'High quality fingerlings suitable for aquaculture and fish farming, with healthy disease-free stock available in different sizes.',
          price: 'Contact for price',
          badge: 'For Fish Farming',
        },
      ],
    },
    {
      id: 'honey',
      title: 'Honey',
      subtitle: 'Pure natural honey collected from clean natural sources with focus on purity, taste, and trust.',
      products: [
        {
          id: 'raw-honey',
          category: 'honey',
          image: '/assets/images/wild-honey.svg',
          title: 'Pure Natural Honey',
          description:
            '100% pure natural honey with no chemicals or additives, collected carefully from natural floral sources.',
          price: 'Contact for price',
          badge: '100% Pure',
        },
        {
          id: 'farm-honey',
          category: 'honey',
          image: '/assets/images/wild-honey.svg',
          title: 'Natural Honey Bottle',
          description:
            'Collected from natural sources and packed with care to preserve purity, aroma, and everyday use quality.',
          price: 'Contact for wholesale & retail price',
          badge: 'No Additives',
        },
      ],
    },
  ];

  private readonly galleryItems: GalleryItem[] = [
    {
      id: 'pond-view',
      title: 'Fish Farming Ponds',
      image: '/assets/images/pond-view.svg',
      description: 'Clean pond spaces prepared for stocking murrel fish seeds and supporting healthy aquaculture growth.',
    },
    {
      id: 'harvest-day',
      title: 'Net Harvesting of Seeds',
      image: '/assets/images/harvest-day.svg',
      description: 'Careful grading and net harvesting of fingerlings for safe transport to fish farming ponds.',
    },
    {
      id: 'breeding-tanks',
      title: 'Fish Seed Breeding Tanks',
      image: '/assets/images/breeding-tanks.svg',
      description: 'Well-maintained nursery and breeding tanks for healthy murrel seed development and farm supply.',
    },
    {
      id: 'honey-collection',
      title: 'Honey Collection',
      image: '/assets/images/honey-collection.svg',
      description: 'Responsible honey collection that protects hive health and quality.',
    },
  ];

  getBusinessInfo(): BusinessInfo {
    return this.businessInfo;
  }

  getProductCategories(): ProductCategory[] {
    return this.productCategories;
  }

  getFeaturedProducts(): Product[] {
    return this.productCategories.flatMap((category) => category.products).slice(0, 3);
  }

  getGalleryItems(): GalleryItem[] {
    return this.galleryItems;
  }
}
