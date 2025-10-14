// app/lib/context.ts
import {createHydrogenContext} from '@shopify/hydrogen';
import {HydrogenSession} from '~/lib/session';
import {CART_QUERY_FRAGMENT} from "~/lib/shopify/fragments/cart";

const additionalContext = {
    // Additional context for custom properties, CMS clients, 3P SDKs, etc.
} as const;

type AdditionalContextType = typeof additionalContext;

declare global {
    interface HydrogenAdditionalContext extends AdditionalContextType {}
}

export async function createHydrogenRouterContext(
    request: Request,
    env: Env,
    executionContext: ExecutionContext,
) {
    if (!env?.SESSION_SECRET) {
        throw new Error('SESSION_SECRET environment variable is not set');
    }

    const waitUntil = executionContext.waitUntil.bind(executionContext);
    const [cache, session] = await Promise.all([
        caches.open('hydrogen'),
        HydrogenSession.init(request, [env.SESSION_SECRET]),
    ]);

    const hydrogenContext = createHydrogenContext(
        {
            env,
            request,
            cache,
            waitUntil,
            session,
            i18n: {language: 'EN', country: 'US'},
            cart: {
                queryFragment: CART_QUERY_FRAGMENT,
            },
        },
        additionalContext,
    );

    return hydrogenContext;
}