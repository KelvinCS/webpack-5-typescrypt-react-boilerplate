/**
 * Created by: Matheus Benites (benites.amorim@gmail.com)
 */
import {join} from 'path';

import {rootDir} from './utils/env';

export default {
    main: [
        join(rootDir, '/src/index.tsx'),
        join(__dirname, './utils/cleanConsoleOnHMR.js'),
    ],
};
