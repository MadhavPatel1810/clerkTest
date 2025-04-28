import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";
import { ListingState } from "@/types/prisma-enums";

type Listing = {
  id: string;
  product: {
    name: string;
    season_time: string | null;
    season_year: string | null;
    brand: {
      name: string;
    };
  };
  seller: {
    user: {
      first_name: string;
      last_name: string;
      profile_images: string[] | null; // Allow null here
    };
  };
  updated_at: Date;
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Get query parameters
    const search = searchParams.get("search") || undefined;
    const state = (searchParams.get("state") as ListingState) || undefined;
    const limit = parseInt(searchParams.get("limit") || "20");
    const page = parseInt(searchParams.get("page") || "1");
    const skip = (page - 1) * limit;

    let sort: any = { updated_at: "desc" };
    try {
      const sortParam = searchParams.get("sort");
      if (sortParam) {
        const parsedSort = JSON.parse(sortParam);
        sort = { [Object.keys(parsedSort)[0]]: Object.values(parsedSort)[0] };
      }
    } catch (e) {
      console.log("Using default sort");
    }


    // Build the where clause
   // Parse filter parameter
   let where: any = { deleted_at: null };
   try {
     const filterParam = searchParams.get("filter");
     if (filterParam && filterParam !== "{}") {
       const parsedFilter = JSON.parse(filterParam);
       
       // Handle search filter
       if (parsedFilter.title) {
         where.OR = [
           {
             product: {
               name: {
                 contains: parsedFilter.title,
                 mode: "insensitive",
               },
             },
           },
         ];
       }

       // Handle state filter
       if (parsedFilter.state) {
         where.state = parsedFilter.state;
       }
     }
   } catch (e) {
     console.log("Error parsing filters", e);
   }

    const listings = await prisma.listing.findMany({
      where: { deleted_at: null },
      include: {
        product: {
          include: {
            brand: true,
          },
        },
        seller: {
          include: {
            user: true,
          },
        },
      },
      orderBy: { updated_at: "desc" },
      take: limit,
      skip,
    });

    const formattedListings = listings.map((listing: any) => {
      const profileImages = listing.seller.user.profile_images || []; // Default to an empty array if null
      return {
        ...listing,
        seller: {
          ...listing.seller,
          user: {
            ...listing.seller.user,
            profile_images: profileImages,
          },
        },
      };
    });

    const totalCount = await prisma.listing.count({ where });
    const totalPages = Math.ceil(totalCount / limit);

    return NextResponse.json({
      success: true,
      data: formattedListings,
      pagination: {
        total: totalCount,
        page,
        limit,
        totalPages,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  return NextResponse.json(
    { success: false, error: "Method not implemented" },
    { status: 501 }
  );
}
