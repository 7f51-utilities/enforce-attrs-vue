import type { App, DirectiveBinding } from 'vue';

export interface EnforceAttrsBinding {
  [key: string]: string | number | boolean;
}

const enforceAttrs = {
  mounted(el: HTMLElement, binding: DirectiveBinding<EnforceAttrsBinding>) {
    Object.entries(binding.value || {}).forEach(([key, val]) => {
      if (val !== undefined && val !== false) {
        el.setAttribute(key, val === true ? '' : String(val));
      }
    });
  },
  updated(el: HTMLElement, binding: DirectiveBinding<EnforceAttrsBinding>) {
    Object.entries(binding.value || {}).forEach(([key, val]) => {
      if (val !== undefined && val !== false) {
        el.setAttribute(key, val === true ? '' : String(val));
      }
    });
  }
};

const VueEnforceAttrsPlugin = {
  install(app: App) {
    app.directive('enforce-attrs', enforceAttrs);
  }
};

export default VueEnforceAttrsPlugin;

// Export directive for manual registration
export { enforceAttrs };

// Auto-install when loaded via script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueEnforceAttrsPlugin);
}