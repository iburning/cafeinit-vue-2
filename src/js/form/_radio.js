/**
 * @fileoverview radio
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-08
 */

export default {
  name: 'ci-radio',

  props: {
    ns: String,
    name: String,
    inline: String,
    value: [String, Boolean],
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
    }
  },

  methods: {
    onChange: function (evt) {
      this.$emit('input', this.currentValue)
    },

    onClick: function () {
      this.$emit('click', this.currentValue)
    }
  }
}