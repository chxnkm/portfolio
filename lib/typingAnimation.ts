export function typeWriter(text: string, i: number, fnCallback: () => void): void {
  const element = document.getElementById("typing-text");
  if (!element) return;

  if (i < text.length) {
    element.textContent = text.substring(0, i + 1);
    setTimeout(() => typeWriter(text, i + 1, fnCallback), 125);
  } else if (fnCallback) {
    fnCallback();
  }
}

export function startTyping(): void {
  const text = "Kang Ming.";
  typeWriter(text, 0, () => {
    const element = document.getElementById("typing-text");
    if (element) {
      element.classList.add("finished");
    }
  });
}
