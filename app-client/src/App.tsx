import { useTranslation } from "react-i18next";
import React from "react";

function App() {
  const { t } = useTranslation("");

  return (
    <div className="App">
      <header className="App-header">{t("lms")}</header>
    </div>
  );
}

export default App;
