import { z } from 'zod';

const FontUnitStruct = z.string().regex(/[0-9]+em$/);
const FontSizesStruct = z.object({
    h1: FontUnitStruct,
    h2: FontUnitStruct,
    h3: FontUnitStruct,
    h4: FontUnitStruct,
    h5: FontUnitStruct,
    p: FontUnitStruct,
    pre: FontUnitStruct,
});

type FontSizes = z.infer<typeof FontSizesStruct>;

export const fontSizes: FontSizes = FontSizesStruct.parse({
    h1: '1.5em',
    h2: '1.125em',
    h3: '1em',
    h4: '0.8125em',
    h5: '0.625em',
    p: '1em',
    pre: '1em',
});
