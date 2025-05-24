import { model, modelID } from "@/ai/providers";
import { smoothStream, streamText, UIMessage } from "ai";
import { rules } from "@/data/rules";
import { tools } from "@/ai/tools";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const {
    messages,
    selectedModel,
  }: { messages: UIMessage[]; selectedModel: modelID } = await req.json();

  const result = streamText({
    model: model.languageModel(selectedModel),
    system: `You are a helpful rules assistant for World's Largest Hackathon presented by Bolt. Keep your responses to the point, unless you are asked for more details. Provide a link if available. Follow the context rules provided below:    
    ${rules}`,
    messages,
    tools: selectedModel === "openai" ? tools : {},
    experimental_transform: smoothStream(),
    experimental_telemetry: {
      isEnabled: true,
    },
  });

  return result.toDataStreamResponse({
    sendReasoning: false,
    sendSources: false,
    getErrorMessage: (error) => {
      if (error instanceof Error) {
        return error.message;
      }
      console.error(error);
      return "An unknown error occurred.";
    },
  });
}
