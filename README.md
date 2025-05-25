# Vue Enforce Attrs

A Vue 3 directive that enforces HTML attributes on elements, preventing tampering via developer tools.

## Installation

```bash
npm install vue-enforce-attrs
```

## Usage

### As a Plugin (Global Registration)

```typescript
import { createApp } from 'vue';
import VueEnforceAttrs from 'vue-enforce-attrs';

const app = createApp(App);
app.use(VueEnforceAttrs);
```

### Manual Registration

```typescript
import { enforceAttrs } from 'vue-enforce-attrs';

app.directive('enforce-attrs', enforceAttrs);
```

### In Templates

```vue
<input 
  v-model="value"
  v-enforce-attrs="{ required: true, maxlength: 50, pattern: '[A-Za-z]+' }"
/>
```

## TypeScript Support

Full TypeScript support included with type definitions.