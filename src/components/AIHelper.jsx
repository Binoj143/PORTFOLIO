import React, { useState, useCallback, useMemo } from 'react';
import '../styles/AIHelper.css';

const simpleSummarize = (text) => {
  if (!text) return '';
  // split into sentences
  const sentences = text
    .replace(/\n+/g, ' ')
    .split(/(?<=[.?!])\s+/)
    .map(s => s.trim())
    .filter(Boolean);

  const keywords = ['manage', 'develop', 'lead', 'admin', 'deploy', 'cloud', 'server', 'database', 'network', 'security', 'automation', 'script', 'optimi', 'maintain', 'support'];

  const score = s => {
    const low = s.toLowerCase();
    let sc = Math.min(1, s.length / 120); // favor informative sentences
    for (const k of keywords) if (low.includes(k)) sc += 1;
    return sc;
  };

  const ranked = sentences
    .map(s => ({ s, sc: score(s) }))
    .sort((a, b) => b.sc - a.sc)
    .slice(0, 3)
    .map(x => x.s);

  // polish: ensure bullets and short length
  const bullets = ranked.map(r => {
    let s = r;
    if (s.length > 120) s = s.slice(0, 117).trim() + '...';
    return '• ' + s;
  });
  return bullets.join('\n');
}

const AIHelper = React.memo(({ initial = '' }) => {
  const [input, setInput] = useState(initial);
  const [output, setOutput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const onSummarize = useCallback(() => {
    if (!input.trim()) return;
    setIsProcessing(true);
    setTimeout(() => {
      setOutput(simpleSummarize(input));
      setIsProcessing(false);
    }, 300);
  }, [input]);

  const onClear = useCallback(() => {
    setInput('');
    setOutput('');
  }, []);

  const canSummarize = useMemo(() => input.trim().length > 20, [input]);

  return (
    <section className="ai-card card">
      <h3>Assistant</h3>
      <p className="muted">Paste a job description or experience paragraph and click <strong>Summarize</strong>.</p>

      <textarea
        className="ai-input"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Paste experience or notes here..."
        rows={5}
      />

      <div className="ai-actions">
        <button 
          className="btn" 
          onClick={onSummarize}
          disabled={!canSummarize || isProcessing}
        >
          {isProcessing ? 'Processing...' : 'Summarize'}
        </button>
        <button 
          className="btn alt" 
          onClick={onClear}
          disabled={!input && !output}
        >
          Clear
        </button>
      </div>

      <label className="muted">Result</label>
      <pre className="ai-output">{output || 'No summary yet.'}</pre>
    </section>
  );
});

AIHelper.displayName = 'AIHelper';
export default AIHelper;
