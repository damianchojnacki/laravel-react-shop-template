import * as Sentry from "@sentry/react";
import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";
import axios from "axios";

export default class LogService {
    static async init(sentry = true, logRocket = true) {
        const logRocketAppId = await axios.get("/api/logrocket");

        if (logRocket && logRocketAppId.status == 200) {
            LogRocket.init(logRocketAppId.data, {
                release: "alpha",
                console: {
                    isEnabled: {
                        log: false,
                        debug: false,
                        info: false,
                    },
                },
                network: {
                    requestSanitizer: (request) => {
                        if (request.headers.Authorization)
                            request.headers.Authorization = "****";

                        request.headers["X-XSRF-TOKEN"] = "****";

                        return request;
                    },
                },
            });
        }

        const sentryDsn = await axios.get("/api/sentry");

        if (sentry && sentryDsn.status == 200) {
            Sentry.init({ dsn: sentryDsn.data });
        }

        logRocket &&
            sentry &&
            logRocketAppId.status == 200 &&
            sentryDsn.status == 200 &&
            LogRocket.getSessionURL((sessionURL) => {
                Sentry.configureScope((scope) => {
                    scope.setExtra("sessionURL", sessionURL);
                });
            });

        setupLogRocketReact(LogRocket);
    }
}
