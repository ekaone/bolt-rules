import { openai } from "@ai-sdk/openai";
import { google } from "@ai-sdk/google";

import { customProvider } from "ai";

// custom provider with different model settings:
export const model = customProvider({
  languageModels: {
    google: google("gemini-2.0-flash", { useSearchGrounding: true }),
    openai: openai.responses("gpt-4o-mini"),
  },
});

export type modelID = Parameters<(typeof model)["languageModel"]>["0"];
