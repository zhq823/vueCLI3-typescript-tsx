
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {

    private render() {
        return(
            <div>
                <hello-world msg='Welcome to Your Vue.js + TypeScript App'/>
            </div>
        );
    }
}
