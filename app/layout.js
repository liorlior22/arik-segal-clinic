import './globals.css';
import './patch.css';
import './floating-contact.css';

export const metadata = {
  title: 'ד״ר אריק סגל | מומחה בגסטרואנטרולוגיה בבאר שבע',
  description: 'הקליניקה הפרטית של ד״ר אריק סגל, מומחה בגסטרואנטרולוגיה וברפואה פנימית. יצחק בן צבי 9, באר שבע.',
};

function FloatingContact() {
  return (
    <div className="floatingContact" aria-label="יצירת קשר מהירה">
      <a className="whatsapp" href="https://wa.me/972534808852" target="_blank" rel="noreferrer" aria-label="WhatsApp למרפאה" title="WhatsApp">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-5.1A8.5 8.5 0 1 1 21 11.5Z" />
          <path d="M8.7 8.2c.3-.4.7-.4 1-.1l1 1.4c.2.3.2.6 0 .9l-.7.9c.8 1.4 1.9 2.5 3.4 3.2l.8-.8c.3-.3.6-.3.9-.1l1.5.9c.3.2.4.6.2.9-.4.8-1.2 1.3-2.1 1.3-3.5-.1-7.6-4.1-7.8-7.2 0-.5.3-1 .8-1.3Z" />
        </svg>
      </a>
      <a href="tel:+972554598884" aria-label="התקשרות למרפאה" title="טלפון">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M7.2 3.8 5.6 5.4c-.9.9-.7 3 .4 5.2 1.7 3.3 4.4 6 7.7 7.7 2.2 1.1 4.3 1.3 5.2.4l1.6-1.6c.4-.4.4-1 0-1.4l-3-2.3c-.4-.3-.9-.3-1.3.1l-1.2 1.2c-1.8-.9-3.4-2.5-4.3-4.3l1.2-1.2c.4-.4.4-.9.1-1.3l-2.3-3c-.4-.5-1.1-.5-1.5-.1Z" />
        </svg>
      </a>
      <span className="floatingDisabled" aria-label="מייל - יעודכן בקרוב" title="מייל">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      </span>
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
