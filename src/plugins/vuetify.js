/**
 * Vuetify3 Plugin
 */
import { createVuetify } from "vuetify";

// For test use. Do not include createVuetify()
// see https://next.vuetifyjs.com/en/features/treeshaking/
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Misc
import { loadFonts } from "./webfontloader";
loadFonts();

// Styles
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
  },
  theme: {
    themes: {
      light: {
        primary: "#80162B",
        secondary: "#E1E1E1",
        accent: "#47121D",
        success: "#47121D",
        error: "#EE5044",
        teal: "#63BAC0",
        blue: "#196CA2",
        yellow: "#F8C545",
        darkblue: "#032F45",
      },
    },
  },
});

export default vuetify;

// Export for test.
export { components, directives };
