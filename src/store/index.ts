import { createStore } from "vuex";
import { staffModule } from "./staffModule";

export const store = createStore({
  modules: {
    staff: staffModule,
  }
})