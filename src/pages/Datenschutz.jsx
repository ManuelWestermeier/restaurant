import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { CLIENT } from '../config/client';
import { fadeInUp, fadeIn, staggerContainer } from '../utils/animations';

export default function Datenschutz() {
  return (
    <PageWrapper>
      {/* Header */}
      <div className="pt-32 pb-16 bg-brand-surface relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient opacity-30" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
            <motion.p variants={fadeIn} className="section-label mb-3">Rechtliche Informationen</motion.p>
            <motion.div variants={fadeIn}><span className="gold-divider-left" /></motion.div>
            <motion.h1 variants={fadeInUp} className="section-heading-lg">Datenschutzerklärung</motion.h1>
            <motion.p variants={fadeIn} className="text-brand-muted font-sans text-sm mt-3">
              Stand: {new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose-legal"
          >

            {/* 1. Einleitung */}
            <h2>1. Datenschutz auf einen Blick</h2>
            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
              Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3>Datenerfassung auf dieser Website</h3>
            <p>
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
              können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
            </p>
            <p>
              <strong>Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B.
              um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach
              Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
              technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>
            <p>
              <strong>Wofür nutzen wir Ihre Daten?</strong><br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
              Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website
              Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für
              Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.
            </p>
            <p>
              <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung
              oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt
              haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das
              Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
              zu verlangen.
            </p>

            {/* 2. Hosting */}
            <h2>2. Hosting</h2>
            <p>
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <h3>Cloudflare Pages</h3>
            <p>
              Anbieter ist die Cloudflare Inc., 101 Townsend St, San Francisco, CA 94107, USA
              (nachfolgend „Cloudflare").
            </p>
            <p>
              Wenn Sie unsere Website besuchen, erfasst Cloudflare verschiedene Logfiles inklusive Ihrer IP-Adressen.
              Details entnehmen Sie der Datenschutzerklärung von Cloudflare:{' '}
              <a href={CLIENT.hostingDatenschutz} target="_blank" rel="noopener noreferrer">
                {CLIENT.hostingDatenschutz}
              </a>
            </p>
            <p>
              Die Verwendung von Cloudflare erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein
              berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine
              entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage
              von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von
              Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im
              Sinne des TDDDG umfasst.
            </p>
            <p>
              Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework" (DPF).
              Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung
              europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll.
            </p>
            <p>
              Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem oben genannten Anbieter geschlossen.
              Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet,
              dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter
              Einhaltung der DSGVO verarbeitet.
            </p>

            <h3>Domain-Registrar</h3>
            <p>
              Die Domain dieser Website ist registriert bei: {CLIENT.domainAnbieter}.<br />
              Datenschutzerklärung:{' '}
              <a href={CLIENT.domainDatenschutz} target="_blank" rel="noopener noreferrer">
                {CLIENT.domainDatenschutz}
              </a>
            </p>

            {/* 3. Verantwortliche Stelle */}
            <h2>3. Hinweis zur verantwortlichen Stelle</h2>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              <strong>{CLIENT.firmenname}</strong><br />
              {CLIENT.inhaber}<br />
              {CLIENT.strasse}<br />
              {CLIENT.plz} {CLIENT.ort}<br /><br />
              Telefon: {CLIENT.telefon}<br />
              E-Mail: <a href={`mailto:${CLIENT.email}`}>{CLIENT.email}</a>
            </p>
            <p>
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit
              anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen,
              E-Mail-Adressen o. Ä.) entscheidet.
            </p>

            {/* 4. Cookies */}
            <h2>4. Cookies</h2>
            <p>
              Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf
              Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung
              (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
              Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf
              Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren
              Webbrowser erfolgt.
            </p>
            <p>
              Wir setzen auf dieser Website ausschließlich technisch notwendige Cookies ein. Diese sind:
            </p>
            <ul>
              <li>
                <strong>cookiesAccepted</strong> – Speichert Ihre Bestätigung des Cookie-Hinweises.
                Speicherdauer: dauerhaft (bis zur manuellen Löschung). Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse an der fehlerfreien Darstellung der Website).
              </li>
            </ul>
            <p>
              Analytics-Cookies oder Tracking-Cookies werden auf dieser Website <strong>nicht</strong> eingesetzt.
            </p>

            {/* 5. Kontaktformular */}
            <h2>5. Kontaktformular und Anfragen</h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
              Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne
              Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
              Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
              Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem
              berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen
              (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern
              diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p>
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
              auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung
              entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen
              – insbesondere Aufbewahrungsfristen – bleiben unberührt.
            </p>

            {/* 6. Server-Log-Files */}
            <h2>6. Server-Log-Dateien</h2>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien,
              die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung
              dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
              berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website –
              hierzu müssen die Server-Log-Files erfasst werden.
            </p>

            {/* 7. Lokale Schriftarten */}
            <h2>7. Schriftarten (lokal eingebunden)</h2>
            <p>
              Diese Website verwendet Schriftarten, die lokal auf unserem Server gespeichert sind. Es findet
              dabei keine Verbindung zu Servern Dritter statt. Durch die lokale Einbindung der Schriftarten
              werden keine Daten an externe Anbieter (z. B. Google Fonts) übertragen.
            </p>

            {/* 8. Rechte */}
            <h2>8. Ihre Rechte als betroffene Person</h2>

            <h3>Auskunft, Berichtigung und Löschung</h3>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
              Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck
              der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.
            </p>

            <h3>Recht auf Einschränkung der Verarbeitung</h3>
            <p>
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              Hierzu können Sie sich jederzeit an uns wenden.
            </p>

            <h3>Recht auf Datenübertragbarkeit</h3>
            <p>
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines
              Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen,
              maschinenlesbaren Format aushändigen zu lassen.
            </p>

            <h3>Widerspruch gegen Werbe-E-Mails</h3>
            <p>
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von
              nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen.
              Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten
              Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>

            {/* 9. Aufsichtsbehörde */}
            <h2>9. Beschwerderecht bei der Aufsichtsbehörde</h2>
            <p>
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
              Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
              Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht
              unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
            </p>
            <p>
              Zuständige Datenschutzaufsichtsbehörde für dieses Angebot:<br />
              <a href={CLIENT.datenschutzBehoerdeUrl} target="_blank" rel="noopener noreferrer">
                {CLIENT.datenschutzBehoerde}
              </a>
            </p>

            {/* 10. Kontakt Datenschutz */}
            <h2>10. Kontakt für Datenschutzanfragen</h2>
            <p>
              Für Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte wenden Sie sich bitte an:<br />
              {CLIENT.firmenname}<br />
              {CLIENT.inhaber}<br />
              {CLIENT.strasse}<br />
              {CLIENT.plz} {CLIENT.ort}<br />
              E-Mail: <a href={`mailto:${CLIENT.email}`}>{CLIENT.email}</a>
            </p>

            {/* Hinweis */}
            <div className="mt-10 p-4 border border-brand-border/50 bg-brand-surface">
              <p className="text-xs text-brand-muted">
                Diese Datenschutzerklärung ist für die Website {CLIENT.website} gültig.
                Das <Link to="/impressum" className="text-brand-gold underline underline-offset-2">Impressum</Link>{' '}
                finden Sie unter dem entsprechenden Link.
              </p>
            </div>

          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
