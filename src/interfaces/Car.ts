import { z } from 'zod';
import { VehicleZodSchema } from './Vehicle';

export const CarZodSchema = VehicleZodSchema.extend({
  _id: z.string().optional(),
  doorsQty: z.number().min(2).max(4),
  seatsQty: z.number().min(2).max(7),
});

export type CarDTO = z.infer<typeof CarZodSchema>;
