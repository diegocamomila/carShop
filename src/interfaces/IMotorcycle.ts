import { z } from 'zod';
import VehicleZodSchema from './IVehicle';

const MotorcycleZodSchema = VehicleZodSchema.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().gt(0).lt(2501).int(),
});

type IMotorcycle = z.infer<typeof MotorcycleZodSchema>;

export { IMotorcycle };
export default MotorcycleZodSchema;