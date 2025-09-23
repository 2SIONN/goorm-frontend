import { useState } from 'react';

import { Button } from '../ui/button';

export default function Currency() {
  const API = 'https://api.frankfurter.app/latest?from=USD&to=KRW';
  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRate = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(API);
      if (!res.ok) {
        throw new Error('API 요청 오류 발생');
      }
      const { rates } = await res.json();
      setRate(Number(rates?.KRW));
    } catch (err) {
      setError(err.message);
      setRate(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchRate();
  };

  const handleChange = (e) => setAmount(Number(e.target.value));

  const krw = rate ? (amount * rate).toLocaleString() : '-';

  return (
    <>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="amount">USD: </label>
        <input id="amount" type="number" onChange={(e) => handleChange(e)} />
        <button type="submit" disabled={loading}>
          {loading ? '불러오는 중...' : '조회'}
        </button>
        <button disabled={loading} onClick={fetchRate}>
          {loading ? '...' : '새로고침'}
        </button>
      </form>
      {error && <p>{error}</p>}
      {loading ? (
        '조회 중...'
      ) : (
        <p>
          {amount.toLocaleString()} USD = {krw} KRW
        </p>
      )}
      <Button className="bg-pink-400" variant="outline">
        안녕
      </Button>
    </>
  );
}
