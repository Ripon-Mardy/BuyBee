
export interface SubCategory {
  name: string;
}

export interface category {
  name: string;
  subCategories?: SubCategory[];   
  hasSubmenu?: boolean;
}