# 开发指南

当前项目使用 Vue CLI 创建

语言：Typescript

组件库：Ant Design of Vue

## Ant Design 组件引入

在 `client/src/plugins/ant-design-vue.ts` 中注册所使用的组件，如果组件存在子组件也需要一并组册，以 `Menu` 组件为例：

```
import Vue from 'vue';
import { Menu } from 'ant-design-vue';
Vue.component(Menu.name, Menu);
Vue.component(Menu.Item.name, Menu.Item);
Vue.component(Menu.SubMenu.name, Menu.SubMenu);
```

## 如何使用 Typescript 编写 Vue 组件

### 1. data

可以和 Angular 一样，通过类中的一个属性来轻松使用

```typescript
@Component
export default class App extends Vue {
  title: string;
}
```

### 2. props

用于组件交互的对外属性可以通过 `@Prop` 声明，类似于 Angular 的 `@Input`

```typescript
@Component
export default class App extends Vue {
  @Prop() collapsed: boolean;
}
```

### 3. methods

方法的使用也可以和 Angular 一致

```typescript
@Component
export default class App extends Vue {
  onClick() {
    // todo
  }
}
```

### 4. 属性监听

通过 `@Watch` 可以对属性进行监听

```typescript
@Component
export default class App extends Vue {
  @Watch('collapsed') onChange(value: boolean, oldValue: boolean) {
    // todo
  }
}
```

### 5. 发射事件

通过 `@Emit` 可以将时间发射给父组件

```typescript
@Component
export default class App extends Vue {
  @Emit('collapseChanged') emitChange() {
    // todo
  }
}
```

## CSS Modules

由于采用了 `tsx` 编写 Vue，样式无法使用 `scoped`，采用 CSS Modules 作为替代方案

### 文件命名

我们不通过修改 `vue.config.js` 来配置 CSS Modules，而是通过文件名规则 `*.module.less` 来让 CLI 为我们开启 CSS Modules

样式推荐使用 `<组件名>.module.less` 命名，例如 `home.module.less`

### 样式类的编写和使用

**css**

```css
.home {
  color: #fff;
}
```

**tsx**

```typescript
import styles from './home.module.less';
```

**template**

```tsx
<div class={styles.home} />
```

注意，less 下类名可以嵌套，但是 css modules 名称不会嵌套

例如下方的写法，依然只需要使用 `styles.inner` 即可

```less
.home {
  color: #fff;

  .inner {
    color: #000;
  }
}
```

### 为什么不打开 CSS Modules 配置？

一旦配置打开，所有 css 都会被加入 modules，会导致三方类库样式失效
