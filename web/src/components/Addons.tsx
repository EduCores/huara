'use client';

import { useEffect, useState } from 'react';
import { ALL_PRODUCTS, EXTRAS } from '@/lib/content';
import { datePlusDays, emailOk } from '@/lib/utils';
import { useSite } from './SiteContext';
import type { CheckoutData } from './Site';

export default function Addons({ onCheckout }: { onCheckout: (d: CheckoutData) => void }) {
  const { t, locale, cart, count, totals, addToCart, toast } = useSite();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [modality, setModality] = useState<string>('pres-grupal');
  const [date, setDate] = useState('');
  const [level, setLevel] = useState<string>(t.levelBasic);
  const [acc, setAcc] = useState<string>(t.acc2);
  const [prog, setProg] = useState<string>(t.progBasic);
  const [tz, setTz] = useState<string>(t.tzEurope);
  const [notes, setNotes] = useState('');
  const [badName, setBadName] = useState(false);
  const [badEmail, setBadEmail] = useState(false);

  const isPres = modality.startsWith('pres');
  const ids = Object.keys(cart);

  useEffect(() => {
    setDate((d) => d || datePlusDays(7));
  }, []);

  const mods: [string, string][] = [
    ['pres-grupal', t.modPresGroup],
    ['pres-priv', t.modPresPriv],
    ['online-grupal', t.modOnlineGroup],
    ['online-priv', t.modOnlinePriv],
  ];
  const levels = [t.levelBasic, t.levelInter, t.levelAdv];
  const accs = [t.acc2, t.acc1, t.acc4, t.accNone];
  const progs = [t.progBasic, t.progInter, t.progAdv];
  const tzs = [t.tzEurope, t.tzUS, t.tzAus];

  const submit = () => {
    if (!count()) {
      toast(t.orderEmpty);
      return;
    }
    const okName = !!name.trim();
    const okEmail = emailOk(email.trim());
    setBadName(!okName);
    setBadEmail(!okEmail);
    if (!okName || !okEmail) {
      toast(t.nameEmail);
      return;
    }
    onCheckout({
      name: name.trim(),
      email: email.trim(),
      modality,
      modalityLabel: mods.find((m) => m[0] === modality)?.[1] || '',
      levelLabel: level,
      date,
      notes: notes.trim(),
      isPres,
      acc,
      prog,
      tz,
    });
  };

  return (
    <div className="container split2 reveal" id="addons">
      <div className="addons">
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.14em' }}>{t.addonsEyebrow}</p>
        <h2 style={{ fontSize: 36, margin: '8px 0 6px' }}>{t.addonsHeading}</h2>
        <p style={{ fontSize: 14, color: 'var(--muted)' }}>{t.addonsSub}</p>
        <div style={{ marginTop: 10 }} id="addonList">
          {EXTRAS.map((p) => (
            <div className="addon-row" key={p.id}>
              <img src={p.img} alt={p.title[locale]} />
              <div>
                <strong>{p.title[locale]}</strong>
                <small>
                  {p.desc[locale]} · ${p.price}
                </small>
              </div>
              <button onClick={() => addToCart(p.id)}>{t.add}</button>
            </div>
          ))}
        </div>
      </div>

      <div className="checkout" id="booking">
        <h3>🧾 {t.yourOrder}</h3>
        <div style={{ margin: '12px 0' }} id="summaryLines">
          {ids.length ? (
            ids.map((id) => {
              const p = ALL_PRODUCTS.find((x) => x.id === id)!;
              return (
                <div className="sum-line" key={id}>
                  <span>
                    {cart[id]}× {p.title[locale]}
                  </span>
                  <b>${p.price * cart[id]}</b>
                </div>
              );
            })
          ) : (
            <p style={{ opacity: 0.6, fontSize: 13 }}>{t.emptySummary}</p>
          )}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 10,
            fontFamily: "'Archivo'",
            fontWeight: 800,
            fontSize: 22,
            margin: '10px 0',
          }}
        >
          <span>{t.total}</span>
          <span id="sumTotal">${totals()}</span>
        </div>
        <div className="field">
          <label>{t.fullName}</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Lena Müller"
            className={badName ? 'invalid' : undefined}
          />
        </div>
        <div className="field">
          <label>{t.email}</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="lena@email.com"
            className={badEmail ? 'invalid' : undefined}
          />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <div className="field">
            <label>{t.modality}</label>
            <select value={modality} onChange={(e) => setModality(e.target.value)}>
              {mods.map(([v, label]) => (
                <option key={v} value={v}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label>{t.start}</label>
            <input id="fDate" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
        </div>
        <div className="field">
          <label>{t.level}</label>
          <select value={level} onChange={(e) => setLevel(e.target.value)}>
            {levels.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </div>
        {isPres ? (
          <div id="presFields">
            <p style={{ fontSize: 12, opacity: 0.65, margin: '12px 0 0' }}>🕙 {t.classesHours}</p>
            <div className="field">
              <label>{t.weeksAcc}</label>
              <select value={acc} onChange={(e) => setAcc(e.target.value)}>
                {accs.map((a) => (
                  <option key={a}>{a}</option>
                ))}
              </select>
            </div>
          </div>
        ) : (
          <div id="onlineFields">
            <div className="field">
              <label>{t.onlineProgram}</label>
              <select value={prog} onChange={(e) => setProg(e.target.value)}>
                {progs.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </div>
            <p style={{ fontSize: 12, opacity: 0.65, margin: '0 0 4px' }}>📄 {t.pdfGuide}</p>
            <div className="field">
              <label>{t.timezone}</label>
              <select value={tz} onChange={(e) => setTz(e.target.value)}>
                {tzs.map((z) => (
                  <option key={z}>{z}</option>
                ))}
              </select>
            </div>
          </div>
        )}
        <div className="field">
          <label>{t.notes}</label>
          <textarea
            rows={2}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder={t.notesPlaceholder}
          />
        </div>
        <button
          className="btn-pill"
          style={{
            background: 'var(--accent)',
            color: '#fff',
            width: '100%',
            justifyContent: 'center',
            marginTop: 8,
          }}
          onClick={submit}
        >
          {t.checkout}
        </button>
        <p style={{ fontSize: 11, opacity: 0.6, marginTop: 10 }}>{t.noPayment}</p>
      </div>
    </div>
  );
}
