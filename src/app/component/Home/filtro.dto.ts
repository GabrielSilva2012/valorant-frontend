export interface QueryDTO {
  skip: number;
  take: number;
  include: IncludeDTO;
  where?: WhereDTO;
}

export interface IncludeDTO {
  skins: boolean;
}

export interface WhereDTO {
  displayName?: DisplayNameWhereDTO;
  category?: CategoryWhereDTO;
  skins?: SkinsWhereDTO;
}

export interface DisplayNameWhereDTO {
  equals?: string;
  contains?: string;
  in?: string[];
  not?: NotDisplayNameWhereDTO;
  mode?: string;
}

export interface NotDisplayNameWhereDTO {
  equals?: string;
  contains?: string;
  in?: string[];
}

export interface CategoryWhereDTO {
  equals?: string;
  in?: string[];
  not?: NotCategoryWhereDTO;
}

export interface NotCategoryWhereDTO {
  equals?: string;
  in?: string[];
}

export interface SkinsWhereDTO {
  every?: DisplayNameWhereDTO;
  some?: DisplayNameWhereDTO;
  none?: DisplayNameWhereDTO;
}


// Filtro Skins

export interface WeaponFilterDTO {
  skip: number;
  take: number;
  include: {
    weapon: boolean;
    tier: boolean;
    theme: boolean;
    reward: boolean;
    chromas: boolean;
    levels: boolean;
  };
  where: {
    displayName: FilterOptions;
    weapon: {
      displayName: FilterOptions;
      category: FilterOptions;
    };
  };
}

export interface FilterOptions {
  equals?: string;
  contains?: string;
  in?: string[];
  not?: {
    equals?: string;
    contains?: string;
    in?: string[];
  };
  mode?: string;
}