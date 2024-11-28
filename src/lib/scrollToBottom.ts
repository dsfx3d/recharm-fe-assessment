export const scrollToBottom = (element?: HTMLElement | null) => {
  element?.scrollTo({
    top: element.scrollHeight,
    behavior: "smooth",
  });
};
