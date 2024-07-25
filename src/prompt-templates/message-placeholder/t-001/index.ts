import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";
import { ChatPromptValueInterface } from "@langchain/core/prompt_values";
import {
  SystemMessage,
  AIMessage,
  HumanMessage,
  BaseMessage,
} from "@langchain/core/messages";

const invokeChatPromptTemplateWithPlaceholder = async (
  systemMessage: SystemMessage,
  placeholder: string,
  messages: BaseMessage[]
): Promise<ChatPromptValueInterface> => {
  const promptTemplate = ChatPromptTemplate.fromMessages([
    systemMessage,
    new MessagesPlaceholder(placeholder),
  ]);

  return await promptTemplate.invoke({
    [placeholder]: messages,
  });
};

const systemMessage: SystemMessage = new SystemMessage(
  "You are a helpful assistant"
);
const placeholder: string = "chat_history";
const messages: BaseMessage[] = [
  new HumanMessage({ content: "Hi I'm Luca!" }),
  new AIMessage({
    content: "Hi Luca I'm your assistant how can I help you today",
  }),
];

invokeChatPromptTemplateWithPlaceholder(systemMessage, placeholder, messages)
  .then((result) => console.log("result: ", result))
  .catch((error) => console.error("error: ", error));
