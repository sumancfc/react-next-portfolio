import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import I18nProvider from "../../components/I18nProvider";
import i18n from "../../lib/i18n";

describe("I18nProvider component", () => {
  afterEach(async () => {
    document.cookie = "lang=; path=/; max-age=0";
    await i18n.changeLanguage("de");
  });

  test("renders its children", () => {
    render(
      <I18nProvider>
        <p>Hello</p>
      </I18nProvider>
    );
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  test("sets <html lang> to i18n's current language on mount", async () => {
    render(
      <I18nProvider>
        <p>Hello</p>
      </I18nProvider>
    );

    await waitFor(() =>
      expect(document.documentElement.lang).toBe(i18n.language)
    );
  });

  test("adopts a language persisted in the 'lang' cookie", async () => {
    document.cookie = "lang=en; path=/; max-age=31536000";

    render(
      <I18nProvider>
        <p>Hello</p>
      </I18nProvider>
    );

    await waitFor(() => expect(i18n.language).toBe("en"));
    expect(document.documentElement.lang).toBe("en");
  });
});
