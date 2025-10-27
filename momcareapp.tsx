import React, { useState, useEffect } from "react";

export default function MomCareApp() {
  const totalCheckups = 5;
  const checkupNames = [
    "1st Antenatal Visit",
    "2nd Antenatal Visit",
    "Delivery Checkup",
    "Postnatal Visit",
    "Immunization",
  ];

  // Add congratulation messages per language
  const translations = {
    english: {
      appName: "MomCare",
      tagline: "Nurturing moms and kids, one checkup at a time",
      chooseLanguage: "Please choose your language",
      english: "English",
      hindi: "Hindi",
      tamil: "Tamil",
      yourHealthcareWorker: "Your Healthcare Worker",
      name: "Name",
      phone: "Phone",
      village: "Village",
      scanQRCode: "Scan QR Code",
      checkups: "Checkups",
      progress: "Progress",
      viewBadges: "View Badges",
      listenReminder: "Listen to Reminder",
      yourBadges: "Your Badges",
      noBadges: "You have no badges yet.",
      backToHome: "Back to Home",
      toggleCheckupDone: "Mark checkup as done",
      toggleCheckupPending: "Mark checkup as pending",
      congratsMessage: "ЁЯОЙ Congratulations! All checkups are done for now!",
      close: "Close",
      changeLanguage: "Change Language",
      back: "Back",
    },
    hindi: {
      appName: "рдореЙрдордХреЗрдпрд░",
      tagline:
        "рдорд╛рдБ рдФрд░ рдмрдЪреНрдЪреЛрдВ рдХреА рджреЗрдЦрднрд╛рд▓, рдПрдХ рдЪреЗрдХрдЕрдк рдПрдХ рдмрд╛рд░ рдореЗрдВ",
      chooseLanguage:
        "рдХреГрдкрдпрд╛ рдЕрдкрдиреА рднрд╛рд╖рд╛ рдЪреБрдиреЗрдВ",
      english: "рдЕрдВрдЧреНрд░реЗрдЬрд╝реА",
      hindi: "рд╣рд┐рдиреНрджреА",
      tamil: "рддрдорд┐рд▓",
      yourHealthcareWorker:
        "рдЖрдкрдХреЗ рд╕реНрд╡рд╛рд╕реНрдереНрдп рдХрд╛рд░реНрдпрдХрд░реНрддрд╛",
      name: "рдирд╛рдо",
      phone: "рдлреЛрди",
      village: "рдЧрд╛рдБрд╡",
      scanQRCode: "QR рдХреЛрдб рд╕реНрдХреИрди рдХрд░реЗрдВ",
      checkups: "рдЪреЗрдХрдЕрдк",
      progress: "рдкреНрд░рдЧрддрд┐",
      viewBadges: "рдмреИрдЬ рджреЗрдЦреЗрдВ",
      listenReminder: "рд╕реНрдорд░рдг рд╕реБрдиреЗрдВ",
      yourBadges: "рдЖрдкрдХреЗ рдмреИрдЬ",
      noBadges:
        "рдЖрдкрдХреЗ рдкрд╛рд╕ рдЕрднреА рдХреЛрдИ рдмреИрдЬ рдирд╣реАрдВ рд╣реИред",
      backToHome: "рд╣реЛрдо рдкрд░ рд╡рд╛рдкрд╕ рдЬрд╛рдПрдВ",
      toggleCheckupDone:
        "рдЪреЗрдХрдЕрдк рдкреВрд░рд╛ рд╣реБрдЖ рдЪрд┐рдиреНрд╣рд┐рдд рдХрд░реЗрдВ",
      toggleCheckupPending:
        "рдЪреЗрдХрдЕрдк рд▓рдВрдмрд┐рдд рдЪрд┐рдиреНрд╣рд┐рдд рдХрд░реЗрдВ",
      congratsMessage:
        "ЁЯОЙ рдмрдзрд╛рдИ рд╣реЛ! рд╕рднреА рдЪреЗрдХрдЕрдк рдкреВрд░реЗ рд╣реЛ рдЪреБрдХреЗ рд╣реИрдВред",
      close: "рдмрдВрдж рдХрд░реЗрдВ",
      changeLanguage: "рднрд╛рд╖рд╛ рдмрджрд▓реЗрдВ",
      back: "рдкреАрдЫреЗ",
    },
    tamil: {
      appName: "роорпЛроорпН роХрпЗро░рпН",
      tagline:
        "родро╛ропрпНрооро╛ро░рпНроХро│рпН рооро▒рпНро▒рпБроорпН роХрпБро┤роирпНродрпИроХро│рпИ рокро░ро╛рооро░ро┐родрпНродро▓рпН, роТро╡рпНро╡рпКро░рпБ роЪрпЛродройрпИ роТройрпНро▒ро╛роХ",
      chooseLanguage:
        "родропро╡рпБроЪрпЖропрпНродрпБ роЙроЩрпНроХро│рпН роорпКро┤ро┐ропрпИродрпН родрпЗро░рпНроирпНродрпЖроЯрпБроХрпНроХро╡рпБроорпН",
      english: "роЖроЩрпНроХро┐ро▓роорпН",
      hindi: "роЗроирпНродро┐",
      tamil: "родрооро┐ро┤рпН",
      yourHealthcareWorker:
        "роЙроЩрпНроХро│рпН роЪрпБроХро╛родро╛ро░ рокрогро┐ропро╛ро│ро░рпН",
      name: "рокрпЖропро░рпН",
      phone: "родрпКро▓рпИрокрпЗроЪро┐",
      village: "роХро┐ро░ро╛роороорпН",
      scanQRCode:
        "QR роХрпБро▒ро┐ропрпАроЯрпНроЯрпИ ро╕рпНроХрпЗройрпН роЪрпЖропрпНропро╡рпБроорпН",
      checkups: "роЪрпЛродройрпИроХро│рпН",
      progress: "роорпБройрпНройрпЗро▒рпНро▒роорпН",
      viewBadges:
        "рокрпЗроЯрпНроЬрпБроХро│рпИ рокро╛ро░рпНроХрпНроХро╡рпБроорпН",
      listenReminder:
        "роиро┐ройрпИро╡рпВроЯрпНроЯро▓рпИ роХрпЗроЯрпНроХро╡рпБроорпН",
      yourBadges: "роЙроЩрпНроХро│рпН рокрпЗроЯрпНроЬрпНроХро│рпН",
      noBadges:
        "роЗрокрпНрокрпЛродрпИроХрпНроХрпБ роЙроЩрпНроХро│рпБроХрпНроХрпБ роОроирпНрод рокрпЗроЯрпНроЬрпНроХро│рпБроорпН роЗро▓рпНро▓рпИ.",
      backToHome: "роорпАрогрпНроЯрпБроорпН роорпБроХрокрпНрокрпБроХрпНроХрпБ",
      toggleCheckupDone:
        "роЪрпЛродройрпИропрпИ роорпБроЯро┐роирпНродродро╛роХ роХрпБро▒ро┐роХрпНроХро╡рпБроорпН",
      toggleCheckupPending:
        "роЪрпЛродройрпИ роиро┐ро▓рпБро╡рпИропро┐ро▓рпН роЙро│рпНро│родрпБ роОрой роХрпБро▒ро┐роХрпНроХро╡рпБроорпН",
      congratsMessage:
        "ЁЯОЙ ро╡ро╛ро┤рпНродрпНродрпБроХрпНроХро│рпН! роЕройрпИродрпНродрпБ роЪрпЛродройрпИроХро│рпБроорпН роорпБроЯро┐роирпНродрпБро╡ро┐роЯрпНроЯрой!",
      close: "роорпВроЯрпБ",
      changeLanguage: "роорпКро┤ро┐ рооро╛ро▒рпНро▒ро╡рпБроорпН",
      back: "рокро┐ройрпН",
    },
  };

  const healthcareWorker = {
    name: "Asha Devi",
    phone: "9876543210",
    village: "Kovilpatti",
  };

  const checkupDates = [
    "2024-10-01",
    "2024-11-01",
    "2024-12-15",
    "2025-01-10",
    "2025-02-20",
  ];

  const [language, setLanguage] = useState<
    "english" | "hindi" | "tamil" | null
  >(null);
  const [checkupsDone, setCheckupsDone] = useState<boolean[]>(
    new Array(totalCheckups).fill(false)
  );
  const [page, setPage] = useState<"language" | "home" | "badges">("language");
  const [showCongrats, setShowCongrats] = useState(false);

  const completedCount = checkupsDone.filter(Boolean).length;

  // Show popup when all checkups are done
  useEffect(() => {
    if (completedCount === totalCheckups && !showCongrats) {
      setShowCongrats(true);
    }
  }, [completedCount, showCongrats]);

  function toggleCheckup(index: number) {
    const newCheckups = [...checkupsDone];
    newCheckups[index] = !newCheckups[index];
    setCheckupsDone(newCheckups);
    if (showCongrats) setShowCongrats(false); // Reset popup if unchecked
  }

  function BackButton({ onClick }: { onClick: () => void }) {
    if (!language) return null;
    const t = translations[language];
    return (
      <button
        onClick={onClick}
        style={{
          background: "none",
          border: "none",
          fontSize: 18,
          cursor: "pointer",
          marginBottom: 10,
          color: "#007bff",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
        aria-label={t.changeLanguage}
      >
        тЖР {t.back}
      </button>
    );
  }

  function LanguagePage() {
    if (!language) {
      return (
        <div
          style={{
            padding: 20,
            maxWidth: 480,
            margin: "auto",
            textAlign: "center",
          }}
        >
          <h1>{translations.english.chooseLanguage}</h1>
          <div style={{ marginTop: 20 }}>
            <button
              onClick={() => {
                setLanguage("english");
                setPage("home");
              }}
              style={buttonStyle}
            >
              {translations.english.english}
            </button>
            <button
              onClick={() => {
                setLanguage("hindi");
                setPage("home");
              }}
              style={buttonStyle}
            >
              {translations.english.hindi}
            </button>
            <button
              onClick={() => {
                setLanguage("tamil");
                setPage("home");
              }}
              style={buttonStyle}
            >
              {translations.english.tamil}
            </button>
          </div>
        </div>
      );
    }
    return null;
  }

  function HomePage() {
    if (!language) return null;
    const t = translations[language];

    return (
      <div style={{ padding: 20, maxWidth: 480, margin: "auto" }}>
        <BackButton
          onClick={() => {
            setLanguage(null);
            setPage("language");
          }}
        />
        <h1
          style={{ textAlign: "center", color: "#007bff", marginBottom: 4 }}
          aria-label={t.appName}
        >
          {t.appName}
        </h1>
        <p
          style={{
            textAlign: "center",
            fontStyle: "italic",
            color: "#555",
            marginBottom: 20,
          }}
        >
          {t.tagline}
        </p>

        <div
          style={{
            backgroundColor: "#e3f2fd",
            borderRadius: 12,
            padding: 16,
            marginBottom: 20,
          }}
          aria-label={t.yourHealthcareWorker}
        >
          <strong>{t.yourHealthcareWorker}:</strong>
          <p>
            {t.name}: {healthcareWorker.name}
          </p>
          <p>
            {t.phone}: {healthcareWorker.phone}
          </p>
          <p>
            {t.village}: {healthcareWorker.village}
          </p>
        </div>

        <button
          onClick={() => alert("QR Scan feature to be implemented")}
          style={buttonStyle}
          aria-label={t.scanQRCode}
        >
          {t.scanQRCode}
        </button>

        <h2 style={{ marginBottom: 10 }}>{t.checkups}:</h2>

        {checkupNames.map((checkup, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: 8,
              borderBottom: "1px solid #ccc",
              alignItems: "center",
            }}
          >
            <div>
              <label
                htmlFor={`checkup-${i}`}
                style={{
                  cursor: "pointer",
                  color: checkupsDone[i] ? "green" : "black",
                  fontWeight: checkupsDone[i] ? "bold" : "normal",
                }}
              >
                {checkup} ({checkupDates[i]})
              </label>
            </div>
            <input
              id={`checkup-${i}`}
              type="checkbox"
              checked={checkupsDone[i]}
              onChange={() => toggleCheckup(i)}
              aria-label={
                checkupsDone[i] ? t.toggleCheckupPending : t.toggleCheckupDone
              }
              style={{ width: 20, height: 20, cursor: "pointer" }}
            />
          </div>
        ))}

        <p style={{ marginTop: 20 }}>
          {t.progress}: {completedCount} / {totalCheckups} (
          {Math.round((completedCount / totalCheckups) * 100)}%)
        </p>

        {showCongrats && (
          <div
            role="alertdialog"
            aria-live="assertive"
            style={{
              backgroundColor: "#dff0d8",
              border: "1px solid #4cae4c",
              borderRadius: 10,
              padding: 20,
              marginTop: 20,
              color: "#3c763d",
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "center",
            }}
          >
            {t.congratsMessage}
            <div>
              <button
                onClick={() => setShowCongrats(false)}
                style={{
                  marginTop: 10,
                  backgroundColor: "#4cae4c",
                  color: "white",
                  border: "none",
                  borderRadius: 5,
                  padding: "8px 16px",
                  fontSize: 16,
                  cursor: "pointer",
                }}
              >
                {t.close}
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => setPage("badges")}
          style={{ ...buttonStyle, backgroundColor: "#ff9800" }}
          aria-label={t.viewBadges}
        >
          {t.viewBadges}
        </button>

        <button
          onClick={() => alert("Voice reminder feature coming soon")}
          style={{ ...buttonStyle, backgroundColor: "#009688" }}
          aria-label={t.listenReminder}
        >
          {t.listenReminder}
        </button>
      </div>
    );
  }

  function BadgesPage() {
    if (!language) return null;
    const t = translations[language];
    const badgesEarned = completedCount; // One badge per checkup done
    return (
      <div style={{ padding: 20, maxWidth: 480, margin: "auto" }}>
        <BackButton onClick={() => setPage("home")} />

        <h1 style={{ textAlign: "center", marginBottom: 20 }}>
          {t.yourBadges}
        </h1>

        {badgesEarned === 0 ? (
          <p style={{ textAlign: "center", fontStyle: "italic" }}>
            {t.noBadges}
          </p>
        ) : (
          <ul>
            {Array.from({ length: badgesEarned }).map((_, i) => (
              <li
                key={i}
                style={{
                  marginBottom: 10,
                  fontWeight: "bold",
                  color: "#4caf50",
                }}
              >
                {t.checkups} {i + 1} тЬЕ
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={() => setPage("home")}
          style={buttonStyle}
          aria-label={t.backToHome}
        >
          {t.backToHome}
        </button>
      </div>
    );
  }

  const buttonStyle: React.CSSProperties = {
    padding: "10px 16px",
    fontSize: 16,
    margin: "6px 8px",
    cursor: "pointer",
    borderRadius: 6,
    border: "1px solid #007bff",
    backgroundColor: "#007bff",
    color: "white",
    minWidth: 120,
  };

  // Main render logic
  if (page === "language") return <LanguagePage />;
  if (page === "home") return <HomePage />;
  if (page === "badges") return <BadgesPage />;

  return null;
}
