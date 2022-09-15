import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const carZodSchema = {
  _id: z.string().optional(),
  doorsQty: z.number().min(2).max(4),
  seatsQty: z.number().min(2).max(7),
};

export const CarZod = VehicleZodSchema.extend(carZodSchema);

export type ICar = z.infer<typeof CarZod>;