import React from "react";
import "../src/styles/globals.css";
import "./storybook.css";
import type {Preview} from "@storybook/react";
import {Inter} from "next/font/google";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const preview: Preview = {
  decorators: [
    Story => (
      <main className={`${sans.variable} font-sans`}>
        <Story />
      </main>
    ),
  ],
  parameters: {
    viewport: {
      viewports: {
        figma: {
          name: "Figma",
          styles: {
            width: "1440px",
            height: "817px",
          },
          type: "desktop",
        },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
