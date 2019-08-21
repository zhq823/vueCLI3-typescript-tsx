import { Component, Vue } from 'vue-property-decorator';

@Component
export default class EmptyLayout extends Vue {
  render() {
    return <router-view />;
  }
}
