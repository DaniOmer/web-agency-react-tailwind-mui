import React from "react";
import i18next from "i18next";
import { useSelector } from "react-redux";

import RequestForm from "../RequestForm/RequestForm";

const ContactRequest = () => {
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );

  return (
    <section className="w-11/12 max-w-6xl mx-auto flex flex-col items-center gap-2 text-center m-0">
      <h1>{i18next.t("with", { lng: currentLanguage })}</h1>
      <h2 className="text-2xl md:text-4xl">
        {i18next.t("start", { lng: currentLanguage })}
      </h2>
      <p className="text-sm">
        {i18next.t("collaborate", { lng: currentLanguage })}
      </p>
      <RequestForm
        action=""
        placeholder={i18next.t("typeEmail", { lng: currentLanguage })}
        buttonValue={i18next.t("started", { lng: currentLanguage })}
      />
    </section>
  );
};
export default ContactRequest;
