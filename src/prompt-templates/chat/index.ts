import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatPromptValueInterface } from "@langchain/core/prompt_values";

const invokeChatPromptTemplate = async (
  topic: string
): Promise<ChatPromptValueInterface> => {
  const chatPromptTemplate = ChatPromptTemplate.fromMessages([
    ["system", "You are a content creator assistant"],
    ["user", "Write me a post about {topic}"],
  ]);
  return await chatPromptTemplate.invoke({ topic: topic });
};

invokeChatPromptTemplate("llm")
  .then((result) => console.log("result: ", result))
  .catch((error) => console.error("error: ", error));
