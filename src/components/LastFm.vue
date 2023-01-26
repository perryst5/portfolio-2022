<template>
  <div class="recent-tracks" v-if="lastFm.recenttracks">
    <div v-for="track in lastFm.recenttracks.track" :key="track.mbid" class="track">
      <a :href="track.url" target="_blank" v-if="!track['@attr']">
        <img :src="track.image[2]['#text']" alt="album art">
        <p><em>{{ track.name }}</em>{{ track.artist['#text'] }}</p>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">

.recent-tracks {
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .track {
    max-width: 176px;
    border: 1px solid #eee;

    a {
      display: flex;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        display: block;
        padding-top: 100%;
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(0,0,0,0), rgba(0, 0, 0, 0.8));
      }

      &:hover{
        p {
          opacity: 0;
        }
        &::before {
          background: linear-gradient(rgba(0, 0, 0, 0), rgba(0,0,0,0), rgba(0, 0, 0, 0.4));
        }
      }
    }
  }

  p {
    position: absolute;
    left: 5px;
    bottom: 5px;
    padding-right: 10px;
    font-weight: 700;
    line-height: 1.1;
    margin: 0;
    font-size: 14px;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

    em {
      display: block;
      margin-bottom: 2px;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export interface LastFm {
  recenttracks: {
    track: {
      artist: {
        '#text': string
      },
      name: string,
      url: string,
      image: {
        '#text': string
      }[],
      mbid: string,
      date: {
        uts: string
        '#text': string
      }
    }[]
  }
}

export default defineComponent({
  name: "LastFm",
  setup () {
    // Latest Tracks from Last.Fm API
    const lastFm = ref({} as LastFm);
    (async () => {
      const response = await fetch('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=dr_steveo&api_key=d78b9347c2f3f2d4490790cb780d6931&format=json&limit=9')
      lastFm.value = await response.json()
    }) ()
    return {
      lastFm
    }
  }
})
</script>
