// server.ts
import {createRequestHandler} from "@shopify/hydrogen/oxygen";
import {createHydrogenRouterContext} from "~/lib/context";

export default {
    async fetch(request: Request, env: Env, executionContext: ExecutionContext): Promise<Response> {
           const hydrogenContext = await createHydrogenRouterContext(
                 request,
                 env,
                 executionContext,
              );

        const handleRequest = createRequestHandler({
            // @ts-ignore
            build: await import('virtual:react-router/server-build'),
            mode: process.env.NODE_ENV,
            getLoadContext: () => hydrogenContext,
        });

        const response = await handleRequest(request);

       if (hydrogenContext.session.isPending) {
         response.headers.set('Set-Cookie', await hydrogenContext.session.commit());
       }

        return response;
    }
};