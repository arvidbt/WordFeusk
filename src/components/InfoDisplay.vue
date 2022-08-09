<template>
<p class="help-text" style="font-size: 12px;">
        <span style="color: #F1C40F">-</span> STRIKT ORDLISTA<br>
        <span style="font-size: 10px;color: #B9DEFE;">
          &nbsp;&nbsp;BÖJDA ORD KOMMER INTE MED I RESULTATET.<br>
          &nbsp;&nbsp;BOKSTÄVERNA <span style="color: #F1C40F">UFASKT</span> GER <span style="color: #F1C40F">FUSKA</span>, MEN INTE <span style="color: #F1C40F">FUSKAT</span>.<br><br>
        </span>
        <span style="color: #F1C40F;">-</span> BLANKA BRICKOR<br>
        <span style="font-size: 10px;color: #B9DEFE;">
          &nbsp;&nbsp;FÖR ATT ANVÄNDA BLANKA RUTOR SKRIV IN <span style="color: #F1C40F">?</span> I SÖKRUTAN.</span><br><br>
        <span style="color: #F1C40F">-</span> SKAPAD AV ARVID BERGMAN.<br>
        <span style="font-size: 10px;color: #B9DEFE;">
          &nbsp;&nbsp;FÖR ATT SE KÄLLKOD, SE <span style="color: #F1C40F" @click="this.redirectGithub()">GITHUB</span>.<br>
          &nbsp;&nbsp;FÖR KONTAKT, SE <span style="color: #F1C40F" @click="this.redirectLinkedIn()">LINKEDIN</span>.</span><br><br>
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