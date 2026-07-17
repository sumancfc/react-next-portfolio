'use client';

import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../lib/i18n';

interface I18nProviderProps {
    children: React.ReactNode;
}

const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
    useEffect(() => {
        const updateHtmlLang = (lng: string) => {
            document.documentElement.lang = lng;
        };

        // Adopt whatever language was persisted in the cookie (set by
        // FloatingContact's language switcher) so a returning visitor's
        // client-side UI matches the server-rendered metadata instead of
        // always restarting from i18n's hardcoded default.
        const cookieLang = document.cookie
            .split('; ')
            .find((row) => row.startsWith('lang='))
            ?.split('=')[1];
        if (cookieLang && cookieLang !== i18n.language) {
            i18n.changeLanguage(cookieLang);
        }

        updateHtmlLang(i18n.language);
        i18n.on('languageChanged', updateHtmlLang);

        return () => {
            i18n.off('languageChanged', updateHtmlLang);
        };
    }, []);

    return (
        <I18nextProvider i18n={i18n}>
            {children}
        </I18nextProvider>
    );
};

export default I18nProvider;
