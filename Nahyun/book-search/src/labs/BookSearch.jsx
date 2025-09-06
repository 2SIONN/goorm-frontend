import { useState, useMemo, useCallback } from 'react';
import { BOOKS } from '../data/books.js';
import {
  norm,
  binarySearchExact,
  lowerBound,
  upperBound,
} from '../utils/binary.js';

export default function BookSearch() {
  const [q, setQ] = useState('');
  const [exact, setExact] = useState(null);
  const [meta, setMeta] = useState({ time: '0.00', steps: 0, found: false });

  // 정규화된 제목 배열
  const titlesNorm = useMemo(() => {
    return BOOKS.map((b) => norm(b.title));
  }, []);

  // 제목 검색 시 일치 텍스트 색상 변경
  const highlight = useCallback((text, query) => {
    const i = text.toLowerCase().indexOf(query.toLowerCase());
    return i === -1 ? (
      text
    ) : (
      <>
        {text.slice(0, i)}
        <span className='text-indigo-600'>
          {text.slice(i, i + query.length)}
        </span>
        {text.slice(i + query.length)}
      </>
    );
  }, []);

  // 자동완성 결과 계산 (이진 탐색)
  const autoCompleteResults = useMemo(() => {
    if (!q.trim()) return [];

    const key = norm(q);
    const { index: lo } = lowerBound(titlesNorm, key);
    const { index: hi } = upperBound(titlesNorm, key + '\uffff');

    return BOOKS.slice(lo, Math.min(hi, lo + 20));
  }, [q, titlesNorm]);

  // 정확 일치 검색
  const handleSearch = useCallback(() => {
    if (!q.trim()) return;

    const key = norm(q);
    const start = performance.now();
    const { index, visited } = binarySearchExact(titlesNorm, key);
    const end = performance.now();

    setMeta({
      time: (end - start).toFixed(2),
      steps: visited.length,
      found: index !== -1,
    });

    setExact(index !== -1 ? BOOKS[index] : null);
  }, [q, titlesNorm]);

  // 키보드 Enter
  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    },
    [handleSearch]
  );

  return (
    <div className='mx-auto max-w-[800px] p-6'>
      <h1 className='mb-6 text-2xl font-bold'>도서 검색</h1>

      <div className='mb-6'>
        <div className='mb-3 flex gap-2'>
          <input
            type='text'
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder='도서 제목을 입력하세요...'
            className='flex-1 rounded-lg border border-gray-200 bg-white px-3 py-3 text-base shadow-sm outline-none ring-0 transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100'
          />
          <button
            onClick={handleSearch}
            className='rounded-lg bg-indigo-600 px-4 py-3 font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          >
            검색
          </button>
        </div>

        {(exact || meta.steps > 0) && (
          <div className='mb-4 rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm'>
            <strong>검색 결과:</strong>{' '}
            {meta.found ? '✅ 찾음' : '❌ 찾지 못함'} |
            <strong> 탐색 단계:</strong> {meta.steps}단계 |
            <strong> 소요 시간:</strong> {meta.time}ms
          </div>
        )}

        {exact && (
          <div className='mb-6 rounded-lg border border-green-200 bg-green-50 p-4'>
            <h3 className='mb-2 text-lg font-semibold text-green-800'>
              정확 일치 결과
            </h3>
            <p className='mb-1'>
              <strong>제목:</strong> {exact.title}
            </p>
            <p className='mb-1'>
              <strong>저자:</strong> {exact.author}
            </p>
            <p className='mb-1'>
              <strong>출간연도:</strong> {exact.year}
            </p>
          </div>
        )}

        {exact === null && meta.steps > 0 && (
          <div className='mb-6 rounded-lg border border-red-200 bg-red-50 p-4'>
            <p className='text-red-800'>일치하는 도서를 찾을 수 없습니다.</p>
          </div>
        )}
      </div>

      <div>
        <h3 className='mb-3 text-xl font-semibold'>자동완성 (접두사 매칭)</h3>
        {!q.trim() ? (
          <p className='text-gray-600 p-4 rounded-lg border border-gray-300'>
            검색어를 입력하면 자동완성 결과가 표시됩니다.
          </p>
        ) : (
          <ul className='list-none divide-y divide-gray-100 rounded-lg border border-gray-100 bg-white'>
            {autoCompleteResults.length > 0 ? (
              autoCompleteResults.map((book) => (
                <li
                  key={book.id}
                  className='px-3 py-3 text-gray-800 hover:bg-gray-50 cursor-pointer'
                  onClick={() => setQ(book.title)}
                >
                  <div className='font-medium'>{highlight(book.title, q)}</div>
                  <div className='text-xs text-gray-500 mt-1'>
                    {book.author} ({book.year})
                  </div>
                </li>
              ))
            ) : (
              <li className='px-3 py-3 text-sm text-gray-500'>
                "{q}"로 시작하는 도서가 없습니다.
              </li>
            )}
          </ul>
        )}
        {autoCompleteResults.length === 20 && (
          <p className='mt-2 text-xs text-gray-600 text-center'>
            상위 20개 결과만 표시됩니다.
          </p>
        )}

        <p className='mt-3 text-sm text-gray-600'>
          현재 구현: 이진 탐색 기반 O(log n) 성능. 정렬된 데이터에서 빠른 검색이
          가능.
        </p>
      </div>
    </div>
  );
}
