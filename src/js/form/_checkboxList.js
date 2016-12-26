/**
 * @fileoverview checkbox list
 * @author: burning <www.cafeinit.com>
 * @version: 2016-12-06
 */

export default {
  name: 'ci-checkbox-list',

  props: {
    ns: String,
    title: String,
    name: String,
    value: [Array, Boolean],
    option: Object,

    options: {
      type: Array,
      default: function () {
        return []
      }
    }
  },

  data() {
    return {
      currentValue: this.value
    }
  },

  watch: {
    value(val) {
      this.currentValue = val
    },

    currentValue(val) {
      this.$emit('input', val)
    }
  }
}