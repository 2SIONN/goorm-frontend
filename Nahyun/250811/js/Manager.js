class Manager {
  #store;

  constructor(store) {
    this.#store = store;
  }

  // Create
  async add(title, url, tags) {
    // 가짜 비동기 처리
    await new Promise((resolve) => setTimeout(resolve, 100));

    const newItem = {
      id: generateId(),
      title: title.trim(),
      url: url.trim() || null,
      tags: tags
        .split(',')
        .map((tag) => tag.trim())
        .filter((tag) => tag),
      createdAt: Date.now(),
    };

    // Store에 newItem 추가
    this.#store.setState((state) => ({
      items: [...state.items, newItem],
    }));
  }

  // Delete
  async delete(id) {
    await new Promise((resolve) => setTimeout(resolve, 100));

    this.#store.setState((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  }

  // 검색 기능
  #searchItems(items, query) {
    if (!query) return items;

    const searchWord = query.toLowerCase(); // 대소문자 구분 x

    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchWord) || // 제목에서 검색
        item.tags.some((tag) => tag.toLowerCase().includes(searchWord)) // 태그에서 검색
    );
  }

  // 태그 필터 기능
  #filterByTags(items, selectedTags) {
    if (selectedTags.size === 0) return items;

    return items.filter(
      (item) => item.tags.some((tag) => selectedTags.has(tag)) // 하나 이상 포함하는 항목만
    );
  }

  // 정렬 기능
  #sortItems(items, sortType) {
    const sortedItems = [...items];

    switch (sortType) {
      case 'title':
        return sortedItems.sort((a, b) => a.title.localeCompare(b.title));
      case 'tags':
        return sortedItems.sort((a, b) => b.tags.length - a.tags.length);
      default:
        return sortedItems.sort((a, b) => b.createdAt - a.createdAt); // recent 최신순 default
    }
  }

  getFilteredItems() {
    const { items, filter } = this.#store.state;

    // 검색어 확인
    let result = this.#searchItems(items, filter.searchWord);

    // 태그 필터 확인
    result = this.#filterByTags(result, filter.selectedTags);

    // 정렬 확인
    result = this.#sortItems(result, filter.sortType);

    return result;
  }

  get state() {
    return this.#store.state;
  }

  get renderData() {
    return {
      items: this.getFilteredItems(),
      selectedTags: this.#store.state.filter.selectedTags,
      state: this.#store.state,
    };
  }
}
