import * as myReport from './myReport';
import * as graficas from './graficas';
import * as netflix from './netflix';

export default {
  ...Object.values({
    myReport,

    graficas,

    netflix,
  }),
};
