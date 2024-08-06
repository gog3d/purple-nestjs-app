export class ProductModel {
    image: string;
    title: string;
    price: number;
    oldPrice: number;
    credit: number;
    calculatedRating: number;
    descrition: string;
    advantages: string;
    deiAdvantages: string;
    categories: string[];
    tags: string;
    characteristics: {
        [key: string]: string;
    };
}
