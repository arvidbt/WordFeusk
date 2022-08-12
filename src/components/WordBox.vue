<template>
  <p class="list-titles" v-if="this.showBox">DET FINNS <span style="color: #F1C40F;">{{ this.list.length }}</span> ORD MED {{ this.title }} BOKSTÄVER.</p>
  <div v-if="this.showBox" class="list-container">
    <h3 v-for="(word, index) in this.list" :key="index" class="word-text">
      <div @click="linkTo(word)" class="word-container">
        {{ word[0] }}  <span class="point-text">{{ word[1] }}p</span>
      </div>
    </h3>
  </div>
</template>

<style>
  .point-text {
    color: #F1C40F; 
    font-size: 12px;
  }
</style>

<script>

export default {
  name: 'WordBox',
  props: ['title', 'showBox', 'list'],
  methods: {
    linkTo(word) {
      const link = "https://synonymer.se/sv-syn/" + word[0];
      window.open(link, '_blank').focus();
    },
  }
}
</script>