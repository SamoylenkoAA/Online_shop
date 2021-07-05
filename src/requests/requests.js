import { products } from '@/json/products'
import { brands } from "@/json/brands";

export function getProducts() {
   return new Promise(resolve => {
      setTimeout(() => {
         resolve(products())
      },2000)
   })
}

export function getBrands() {
   return new Promise(resolve => {
      setTimeout(() => {
         resolve(brands())
      }, 2000)
   })
}