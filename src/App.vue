<!-- eslint-disable no-unused-vars -->
<template>
  <div class="title-container">
    <h1 class="title-text">WordFeusk</h1>
    <!-- <p class="help-text">Skriv in dina bokstäver i sökrutan nedan och se vilka ord du kan skapa.</p> -->
  </div>
  <div class="footer-container">
    <p class="help-text">Skriv in dina bokstäver i sökrutan nedan och se vilka ord du kan skapa.</p>
    <input type="text" id="letter-input" class="search-box" v-model="message"/>
  </div>
  <div class="background-container">
    <!-- <button class="search-button" @click="this.toggleShowPoints()">Klicka för se poäng för orden.</button> -->
    <div style="margin-top: 15px;">
      <p class="list-titles" v-if="this.eight_or_more_letter_words.length > 0">Det finns {{ this.eight_or_more_letter_words.length }} ord med 8+ bokstäver.</p>
      <div v-if="this.eight_or_more_letter_words.length > 0" class="list-container">
        <h3 v-for="(word, index) in this.eight_or_more_letter_words" :key="index" class="word-text">
          <div @click="linkTo(word)" class="word-container">{{ word[0] }}  <span v-if="this.showPoints" style="color: yellow; font-size: 12px;">{{ word[1] }}p</span></div>
        </h3>
      </div>

      <p class="list-titles" v-if="this.seven_letter_words.length > 0">Det finns {{ this.seven_letter_words.length }} ord med 7 bokstäver.</p>
      <div v-if="this.seven_letter_words.length > 0" class="list-container">
        <h3 v-for="(word, index) in this.seven_letter_words" :key="index" class="word-text">
          <div @click="linkTo(word)" class="word-container">{{ word[0] }}  <span v-if="this.showPoints" style="color: yellow; font-size: 12px;">{{ word[1] }}p</span></div>
        </h3>
      </div>

      <p class="list-titles" v-if="this.six_letter_words.length > 0">Det finns {{ this.six_letter_words.length }} ord med 6 bokstäver.</p>
      <div v-if="this.six_letter_words.length > 0" class="list-container">
        <h3 v-for="(word, index) in this.six_letter_words" :key="index" class="word-text">
          <div @click="linkTo(word)" class="word-container">{{ word[0] }}  <span v-if="this.showPoints" style="color: yellow; font-size: 12px;">{{ word[1] }}p</span></div>
        </h3>
      </div>

      <p class="list-titles" v-if="this.five_letter_words.length > 0">Det finns {{ this.five_letter_words.length }} ord med 5 bokstäver.</p>
      <div v-if="this.five_letter_words.length > 0" class="list-container">
        <h3 v-for="(word, index) in this.five_letter_words" :key="index" class="word-text">
          <div @click="linkTo(word)" class="word-container">{{ word[0] }}  <span v-if="this.showPoints" style="color: yellow; font-size: 12px;">{{ word[1] }}p</span></div>
        </h3>
      </div>

      <p class="list-titles" v-if="this.four_letter_words.length > 0">Det finns {{ this.four_letter_words.length }} ord med 4 bokstäver.</p>
      <div v-if="this.four_letter_words.length > 0" class="list-container">
        <h3 v-for="(word, index) in this.four_letter_words" :key="index" class="word-text">
          <div @click="linkTo(word)" class="word-container">{{ word[0] }} <span v-if="this.showPoints" style="color: yellow; font-size: 12px;">{{ word[1] }}p</span></div>
        </h3>
      </div>

      <p class="list-titles" v-if="this.three_letter_words.length > 0">Det finns {{ this.three_letter_words.length }} ord med 3 bokstäver.</p>
      <div v-if="this.three_letter_words.length > 0" class="list-container">
        <h3 v-for="(word, index) in this.three_letter_words" :key="index" class="word-text">
          <div @click="linkTo(word)" class="word-container">{{ word[0] }}  <span v-if="this.showPoints" style="color: yellow; font-size: 12px;">{{ word[1] }}p</span></div>
        </h3>
      </div>

      <p class="list-titles" v-if="this.two_letter_words.length > 0">Det finns {{ this.two_letter_words.length }} ord med 2 bokstäver.</p>
      <div v-if="this.two_letter_words.length > 0" class="list-container">
        <h3 v-for="(word, index) in this.two_letter_words" :key="index" class="word-text">
          <div @click="linkTo(word)" class="word-container">{{ word[0] }}  <span v-if="this.showPoints" style="color: yellow; font-size: 12px;">{{ word[1] }}p</span></div>
        </h3>
      </div>
    </div>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap');

p, h1, h3 {
  font-family: 'Roboto', sans-serif;
}
body {
  background-color: #B9DEFE;

}

*:focus {
  outline: none;
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
  padding: 15px;
  /* text-align: center; */
}
.title-container {
  width: 100%;
  background-color: #0082F0;
  /* background-image: linear-gradient(to bottom right, #0082F0, #B9DEFE); */
  display: flex;
  align-items: center;
  border-radius: 7.5px;
  /* padding: 20px; */
}

.footer-container {
  width: 100%;
  background-color: #0082F0;
  display: flex;
  align-items: center;
  border-radius: 7.5px;
  margin-top: 10px;
}

.background-container {
  margin-top: 10px;
  overflow-y: auto;
  background: #0082F0;
  height: 80vh;
  padding: 10px;
  border-radius: 7.5px;
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
  color: #fff;
  font-size: 16px;
  font-weight: bold;
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

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #0082F0;
  border-radius: 7.5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #199EF3;
}

/* Handle on hover */
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
  },
  data() {
    return {
      message: '',
      eligableWords: null,
      maxWordLength: 0,
      isAWord: false,
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
    }
  },
  methods:  {
    toggleShowPoints() {
      this.showPoints = !this.showPoints;
    },
    linkTo(word) {
      const link = "https://synonymer.se/sv-syn/" + word;
      window.open(link, '_blank').focus();
    },
    calculateWordPoints() {
      const one_pointers = ['A', 'D', 'E', 'I', 'N', 'R', 'S', 'T'];
      const two_pointers = ['G', 'L', 'O'];
      const three_pointers = ['B', 'F', 'H', 'K', 'M', 'V'];
      const four_pointers = ['P', 'U', 'Å', 'Ä', 'Ö'];
      const seven_pointers = ['J', 'Y'];
      const eight_pointers = ['C','X', 'Z']
      for(const i in this.accepted_words) {
        let word = this.accepted_words[i]
        let points = 0
        for(const j in word) {
          if(one_pointers.includes(word[j])) { points += 1}
          else if(two_pointers.includes(word[j])) { points += 2}
          else if(three_pointers.includes(word[j])) { points += 3}
          else if(four_pointers.includes(word[j])) { points += 4}
          else if(seven_pointers.includes(word[j])) { points += 7}
          else if(eight_pointers.includes(word[j])) { points += 8}
        }
        // console.log(word + " " + points.toString())
        this.accepted_words[i] = word + " " + points.toString();
      }
    },
    filterIllegalDuplicates() {
      let data = []
      let wildcard = this.message.includes('?')
      for (const i in this.accepted_words) {
        let accept = wildcard ? 1 : 0;
        for(const j in this.accepted_words[i]) {
          if((this.message.split(this.accepted_words[i][j]).length - 1) < (this.accepted_words[i].split(this.accepted_words[i][j]).length - 1)) {
            break;
          }
          else {
            accept++
            if(accept == this.accepted_words[i].length) {
              data.push(this.accepted_words[i])
            }
          }
        }
      }

      return data;
    },

    filterWords() {
      let data = []
      const wildcard = this.message.includes('?')
      for( const i in this.filtered_words) {
        let accepted = wildcard ? 1 : 0;
        for( const j in this.filtered_words[i]) {
          if(!this.message.includes(this.filtered_words[i][j])) {
            break;
          }
          else {
            accepted++
            if(accepted === this.filtered_words[i].length) {
              data.push(this.filtered_words[i])
            }
          }
        }
      }
      this.accepted_words = data
      return this.filterIllegalDuplicates();
    },

    getWordsContainingLetters() {
      this.filtered_words = this.eligableWords;
      this.accepted_words = this.filterWords()
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
      this.eligableWords = await require('../wordlist.json'); 
    },
    getMaxWordLength() {
      return this.message.length;
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
      this.message = this.message.toUpperCase();
      this.eligableWords = this.eligableWords.filter(word => word.length <= this.maxWordLength && word.length > 1);
      this.eligableWords = this.eligableWords.map(word => {
        return word.toUpperCase();
      })
      this.getWordsContainingLetters();
      this.eligableWords = this.loadSAOLDictionary();

    },
  },
}
</script>