import './modules/@webcomponents/custom-elements/src/native-shim.js';
import { defineCustomElements } from '../esm-es5/loader.js';

if (typeof defineCustomElements !== "undefined") {
    defineCustomElements(window, { resourcesUrl: '/scripts/' });
}