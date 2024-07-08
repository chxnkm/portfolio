export function typeWriter(text: string, i: number, fnCallback: () => void): void {
    if (i < text.length) {
      const element = document.getElementById("typing-text");
      if (element) {
        element.innerHTML = text.substring(0, i+1);
        setTimeout(() => {
          typeWriter(text, i + 1, fnCallback);
        }, 100);
      }
    } else if (typeof fnCallback === 'function') {
      setTimeout(fnCallback, 700);
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