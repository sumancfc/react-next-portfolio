import { persistLanguagePreference } from "../../lib/languagePreference";

describe("persistLanguagePreference", () => {
  afterEach(() => {
    document.cookie = "lang=; path=/; max-age=0";
  });

  test("writes a 'lang' cookie with a one-year max-age", () => {
    persistLanguagePreference("en");
    expect(document.cookie).toContain("lang=en");
  });

  test("overwrites a previously persisted language", () => {
    persistLanguagePreference("en");
    persistLanguagePreference("de");
    expect(document.cookie).toContain("lang=de");
    expect(document.cookie).not.toContain("lang=en");
  });
});
