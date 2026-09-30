import React from 'react';
import MissionCard from './MissionCard.jsx';
import { MISSIONS, APPS } from '../data/missions.js';

const BASE = import.meta.env.BASE_URL;

export default function MissionGallery({ progress }) {
  // Bonus exercises are optional: listed in their own strip under the cards,
  // and not counted, so "n of 6" stays true to the day's six.
  const main = MISSIONS.filter(m => !m.bonus);
  const bonus = MISSIONS.filter(m => m.bonus);

  return (
    <section className="evidence-section">
      <div className="evidence-section__header">
        <div className="evidence-section__lead">
          <h1 className="evidence-section__title">CHOOSE YOUR TOPIC, OR USE OURS</h1>
          {/* The three sign-ins beside the title, so nobody hunts for a tab. */}
          <nav className="tool-cards__row tool-cards__row--gallery" aria-label="Open your tools">
            {[APPS.copilot, APPS.gemini, APPS.notebook].map(app => (
              <a key={app.name} className="tool-card" href={app.url} target="_blank" rel="noopener noreferrer" title={app.note}>
                <img className="tool-card__logo" src={`${BASE}logos/${app.logo}`} alt="" />
                <span className="tool-card__text">
                  <span className="tool-card__label">Click to open {app.name}</span>
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="evidence-grid mission-grid">
        {main.map(mission => (
          <MissionCard
            key={mission.id}
            mission={mission}
            completed={Boolean(progress[mission.id])}
          />
        ))}
      </div>

      {/* A slim full-width card, the slot the old prompt-library strip used.
          Deliberately not a MissionCard: no numeral, no tick, sits under the
          grid rather than in it. */}
      {bonus.map(m => (
        <button
          key={m.id}
          type="button"
          className="bonus-strip"
          onClick={() => { window.location.hash = '#/' + m.id; }}
        >
          <span className="bonus-strip__label">Bonus Exercise:</span>
          <span className="bonus-strip__line">{m.summary}</span>
        </button>
      ))}

      <div className="governance-callout governance-callout--discreet">
        <p>
          <strong>✓ At Cardiff University:</strong> Gemini and Gemini Notebook (until
          recently NotebookLM) are approved for
          confidential (C1/C2) data, but only when you sign in with your CU account
          (cardiff.ac.uk).
        </p>
        <p>
          <strong>• For other organisations:</strong> treat them as personal
          learning tools, stick to public, non-confidential work data.
        </p>
        {/* The follow-on workshop, advertised quietly (2026-09-30). The flyer is
            hosted on The Matts' Part 1 site. */}
        <p>
          <strong>Need more training on agents and AI governance?</strong>{' '}
          <a href="https://wmgmm.github.io/thematts/TheMatts_Governance_Workshop_Flyer.pdf" target="_blank" rel="noopener noreferrer">
            See our governance workshop (PDF)
          </a>
        </p>
      </div>
    </section>
  );
}
