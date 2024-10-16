import { useState, useEffect } from 'react'
import { fetchQuoteData } from './quoteData'
import './App.css'

export default function QuoteComponent() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadQuotes = () => {
    setLoading(true);
    fetchQuoteData()
      .then((data) => {
        const randomQuote = data[Math.floor(Math.random() * data.length)];
        setQuotes(randomQuote);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch quotes:", error);
        setLoading(false);
      });
  };


  useEffect(() => {
    loadQuotes();
  }, [])


  return (
    <>
      <div className="quote-container">
        <h1>Quotes</h1>
        <ul className="quote-list">

          {loading ? (<div className="loading-div">Loading...</div>) :
            quotes && (
              <li key={quotes.id}>
                <p className="quote-text">"{quotes.text}" </p>
                <p className="quote-author"> - {quotes.author} </p>
              </li>
            )}
        </ul>
        <button onClick={loadQuotes} className="quote-button">Fetch New Quotes</button>
      </div>
    </>
  );
}