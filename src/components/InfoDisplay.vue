<template>
  <p class="help-text" style="font-size: 12px;">
    STRIKT ORDLISTA.<br>
    <span style="font-size: 10px;color: #B9DEFE;">
      BÖJDA ORD KOMMER INTE MED I RESULTATET.<br>
      BOKSTÄVERNA <span style="color: #F1C40F">UFASKT</span> GER <span style="color: #F1C40F">FUSKA</span>, MEN INTE <span style="color: #F1C40F">FUSKAT</span>.<br><br>
    </span>
    BLANKA BRICKOR.<br>
    <span style="font-size: 10px;color: #B9DEFE;">
      FÖR ATT ANVÄNDA BLANKA RUTOR SKRIV IN <span style="color: #F1C40F">?</span> I SÖKRUTAN.
    </span><br><br>
    ADVANCERAD SÖKNING.<br>
    <span style="font-size: 10px;color: #B9DEFE;">
      OM ADVANCERAD SÖKNING ÄR VALD KOMMER BARA<br>
      RESULTAT SOM TILLFREDSTÄLLER SÖKKRITERA VISAS.<br>
      <span style="color: #F1C40F;">EXEMPELVIS</span>: <span style="color: #F1C40F;">ST</span> A <span style="color: #F1C40F;">RT</span> KOMMER BARA GE ORDET <span style="color: #F1C40F;">START</span>.
      
    </span><br><br>
    PRESTANDALÄGE.<br>
    <span style="font-size: 10px;color: #B9DEFE;">
      OM WORDFEUSK UPPLEVS <span style="color: #F1C40F">LÅNGSAMT</span> KAN DET DU<br>
      STÄLLA IN <span style="color: #F1C40F">PRESTANDALÄGE</span>. I DETTA LÄGE LADDAS<br>
      ORD BARA NÄR DU SKRIVIT IN <span style="color: #F1C40F">ALLA</span> DIN BOKSTÄVER.
    </span><br><br>
    SKAPAD AV ARVID BERGMAN.<br>
    <span style="font-size: 10px;color: #B9DEFE;">
      FÖR ATT SE KÄLLKOD, SE <span style="color: #F1C40F" @click="this.redirectGithub()">GITHUB</span>.<br>
      FÖR KONTAKT, SE <span style="color: #F1C40F" @click="this.redirectLinkedIn()">LINKEDIN</span>.</span><br><br>
  </p>
</template>

<style>

</style>

<script>
export default {
  name: 'InfoDisplay',
  methods: {
    redirectGithub() {
      window.open('https://github.com/arvidbt/wordfeusk', '_blank').focus();
    },
    redirectLinkedIn() {
      window.open('https://www.linkedin.com/in/arvid-bergman-th%C3%B6rn-1843701b8/', '_blank').focus();
    },
  }
}
</script>