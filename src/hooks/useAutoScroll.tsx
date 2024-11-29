import {scrollToBottom} from "@/lib/scrollToBottom";
import {useEffect} from "react";

export function useAutoScroll(element?: HTMLElement | null) {
  useEffect(() => {
    const observer = new MutationObserver(mutations => {
      const isNodeAdded = mutations.some(record => record.addedNodes.length);
      if (isNodeAdded) {
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
