class Store {
  #state;
  #listeners;

  constructor() {
    this.#state = {
      items: [],
      filter: {
        searchWord: '',
        selectedTags: new Set(),
        sortType: 'recent',
      },
    };

    this.#listeners = new Set();
    this.#loadFromStorage();
  }

  // 구독자 등록
  subscribe(listener) {
    this.#listeners.add(listener);

    return () => this.#listeners.delete(listener); // 구독자 해제하는 클로저 함수 반환
  }

  // 상태가 변경되면 모든 구독자에게 알림
  #notify() {
    this.#listeners.forEach((listener) => listener(this.#state));
  }

  // 상태 변경
  setState(updater) {
    this.#state = { ...this.#state, ...updater(this.#state) };
    this.#saveToStorage();
    this.#notify();
  }

  // localStorage에 저장
  #saveToStorage() {
    const data = {
      items: this.#state.items,
      filter: {
        ...this.#state.filter,
        selectedTags: Array.from(this.#state.filter.selectedTags),
      },
    };

    localStorage.setItem('bookmark', JSON.stringify(data));
  }

  // localStorage에서 가져오기
  #loadFromStorage() {
    try {
      const data = localStorage.getItem('bookmark');

      if (data) {
        const parsedData = JSON.parse(data);

        this.#state = {
          items: parsedData.items || [],
          filter: {
            searchWord: parsedData.filter?.searchWord || '',
            selectedTags: new Set(parsedData.filter?.selectedTags || []),
            sortType: parsedData.filter?.sortType || 'recent',
          },
        };
      }
    } catch (error) {
      console.warn('로컬스토리지의 데이터를 불러올 수 없습니다.', error);
    }

    // 테마 - 재접속 시 라이트/다크모드 복원
    const theme = localStorage.getItem('theme');
    if (theme === '1') document.body.classList.add('light');
  }

  get state() {
    return this.#state;
  }
}
