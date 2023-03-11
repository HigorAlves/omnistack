import { createEmotionCache } from "@mantine/core";
import rtlPlugin from "@omni/ui/rtlPlugin";

export const rtlCache = createEmotionCache({
  key: "mantine-rtl",
  stylisPlugins: [rtlPlugin],
});
