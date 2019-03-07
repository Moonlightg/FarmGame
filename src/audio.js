import Vue from 'vue'

export default new Vue({
  data () {
    return {
      se: [{
        name: 'grow',
        src: 'static/audio/mgrow.mp3'
      }, {
        name: 'break',
        src: 'static/audio/break.ogg'
      }, {
        name: 'cant',
        src: 'static/audio/cant.ogg'
      }, {
        name: 'coin',
        src: 'static/audio/coin.ogg'
      }, {
        name: 'pot',
        src: 'static/audio/mpot.mp3'
      }],
      bgm: [{
        name: 'town',
        src: 'static/audio/town.ogg'
      }],
      bgs: [{
        name: 'rain',
        src: 'static/audio/mrain.mp3'
      }, {
        name: 'wind',
        src: 'static/audio/wind.ogg'
      }]
    }
  },
  created () {
    this.initSound(this.se)
  },
  methods: {
    initSound (sound) {
      sound.forEach(obj => {
        obj.$el = new Audio(obj.src)
      })
    },
    playSe (name, volume = 0.1) {
      if (volume === 0) return
      this.se.forEach(obj => {
        if (obj.name === name) {
          obj.$el.currentTime = 0
          obj.$el.oncanplaythrough = () => {
            obj.$el.play()
          }
          // obj.$el.volume = volume
        }
      })
    }
  }
})
