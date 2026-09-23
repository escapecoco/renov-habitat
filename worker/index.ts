// Worker Cloudflare : sert le site statique (out/) pour toutes les routes,
// et gère POST /api/contact en envoyant un email via Email Routing.
//
// ⚠️ Pour que l'envoi d'email fonctionne, il faut (dans le dashboard Cloudflare,
// une fois un vrai domaine connecté à ce compte) :
//   1. Activer "Email Routing" sur ce domaine
//   2. Vérifier l'adresse de destination (TO_ADDRESS ci-dessous) — Cloudflare
//      envoie un email de confirmation à cliquer
//   3. Mettre à jour FROM_ADDRESS pour utiliser ce domaine (ex. noreply@tondomaine.fr)
//   4. Redéployer (git push suffit, Cloudflare rebuild automatiquement)
// Tant que ce n'est pas fait, le formulaire affichera l'écran d'erreur —
// avec le numéro de téléphone en repli, donc rien n'est bloquant pour un visiteur.

import { EmailMessage } from "cloudflare:email";

const FROM_ADDRESS = "noreply@renovhabitat-tls.fr";
const TO_ADDRESS = "saad.hamdi.coco@gmail.com";

function buildRawEmail({ from, to, subject, text }) {
  return [
    `From: ${from}`,
    `To: ${to}`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/plain; charset="UTF-8"`,
    "",
    text,
  ].join("\r\n");
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "POST" && url.pathname === "/api/contact") {
      try {
        const data = await request.json();

        const text = [
          "Nouvelle demande depuis le site Rénov Habitat",
          "",
          `Besoin : ${data.besoin ?? ""}`,
          `Service : ${data.service ?? ""}`,
          `Nom : ${data.nom ?? ""}`,
          `Téléphone : ${data.telephone ?? ""}`,
          `Email : ${data.email ?? ""}`,
          `Ville : ${data.ville ?? ""}`,
          `Message : ${data.message ?? ""}`,
        ].join("\n");

        const raw = buildRawEmail({
          from: FROM_ADDRESS,
          to: TO_ADDRESS,
          subject: `Nouvelle demande — ${data.besoin ?? "Site web"}`,
          text,
        });

        const message = new EmailMessage(FROM_ADDRESS, TO_ADDRESS, raw);
        await env.SEND_EMAIL.send(message);

        return Response.json({ success: true });
      } catch (err) {
        return Response.json({ success: false, error: String(err) }, { status: 500 });
      }
    }

    return env.ASSETS.fetch(request);
  },
};
