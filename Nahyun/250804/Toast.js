function Toast(message, options = {}) {
  this.message = message;
  this.type = options.type || 'info';
  this.duration = options.duration || 3000;
  this.position = options.position || 'top-right';

  this._create();
}

Toast.prototype._create = function () {
  this._makeContainer();

  this.toast = document.createElement('div');
  this.toast.className = `toast ${this.type}`;

  this._makeContent();

  this.container.appendChild(this.toast);

  setTimeout(() => {
    this.toast.classList.add('show');
  }, 10);

  if (this.duration > 0) {
    this.timer = setTimeout(() => {
      this._remove();
    }, this.duration);
  }
};

Toast.prototype._remove = function () {
  // 사용자가 직접 닫았을 시 자동 제거 취소
  if (this.timer) {
    clearTimeout(this.timer);
  }

  this.toast.classList.remove('show');

  setTimeout(() => {
    // if (this.toast.parentNode) {
    //   this.toast.parentNode.removeChild(this.toast);
    // }

    this.toast.remove();
  }, 300);
};

Toast.prototype._makeContainer = function () {
  const className = `toast-container ${this.position}`;
  const selector = `.toast-container.${this.position}`;

  this.container = document.querySelector(selector);

  // toast-container는 하나만 만들어져야 함
  if (!this.container) {
    this.container = document.createElement('div');
    this.container.className = className;
    document.body.appendChild(this.container);
  }
};

Toast.prototype._makeContent = function () {
  const icon = document.createElement('span');
  icon.className = 'icon';
  icon.textContent = this._getIcon(this.type);

  const message = document.createElement('span');
  message.className = 'message';
  message.textContent = this.message;

  const closeBtn = document.createElement('span');
  closeBtn.className = 'close material-icons';
  closeBtn.textContent = 'close';

  this.toast.appendChild(icon);
  this.toast.appendChild(message);
  this.toast.appendChild(closeBtn);

  closeBtn.addEventListener('click', () => {
    this._remove();
  });
};

Toast.prototype._getIcon = function (type) {
  const icons = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️',
  };

  return icons[type] || icons.info;
};
