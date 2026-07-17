"use client";
import React, { useState, useEffect, useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Experience } from "../data/interfaces";

interface ExperienceTabProps {
  experiences: Experience[];
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// Deterministic short "commit hash" derived from the task text — not
// random, so server/client render match and it stays stable per item.
const shortHash = (value: string, seed: number) => {
  let hash = seed + 1;
  for (let i = 0; i < value.length; i++) {
    hash = (Math.imul(hash, 31) + value.charCodeAt(i)) >>> 0;
  }
  return hash.toString(16).padStart(7, "0").slice(0, 7);
};

const ExperienceTab: React.FC<ExperienceTabProps> = ({ experiences }) => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const prevActive = useRef(0);
  const tabListRef = useRef<HTMLDivElement>(null);

  function select(idx: number) {
    if (idx === active) return;
    setVisible(false);
    setTimeout(() => {
      prevActive.current = active;
      setActive(idx);
      setVisible(true);
    }, 180);
  }

  function scrollTabs(direction: 1 | -1) {
    tabListRef.current?.scrollBy({ left: direction * 160, behavior: "smooth" });
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      // Only steal arrow keys when focus is inside the tab list itself —
      // otherwise this would hijack arrow-key scrolling/navigation
      // anywhere else on the page.
      if (!tabListRef.current?.contains(document.activeElement)) return;
      if (e.key === "ArrowDown") select(Math.min(active + 1, experiences.length - 1));
      if (e.key === "ArrowUp") select(Math.max(active - 1, 0));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const exp = experiences[active];
  const path = slugify(exp.company);

  return (
    <div className='ex-tab'>
      {/* Company tab list */}
      <div className='ex-tab-list-wrapper'>
        <button
          type='button'
          className='ex-tab-scroll ex-tab-scroll-left'
          onClick={() => scrollTabs(-1)}
          aria-label={t("experience_scroll_left")}
        >
          <MdChevronLeft aria-hidden='true' />
        </button>

        <div className='ex-tab-list' role='tablist' aria-label={t("experience_tablist_label")} ref={tabListRef}>
          {experiences.map((e, i) => (
            <button
              key={e.id}
              onClick={() => select(i)}
              className={`ex-tab-btn${active === i ? " active" : ""}`}
              role='tab'
              aria-selected={active === i}
            >
              <span className='ex-tab-indicator' />
              {e.company}
            </button>
          ))}
        </div>

        <button
          type='button'
          className='ex-tab-scroll ex-tab-scroll-right'
          onClick={() => scrollTabs(1)}
          aria-label={t("experience_scroll_right")}
        >
          <MdChevronRight aria-hidden='true' />
        </button>
      </div>

      {/* Detail panel — styled as a terminal session */}
      <div
        className='ex-tab-panel'
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.18s ease, transform 0.18s ease",
        }}
      >
        <h4 className='ex-tab-heading'>
          {t(exp.roleKey)} <span className='ex-tab-company'>@ {exp.company}</span>
        </h4>

        <div className='terminal'>
          <div className='terminal-header'>
            <span className='window-dot window-dot-red' aria-hidden='true' />
            <span className='window-dot window-dot-yellow' aria-hidden='true' />
            <span className='window-dot window-dot-green' aria-hidden='true' />
            <span className='terminal-title'>bash — {path}</span>
          </div>

          <div className='terminal-body'>
            <p className='terminal-line'>
              <span className='terminal-prompt'>suman@career</span>
              <span className='terminal-path'>:~$</span>{" "}
              <span className='terminal-cmd'>cd ~/experience/{path}</span>
            </p>

            <p className='terminal-line'>
              <span className='terminal-prompt'>suman@career</span>
              <span className='terminal-path'>:~/experience/{path}$</span>{" "}
              <span className='terminal-cmd'>cat role.json</span>
            </p>

            <div className='terminal-output'>
              <span className='code-row'>
                <span className='code-op'>{"{"}</span>
              </span>
              <span className='code-row code-row-indent'>
                <span className='code-var'>{'"role"'}</span>
                <span className='code-op'>:</span>{" "}
                <span className='code-string'>{'"'}{t(exp.roleKey)}{'"'}</span>
                <span className='code-op'>,</span>
              </span>
              <span className='code-row code-row-indent'>
                <span className='code-var'>{'"type"'}</span>
                <span className='code-op'>:</span>{" "}
                <span className='code-string'>{'"'}{t(exp.typeKey)}{'"'}</span>
                <span className='code-op'>,</span>
              </span>
              <span className='code-row code-row-indent'>
                <span className='code-var'>{'"location"'}</span>
                <span className='code-op'>:</span>{" "}
                <span className='code-string'>{'"'}{t(exp.locationKey)}{'"'}</span>
                <span className='code-op'>,</span>
              </span>
              <span className='code-row code-row-indent'>
                <span className='code-var'>{'"duration"'}</span>
                <span className='code-op'>:</span>{" "}
                <span className='code-string'>{'"'}{exp.startDate} – {exp.endDate}{'"'}</span>
              </span>
              <span className='code-row'>
                <span className='code-op'>{"}"}</span>
              </span>
            </div>

            <p className='terminal-line'>
              <span className='terminal-prompt'>suman@career</span>
              <span className='terminal-path'>:~/experience/{path}$</span>{" "}
              <span className='terminal-cmd'>git log --oneline</span>
            </p>

            <ul className='terminal-log'>
              {exp.responsibilities.map((r, i) => (
                <li key={i}>
                  <span className='terminal-hash'>{shortHash(t(r.taskKey), i)}</span>
                  <span className='terminal-log-msg'>{t(r.taskKey)}</span>
                </li>
              ))}
            </ul>

            <p className='terminal-line'>
              <span className='terminal-prompt'>suman@career</span>
              <span className='terminal-path'>:~/experience/{path}$</span>
              <span className='code-cursor' aria-hidden='true' />
            </p>
          </div>
        </div>

        {/* Dot indicators */}
        <div className='ex-tab-dots'>
          {experiences.map((_, i) => (
            <button
              key={i}
              onClick={() => select(i)}
              className={`ex-tab-dot${i === active ? " active" : ""}`}
              aria-label={t("experience_go_to", { number: i + 1 })}
              aria-current={i === active}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTab;
