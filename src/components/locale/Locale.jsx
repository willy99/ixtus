import React, { useState, useEffect } from 'react';
import { append } from '../i18n/i18n';
import { icons } from "../../assets/data/constants"

const Locale = () => {
  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem('userLanguage');
    return storedLanguage || 'ua';
  });

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  useEffect(() => {
    localStorage.setItem('userLanguage', language);
    append(require(`../../localization/${language}.json`));
  }, [language]);

  return (
    <div>
      {language !== 'en' && (
        <button onClick={() => changeLanguage('en')}><img alt='' className='icon32' src={icons.flag_usa}/></button>
      )}
      {language !== 'ua' && (
        <button onClick={() => changeLanguage('ua')}><img alt='' className='icon32' src={icons.flag_ukraine}/></button>
      )}
    </div>
  );
};

export default Locale;
