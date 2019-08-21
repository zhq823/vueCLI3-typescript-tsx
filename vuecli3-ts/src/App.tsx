import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {

    private dataList: any[] = [{
        a: {
            b: {
                c: '七夕快乐',
            },
        },
    }, {
        a: {},
    }];

    private render() {
        const a = this.dataList.map((i) => {
            const {
                a: {
                    b: {
                        c = '',
                    } = {},
                } = {},
            } = i;
            return <span>{ c }</span>;
        });
        return(
            <div id='app'>
                <div>
                    <router-link to='/About'>{ a }</router-link>
                </div>
                <router-view></router-view>
            </div>
        );
    }
}
