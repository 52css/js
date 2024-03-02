function createCopyText() {
  if (navigator.clipboard) {
    return (text) => navigator.clipboard.writeText(text);
  } else {
    return (text) => {
      const input = document.createElement("input");
      input.setAttribute("value", text);
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    };
  }
}

const copyText = createCopyText()
