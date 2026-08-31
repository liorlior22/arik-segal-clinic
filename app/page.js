import Image from 'next/image';

const phoneDisplay = '055-459-8884';
const phoneHref = '+972554598884';
const assutaBookingHref = 'https://doctors.assuta.co.il/doctor/arik-segal-35031';

const insuranceArrangements = [
  { name: 'מכבי', className: 'maccabi' },
  { name: 'מאוחדת', className: 'meuhedet' },
  { name: 'לאומית משלים', className: 'leumit' },
  { name: 'כלל ביטוח', className: 'clal' },
];

const specialties = [
  {
    title: 'ייעוץ גסטרואנטרולוגי',
    text: 'בירור מקצועי של תסמינים, בדיקות קודמות ובניית המשך טיפול מסודר ומותאם אישית.',
  },
  {
    title: 'מחלות מעי דלקתיות',
    text: 'ייעוץ וליווי במחלות קרוהן וקוליטיס, כולל הערכת מצב והתאמת המשך בירור וטיפול.',
  },
  {
    title: 'חוות דעת נוספת',
    text: 'בחינה מסודרת של מסמכים רפואיים, בדיקות ואפשרויות טיפול לפני קבלת החלטה.',
  },
  {
    title: 'מיקרוביום ומערכת העיכול',
    text: 'ידע וניסיון קליני ומחקרי בתחומי המיקרוביום, רפואת מערכת העיכול והשתלות צואה.',
  },
];


const researchItems = [
  {
    source: 'ynet',
    title: 'תקווה לחולי קרוהן: טיפול ישראלי חדש',
    text: 'כתבה על מחקר קליני בסורוקה שבו ד״ר סגל משמש כחוקר הראשי, עם תוצאות ראשוניות מעודדות בחולי קרוהן.',
    href: 'https://www.ynet.co.il/health/article/byx6fbxg11l',
  },
  {
    source: 'סורוקה',
    title: 'מחקר קליני פורץ דרך בחולי קרוהן',
    text: 'תוצאות ביניים ממחקר חדשני שהוצגו על ידי ד״ר סגל, ובוחנות גישה טיפולית חדשה במחלת קרוהן.',
    href: 'https://www.sorokafoundation.com/article/%D7%9E%D7%97%D7%A7%D7%A8-%D7%A7%D7%9C%D7%99%D7%A0%D7%99-%D7%A4%D7%95%D7%A8%D7%A5-%D7%93%D7%A8%D7%9A-%D7%9E%D7%A6%D7%99%D7%92-%D7%AA%D7%95%D7%A6%D7%90%D7%95%D7%AA-%D7%9E%D7%A2%D7%95%D7%93%D7%93%D7%95/',
  },
  {
    source: 'PubMed',
    title: 'מיקרוביום והשתלת צואה — מחקר קליני',
    text: 'מאמר מדעי בהובלת ד״ר אריק סגל שבחן השתלת מיקרוביום צואתי כטיפול אפשרי בחולי פרקינסון.',
    href: 'https://pubmed.ncbi.nlm.nih.gov/34237681/',
  },
];

const credentials = [
  'מומחה בגסטרואנטרולוגיה',
  'מומחה ברפואה פנימית',
  'סגן מנהל מכון גסטרו בסורוקה',
  'חבר סגל קליני באוניברסיטת בן־גוריון',
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="דף הבית — ד״ר אריק סגל">
          <span className="brandName">ד״ר אריק סגל</span>
          <span className="brandSub">גסטרואנטרולוגיה</span>
        </a>

        <nav aria-label="ניווט ראשי">
          <a href="#about">אודות</a>
          <a href="#specialties">תחומי טיפול</a>
          <a href="#research">מחקר</a>
          <a href="#insurance">הסדרים</a>
          <a href="#reviews">חוות דעת</a>
          <a href="#clinic">הקליניקה</a>
        </nav>

        <a className="smallCta" href={assutaBookingHref} target="_blank" rel="noreferrer">
          זימון תור באסותא
        </a>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <div className="heroKicker"><span className="dot" /> רפואה פרטית בבאר שבע</div>
          <h1>ד״ר אריק סגל</h1>
          <p className="heroTitle">מומחה בגסטרואנטרולוגיה וברפואה פנימית</p>
          <p className="lead">
            ייעוץ פרטי מקצועי ומעמיק, עם הסתכלות רחבה על התמונה הרפואית וליווי אישי בגובה העיניים.
          </p>
          <div className="actions">
            <a className="primary" href={assutaBookingHref} target="_blank" rel="noreferrer">זימון תור דרך אסותא</a>
            <a className="secondary" href={`tel:${phoneHref}`}>שאלות כלליות {phoneDisplay}</a>
          </div>
          <div className="heroMeta">
            <div><span>קליניקה פרטית</span><strong>יצחק בן צבי 9, באר שבע</strong></div>
            <div><span>זימון תורים</span><strong>דרך מערכת אסותא בלבד</strong></div>
          </div>
        </div>

        <div className="heroVisual">
          <div className="heroImageFrame">
            <Image
              className="heroImage"
              src="/arik-procedure.png"
              alt="ד״ר אריק סגל"
              width={760}
              height={800}
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </div>
          <div className="floatingBadge">
            <span className="badgeTiny">MEDREVIEWS</span>
            <div className="ratingLine"><strong>5.0</strong><span>★★★★★</span></div>
            <small>חוות דעת מטופלים</small>
          </div>
        </div>
      </section>

      <section className="credentialsStrip" aria-label="ניסיון מקצועי">
        {credentials.map((item) => <span key={item}>{item}</span>)}
      </section>

      <section className="section specialtiesSection" id="specialties">
        <div className="sectionHead splitHead">
          <div>
            <span className="eyebrow">תחומי טיפול</span>
            <h2>רפואה מדויקת מתחילה בבירור נכון.</h2>
          </div>
          <p>
            המטרה היא להבין את התמונה המלאה, לעשות סדר במידע הקיים ולהחליט יחד על הצעד הרפואי הבא.
          </p>
        </div>

        <div className="cards">
          {specialties.map((item, index) => (
            <article className="card" key={item.title}>
              <div className="cardTop">
                <span className="cardNum">0{index + 1}</span>
                <span className="cardArrow">↗</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href={assutaBookingHref} target="_blank" rel="noreferrer">לזימון תור באסותא</a>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="portraitColumn">
          <div className="portraitWrap">
            <Image
              className="portrait"
              src="/arik-portrait.png"
              alt="ד״ר אריק סגל"
              width={440}
              height={440}
              sizes="(max-width: 900px) 70vw, 32vw"
            />
          </div>
          <blockquote>״מקצועיות רפואית צריכה להגיע יחד עם הסבר ברור ותחושת ביטחון למטופל.״</blockquote>
        </div>

        <div className="aboutCopy">
          <span className="eyebrow">אודות ד״ר סגל</span>
          <h2>ניסיון רפואי בכיר. יחס אישי.</h2>
          <p className="aboutLead">
            ד״ר אריק סגל הוא מומחה בגסטרואנטרולוגיה וברפואה פנימית, סגן מנהל מכון הגסטרואנטרולוגיה בסורוקה וחבר סגל קליני באוניברסיטת בן־גוריון.
          </p>
          <div className="factsGrid">
            <div><span>01</span><p>התמחות בגסטרואנטרולוגיה ומחלות כבד במרכז הרפואי סורוקה.</p></div>
            <div><span>02</span><p>ניסיון קליני בטיפול במחלות מעי דלקתיות ובמצבים מורכבים של מערכת העיכול.</p></div>
            <div><span>03</span><p>פעילות מחקרית בתחומי הגסטרו, המיקרוביום והשתלות צואה.</p></div>
            <div><span>04</span><p>ייעוץ פרטי המשלב מעבר יסודי על ההיסטוריה הרפואית, הבדיקות ואפשרויות הטיפול.</p></div>
          </div>
        </div>
      </section>


      <section className="research section" id="research">
        <div className="sectionHead splitHead researchHead">
          <div>
            <span className="eyebrow">מחקר, חדשנות ותקשורת</span>
            <h2>פעילות רפואית שממשיכה גם מעבר לקליניקה.</h2>
          </div>
          <p>
            ד״ר סגל פעיל במחקרים קליניים בתחומי מחלות המעי הדלקתיות והמיקרוביום, ומציג עבודות רפואיות בזירה המקצועית והציבורית.
          </p>
        </div>

        <div className="researchGrid">
          {researchItems.map((item, index) => (
            <a className="researchCard" href={item.href} target="_blank" rel="noreferrer" key={item.title}>
              <div className="researchCardTop">
                <span className="researchSource">{item.source}</span>
                <span className="researchIndex">0{index + 1}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="researchMore">לקריאה במקור ↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="insurance section" id="insurance">
        <div className="sectionHead splitHead insuranceHead">
          <div>
            <span className="eyebrow">הסדרים והחזרים</span>
            <h2>אפשרויות מימון דרך קופות וביטוחים.</h2>
          </div>
          <p>הזכאות לשירות, השתתפות עצמית או החזר נקבעת לפי תנאי הקופה או פוליסת הביטוח האישית. מומלץ לבדוק זכאות לפני קביעת התור.</p>
        </div>
        <div className="insuranceLogos" aria-label="הסדרים וקופות">
          {insuranceArrangements.map((item) => (
            <div className={`insuranceLogo ${item.className}`} key={item.name}>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <p className="insuranceNote">המידע מוצג לנוחות המטופלים ואינו מהווה התחייבות לכיסוי. ההסדר בפועל כפוף לזכאות ולתנאי הפוליסה/הקופה.</p>
      </section>

      <section className="reviewSection" id="reviews">
        <div className="reviewInner">
          <span className="eyebrow light">חוות דעת מטופלים</span>
          <div className="reviewScore"><strong>5.0</strong><span>★★★★★</span></div>
          <h2>מקצועיות, יסודיות ויחס אישי.</h2>
          <p>הדירוג המוצג מבוסס על פרופיל ד״ר אריק סגל באתר MedReviews.</p>
          <a className="reviewLink" href="https://www.medreviews.co.il/provider/dr-segal-arik" target="_blank" rel="noreferrer">
            לצפייה בחוות הדעת ב־MedReviews ←
          </a>
        </div>
      </section>

      <section className="clinic section" id="clinic">
        <div className="clinicCopy">
          <span className="eyebrow">הקליניקה הפרטית</span>
          <h2>ייעוץ פרטי בבאר שבע.</h2>
          <p>
            זימון תורים לד״ר אריק סגל מתבצע דרך מערכת זימון התורים של אסותא בלבד. הטלפון משמש לשאלות כלליות של המרפאה.
          </p>
          <div className="actions">
            <a className="primary" href={assutaBookingHref} target="_blank" rel="noreferrer">זימון תור באתר אסותא</a>
            <a className="secondary" href={`tel:${phoneHref}`}>שאלות כלליות למרפאה</a>
          </div>
        </div>
        <div className="clinicPanel">
          <div className="clinicFact"><span>כתובת</span><strong>יצחק בן צבי 9<br />באר שבע</strong></div>
          <div className="clinicFact"><span>טלפון</span><a href={`tel:${phoneHref}`}>{phoneDisplay}</a></div>
          <div className="clinicFact"><span>זימון תורים</span><strong>דרך אסותא בלבד</strong></div>
          <a className="mapLink" href="https://www.google.com/maps/search/?api=1&query=%D7%99%D7%A6%D7%97%D7%A7+%D7%91%D7%9F+%D7%A6%D7%91%D7%99+9+%D7%91%D7%90%D7%A8+%D7%A9%D7%91%D7%A2" target="_blank" rel="noreferrer">פתיחה ב־Google Maps ↗</a>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contactInner">
          <span className="eyebrow">זימון תורים</span>
          <h2>קובעים תור ישירות ביומן של אסותא.</h2>
          <p>זימון התור מתבצע אך ורק דרך מערכת זימון התורים של אסותא.</p>
          <div className="actions centered">
            <a className="primary" href={assutaBookingHref} target="_blank" rel="noreferrer">מעבר לזימון תור באסותא</a>
          </div>
        </div>
      </section>

      <footer>
        <div><strong>ד״ר אריק סגל</strong><span>מומחה בגסטרואנטרולוגיה וברפואה פנימית</span></div>
        <div className="footerRight"><span>יצחק בן צבי 9, באר שבע</span><span>{phoneDisplay}</span><small>Clinic website • v004</small></div>
      </footer>
    </main>
  );
}
