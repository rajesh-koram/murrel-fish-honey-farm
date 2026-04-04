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
    name: 'Murrel & Honey Farms',
    shortName: 'M&H Farms',
    tagline: 'Fresh murrel fish and pure natural honey from pond and hive.',
    description:
      'A local family-run business focused on naturally raised murrel fish, responsibly harvested honey, and honest farm-to-home quality.',
    heroImage: '/assets/images/hero-farm.svg',
    phone: 'tel:+919876543210',
    phoneDisplay: '+91 98765 43210',
    whatsappNumber: '919876543210',
    whatsappLink:
      'https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20murrel%20fish%20and%20honey.',
    address: 'Village Main Road, Near Fresh Water Ponds, Andhra Pradesh, India',
    email: 'hello@murrelandhoneyfarms.com',
    hours: 'Open daily: 7:00 AM - 7:00 PM',
    mapEmbedUrl: 'https://www.google.com/maps?q=Andhra%20Pradesh%2C%20India&output=embed',
  };

  private readonly productCategories: ProductCategory[] = [
    {
      id: 'murrel-fish',
      title: 'Murrel Fish',
      subtitle: 'Freshwater fish with firm texture, rich taste, and reliable freshness.',
      products: [
        {
          id: 'murrel-live',
          category: 'murrel-fish',
          image: '/assets/images/murrel-fish.svg',
          title: 'Live Murrel Fish',
          description:
            'Healthy, pond-raised live murrel fish supplied fresh for home cooking, retail, and small bulk orders.',
          price: 'Contact for price',
          badge: 'Farm Fresh',
        },
        {
          id: 'murrel-cleaned',
          category: 'murrel-fish',
          image: '/assets/images/murrel-fish.svg',
          title: 'Cleaned Murrel Cuts',
          description:
            'Freshly cleaned and packed murrel cuts prepared hygienically for quick cooking and convenience.',
          price: 'Contact for today\'s price',
          badge: 'Cleaned to Order',
        },
      ],
    },
    {
      id: 'honey',
      title: 'Natural Honey',
      subtitle: 'Unblended honey collected with care from healthy hives and floral surroundings.',
      products: [
        {
          id: 'raw-honey',
          category: 'honey',
          image: '/assets/images/wild-honey.svg',
          title: 'Raw Forest Honey',
          description:
            'Pure raw honey with a rich natural aroma, minimal processing, and the golden taste of local flora.',
          price: '250g / 500g packs available',
          badge: 'Natural',
        },
        {
          id: 'farm-honey',
          category: 'honey',
          image: '/assets/images/wild-honey.svg',
          title: 'Farm Honey Bottle',
          description:
            'Cleanly filtered farm honey packed in sealed bottles for families who want everyday natural sweetness.',
          price: 'Contact for wholesale & retail price',
          badge: 'Best Seller',
        },
      ],
    },
  ];

  private readonly galleryItems: GalleryItem[] = [
    {
      id: 'pond-view',
      title: 'Healthy Pond Environment',
      image: '/assets/images/pond-view.svg',
      description: 'Clean pond spaces and consistent natural care for strong murrel growth.',
    },
    {
      id: 'harvest-day',
      title: 'Fresh Harvest Day',
      image: '/assets/images/harvest-day.svg',
      description: 'Careful harvesting and quick handling to keep products fresh and customer-ready.',
    },
    {
      id: 'honey-collection',
      title: 'Honey Collection',
      image: '/assets/images/honey-collection.svg',
      description: 'Responsible honey collection that protects hive health and quality.',
    },
    {
      id: 'local-market',
      title: 'Local Delivery & Supply',
      image: '/assets/images/local-market.svg',
      description: 'Trusted by nearby homes and local buyers for freshness and genuine service.',
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
