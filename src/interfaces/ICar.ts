import { z } from 'zod';
import VehicleZodSchema from './IVehicle';

const CarZodSchema = VehicleZodSchema.extend({
  // id: z.string().optional(),
  doorsQty: z.number().min(2).max(4),
  seatsQty: z.number().min(2).max(7),
});

type ICar = z.infer<typeof CarZodSchema>;

export { ICar };
export default CarZodSchema;