import React from 'react';
import * as ReactDOM from "react-dom";

import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { mergeStyles } from '@fluentui/react';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./components/App/App";
import { AppLog } from "./utils";

// Required to use msIcons
initializeIcons();
// Inject some global styles
mergeStyles({
    ':global(*)': {
        boxSizing: 'border-box'
    },
    ':global(html)': {
        fontSize: 'calc(1em * .625)',
        height: '100%'
    },
    ':global(body,#root)': {
        margin: 0,
        padding: 0,
        height: '100vh',
    },
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
