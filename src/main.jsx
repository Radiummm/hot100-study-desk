import React, { useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  CheckCircle2,
  ChevronRight,
  Clipboard,
  Code2,
  FileQuestion,
  Filter,
  Search,
  Sparkles,
} from "lucide-react";
import { hot100Problems } from "./problems";
import "./styles.css";

const difficultyClass = {
  简单: "easy",
  中等: "medium",
  困难: "hard",
};

function App() {
  const [activeId, setActiveId] = useState(hot100Problems[0].id);
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("全部");
  const [copied, setCopied] = useState(false);
  const studyPanelRef = useRef(null);

  const tags = useMemo(() => {
    const all = hot100Problems.flatMap((problem) => problem.tags);
    return ["全部", ...Array.from(new Set(all))];
  }, []);

  const filteredProblems = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return hot100Problems.filter((problem) => {
      const matchesQuery =
        !normalized ||
        problem.title.toLowerCase().includes(normalized) ||
        problem.cnTitle.includes(query.trim()) ||
        String(problem.leetcodeId).includes(normalized);
      const matchesTag = tag === "全部" || problem.tags.includes(tag);
      return matchesQuery && matchesTag;
    });
  }, [query, tag]);

  const groupedProblems = useMemo(() => {
    const groups = [];
    for (const problem of filteredProblems) {
      const last = groups[groups.length - 1];
      if (!last || last.name !== problem.group) {
        groups.push({ name: problem.group, problems: [problem] });
      } else {
        last.problems.push(problem);
      }
    }
    return groups;
  }, [filteredProblems]);

  const activeProblem =
    hot100Problems.find((problem) => problem.id === activeId) || hot100Problems[0];

  const handleCopy = async () => {
    await navigator.clipboard.writeText(activeProblem.solution.code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1300);
  };

  const handleSelectProblem = (problemId) => {
    setActiveId(problemId);
    if (window.matchMedia("(max-width: 940px)").matches) {
      window.requestAnimationFrame(() => {
        studyPanelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  };

  return (
    <main className="app-shell">
      <aside className="problem-rail" aria-label="Hot 100 题目列表">
        <section className="brand-strip">
          <div>
            <p className="eyebrow">LeetCode</p>
            <h1>Hot 100</h1>
          </div>
          <span className="count-pill">{hot100Problems.length} / 100</span>
        </section>

        <label className="search-box">
          <Search size={18} aria-hidden="true" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="搜索题号 / 中英文题名"
          />
        </label>

        <div className="filter-row">
          <Filter size={16} aria-hidden="true" />
          <select value={tag} onChange={(event) => setTag(event.target.value)}>
            {tags.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <nav className="problem-list" aria-label="按分类分组的 Hot 100 题目">
          {groupedProblems.map((group) => (
            <section className="problem-group" key={group.name}>
              <div className="group-heading">
                <span>{group.name}</span>
                <small>{group.problems.length} 题</small>
              </div>

              {group.problems.map((problem) => (
                <button
                  className={`problem-item ${problem.id === activeProblem.id ? "active" : ""}`}
                  key={problem.id}
                  onClick={() => handleSelectProblem(problem.id)}
                >
                  <span className="order">{String(problem.id).padStart(2, "0")}</span>
                  <span className="item-copy">
                    <strong>{problem.cnTitle}</strong>
                    <small>
                      #{problem.leetcodeId} {problem.title}
                    </small>
                    <em>{problem.group}</em>
                  </span>
                  <span className={`difficulty ${difficultyClass[problem.difficulty]}`}>
                    {problem.difficulty}
                  </span>
                </button>
              ))}
            </section>
          ))}
        </nav>
      </aside>

      <section className="study-panel" ref={studyPanelRef}>
        <header className="problem-header">
          <div>
            <p className="sequence">Hot 100 第 {activeProblem.id} 题</p>
            <h2>{activeProblem.cnTitle}</h2>
            <p className="english-title">
              #{activeProblem.leetcodeId} {activeProblem.title} · {activeProblem.group}
            </p>
          </div>
          <a className="leetcode-link" href={activeProblem.url} target="_blank" rel="noreferrer">
            原题 <ChevronRight size={17} aria-hidden="true" />
          </a>
        </header>

        <div className="tag-cloud">
          {activeProblem.tags.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <section className="overview-grid">
          <article className="info-block statement">
            <div className="block-title">
              <FileQuestion size={18} aria-hidden="true" />
              <h3>题目是什么</h3>
            </div>
            <p>{activeProblem.description}</p>
          </article>
          <article className="info-block">
            <div className="block-title">
              <Sparkles size={18} aria-hidden="true" />
              <h3>复杂度</h3>
            </div>
            <dl className="complexity">
              <div>
                <dt>时间</dt>
                <dd>{activeProblem.complexity.time}</dd>
              </div>
              <div>
                <dt>空间</dt>
                <dd>{activeProblem.complexity.space}</dd>
              </div>
            </dl>
          </article>
        </section>

        <section className="io-section">
          <article className="info-block">
            <h3>输入怎么写</h3>
            <p>{activeProblem.inputFormat}</p>
          </article>
          <article className="info-block">
            <h3>输出是什么</h3>
            <p>{activeProblem.outputFormat}</p>
          </article>
        </section>

        <section className="examples">
          {activeProblem.examples.map((example, index) => (
            <article className="example-card" key={`${activeProblem.id}-${index}`}>
              <span>Example {index + 1}</span>
              <pre>{`Input: ${example.input}\nOutput: ${example.output}${
                example.note ? `\nNote: ${example.note}` : ""
              }`}</pre>
            </article>
          ))}
        </section>

        <section className="solution-layout">
          <article className="steps-panel">
            <h3>解题思路</h3>
            <ol>
              {activeProblem.solution.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>

          <article className="code-panel">
            <div className="code-toolbar">
              <div>
                <Code2 size={18} aria-hidden="true" />
                <span>Python</span>
              </div>
              <button onClick={handleCopy}>
                {copied ? <CheckCircle2 size={16} /> : <Clipboard size={16} />}
                {copied ? "已复制" : "复制"}
              </button>
            </div>
            <pre className="code-block">
              <code>{activeProblem.solution.code}</code>
            </pre>
          </article>
        </section>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
