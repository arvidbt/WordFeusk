<!-- eslint-disable no-unused-vars -->
<template>
  <div class="wrapper">
    <div class="title-container">
      <h1 class="title-text">WordFeusk</h1>
      <p class="help-text" style="margin-left: 5px; color: #F1C40F;"> BETA</p>
      <svg class="search-button" @click="toggleAdvancedMode()" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#fff" stroke-width="2" d="M15,16 L21,22 L15,16 Z M10,18 C13.8659932,18 17,14.8659932 17,11 C17,7.13400675 13.8659932,4 10,4 C6.13400675,4 3,7.13400675 3,11 C3,14.8659932 6.13400675,18 10,18 Z M20,1 L20,7 M17,4 L23,4"/></svg>
      <svg class="search-button" @click="toggleHelp()" style="margin-right: 64px;" width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="helpIconTitle" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000"> <title id="helpIconTitle">Help</title> <path d="M12 14C12 12 13.576002 11.6652983 14.1186858 11.1239516 14.663127 10.5808518 15 9.82976635 15 9 15 7.34314575 13.6568542 6 12 6 11.1040834 6 10.2998929 6.39272604 9.75018919 7.01541737 9.49601109 7.30334431 9.29624369 7.64043912 9.16697781 8.01061095"/> <line x1="12" y1="17" x2="12" y2="17"/> <circle cx="12" cy="12" r="10"/> </svg>
    </div>
    <div class="info-container" :class="[!this.showHelp ? 'info-hidden' : 'info-shown']" :style="[{'height' : !this.showHelp ? '0px' : '325px'}]">
      <!-- style="margin-top: -10px;" -->
      <!-- :style="[{'height' : !this.showHelp ? '0px' : '200px'}]" -->
      <info-display/>
    </div>
    <div v-if="this.showHelp" class="performance-button-wrapper">
      <button class="performance-button" ref="btnToggle" @click="togglePerformanceMode()">{{ this.performanceModeText }}.</button>
    </div>
    <div class="footer-container">
      <input autocomplete="off" v-show="this.showAdvancedSearch" type="text" id="begin-input" class="adv-search-box" style="margin-left: 15px;" v-model="advancedStartLetters" placeholder="BÖRJAR MED"/>
      <input maxlength="7" autocomplete="off" type="text" id="letter-input" class="search-box" v-model="inputLetters" placeholder="DINA BOKSTÄVER.."/>
      <input autocomplete="off" v-show="this.showAdvancedSearch" type="text" id="end-input" class="adv-search-box" style="margin-right: 15px;"  v-model="advancedEndingLetters" placeholder="SLUTAR MED"/>
    </div>
    <div class="background-container" id="bck-grd">
        <word-box v-bind:title="'8+'"
                  v-bind:showBox='this.acceptedSevenPlusLettersWords.length > 0'
                  v-bind:list='this.acceptedSevenPlusLettersWords'
        />

        <word-box v-bind:title="7"
                  v-bind:showBox='this.acceptedSevenLetterWords.length > 0'
                  v-bind:list='this.acceptedSevenLetterWords'
        />

        <word-box v-bind:title="6"
                  v-bind:showBox='this.acceptedSixLetterWords.length > 0'
                  v-bind:list='this.acceptedSixLetterWords'   />

        <word-box v-bind:title="5"
                  v-bind:showBox='this.acceptedFiveLetterWords.length > 0'
                  v-bind:list='this.acceptedFiveLetterWords'
        />

        <word-box v-bind:title="4"
                  v-bind:showBox='this.acceptedFourLetterWords.length > 0'
                  v-bind:list='this.acceptedFourLetterWords'
        />

        <word-box v-bind:title="3"
                  v-bind:showBox='this.acceptedThreeLetterWords.length > 0'
                  v-bind:list='this.acceptedThreeLetterWords'
        />

        <word-box v-bind:title="2"
                  v-bind:showBox='this.acceptedTwoLetterWords.length > 0'
                  v-bind:list='this.acceptedTwoLetterWords'
        />
    </div>
  </div>
</template>

<style src="./assets/styles.css"></style>

<script>
import WordBox from "@/components/WordBox.vue";
import InfoDisplay from "@/components/InfoDisplay.vue"

const ONE_POINT     = ['A', 'D', 'E', 'I', 'N', 'R', 'S', 'T'];
const TWO_POINTS    = ['G', 'L', 'O'];
const THREE_POINTS  = ['B', 'F', 'H', 'K', 'M', 'V'];
const FOUR_POINTS   = ['P', 'U', 'Å', 'Ä', 'Ö'];
const SEVEN_POINTS  = ['J', 'Y'];
const EIGHT_POINTS  = ['C','X', 'Z'];

export default {
  name: 'App',
  components: {
    WordBox,
    InfoDisplay,
  },

  mounted() {
    // console.log(this.$isMobile());
    this.callback = () => { this.getWords(); }
    this.performanceModeText = 'AKTIVERA PRESTANDALÄGE';
    this.loadWordlist();
    this.registerEventListener('letter-input', 'input');
    this.registerEventListener('begin-input', 'input');
    this.registerEventListener('end-input', 'input');
  },
  data() {
    return {
      inputLetters:                  '',
      letters:                       '',
      advancedStartLetters:          '',
      advancedEndingLetters:         '',
      filteredWords:                 null,
      acceptedWords:                 null,
      acceptedSevenLetterWords:      [],
      acceptedSixLetterWords:        [],
      acceptedFiveLetterWords:       [],
      acceptedFourLetterWords:       [],
      acceptedThreeLetterWords:      [],
      acceptedTwoLetterWords:        [],
      acceptedSevenPlusLettersWords: [],
      showAdvancedSearch:            false,
      showHelp:                      false,
      performanceMode:               false,
      advancedStart:                 false,
      advancedEnd:                   false,
      advancedStartAndEnd:           false,
      callback:                      null,
      performanceModeText:           '',
    }
  },
  methods:  {

    registerEventListener(id, eventListener) {
      document.getElementById(id).addEventListener(eventListener, this.callback)
    },

    unregisterEventListener(id, eventListener) {
      document.getElementById(id).removeEventListener(eventListener, this.callback);
    },

    togglePerformanceMode() {
      this.performanceMode = !this.performanceMode;
      this.performanceModeText = this.performanceMode ? 'AV-AKTIVERA PRESTANDALÄGE' : 'AKTIVERA PRESTANDALÄGE';
      // this.$refs.btnToggle = this.performanceMode ? 'Av-aktivera prestandaläge' : 'Aktivera prestandaläge';
      if(this.performanceMode) {
        this.unregisterEventListener('letter-input', 'input');
        this.unregisterEventListener('begin-input', 'input');
        this.unregisterEventListener('end-input', 'input');
        this.registerEventListener('letter-input', 'change');
        this.registerEventListener('begin-input', 'change');
        this.registerEventListener('end-input', 'change');
      }
      else {
        this.unregisterEventListener('letter-input', 'change');
        this.unregisterEventListener('begin-input', 'change');
        this.unregisterEventListener('end-input', 'change');
        this.registerEventListener('letter-input', 'input');
        this.registerEventListener('begin-input', 'input');
        this.registerEventListener('end-input', 'input');
      }
    },

    toggleAdvancedMode() {
      this.showAdvancedSearch = !this.showAdvancedSearch;
    },

    toggleHelp() {
      this.clearLists();
      this.showHelp = !this.showHelp;
      if(!this.showHelp && this.inputLetters.length > 0) {
        setTimeout(() => {
          this.getWords();
        }, 300)
      }
    },

    calculatePointsFor(word) {
      let points = 0;
      for(const j in word) {
        if(ONE_POINT.includes(word[j]))           { 
          points += 1;
        } else if(TWO_POINTS.includes(word[j]))   { 
          points += 2;
        } else if(THREE_POINTS.includes(word[j])) { 
          points += 3;
        } else if(FOUR_POINTS.includes(word[j]))  { 
          points += 4;
        } else if(SEVEN_POINTS.includes(word[j])) { 
          points += 7;
        } else if(EIGHT_POINTS.includes(word[j])) { 
          points += 8;
        }
      }
      if(word.length > 6) {
        let length = word.length;
        if(this.showAdvancedSearch) {
          if(this.advancedStartAndEnd)  { 
            length = length - this.advancedEndingLetters - this.advancedStartLetters;
          } else if(this.advancedStart) { 
            length = length - this.advancedStartLetters;
          } else if(this.advancedEnd)   { 
            length = length - this.advancedEndingLetters; 
          } 
        }
        if(length > 6) { 
          points += 40;
        }
      }
      return points;
    },

    calculateWordPoints() {
      for(const i in this.acceptedWords) {
        let word   = this.acceptedWords[i];
        let points = this.calculatePointsFor(word);
        this.acceptedWords[i] = word + " " + points.toString();
      }
    },

    illegalDuplicates(i, j) {
      const word   = this.acceptedWords[i];
      const letter = this.acceptedWords[i][j]
      return (this.letters.split(letter).length - 1) < (word.split(letter).length - 1)
    },

    illegalLetters(i, j) {
      const letter = this.filteredWords[i][j];
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

    determineAdvancedFilter() {
      this.advancedStart       = this.advancedStartLetters.length > 0;
      this.advancedEnd         = this.advancedEndingLetters.length > 0;
      this.advancedStartAndEnd = this.advancedStart && this.advancedEnd;
    },

    filterAdvanced() {
      if(this.advancedStartAndEnd) {
        this.acceptedWords = this.acceptedWords.filter(word => 
          word.startsWith(this.advancedStartLetters) && 
          word.endsWith(this.advancedEndingLetters)
        );
      } else if(this.advancedStart) {
        this.acceptedWords = this.acceptedWords.filter(word => 
          word.startsWith(this.advancedStartLetters)
        );
      } else if(this.advancedEnd) {
        this.acceptedWords = this.acceptedWords.filter(word => 
          word.endsWith(this.advancedEndingLetters)
        );
      }
    },

    applyAdvancedFilter() {
      this.inputLetters = this.inputLetters.toUpperCase();
      this.letters      = this.letters.toUpperCase();
      const add         = this.letters === this.inputLetters;
      if(this.advancedStartAndEnd && add) {
        this.letters = this.advancedStartLetters
        .concat(this.inputLetters
        .concat(this.advancedEndingLetters));
      } else if(this.advancedStart && add) {
        this.letters = this.advancedStartLetters
        .concat(this.inputLetters);
      } else if(this.advancedEnd && add) {
        this.letters = this.inputLetters
        .concat(this.advancedEndingLetters);
      }
    },

    getWordsContainingLetters() {
      if(this.showAdvancedSearch) {
        this.determineAdvancedFilter(); 
        this.applyAdvancedFilter(); 
      }
      this.acceptedWords = this.filter(this.filteredWords, 'letter');
      this.acceptedWords = this.filter(this.acceptedWords, 'duplicate');
      if(this.showAdvancedSearch) { 
        this.filterAdvanced(this.acceptedWords); 
      }
      this.calculateWordPoints();
      this.sortWords();
    },

    sortWords() {
      for(const i in this.acceptedWords) {
        let word = this.acceptedWords[i].split(' ')
        switch (word[0].length) {
          case 2:
            this.acceptedTwoLetterWords.push(word)
            break;
          case 3:
            this.acceptedThreeLetterWords.push(word)
            break;
          case 4:
            this.acceptedFourLetterWords.push(word)
            break;
          case 5:
            this.acceptedFiveLetterWords.push(word)
            break;
          case 6:
            this.acceptedSixLetterWords.push(word)
            break;
          case 7:
            this.acceptedSevenLetterWords.push(word)
            break;
          default:
            this.acceptedSevenPlusLettersWords.push(word)
            break;
        }
      }
    },

    async loadWordlist() {
      this.filteredWords = await require('../wordlist.json'); 
    },

    getMaxWordLength() {
      return this.inputLetters.length + this.advancedStartLetters.length + this.advancedEndingLetters.length;
    },

    clearLists() {
      this.acceptedTwoLetterWords        = []
      this.acceptedThreeLetterWords      = []
      this.acceptedFourLetterWords       = []
      this.acceptedFiveLetterWords       = []
      this.acceptedSixLetterWords        = []
      this.acceptedSevenLetterWords      = []
      this.acceptedSevenPlusLettersWords = []
    },

    filterWordlist() {
      this.filteredWords = this.filteredWords.filter(word => (
        word.length <= this.getMaxWordLength() && word.length > 1)
      );
      this.filteredWords = this.filteredWords.map(word => {
        return word.toUpperCase();
      });
    },

    getWords() {
      if(!this.inputLetters) {
        return;
      }
      this.showHelp              = false;
      this.letters               = this.inputLetters.toUpperCase();
      this.advancedStartLetters  = this.advancedStartLetters.toUpperCase();
      this.advancedEndingLetters = this.advancedEndingLetters.toUpperCase();
      this.filterWordlist();
      this.clearLists();
      this.getWordsContainingLetters();
      this.filteredWords = this.loadWordlist();

    },
  },
}
</script>