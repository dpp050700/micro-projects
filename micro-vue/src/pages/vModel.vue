<!-- <template>
  <h2>v-bind</h2>
</template> -->

<script>
import { h } from 'vue'
export default {
  name: 'VModel',
  // template: '<div>v-bind</div>',
  mounted() {
    // alert(22)
  },
  methods: {
    test() {
      alert(1)
    }
  },
  render() {
    return h('div', { onClick: this.test }, 'v-model')
  }
}
</script>
