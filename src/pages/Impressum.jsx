import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { CLIENT } from '../config/client';
import { fadeInUp, fadeIn, staggerContainer } from '../utils/animations';

export default function Impressum() {
  return (
    <PageWrapper>
      {/* Header */}
      <div className="pt-32 pb-16 bg-brand-surface relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient opacity-30" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
            <motion.p variants={fadeIn} className="section-label mb-3">Rechtliche Informationen</motion.p>
            <motion.div variants={fadeIn}><span className="gold-divider-left" /></motion.div>
            <motion.h1 variants={fadeInUp} className="section-heading-lg">Impressum</motion.h1>
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

            {/* § 5 TMG */}
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              <strong>{CLIENT.firmenname}</strong>{CLIENT.rechtsform ? ` ${CLIENT.rechtsform}` : ''}<br />
              {CLIENT.strasse}<br />
              {CLIENT.plz} {CLIENT.ort}<br />
              {CLIENT.land}
            </p>

            {/* Vertreten durch */}
            <h2>Vertreten durch</h2>
            <p>{CLIENT.inhaber}</p>

            {/* Kontakt */}
            <h2>Kontakt</h2>
            <p>
              Telefon: <a href={`tel:${CLIENT.telefon}`}>{CLIENT.telefon}</a><br />
              E-Mail: <a href={`mailto:${CLIENT.email}`}>{CLIENT.email}</a>
            </p>

            {/* USt-ID */}
            {CLIENT.ustId && (
              <>
                <h2>Umsatzsteuer-Identifikationsnummer</h2>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  {CLIENT.ustId}
                </p>
              </>
            )}

            {/* Handelsregister */}
            {CLIENT.handelsregisternummer && CLIENT.handelsregistergericht && (
              <>
                <h2>Handelsregister</h2>
                <p>
                  Registernummer: {CLIENT.handelsregisternummer}<br />
                  Registergericht: {CLIENT.handelsregistergericht}
                </p>
              </>
            )}

            {/* Berufliche Angaben */}
            {CLIENT.berufsbezeichnung && (
              <>
                <h2>Angaben zur Berufsqualifikation</h2>
                <p>
                  Berufsbezeichnung: {CLIENT.berufsbezeichnung}<br />
                  {CLIENT.berufsaufsicht && <>Zuständige Aufsichtsbehörde: {CLIENT.berufsaufsicht}</>}
                </p>
              </>
            )}

            {/* Verantwortlich für Inhalt */}
            <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>
              {CLIENT.inhaber}<br />
              {CLIENT.strasse}<br />
              {CLIENT.plz} {CLIENT.ort}
            </p>

            {/* EU-Streitschlichtung */}
            <h2>EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>

            {/* Verbraucherstreitbeilegung */}
            <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            {/* Haftung für Inhalte */}
            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            {/* Haftung für Links */}
            <h2>Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
              verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
              einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
              derartige Links umgehend entfernen.
            </p>

            {/* Urheberrecht */}
            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
              Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
              auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
              Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>

            {/* Hinweis */}
            <div className="mt-10 p-4 border border-brand-border/50 bg-brand-surface">
              <p className="text-xs text-brand-muted">
                Weitere Informationen zum Datenschutz finden Sie in unserer{' '}
                <Link to="/datenschutz" className="text-brand-gold underline underline-offset-2">Datenschutzerklärung</Link>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
