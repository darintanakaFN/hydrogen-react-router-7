import {
    Session,
    SessionStorage,
    createCookieSessionStorage,
} from 'react-router';

import type { HydrogenSession as IHydrogenSession } from '@shopify/hydrogen';

/**
 * This is a custom session implementation for your Hydrogen shop.
 * Feel free to customize it to your needs, add helper methods, or
 * swap out the cookie-based implementation with something else!
 */
export class HydrogenSession implements IHydrogenSession {
    public isPending = false;
    #sessionStorage;
    #session;

    constructor(sessionStorage: SessionStorage, session: Session) {
        this.#sessionStorage = sessionStorage;
        this.#session = session;
    }

    static async init(
        request: Request,
        secrets: string[],
        cookieName = 'session',
        customerAccessToken?: string,
        expiresAtDate?: string,
    ) {
        const storage = createCookieSessionStorage({
            cookie: {
                name: cookieName,
                httpOnly: true,
                path: '/',
                sameSite: 'lax',
                secrets,
                maxAge: 60 * 60 * 24 * 15,
            },
        });

        const cookies = request.headers.get('Cookie');
        const session = await storage.getSession(cookies);

        if (customerAccessToken && expiresAtDate) {
            session.set('customerAccessToken', {
                accessToken: customerAccessToken,
                expiresAt: expiresAtDate,
            });
        }

        return new this(storage, session);
    }

    get has() {
        return this.#session.has;
    }

    get get() {
        return this.#session.get;
    }

    get flash() {
        this.isPending = true;
        return this.#session.flash;
    }

    get unset() {
        this.isPending = true;
        return this.#session.unset;
    }

    get set() {
        this.isPending = true;
        return this.#session.set;
    }

    destroy() {
        return this.#sessionStorage.destroySession(this.#session);
    }

    commit() {
        this.isPending = false;
        return this.#sessionStorage.commitSession(this.#session);
    }
}
