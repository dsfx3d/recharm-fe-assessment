import {scrollToBottom} from "@/lib/scrollToBottom";
import {useEffect} from "react";

/**
 * whenever,
 * 1. a new child is added to the element
 * 2. the window is resized
 * scroll the element to the bottom
 */
export function useKeepScrollAtBottom(element?: HTMLElement | null) {
  useEffect(() => {
    const observer = new MutationObserver(mutations => {
      const isNodeAdded = mutations.some(record => record.addedNodes.length);
      if (isNodeAdded) {
        // setTimeout to defer the scroll to the next tick
        // as a safety measure in hope that element is rendered
        setTimeout(() => scrollToBottom(element));
      }
    });
    if (element) {
      observer.observe(element, {childList: true, subtree: true});
    }
    return () => observer.disconnect();
  }, [element]);

  useEffect(() => {
    const scroll = () => scrollToBottom(element);
    window.addEventListener("resize", scroll);
    return () => window.removeEventListener("resize", scroll);
  }, [element]);
}
