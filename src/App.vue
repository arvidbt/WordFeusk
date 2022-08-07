<!-- eslint-disable no-unused-vars -->
<template>
<div class="wrapper">

  <div class="title-container">
    <h1 class="title-text">WordFeusk</h1>
    <img @click="toggleAdvancedMode()" class="search-button" src="https://img.icons8.com/material-outlined/24/FFFFFF/advanced-search.png"/>
    <p class="help-text" style="margin-left: 5px; color: #F1C40F;"> BETA</p>
  <!-- <button @click="toggleAdvancedMode()" class="search-button">Advancerad Version</button> -->
    <!-- <p class="help-text">Skriv in dina bokstäver i sökrutan nedan och se vilka ord du kan skapa.</p> -->
  </div>
  <div class="footer-container">
    <!-- <p class="help-text">Skriv in dina bokstäver i sökrutan och se vilka ord du kan skapa. <br>(? för blanka rutor).</p> -->
    <input autocomplete="off" v-show="this.showAdvanced" type="text" id="begin-input" class="adv-search-box" style="margin-left: 15px;" v-model="beginsWith" placeholder="BÖRJAR MED"/>
    <input autocomplete="off" type="text" id="letter-input" class="search-box" v-model="message" placeholder="DINA BOKSTÄVER.."/>
    <input autocomplete="off" v-show="this.showAdvanced" type="text" id="end-input" class="adv-search-box" style="margin-right: 15px;"  v-model="endWith" placeholder="SLUTAR MED"/>
  </div>
  <div class="background-container" id="bck-grd">
    <!-- <button class="search-button" @click="this.toggleShowPoints()">Klicka för se poäng för orden.</button> -->
    <div style="margin-top: 15px;">
      <p class="list-titles" v-if="this.eight_or_more_letter_words.length > 0">Det finns {{ this.eight_or_more_letter_words.length }} ord med 8+ bokstäver.</p>
      <div v-if="this.eight_or_more_letter_words.length > 0" class="list-container">
        <h3 v-for="(word, index) in this.eight_or_more_letter_words" :key="index" class="word-text">
          <div @click="linkTo(word)" class="word-container">{{ word[0] }}  <span v-if="this.showPoints" style="color: #F1C40F; font-size: 12px;">{{ word[1] }}p</span></div>
        </h3>
      </div>

      <p class="list-titles" v-if="this.seven_letter_words.length > 0">Det finns {{ this.seven_letter_words.length }} ord med 7 bokstäver.</p>
      <div v-if="this.seven_letter_words.length > 0" class="list-container">
        <h3 v-for="(word, index) in this.seven_letter_words" :key="index" class="word-text">
          <div @click="linkTo(word)" class="word-container">{{ word[0] }}  <span v-if="this.showPoints" style="color: #F1C40F; font-size: 12px;">{{ word[1] }}p</span></div>
        </h3>
      </div>

      <p class="list-titles" v-if="this.six_letter_words.length > 0">Det finns {{ this.six_letter_words.length }} ord med 6 bokstäver.</p>
      <div v-if="this.six_letter_words.length > 0" class="list-container">
        <h3 v-for="(word, index) in this.six_letter_words" :key="index" class="word-text">
          <div @click="linkTo(word)" class="word-container">{{ word[0] }}  <span v-if="this.showPoints" style="color: #F1C40F; font-size: 12px;">{{ word[1] }}p</span></div>
        </h3>
      </div>

      <p class="list-titles" v-if="this.five_letter_words.length > 0">Det finns {{ this.five_letter_words.length }} ord med 5 bokstäver.</p>
      <div v-if="this.five_letter_words.length > 0" class="list-container">
        <h3 v-for="(word, index) in this.five_letter_words" :key="index" class="word-text">
          <div @click="linkTo(word)" class="word-container">{{ word[0] }}  <span v-if="this.showPoints" style="color: #F1C40F; font-size: 12px;">{{ word[1] }}p</span></div>
        </h3>
      </div>

      <p class="list-titles" v-if="this.four_letter_words.length > 0">Det finns {{ this.four_letter_words.length }} ord med 4 bokstäver.</p>
      <div v-if="this.four_letter_words.length > 0" class="list-container">
        <h3 v-for="(word, index) in this.four_letter_words" :key="index" class="word-text">
          <div @click="linkTo(word)" class="word-container">{{ word[0] }} <span v-if="this.showPoints" style="color: #F1C40F; font-size: 12px;">{{ word[1] }}p</span></div>
        </h3>
      </div>

      <p class="list-titles" v-if="this.three_letter_words.length > 0">Det finns {{ this.three_letter_words.length }} ord med 3 bokstäver.</p>
      <div v-if="this.three_letter_words.length > 0" class="list-container">
        <h3 v-for="(word, index) in this.three_letter_words" :key="index" class="word-text">
          <div @click="linkTo(word)" class="word-container">{{ word[0] }}  <span v-if="this.showPoints" style="color: #F1C40F; font-size: 12px;">{{ word[1] }}p</span></div>
        </h3>
      </div>

      <p class="list-titles" v-if="this.two_letter_words.length > 0">Det finns {{ this.two_letter_words.length }} ord med 2 bokstäver.</p>
      <div v-if="this.two_letter_words.length > 0" class="list-container">
        <h3 v-for="(word, index) in this.two_letter_words" :key="index" class="word-text">
          <div @click="linkTo(word)" class="word-container">{{ word[0] }}  <span v-if="this.showPoints" style="color: #F1C40F; font-size: 12px;">{{ word[1] }}p</span></div>
        </h3>
      </div>
    </div>
  </div>
  <!-- <div class="footer-container"><p class="help-text">Made by Arvid Bergman Thörn</p></div> -->
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap');

p, h1, h3 {
  font-family: 'Roboto', sans-serif;
}

html, body {
  background-color: #B9DEFE;
  /* height: 100%; */
}

*:focus {
  outline: none;
}
::placeholder {
  font-style: italic;
  font-size: 10px;
  color: #B9DEFE;
  font-style: italic;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}
.search-box {
  background-color: #199EF3;
  font-size: 18px;
  width: 100%;
  font-weight: bold;
  color: #fff;
  border-radius: 7.5px;
  height: 34px;
  border: none;
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 5px;
  padding-right: 5px;
  text-align: center;
  text-transform:uppercase;
  font-family: 'Roboto', sans-serif;
}

.adv-search-box {
  background-color: #199EF3;
  font-size: 16px;
  width: 60%;
  font-weight: bold;
  color: #fff;
  border-radius: 7.5px;
  height: 34px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 5px;
  padding-right: 5px;
  text-align: center;
  text-transform:uppercase
}

.title-container {
  width: 100%;
  background-color: #0082F0;
  display: flex;
  align-items: center;
  border-radius: 7.5px;
}

.footer-container {
  width: 100%;
  background-color: #0082F0;
  display: flex;
  align-items: center;
  border-radius: 7.5px;
  margin-top: 10px;
  /* position: fixed; */
}

.background-container {
  margin-top: 10px;
  overflow-y: auto;
  background: #0082F0;
  /* height: 67vh; */
  flex-direction: column;
  max-height: 95vh;
  display: flex;
  flex: 1;
  padding: 10px;
  border-radius: 7.5px;
  margin-bottom: -15px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  max-height: 95vh;
  min-height: 95vh;
}

.title-text {
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  margin-left: 15px;
}

.title-list {
  color: #fff;
  font-size: 36px;
  font-weight: bold;
}

.word-text {
  color: #fff;
  font-weight: bold;
  font-size: 18px;
}

.help-text {
  color: #fff;
  font-size: 14px;
  font-style: italic;
  font-weight: bold;
  margin-left: 15px;
}

.list-titles {
  color: #fff;
  font-size: 16px;
  font-style: italic;
  font-weight: bold;
}

.search-button {
  width: fit-content;
  padding: 10px;
  background-color: #199EF3;
  border-radius: 5px;
  border: none;
  color: #F1C40F;
  font-size: 14px;
  font-style: italic;
  font-weight: bold;
  margin-left: 15px;
  font-family: 'Roboto', sans-serif;
  position: absolute;
  right: 25px;
}


.list-container {
  max-width: 100%;
  height: fit-content;
  background-color: #199EF3;
  /* display: ; */
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 10px;
}

.word-container {
  width: fit-content;
  padding: 10px;
  background-color: #0082F0;
  margin: 5px;
  border-radius: 5px;
  /* border: 5px solid #199EF3;
  box-shadow: 5px 5px #0082F0; */
}

.word-container:hover {
  cursor: pointer;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #0082F0;
  border-radius: 7.5px;
}

::-webkit-scrollbar-thumb {
  background: #199EF3;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

</style>


<script>
export default {
  name: 'App',

  mounted() {
    this.loadSAOLDictionary();
    document.getElementById('letter-input').addEventListener('input', () => {
      this.getWords();
    })
    document.getElementById('begin-input').addEventListener('input', () => {
      this.getWords();
    })
    document.getElementById('end-input').addEventListener('input', () => {
      this.getWords();
    })
  },
  data() {
    return {
      message: '',
      letters: '',
      beginsWith: '',
      endWith: '',
      maxWordLength: 0,
      filtered_words: null,
      accepted_words: null,
      seven_letter_words: [],
      six_letter_words: [],
      five_letter_words: [],
      four_letter_words: [],
      three_letter_words: [],
      two_letter_words: [],
      eight_or_more_letter_words: [],
      showPoints: true,
      showAdvanced: false,
      added: 0,
    }
  },
  methods:  {
    toggleAdvancedMode() {
      this.showAdvanced = !this.showAdvanced;
      this.clearLists();
      this.message = '';
      this.added = 1;
    },
    toggleShowPoints() {
      this.showPoints = !this.showPoints;
    },
    linkTo(word) {
      const link = "https://synonymer.se/sv-syn/" + word[0];
      window.open(link, '_blank').focus();
    },
    calculateWordPoints() {
      const one_pointers    = ['A', 'D', 'E', 'I', 'N', 'R', 'S', 'T'];
      const two_pointers    = ['G', 'L', 'O'];
      const three_pointers  = ['B', 'F', 'H', 'K', 'M', 'V'];
      const four_pointers   = ['P', 'U', 'Å', 'Ä', 'Ö'];
      const seven_pointers  = ['J', 'Y'];
      const eight_pointers  = ['C','X', 'Z']
      for(const i in this.accepted_words) {
        let word = this.accepted_words[i]
        let points = 0
        for(const j in word) {
          if(one_pointers.includes(word[j]))        { points += 1}
          else if(two_pointers.includes(word[j]))   { points += 2}
          else if(three_pointers.includes(word[j])) { points += 3}
          else if(four_pointers.includes(word[j]))  { points += 4}
          else if(seven_pointers.includes(word[j])) { points += 7}
          else if(eight_pointers.includes(word[j])) { points += 8}
        }
        this.accepted_words[i] = word + " " + points.toString();
      }
    },
    illegalDuplicates(i, j) {
      const word   = this.accepted_words[i];
      const letter = this.accepted_words[i][j]
      return (this.letters.split(letter).length - 1) < (word.split(letter).length - 1)
    },

    illegalLetters(i, j) {
      const letter = this.filtered_words[i][j];
      return !this.letters.includes(letter);
    },

    filter(array, type) {
      let data = []
      let wildcard = this.letters.split('?').length;
      for (const i in array) {
        let accept = wildcard > 0 ? wildcard : 0;
        for(const j in array[i]) {
          if(type === 'letter' ? this.illegalLetters(i, j) : this.illegalDuplicates(i, j)) {
            break;
          }
          else {
            if(accept++ == array[i].length) {
              data.push(array[i])
            }
          }
        }
      }
      return data;
    },
    filterAdvanced() {
      const begin = this.beginsWith.length > 0;
      const end   = this.endWith.length > 0;
      const both  = begin && end;
      if(both) {
        this.accepted_words = this.accepted_words.filter(word => word.startsWith(this.beginsWith) && word.endsWith(this.endWith));
      } else if(begin) {
        this.accepted_words = this.accepted_words.filter(word => word.startsWith(this.beginsWith))
      } else if(end) {
        this.accepted_words = this.accepted_words.filter(word => word.endsWith(this.endWith))
      }
    },

    applyAdvancedFilter() {
      const begin = this.beginsWith.length > 0;
      const end   = this.endWith.length > 0;
      const both  = begin && end;
      const add = this.letters === this.message;

      if(both && add) {
        this.letters = this.beginsWith.concat(this.message.concat(this.endWith));
      } else if(begin && add) {
        this.letters = this.beginsWith.concat(this.message);
      } else if(end && add) {
        this.letters = this.message.concat(this.endWith);
      }
    },

    getWordsContainingLetters() {
      if(this.showAdvanced) {
        this.applyAdvancedFilter();
      }
      this.accepted_words = this.filter(this.filtered_words, 'letter');
      this.accepted_words = this.filter(this.accepted_words, 'duplicate');
      if(this.showAdvanced) {
        this.filterAdvanced(this.accepted_words);
      }
      this.calculateWordPoints();
      this.sortWords();
    },

    sortWords() {
      for(const i in this.accepted_words) {
        let word = this.accepted_words[i].split(' ')
        switch (word[0].length) {
          case 2:
            this.two_letter_words.push(word)
            break;
          case 3:
            this.three_letter_words.push(word)
            break;
          case 4:
            this.four_letter_words.push(word)
            break;
          case 5:
            this.five_letter_words.push(word)
            break;
          case 6:
            this.six_letter_words.push(word)
            break;
          case 7:
            this.seven_letter_words.push(word)
            break;
          default:
            this.eight_or_more_letter_words.push(word)
            break;
        }
      }
    },
    canCreateWord() {
      return this.accepted_words.length > 0
    },
    async loadSAOLDictionary() {
      this.filtered_words = await require('../wordlist.json'); 
    },
    getMaxWordLength() {
      return this.message.length + this.beginsWith.length + this.endWith.length;
    },
    clearLists() {
      this.two_letter_words = []
      this.three_letter_words = []
      this.four_letter_words = []
      this.five_letter_words = []
      this.six_letter_words = []
      this.seven_letter_words = []
      this.eight_or_more_letter_words = []
    },
    getWords() {
      if(!this.message) {
        return;
      }
      this.clearLists();
      this.maxWordLength = this.getMaxWordLength();
      this.letters = this.message.toUpperCase();
      this.beginsWith = this.beginsWith.toUpperCase();
      this.endWith = this.endWith.toUpperCase();
      this.filtered_words = this.filtered_words.filter(word => word.length <= this.maxWordLength && word.length > 1);
      this.filtered_words = this.filtered_words.map(word => {
        return word.toUpperCase();
      })
      this.getWordsContainingLetters();
      this.filtered_words = this.loadSAOLDictionary();

    },
  },
}
</script>