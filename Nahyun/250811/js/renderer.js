const renderer = {
  // 메인 렌더링 함수
  render(manager) {
    const listContainer = document.getElementById('list');
    const items = manager.getFilteredItems();
    const selectedTags = manager.renderData.selectedTags;
    const html = items
      .map((item) => this.renderCard(item, selectedTags))
      .join('');

    listContainer.innerHTML = html;
  },

  renderCard(item, selectedTags) {
    const { id, title, url, tags, createdAt } = item;

    const titleHtml = escapeHtml(title);

    // URL 구분
    const isUrl =
      url && (url.startsWith('http://') || url.startsWith('https://'));

    const urlHtml = url
      ? isUrl
        ? `<a href="${escapeHtml(
            url
          )}" target="_blank" rel="noreferrer">${escapeHtml(url)}</a>`
        : `<span class="muted">${escapeHtml(url)}</span>`
      : '';

    const tagsHtml = tags
      .map((tag) => {
        const isSelected = selectedTags.has(tag);
        const selectedClass = isSelected ? ' selected' : '';

        return `<span class="tag${selectedClass}" data-tag="${escapeAttr(
          tag
        )}">#${escapeHtml(tag)}</span>`;
      })
      .join('');

    const createdAtHtml = `<div class="created-at">작성일: ${formatDate(createdAt)}</div>`;

    return `
      <div class="card">
        <h3>${titleHtml}</h3>
        ${urlHtml}
        <div class="tags">${tagsHtml}</div>
        ${createdAtHtml}
        <div class="actions">
          <button type="button" data-id="${id}">삭제</button>
        </div>
      </div>
    `;
  },
};
