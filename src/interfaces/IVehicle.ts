import { z } from 'zod';

export const VehicleZodSchema = z.object({
  model: z.string().min(3),
  year: z.number().gte(1900).lte(2022),
  color: z.string().min(3),
  status: z.boolean().optional(),
  buyValue: z.number().int(),
});

export type IVehicle = z.infer<typeof VehicleZodSchema>;

// ja aproveitado a ideia de penas verificaçoes que faria com o joi no zod aula 30/2 calaça