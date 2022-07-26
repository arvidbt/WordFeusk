<!-- eslint-disable no-unused-vars -->
<template>
  <h1>Is it a word?</h1>
  <!-- <p>Message is: {{ message }}</p> -->

  <input v-model="message" placeholder="Enter word.." />
  <button @click="getWords()">Run the search!</button>
  <div v-if="this.isAWord">
    <h1>yay! that is a word!</h1>

  </div>
  <div v-else>
    <h1>Nay! That's not a word!</h1>
  </div>
</template>

<script>
export default {
  name: 'App',

  mounted() {
    this.loadSAOLDictionary();
  },
  data() {
    return {
      message: '',
      eligableWords: null,
      maxWordLength: 0,
      isAWord: false,
    }
  },
  methods:  {
    calculateWordPoints() {

    },
    wordStartsWith() {

    },
    wordEndsWith() {

    },

    getWordsContainingLetters() {
      let filtered_words = this.eligableWords;
      for (const i in this.message) {
        filtered_words = filtered_words.filter(word => word.includes(this.message[i]));
      }
      for (const i in filtered_words) {
        let remove_index = 0;
        for (const j in filtered_words[i]) {
          // console.log(filtered_words[i][j])
          if(!filtered_words[i].includes(filtered_words[i][j])) {
            remove_index = i;
            console.log(remove_index)
          }
        }
        filtered_words.splice(remove_index, 1)
      }

      console.log(filtered_words);
    },

    checkIfWord() {
      this.isAWord = this.eligableWords.includes(this.message);
    },

    async loadSAOLDictionary() {
      this.eligableWords = await require('../wordlist.json');      
    },
    getMaxWordLength() {
      return this.message.length;
    },
    getWords() {
      if(!this.message) {
        return;
      }
      this.maxWordLength = this.getMaxWordLength();

      this.eligableWords = this.eligableWords.filter(word => word.length <= this.maxWordLength);
      this.checkIfWord();
      this.getWordsContainingLetters();
      this.eligableWords = this.loadSAOLDictionary();

    },
  },
}
</script>

<style>

</style>
