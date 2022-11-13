export namespace AppLog {
    enum LogLevel {
        Verbose = 1,
        Info,
        Warning,
        Error
    }

    const timeFormat: Intl.DateTimeFormatOptions = {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };

    const AppName = "CALENDAR-WEB";

    function log(logLevel: LogLevel, message: any[]) {
        if (/*!Virto.IsMobile && */console) {
            const d = new Date();
            const ms = (1000 + d.getMilliseconds()).toString().substring(1);
            const params = [`[${d.toLocaleTimeString([], timeFormat)}.${ms}][VS][${AppName}]`, ...message];
            // The real initiator
            try {
                const err = new Error();
                if (err.stack) {
                    const caller = err.stack.split('\n')[3].trim();
                    params.push(caller);
                }
            } catch (e) {
                // It fail on mobiles
            }

            switch (logLevel) {
                case LogLevel.Verbose:
                    console.log(...params);
                    break;
                case LogLevel.Info:
                    console.info(...params);
                    break;
                case LogLevel.Warning:
                    console.warn(...params);
                    break;
                case LogLevel.Error:
                    console.error(...params);
                    break;
            }
        }
    }

    export function verbose(...message: any[]) {
        log(LogLevel.Verbose, message);
    }
    /**
     * Logs a general informational message.
     * @param   message - the message to be logged
     *          If the message's length is more than 100, only the first 100 characters are kept.
     */
    export function info(...message: any[]) {
        log(LogLevel.Info, message);
    }
    /**
     * Logs a warning.
     * @param   message - the message to be logged
     *          If the message's length is more than 100, only the first 100 characters are kept.
     */
    export function warn(...message: any[]) {
        log(LogLevel.Warning, message);
    }
    /**
     * Logs an error.
     * @param   error - the error to be logged
     */
    export function error(...message: any[]) {
        log(LogLevel.Error, message);
    }

}