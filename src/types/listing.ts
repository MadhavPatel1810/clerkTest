import { ListingState } from "./prisma-enums";

// src/types/listing.ts
export interface ListingResponse {
    id: string;
    title: string;
    brand: string;
    season: string;
    sellerName: string;
    sellerPhoto: string | null;
    price: number;
    condition: string;
    size: string;
    state: ListingState;
    images: string[];
    updatedAt: Date;
  }
  
  export interface ListingsApiResponse {
    success: boolean;
    data: ListingResponse[];
    pagination: {
      total: number;
      page: number;
      limit: number;
      totalPages: number;
    };
  }