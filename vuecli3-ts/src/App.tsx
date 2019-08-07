import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
    render() {
        return(
            <div id="app">
                <router-link to="/About">About</router-link>
                <router-view></router-view>
            </div>
        ) 
    }
}