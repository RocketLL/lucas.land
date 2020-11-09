import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 14px;
  }

  body {
    color: ${({ theme: { colors } }) => colors.text};
    background-color: ${({ theme: { colors } }) => colors.body};
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    font-family: "Helvetica Now Display", Inter, "Noto Sans KR", sans-serif;
    font-feature-settings: "calt", "kern", "liga";
    letter-spacing: -0.006em;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  ::selection {
    color: ${({ theme: { colors } }) => colors.selectionText};
    background-color: ${({ theme: { colors } }) => colors.selectionBackground};
  }

  .tl-edges {
    overflow: hidden;
  }

  pre[class*="language-"],
  code {
    color: ${({ theme: { colors } }) => colors.text};
    background: none;
    font-family: "JetBrains Mono", "Fira Code", monospace;
    font-feature-settings: "calt", "kern", "liga";
    font-size: 1em;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    scrollbar-base-color: dark;
    scrollbar-width: thin;
    tab-size: 4;

    hyphens: none;
  }

  pre[class*="language-"] {
    padding: 1em;
    margin: 0.5em -1em;
    overflow: auto;
    box-sizing: content-box;
    border: 1px solid ${({ theme: { colors } }) => colors.sub};

    @media only screen and (max-width: $breakpoint-l) {
      padding: 1em;
      box-sizing: border-box;
      margin: 0;
    }
  }

  /* Inline code */
  :not(pre) > code {
    white-space: normal;
    background: ${({ theme: { colors } }) => colors.sub};
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${({ theme: { colors } }) => colors.sub};
  }

  .token.punctuation {
    color: ${({ theme: colors }) => colors.sub};
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: ${({ theme: { colors } }) => colors.text};
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: ${({ theme: { colors } }) => colors.sub};
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: ${({ theme: { colors } }) => colors.text};
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    font-style: italic;
  }

  .token.function,
  .token.class-name {
    /* @include var(color, color-hl1); */
  }

  .token.regex,
  .token.important,
  .token.variable {
    /* @include var(color, color-hl1); */
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`
export default GlobalStyle
