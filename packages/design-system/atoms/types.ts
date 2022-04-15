import { z } from 'zod';

// Typography
export const FontUnitStruct = z.string().regex(/[0-9]+em$/);
export const FontSizesStruct = z.object({
    h1: FontUnitStruct,
    h2: FontUnitStruct,
    h3: FontUnitStruct,
    h4: FontUnitStruct,
    h5: FontUnitStruct,
    p: FontUnitStruct,
    pre: FontUnitStruct,
});

export type FontUnit = z.infer<typeof FontUnitStruct>;
export type FontSizes = z.infer<typeof FontSizesStruct>;
