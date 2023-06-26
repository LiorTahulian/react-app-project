import { FooterNav } from "./footerNav";

export const Footer = () => {
  return (
    <footer className="border-top py-0 text-center">
      <FooterNav />
      <p style={{ fontSize: "12px" }}>
        <span>
          RUN<i className="bi bi-4-circle"></i>U
        </span>
        <span className="mx-2">&copy;</span>
        <span>{new Date().getFullYear()}</span>
      </p>
    </footer>
  );
};
