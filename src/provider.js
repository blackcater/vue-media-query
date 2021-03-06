import json2mq from 'json2mq'
import responsive from './responsive'
import {isObject} from './util'

const DEFAULT_NAME = '__default__'

const MediaQueryProvider = {
  name: 'media-query-provider',

  props: {
    query: {
      type: Object,
      default: () => responsive
    }
  },

  data() {
    const keys = Object.keys(this.query)
    const matches = {}
    const mediaQueries = {}
    const defaultMatches = {}

    if (keys.every(key => isObject(this.query[key]))) {
      keys.forEach(key => {
        matches[key] = false
        mediaQueries[key] = json2mq(this.query[key])
      })
    } else {
      matches[DEFAULT_NAME] = false
      mediaQueries[DEFAULT_NAME] = json2mq(this.query)
      defaultMatches[DEFAULT_NAME] = {}
    }

    return {
      matches: {...matches, ...defaultMatches},
      mediaQueries,
      medias: {}
    }
  },

  provide() {
    return {
      media: this.matches
    }
  },

  mounted() {
    if (typeof window === 'undefined') {
      return false
    }

    this.addMediaQueryListeners()
  },

  beforeDestroy() {
    this.removeMediaQueryListeners()
  },

  render() {
    if (this.$slots.default && this.$slots.default.length > 0) {
      return this.$slots.default[0]
    }
  },

  methods: {
    addMediaQueryListeners() {
      Object.keys(this.mediaQueries).forEach(key => {
        const mediaQuery = this.mediaQueries[key]

        this.medias[key] = window.matchMedia(mediaQuery)

        this.updateMatches(key, this.medias[key].matches)

        this.medias[key].onchange = media =>
          this.updateMatches(key, media.matches)
      })
    },

    removeMediaQueryListeners() {
      Object.keys(this.mediaQueries).forEach(key => {
        this.medias[key].onchange = null
      })
    },

    updateMatches(key, matches) {
      if (this.matches[key] === matches) {
        return
      }

      this.matches[key] = matches
    }
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(MediaQueryProvider.name, MediaQueryProvider)
}

export default MediaQueryProvider
