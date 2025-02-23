import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.navSection}>
          <div className="logo">
            <Image
            src="./logo.png"
            width={220}
            height={36}
            alt="Logo Positivus"
            />
          </div>
          <ul>
            <li>About us</li>
            <li>Services</li>
            <li>Use Cases</li>
            <li>Pricing</li>
            <li>Blog</li>
            <div className={styles.ctas}>
          <a
            className={styles.quote}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Request a quote
          </a>
        </div>
          </ul>
        </section>
        <section className={styles.contentSection}>
          <div className={styles.hero}>
            <h1>
              Navigating the digital landscape for success
            </h1>
            <div className={styles.illustration}>
          <Image
            src="./illustration.png"
            width={601}
            height={515}
            alt="Logo Positivus"
            />
          </div>
            <p style={{marginBottom:30}}>Our digital marketing agency helps businesses 
              grow and succeed online through a range of 
              services including SEO, PPC, social media marketing, 
              and content creation.</p>
              <div className={styles.ctas}>
          <a
            className={styles.quote}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a consultation
          </a>
        </div>
          </div>

        </section>
      </main>
          <div className={styles.logotypes}>
            <Image
            src="/logotypes.png"
            width={1440}
            height={48}
            alt="Logos Parceiros"
            />
          </div>
      <footer className={styles.footer}>
        <p>Mantido por &copy;Yuri Oliveira</p>
      </footer>
    </div>
  );
}
