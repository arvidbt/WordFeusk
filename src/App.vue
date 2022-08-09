<!-- eslint-disable no-unused-vars -->
<template>
  <div class="wrapper">
    <div class="title-container">
      <h1 class="title-text">WordFeusk</h1>
      <p class="help-text" style="margin-left: 5px; color: #F1C40F;"> BETA</p>
      <svg class="search-button" @click="toggleAdvancedMode()" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#fff" stroke-width="2" d="M15,16 L21,22 L15,16 Z M10,18 C13.8659932,18 17,14.8659932 17,11 C17,7.13400675 13.8659932,4 10,4 C6.13400675,4 3,7.13400675 3,11 C3,14.8659932 6.13400675,18 10,18 Z M20,1 L20,7 M17,4 L23,4"/></svg>
      <svg class="search-button" @click="toggleHelp()" style="margin-right: 64px;" width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="helpIconTitle" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000"> <title id="helpIconTitle">Help</title> <path d="M12 14C12 12 13.576002 11.6652983 14.1186858 11.1239516 14.663127 10.5808518 15 9.82976635 15 9 15 7.34314575 13.6568542 6 12 6 11.1040834 6 10.2998929 6.39272604 9.75018919 7.01541737 9.49601109 7.30334431 9.29624369 7.64043912 9.16697781 8.01061095"/> <line x1="12" y1="17" x2="12" y2="17"/> <circle cx="12" cy="12" r="10"/> </svg>
    </div>
    <div v-if="this.showHelp" class="footer-container" style="margin-top: -10px;">
      <info-display/>
    </div>
    <div class="footer-container">
      <input autocomplete="off" v-show="this.showAdvanced" type="text" id="begin-input" class="adv-search-box" style="margin-left: 15px;" v-model="beginsWith" placeholder="BÖRJAR MED"/>
      <input autocomplete="off" type="text" id="letter-input" class="search-box" v-model="message" placeholder="DINA BOKSTÄVER.."/>
      <input autocomplete="off" v-show="this.showAdvanced" type="text" id="end-input" class="adv-search-box" style="margin-right: 15px;"  v-model="endWith" placeholder="SLUTAR MED"/>
    </div>
    <div class="background-container" id="bck-grd">
        <word-box v-bind:title="'8+'"
                  v-bind:showBox='this.eight_or_more_letter_words.length > 0'
                  v-bind:list='this.eight_or_more_letter_words'
        />

        <word-box v-bind:title="7"
                  v-bind:showBox='this.seven_letter_words.length > 0'
                  v-bind:list='this.seven_letter_words'
        />

        <word-box v-bind:title="6"
                  v-bind:showBox='this.six_letter_words.length > 0'
                  v-bind:list='this.six_letter_words'
        />

        <word-box v-bind:title="5"
                  v-bind:showBox='this.five_letter_words.length > 0'
                  v-bind:list='this.five_letter_words'
        />


        <word-box v-bind:title="4"
                  v-bind:showBox='this.four_letter_words.length > 0'
                  v-bind:list='this.four_letter_words'
        />

        <word-box v-bind:title="3"
                  v-bind:showBox='this.three_letter_words.length > 0'
                  v-bind:list='this.three_letter_words'
        />

        <word-box v-bind:title="2"
                  v-bind:showBox='this.two_letter_words.length > 0'
                  v-bind:list='this.two_letter_words'
        />
      </div>
    </div>
</template>
<style src="./assets/styles.css">

</style>


<script>
import WordBox from "@/components/WordBox.vue";
import InfoDisplay from "@/components/InfoDisplay.vue"

export default {
  name: 'App',
  components: {
    WordBox,
    InfoDisplay,
  },

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
      MAX_WORD_LENGTH: 0,
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
      showHelp: false,
      added: 0,
      loaded: false,
    }
  },
  methods:  {
    redirectGithub() {
      window.open('https://github.com/arvidbt/wordfeusk', '_blank').focus();
    },

    redirectLinkedIn() {
      window.open('https://www.linkedin.com/in/arvid-bergman-th%C3%B6rn-1843701b8/', '_blank').focus();
    },
    toggleAdvancedMode() {
      this.showAdvanced = !this.showAdvanced;
      this.added = 1;
    },
    toggleHelp() {
      this.showHelp = !this.showHelp;
    },
    toggleShowPoints() {
      this.showPoints = !this.showPoints;
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
        if(word.length > 6) {
          let length = word.length;
          if(this.showAdvanced) {
            const begin = this.beginsWith.length > 0;
            const end   = this.endWith.length > 0;
            const both  = begin && end;
            if(both) { length = length - this.endWith - this.beginsWith }
            else if(begin) { length = length - this.beginsWith }
            else if(end) { length = length - this.endWith } 
          }
          if(length > 6) { points += 40 }
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
      this.message = this.message.toUpperCase();
      this.letters = this.letters.toUpperCase();
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
      this.MAX_WORD_LENGTH = this.getMaxWordLength();
      this.letters = this.message.toUpperCase();
      this.beginsWith = this.beginsWith.toUpperCase();
      this.endWith = this.endWith.toUpperCase();
      this.filtered_words = this.filtered_words.filter(word => word.length <= this.MAX_WORD_LENGTH && word.length > 1);
      this.filtered_words = this.filtered_words.map(word => {
        return word.toUpperCase();
      })
      this.getWordsContainingLetters();
      this.filtered_words = this.loadSAOLDictionary();

    },
  },
}
</script>