import axios from "axios";
import React, { useEffect, useState } from "react";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");

  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);
  useEffect(() => {
    const getTranslatedText = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };

    getTranslatedText();
  }, [language, debouncedText]);
  return <div>{translated}</div>;
};

export default Convert;
