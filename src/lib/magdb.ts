// common

export type IssueStatus = 
  | "have"
  | "dont_have"
  | "problems"
  | "existence_unconfirmed"
  | null;

export type MagazinePeriodicity = 
  | "w" // weekly
  | "bw" // biweekly
  | "m" // monthly
  | "bm" // bimonthly
  | "q" // quarterly
  | "a" // annually
  | "np" // non_periodical

export type Logo = {
  url: string;
};

export type MagDBFile = {
  path: string;
  thumbnail_path: string;
};

export type Price = {
  value: number;
  currency: string;
};

// catalog (/public-magdb/catalog.yaml)

export type CatalogMagazine = {
  id: number;
  title: string;
  description: string;
  logos?: Logo[];
};

export type Catalog = {
  magazines: CatalogMagazine[];
};

// magazine detail (/public-magdb/catalog/magazine-detail/<id>.yaml)

export type MagazineVersion = {
  id: number;
  name_suffix: string;
  status: IssueStatus;
  cover_pages: MagDBFile[];
  index_pages: MagDBFile[];
  prices: Price[];
};

export type MagazineIssue = {
  id: number;
  current_magazine_name: string;
  issue_number: number | null;
  calendar_id: string | null;
  issue_title: string;
  is_special_issue: boolean;
  published_day: number | null;
  published_month: number | null;
  published_year: number | null;
  periodicity: MagazinePeriodicity | null;
  page_count: number | null;
  note: string | null;
  issuer: string | null;
  versions: MagazineVersion[];
};

export type MagazineInfo = {
  id: number;
  title: string;
  description: string;
  logos?: Logo[];
};

// /** year as string (e.g. "2024"), "Speciály" for special issues, or "null" for unknown */
// export type IssueYear = `${number}` | "Speciály" | "null";
export type IssueYear = string;

export type IssuesByYear = Record<IssueYear, MagazineIssue[]>;

export type MagazineDetail = {
  magazine: MagazineInfo;
  issues_by_year: IssuesByYear;
};

// miss list (/public-magdb/miss-list.yaml)

export type MissingIssue = {
  magazine_issue: string;
  name_suffix: string;
  status: IssueStatus;
};

export type MissListMagazine = {
  id: number;
  title: string;
  logos?: Logo[];
  missing_issues: MissingIssue[];
};

export type MissList = {
  magazines: MissListMagazine[];
};
