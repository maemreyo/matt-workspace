const trim = (content: string) => content.trim();

const formatMessageWithTemplate = (content: string) =>
  `show me a piece of mermaidjs code about ${trim(
    content
  )} (only response me with the code)`;

export { formatMessageWithTemplate, trim };
