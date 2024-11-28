import {scrollToBottom} from "@/lib/scrollToBottom";
import {useEffect} from "react";

export function useKeepScrollAtBottom(element?: HTMLElement | null) {
  useEffect(() => {
    const observer = new MutationObserver(mutations => {
      const isNodeAdded = mutations.some(record => record.addedNodes.length);
      if (isNodeAdded) {
        scrollToBottom(element);
      }
    });
    if (element) {
      observer.observe(element, {childList: true, subtree: true});
    }
    return () => observer.disconnect();
  }, [element]);

  useEffect(() => {
    // setTimeout to defer the scroll to the next tick
    const scroll = () => setTimeout(() => scrollToBottom(element));
    window.addEventListener("resize", scroll);
    return () => window.removeEventListener("resize", scroll);
  }, [element]);
}
