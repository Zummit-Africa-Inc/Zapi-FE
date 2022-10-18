import "./init"
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./index.css";
import { store } from "./redux/store";
import { ContextProvider } from "./contexts/ContextProvider";
import { Amplify } from "aws-amplify";

Amplify.configure({
  API: {
    endpoints: [
      {
        name: "VITE_IDENTITY_URL",
        endpoint: "https://identity.zapi.ai/api/v1",
      },
      {
        name: "VITE_AI_URL",
        endpoint:
          "https://qnanswer-api.pk25mf6178910.eu-west-3.cs.amazonlightsail.com/q_and_a",
      },
      {
        name: "VITE_SOCKET_URL",
        endpoint: "https://notification.zapi.ai/api/v1",
      },
      {
        name: "VITE_CORE_URL",
        endpoint: "https://core.zapi.ai/api/v1",
      },
    ],
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ContextProvider>
          <App />
        </ContextProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);
