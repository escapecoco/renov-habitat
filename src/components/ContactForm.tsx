"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  contact,
  contactForm,
  renovationDetail,
  remiseEnEtatDetail,
} from "@/content/site";
import { CheckCircleIcon, AlertCircleIcon, ShieldIcon } from "./icons";

type Need = "urgence" | "renovation" | null;
type Status = "idle" | "submitting" | "success" | "error";

const stepLabels = ["Besoin", "Détails", "Coordonnées", "Envoi"];

const inputClass =
  "w-full border border-rule px-4 py-3 text-[14px] text-ink placeholder:text-muted focus:border-ink focus:outline-none";

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [need, setNeed] = useState<Need>(null);
  const [service, setService] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  const options = need === "urgence" ? remiseEnEtatDetail : renovationDetail;

  function selectNeed(n: Need) {
    setNeed(n);
    setService(null);
    setStep(1);
  }

  function validateStep1() {
    const e: Record<string, string> = {};
    if (!service) e.service = "Choisissez un service pour continuer.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function validateStep2() {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Votre nom est requis.";
    if (!phone.trim()) e.phone = "Un numéro de téléphone est requis.";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      e.email = "Une adresse email valide est requise.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function goNext() {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    setErrors({});
    setStep((s) => s + 1);
  }

  function goBack() {
    setErrors({});
    setStep((s) => Math.max(0, s - 1));
  }

  async function handleSubmit() {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          besoin: need === "urgence" ? "Urgence / sinistre" : "Projet de rénovation",
          service: service ?? "non précisé",
          nom: name,
          telephone: phone,
          email,
          ville: city || "non précisé",
          message: message || "aucun message",
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center gap-4 border border-rule px-8 py-14 text-center"
      >
        <CheckCircleIcon />
        <h2 className="m-0 text-[20px] font-bold text-ink uppercase">
          {contactForm.successTitle}
        </h2>
        <p className="m-0 max-w-[420px] text-[14px] leading-[1.6] text-body">
          {contactForm.successBody}
        </p>
        {need === "urgence" && (
          <div className="mt-2 flex flex-col items-center gap-1.5 border-t border-rule pt-5">
            <p className="m-0 text-[13px] text-body">{contactForm.successUrgentNote}</p>
            <a
              href={contact.phonePrimaryHref}
              className="text-[16px] font-bold text-blue hover:text-blue-hover"
            >
              {contact.phonePrimaryDisplay}
            </a>
          </div>
        )}
      </motion.div>
    );
  }

  if (status === "error") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center gap-4 border border-rule px-8 py-14 text-center"
      >
        <AlertCircleIcon />
        <h2 className="m-0 text-[20px] font-bold text-ink uppercase">
          {contactForm.errorTitle}
        </h2>
        <p className="m-0 max-w-[420px] text-[14px] leading-[1.6] text-body">
          {contactForm.errorBody}
        </p>
        <a
          href={contact.phonePrimaryHref}
          className="text-[16px] font-bold text-blue hover:text-blue-hover"
        >
          {contact.phonePrimaryDisplay}
        </a>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 border-[1.5px] border-ink px-5 py-2.5 text-[11px] font-bold tracking-[0.09em] text-ink uppercase hover:bg-ink hover:text-white"
        >
          Réessayer
        </button>
      </motion.div>
    );
  }

  return (
    <div className="border border-rule p-6 sm:p-9">
      <div className="mb-9">
        <div className="mb-2 flex justify-between text-[10.5px] font-bold tracking-[0.08em] uppercase">
          {stepLabels.map((label, i) => (
            <span key={label} className={i <= step ? "text-blue" : "text-muted"}>
              {label}
            </span>
          ))}
        </div>
        <div className="h-1 w-full bg-rule">
          <motion.div
            className="h-1 bg-blue"
            animate={{ width: `${((step + 1) / stepLabels.length) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {step === 0 && (
            <div>
              <h2 className="m-0 mb-1 text-[19px] font-bold text-ink">
                De quoi avez-vous besoin ?
              </h2>
              <p className="m-0 mb-6 text-[13px] text-body">
                Une réponse suffit pour démarrer votre demande.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => selectNeed("urgence")}
                  className="cursor-pointer border border-rule p-6 text-left hover:border-ink"
                >
                  <span className="mb-1 block text-[16px] font-bold text-ink">
                    Urgence / sinistre
                  </span>
                  <span className="block text-[13px] leading-[1.5] text-body">
                    Dégât d&rsquo;eau, incendie, moisissure — on intervient vite.
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => selectNeed("renovation")}
                  className="cursor-pointer border border-rule p-6 text-left hover:border-ink"
                >
                  <span className="mb-1 block text-[16px] font-bold text-ink">
                    Projet de rénovation
                  </span>
                  <span className="block text-[13px] leading-[1.5] text-body">
                    Un projet à planifier, sans urgence.
                  </span>
                </button>
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 className="m-0 mb-1 text-[19px] font-bold text-ink">
                Quel service vous intéresse ?
              </h2>
              <p className="m-0 mb-5 text-[13px] text-body">
                Choisissez ce qui correspond le mieux à votre situation.
              </p>
              <div className="mb-2 flex flex-wrap gap-2">
                {options.map((opt) => (
                  <button
                    key={opt.title}
                    type="button"
                    onClick={() => setService(opt.title)}
                    className={`cursor-pointer border px-4 py-2 text-[12.5px] font-semibold ${
                      service === opt.title
                        ? "border-ink bg-ink text-white"
                        : "border-rule text-ink hover:border-ink"
                    }`}
                  >
                    {opt.title}
                  </button>
                ))}
              </div>
              {errors.service && (
                <p className="mt-1 mb-3 text-[12px] text-[#D8232A]">{errors.service}</p>
              )}
              <label className="mt-4 mb-1.5 block text-[12px] font-semibold text-ink">
                Dites-nous en plus (optionnel)
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Décrivez votre situation ou votre projet..."
                className={inputClass}
              />
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="m-0 mb-1 text-[19px] font-bold text-ink">Vos coordonnées</h2>
              <p className="m-0 mb-5 text-[13px] text-body">
                Pour qu&rsquo;on puisse vous répondre — vos informations restent confidentielles.
              </p>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="mb-1.5 block text-[12px] font-semibold text-ink">
                    Nom complet
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                    placeholder="Jean Dupont"
                  />
                  {errors.name && (
                    <p className="mt-1 text-[12px] text-[#D8232A]">{errors.name}</p>
                  )}
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[12px] font-semibold text-ink">
                      Téléphone
                    </label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={inputClass}
                      placeholder="06 00 00 00 00"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-[12px] text-[#D8232A]">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[12px] font-semibold text-ink">
                      Email
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputClass}
                      placeholder="vous@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-[12px] text-[#D8232A]">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-[12px] font-semibold text-ink">
                    Ville ou quartier (optionnel)
                  </label>
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className={inputClass}
                    placeholder="Toulouse"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="m-0 mb-1 text-[19px] font-bold text-ink">
                Vérifiez votre demande
              </h2>
              <p className="m-0 mb-5 text-[13px] text-body">
                Un dernier coup d&rsquo;œil avant l&rsquo;envoi.
              </p>
              <dl className="m-0 flex flex-col gap-2.5 border-t border-rule pt-4 text-[13.5px]">
                <SummaryRow
                  label="Besoin"
                  value={need === "urgence" ? "Urgence / sinistre" : "Projet de rénovation"}
                />
                <SummaryRow label="Service" value={service ?? "—"} />
                {message && <SummaryRow label="Message" value={message} />}
                <SummaryRow label="Nom" value={name} />
                <SummaryRow label="Téléphone" value={phone} />
                <SummaryRow label="Email" value={email} />
                {city && <SummaryRow label="Ville" value={city} />}
              </dl>
              <div className="mt-5 flex items-start gap-2 border-t border-rule pt-4 text-[12px] text-muted">
                <ShieldIcon />
                <span>
                  Vos informations restent confidentielles et ne servent qu&rsquo;à traiter
                  votre demande.
                </span>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex items-center justify-between gap-3 border-t border-rule pt-6">
        {step > 0 ? (
          <button
            type="button"
            onClick={goBack}
            className="cursor-pointer text-[11px] font-bold tracking-[0.09em] text-ink uppercase hover:text-blue"
          >
            ← Retour
          </button>
        ) : (
          <span />
        )}

        {step < 3 ? (
          <button
            type="button"
            onClick={goNext}
            className="cursor-pointer bg-blue px-6 py-3 text-[11px] font-bold tracking-[0.07em] text-white uppercase hover:bg-blue-hover"
          >
            Suivant
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={status === "submitting"}
            className="cursor-pointer bg-blue px-6 py-3 text-[11px] font-bold tracking-[0.07em] text-white uppercase hover:bg-blue-hover disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? "Envoi en cours..." : "Envoyer ma demande"}
          </button>
        )}
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
      <dt className="w-[110px] shrink-0 font-semibold text-muted">{label}</dt>
      <dd className="m-0 text-ink">{value}</dd>
    </div>
  );
}
