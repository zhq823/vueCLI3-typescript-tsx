import { Component, Prop, Vue } from 'vue-property-decorator';

import styles from './hello-world.module.scss';

@Component
export default class HelloWorld extends Vue {
    @Prop() private msg!: string;

    private render() {
        return (
            <div class='hello'>
			    <h1 class={styles.h1}>{ this.msg }</h1>
			</div>
        );
    }
}
