'use client';
import { useState } from 'react';
import { EMAIL } from '../lib/data';

export default function ContactForm() {
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);
  async function submit(e) {
    e.preventDefault();
    const f = e.currentTarget;
    if (!f.checkValidity()) { setMsg('Please fill in your name, a valid email and a short project description.'); f.reportValidity(); return; }
    setBusy(true); setMsg('Sending…');
    try {
      const r = await fetch('/contact.php', { method: 'POST', body: new FormData(f) });
      const j = await r.json();
      if (!j.ok) throw new Error('failed');
      f.reset(); setMsg('Thank you. Your message has been sent and I will reply by email.');
      (window.dataLayer = window.dataLayer || []).push({ event: 'form_submit' });
    } catch {
      setMsg(`We couldn't send your message right now. Please try again or contact us directly by email at ${EMAIL}.`);
    }
    setBusy(false);
  }
  return (
    <form id="lead" onSubmit={submit} noValidate>
      <label>Name<input name="name" required autoComplete="name" /></label>
      <label>Company<input name="company" autoComplete="organization" /></label>
      <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      <label>Country<input name="country" autoComplete="country-name" /></label>
      <label>Project type<select name="type">{['Web application','SaaS / MVP','E-commerce','API integration','AI & automation','White-label for my agency','Other'].map(o => <option key={o}>{o}</option>)}</select></label>
      <label>Estimated budget<select name="budget">{['Not sure yet','Under $2,000','$2,000 – $5,000','$5,000 – $15,000','$15,000+'].map(o => <option key={o}>{o}</option>)}</select></label>
      <label className="full">Project description<textarea name="message" rows={5} required /></label>
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="btn" type="submit" disabled={busy}>Start a Conversation</button>
      <p id="status" role="status" aria-live="polite">{msg}</p>
    </form>
  );
}
