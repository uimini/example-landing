/*

-------------------------
Ways to connect uimini
-------------------------


CSS build:
-------------------------

  1. `import "uimini";` (will be same as `uimini/dist/uimini.css`)
  2. `import "uimini/dist/uimini.css";`
  3. `import "uimini/dist/uimini-no-reset.css";` - Not recommended. Cause with `no-reset` option inconsistencies across browsers and devices will works incorrect)


Or import SCSS core files:
-------------------------

import 'uimini/scr/scss/utils/reset.scss'
import 'uimini/scr/scss/uimini.scss'


(note: for this way webpack should have scss/sass handler)

*/

// import uimini
import "uimini";

// common styles for app
import "./helpers.css";
