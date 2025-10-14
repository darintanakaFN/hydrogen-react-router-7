import {hydrogen} from '@shopify/hydrogen/vite';
import {oxygen} from '@shopify/mini-oxygen/vite';
import {reactRouter} from '@react-router/dev/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import {defineConfig} from "vite";

export default defineConfig({
    plugins: [
        hydrogen(),
       oxygen(),
       reactRouter(),
       tsconfigPaths()
    ]
});