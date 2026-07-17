"use client";
import { useTranslation } from "react-i18next";
import getYearsOfExperience from "../lib/getYearsOfExperience";

const STACK = ["React", "TypeScript", "Node.js", "Docker"];

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const yearsOfExperience = getYearsOfExperience();

  return (
    <div className='hero-wrapper'>
      {/* Badge — availability status */}
      <div className='hero-badge'>
        <span className='hero-badge-dot' />
        {t("open_to_work")}
      </div>

      {/* Greeting, styled as a code comment */}
      <p className='hero-code-comment'>{"// "}{t("greeting")}</p>

      {/* Name + details, styled as a multi-variable code declaration.
          The visual code syntax is decorative — screen readers get a
          plain-language equivalent instead of raw punctuation. */}
      <h1 className='hero-code-block'>
        <span className='sr-only'>
          {t("name")}, {t("role")}, {t("location_value")}, {yearsOfExperience}+
          {" "}
          {t("label_experience")}, {t("open_to_work")}.
        </span>
        <span className='code-row' aria-hidden='true'>
          <span className='code-keyword'>const</span>{" "}
          <span className='code-var'>name</span>{" "}
          <span className='code-op'>=</span>{" "}
          <span className='code-string'>
            {'"'}<span className='hero-name-accent'>{t("name")}</span>{'"'}
          </span>
          <span className='code-op'>,</span>
        </span>

        <span className='code-row code-row-indent' aria-hidden='true'>
          <span className='code-var'>role</span>{" "}
          <span className='code-op'>=</span>{" "}
          <span className='code-string'>{'"'}{t("role")}{'"'}</span>
          <span className='code-op'>,</span>
        </span>

        <span className='code-row code-row-indent' aria-hidden='true'>
          <span className='code-var'>location</span>{" "}
          <span className='code-op'>=</span>{" "}
          <span className='code-string'>{'"'}{t("location_value")}{'"'}</span>
          <span className='code-op'>,</span>
        </span>

        <span className='code-row code-row-indent' aria-hidden='true'>
          <span className='code-var'>experience</span>{" "}
          <span className='code-op'>=</span>{" "}
          <span className='code-string'>{`"${yearsOfExperience}+ years"`}</span>
          <span className='code-op'>,</span>
        </span>

        <span className='code-row code-row-indent' aria-hidden='true'>
          <span className='code-var'>stack</span>{" "}
          <span className='code-op'>=</span>{" "}
          <span className='code-op'>[</span>
          {STACK.map((item, index) => (
            <span key={item}>
              <span className='code-string'>{'"'}{item}{'"'}</span>
              {index < STACK.length - 1 && <span className='code-op'>, </span>}
            </span>
          ))}
          <span className='code-op'>]</span>
          <span className='code-op'>,</span>
        </span>

        <span className='code-row code-row-indent' aria-hidden='true'>
          <span className='code-var'>hireable</span>{" "}
          <span className='code-op'>=</span>{" "}
          <span className='code-boolean'>true</span>
          <span className='code-op'>;</span>
          <span className='code-cursor' aria-hidden='true' />
        </span>
      </h1>
    </div>
  );
};

export default Hero;
