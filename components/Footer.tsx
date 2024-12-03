"use client";
import { useState, useEffect } from "react";

const Footer = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="pb-8">
      <p className="text-blue-40 text-400">© {year} by Carmen Shi</p>
    </footer>
  );
};

export default Footer;
