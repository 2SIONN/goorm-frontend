function setupEventHandlers(store, manager) {
  const themeBtn = document.getElementById('theme-btn');
  const searchInput = document.getElementById('q');
  const sortSelect = document.getElementById('sort');
  const addForm = document.getElementById('add-form');
  const clearFiltersBtn = document.getElementById('clear-filters');
  const listContainer = document.getElementById('list');

  // 초기 상태와 UI 동기화
  const initialState = store.state;
  searchInput.value = initialState.filter.searchWord;
  sortSelect.value = initialState.filter.sortType;

  addForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const url = document.getElementById('url').value;
    const tags = document.getElementById('tags').value;

    if (!title.trim()) return;

    await manager.add(title, url, tags);

    toast.show('✅ 추가했어요! (동기화 중)');

    addForm.reset();
  });

  listContainer.addEventListener('click', async (e) => {
    const deleteButton = e.target.closest('button[data-id]');
    const tagElement = e.target.closest('.tag[data-tag]');

    if (deleteButton) {
      const id = deleteButton.dataset.id;

      await manager.delete(id);
      toast.show('🗑️ 삭제했어요!');
    }

    // 태그를 클릭하면 토글 (포함/미포함)
    if (tagElement) {
      const tagName = tagElement.dataset.tag; // data-tag 속성값

      store.setState((state) => {
        const newSelectedTags = new Set(state.filter.selectedTags); // 현재 선택된 태그들

        if (newSelectedTags.has(tagName)) {
          newSelectedTags.delete(tagName); // 클릭한 태그가 이미 선택되어 있는 태그면 제거 (선택 해제)
        } else {
          newSelectedTags.add(tagName);
        }

        return {
          filter: { ...state.filter, selectedTags: newSelectedTags }, // 상태 업데이트
        };
      });
    }
  });

  const debouncedSearch = debounce((query) => {
    store.setState((state) => ({
      filter: { ...state.filter, searchWord: query },
    }));
  }, 300);

  searchInput.addEventListener('input', (e) => {
    debouncedSearch(e.target.value);
  });

  sortSelect.addEventListener('change', (e) => {
    store.setState((state) => ({
      filter: { ...state.filter, sortType: e.target.value },
    }));
  });

  clearFiltersBtn.addEventListener('click', () => {
    store.setState((state) => ({
      filter: {
        ...state.filter,
        searchWord: '',
        selectedTags: new Set(),
        sortType: 'recent',
      },
    }));

    searchInput.value = '';
    sortSelect.value = 'recent';
  });

  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    localStorage.setItem('theme', isLight ? '1' : '0');
  });
}
