import { z } from 'zod';
export type TGoodsData = {
    amount: string;
    description: string;
    title: string;
    category: string;
    imageUrl: string;
    _id: string
}


export type TSupplyForm = {
    title: string;
    category: string;
    description: string;
    amount: string;
};

export const supplyValidationSchema = z.object({
    title: z.string().min(1, { message: "title is required" }),
    category: z.string().min(1, { message: "category is required" }),
    description: z.string().min(1, { message: "description is required" }),
    amount: z.string().min(1, { message: "amount is required" }),
});