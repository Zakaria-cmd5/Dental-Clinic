import z from "zod";

export const createPatientScema = z.object({
  name: z.string().min(3, "Name should be more than 3 letters").max(255),
  phoneNumber: z
    .string()
    .min(8, "Phone Number should be more than 8 number")
    .max(15),
  bloodGroup: z
    .string()
    .min(1, "Blood Group should be at least 1 letter")
    .max(2, "Blood Group should not be more than 2 letters"),
  reservationType: z.string().min(4, "Reservation field is required."),
});
