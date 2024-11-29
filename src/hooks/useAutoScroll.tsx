import {scrollToBottom} from "@/lib/scrollToBottom";
import {useEffect} from "react";

export function useAutoScroll(element?: HTMLElement | null) {
  useEffect(() => {
    const observer = new MutationObserver(mutations => {
      const isInputAdded = mutations
        .flatMap(record => record.addedNodes)
        // eslint-disable-next-line unicorn/prefer-spread
        .flatMap(nodeList => Array.from(nodeList))
        .filter<HTMLElement>(node => node instanceof HTMLElement)
        .some(node => node.querySelector("input"));

      if (isInputAdded) {
        // defer the scroll to the next frame
        setTimeout(() => scrollToBottom(element), 50);
      }
    });
    if (element) {
      observer.observe(element, {childList: true, subtree: true});
    }
    return () => observer.disconnect();
  }, [element]);
}
