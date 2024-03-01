import { z } from "zod";

export type TVolunteerForm = {
    name: string;
    email: string;
    phoneNumber: string;
    location: string;
};


export const volunteerValidationSchema = z.object({
    name: z.string().min(1, { message: "name is required" }),
    email: z.string().min(1, { message: "email is required" }).email(),
    phoneNumber: z.string().min(1, { message: "phone number is required" }),
    location: z.string().min(1, { message: "location is required" }),
});