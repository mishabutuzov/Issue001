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

//const container = document.getElementById("root")!;
//if (container) {
//    AppLog.verbose(container);

//    ReactDOM.render(
//        <Provider store={store}>
//            <App />
//        </Provider>
//        , container);
//}
/**
 * Used by the root app
 * @param el
 */
export const renderApp = (el: HTMLElement) => {
    if (el) {
        ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>
            , el);
    }
};
