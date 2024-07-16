export interface dataProp {
  id: number;
  title: string;
  subtitle: string;
  price: string;
}

export interface dataPropWithPagination {
  meta: {
    total_items: number;
    total_pages: number;
    current_page: number;
    per_page: number;
    remaining_count: number;
  };
  items: dataProp[];
}

export interface ResponseData {
  token?: string;
  data: {
    headers: {
      Accept: string;
      "Content-Type": string;
    };
    fullName: string;
    email: string;
    id: number;
  };
}
