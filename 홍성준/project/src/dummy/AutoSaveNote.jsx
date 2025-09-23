import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export default function AutoSaveNote() {
  const [text, setText] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const timerRef = useRef(null);
  const firstRender = useRef(true);

  const handleChange = useCallback((e) => setText(e.target.value), []);

  const status = useMemo(() => {
    const len = text.trim().length;
    return `${len} chars • ${isSaving ? 'Saving...' : 'Saved'}`;
  }, [text, isSaving]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    setIsSaving(true);
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setIsSaving(false);
      timerRef.current = null;
    }, 500);

    return () => {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    };
  }, [text]);

  return (
    <div style={{ display: 'grid', gap: 8, maxWidth: 420 }}>
      <textarea
        value={text}
        onChange={handleChange}
        rows={4}
        placeholder="메모를 입력하면 0.5초 뒤 자동 저장됩니다"
        style={{ padding: 10, border: '1px solid #ddd', borderRadius: 8 }}
      />
      <small style={{ color: isSaving ? '#d97706' : '#16a34a' }}>{status}</small>
    </div>
  );
}
