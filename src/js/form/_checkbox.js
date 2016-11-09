/**
 * @fileoverview form checkbox
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-08
 */

export default {
  name: 'ci-checkbox',

  props: {
    ns: String,
    title: String,
    titleWidth: String,
    name: String,
    inline: String,

    items: {
      type: Array,
      default: function () {
        return []
      },
      required: true
    },

    value: {
      type: Array,
      default: function () {
        return []
      }
    }
  },

  data() {
    return {
      model: this.value
    }
  },

  watch: {
    value(val) {
      this.model = this.value
    }
  },

  methods: {
    onChange: function (evt) {
      this.$emit('input', this.model)
    }
  }
}
