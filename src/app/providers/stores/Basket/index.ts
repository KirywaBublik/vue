import { defineStore } from "pinia";
import { dataFetch } from "@/shared/api/request/fetchDataHandler";

export const useBasketStore = defineStore("basket", {
  state: () => {
    return {
      items: [] as number[],
      count: [] as BasketItemType[],
    };
  },
  getters: {
    async fetchData() {
      this.count = [];
      for (let i = 0; i < this.items.length; i++) {
        let response = await dataFetch(`products/${this.items[i]}`);
        this.count.push(response);
      }
    },
  }, // store todo
  actions: {
    addToBasket(id: number) {
      this.items.push(id);
    },
  },
});

export interface BasketItemType {
  id: number | null;
  title: string | null;
  subtitle: string | null;
  price: string | null;
  image?: string | null;
}
