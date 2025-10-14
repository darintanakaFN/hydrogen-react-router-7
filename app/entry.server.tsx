// app/entry.server.tsx
import {EntryContext, ServerRouter} from "react-router";
import {
    createContentSecurityPolicy,
 type HydrogenRouterContextProvider,
} from "@shopify/hydrogen";
import {renderToReadableStream} from "react-dom/server";

export default async function handleRequest(
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
     reactRouterContext: EntryContext,
     context: HydrogenRouterContextProvider,
) {
    const {nonce, header, NonceProvider} = createContentSecurityPolicy();

    const body = await renderToReadableStream(
        <NonceProvider>
            <ServerRouter
                context={reactRouterContext}
                url={request.url}
                nonce={nonce}
            />
        </NonceProvider>,
    );

    return new Response(body, {
        headers: responseHeaders,
        status: responseStatusCode,
    });
}