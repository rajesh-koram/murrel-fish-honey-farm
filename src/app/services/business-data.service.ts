import { Injectable } from '@angular/core';

export interface BusinessInfo {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  heroImage: string;
  heroImageMobile: string;
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
    name: 'Madhavarao Fish Hatchery & Honey Farm',
    shortName: 'MR FISH HATCHERY',
    tagline: 'Murrel Fish Seeds & Pure Natural Honey',
    description:
      'Healthy fish seeds for farming and pure organic honey directly from source.',
    heroImage: '/assets/images/hero-farm.png',
    heroImageMobile: '/assets/images/hero-farm-mobile.png',
    phone: 'tel:+918688624508',
    phoneDisplay: '+91 86886 24508',
    whatsappNumber: '918688624508',
    whatsappLink:
      'https://wa.me/918688624508?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20murrel%20fish%20seeds%20and%20natural%20honey.',
    address: 'Gollapalli Village, Near Vantage Spinning Mill, Andhra Pradesh, India - 521111',
    email: 'madhav.koram@gmail.com',
    hours: 'Open daily: 6:00 AM - 10:00 PM',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3656.6418495387393!2d80.90438571043599!3d16.735950121178835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDQ0JzA5LjQiTiA4MMKwNTQnMjUuMSJF!5e1!3m2!1sen!2sin!4v1775645192609!5m2!1sen!2sin',
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
          image: '/assets/images/pond-view.jpg',
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
          image: '/assets/images/wild-honey.jpg',
          title: 'Pure Natural Honey',
          description:
            '100% pure natural honey with no chemicals or additives, collected carefully from natural floral sources.',
          price: 'Contact for price',
          badge: '100% Pure',
        },
        {
          id: 'farm-honey',
          category: 'honey',
          image: '/assets/images/honey-bottles.jpg',
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
      image: '/assets/images/fish-farming-pond.jpg',
      description: 'Clean pond spaces prepared for stocking murrel fish seeds and supporting healthy aquaculture growth.',
    },
    {
      id: 'harvest-day',
      title: 'Net Harvesting of Seeds',
      image: '/assets/images/harvest-day.jpg',
      description: 'Careful grading and net harvesting of fingerlings for safe transport to fish farming ponds.',
    },
    {
      id: 'breeding-tanks',
      title: 'Fish Seed Breeding Tanks',
      image: '/assets/images/pond-view.jpg',
      description: 'Well-maintained nursery and breeding tanks for healthy murrel seed development and farm supply.',
    },
    {
      id: 'honey-collection',
      title: 'Honey Collection',
      image: '/assets/images/honey-collection.jpg',
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
