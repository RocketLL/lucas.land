import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.body};
    font-family: Inter, "Noto Sans KR", sans-serif;
    font-feature-settings: "calt", "kern", "liga";
    font-size: 14px;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  ::selection {
    color: #000000;
    background-color: ${({ theme }) => theme.selectionBackground};
  }

  .tl-edges {
    overflow: hidden;
  }

  pre[class*="language-"],
  code {
    color: ${({ theme }) => theme.text};
    background: none;
    font-family: "Iosevka", monospace;
    font-feature-settings: "calt", "kern", "liga";
    font-size: 1em;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    tab-size: 4;

    hyphens: none;
  }

  pre[class*="language-"] {
    padding: 1em;
    margin: 0.5em -1em;
    overflow: auto;
    box-sizing: content-box;
    border: 1px solid ${({ theme }) => theme.sub};

    @media only screen and (max-width: $breakpoint-l) {
      padding: 1em;
      box-sizing: border-box;
      margin: 0;
    }
  }

  /* Inline code */
  :not(pre) > code {
    white-space: normal;
    background: ${({ theme }) => theme.sub};
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${({ theme }) => theme.sub};
  }

  .token.punctuation {
    color: ${({ theme }) => theme.sub};
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
    color: ${({ theme }) => theme.text};
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: ${({ theme }) => theme.sub};
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: ${({ theme }) => theme.text};
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
