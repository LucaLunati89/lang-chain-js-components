import { PromptTemplate } from "@langchain/core/prompts";
import { StringPromptValueInterface } from "@langchain/core/prompt_values";

const invokeStringPromptTemplate = async (
  topicKey: string,
  topicValue: string
): Promise<StringPromptValueInterface> => {
  const stringPromptTemplate = PromptTemplate.fromTemplate(
    `Tell me a joke about {${topicKey}}`
  );
  return await stringPromptTemplate.invoke({ [topicKey]: topicValue });
};

invokeStringPromptTemplate("topic", "llm")
  .then((result) => console.log("result: ", result))
  .catch((error) => console.error("error: ", error));
