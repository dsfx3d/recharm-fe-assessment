export const scrollToBottom = (element?: HTMLElement | null) => {
  requestAnimationFrame(() => {
    element?.scrollTo({
      top: element.scrollHeight,
      behavior: "smooth",
    });
  });
};
