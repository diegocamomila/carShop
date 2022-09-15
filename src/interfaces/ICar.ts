import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

export const carZodSchema = VehicleZodSchema.extend({
  _id: z.string().optional(),
  doorsQty: z.number().min(2).max(4),
  seatsQty: z.number().min(2).max(7),
});

export type ICar = z.infer<typeof carZodSchema>;
