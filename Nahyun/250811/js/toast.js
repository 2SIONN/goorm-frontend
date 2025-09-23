const toast = {
  container: document.getElementById('toast-root'),

  show(message, duration = 2200) {
    const toastElement = document.createElement('div');
    toastElement.className = 'toast';
    toastElement.textContent = message;

    this.container.appendChild(toastElement);

    // 2.2초 후 자동 제거
    setTimeout(() => {
      toastElement.remove();
    }, duration);
  },
};
