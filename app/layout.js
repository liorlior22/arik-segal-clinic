import './globals.css';

export const metadata = {
  title: 'ד״ר אריק סגל | מומחה בגסטרואנטרולוגיה בבאר שבע',
  description: 'הקליניקה הפרטית של ד״ר אריק סגל, מומחה בגסטרואנטרולוגיה וברפואה פנימית. יצחק בן צבי 9, באר שבע.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
