import type { App, DirectiveBinding } from 'vue';
declare global {
    interface Window {
        Vue?: any;
    }
}
export interface EnforceAttrsBinding {
    [key: string]: string | number | boolean;
}
declare const enforceAttrs: {
    mounted(el: HTMLElement, binding: DirectiveBinding<EnforceAttrsBinding>): void;
    updated(el: HTMLElement, binding: DirectiveBinding<EnforceAttrsBinding>): void;
};
declare const VueEnforceAttrsPlugin: {
    install(app: App): void;
};
export default VueEnforceAttrsPlugin;
export { enforceAttrs };
