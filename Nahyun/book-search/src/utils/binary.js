// 문자열 정규화: 한글/영문 모두 NFC 정규화, 소문자, 앞뒤 공백 제거
export const norm = (s) => s.normalize('NFC').toLowerCase().trim();

// arr: 이미 정렬된 문자열(정규화된 제목) 배열
// key: 정규화된 검색어
// return: { index: number, visited: number[] }
export function binarySearchExact(arr, key) {
  const visited = [];
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    visited.push(mid);

    if (arr[mid] === key) {
      return { index: mid, visited };
    } else if (arr[mid] < key) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return { index: -1, visited };
}

// 첫 번째 arr[i] >= key 의 인덱스
export function lowerBound(arr, key) {
  const visited = [];
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    visited.push(mid);

    if (arr[mid] < key) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return { index: left, visited };
}

// 첫 번째 arr[i] > key 의 인덱스
export function upperBound(arr, key) {
  const visited = [];
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    visited.push(mid);

    if (arr[mid] <= key) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return { index: left, visited };
}
