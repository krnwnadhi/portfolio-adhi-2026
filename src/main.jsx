import "@mantine/core/styles.css";

import { MantineProvider, createTheme } from "@mantine/core";

import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";

const theme = createTheme({
    primaryColor: "blue",
    fontFamily:
        'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    defaultRadius: "md",
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <MantineProvider theme={theme} defaultColorScheme="dark">
            <App />
        </MantineProvider>
    </React.StrictMode>,
);
