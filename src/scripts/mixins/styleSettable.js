export default {
  data: function() {
    return {
      style: {
        opacity: 0,
      },
    }
  },

  methods: {
    setStyle() {
      if (!this.$refs.self) return
      const targetRect = this.$refs.self.getBoundingClientRect()
      const displayTopRate = (window.innerHeight - targetRect.top) / window.innerHeight

      if (0 <= displayTopRate && displayTopRate <= 0.5) {
        this.style.opacity = displayTopRate * 2
        // } else if (1.5 <= displayRate) {
        //   this.style.opacity = 2 - (displayRate - 1) * 2
      } else {
        this.style.opacity = 1
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.setStyle, false)
  },
}
