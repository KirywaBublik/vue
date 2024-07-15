import type { Ref } from "vue";

export interface userType {
  fullName: string;
  email: string;
  password: string;
  id: number;
  token?: string;
}
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

export interface registerType {
  id: number;
  name: string;
  model: Ref<string>;
  label: string;
}
