<template lang="">
  <div>
    <div class="top-panel">
      <img class="top-panel-icon" src="../assets/images/apple-icon.png" alt="" />
      <p class="active-app">Finder</p>
      <p>File</p>
      <p>Edit</p>
      <p>View</p>
      <p>Go</p>
      <p>Window</p>
      <p>Help</p>
    </div>
    <div class="desktop-icons">
      <div class="desktop-icon" :class="{ active: iconClicked }">
        <img src="../assets/images/desktop-icons/league-icon.png" alt="" />
        <span>League of Legends</span>
      </div>
      <div class="desktop-icon">
        <img src="../assets/images/desktop-icons/figma-icon.png" alt="" />
        Figma
      </div>
      <div class="desktop-icon">
        <img src="../assets/images/desktop-icons/vs-code.png" alt="" />
        VS Code
      </div>
      <div class="desktop-icon">
        <img src="../assets/images/desktop-icons/teams.png" alt="" />
        Teams
      </div>
      <div class="desktop-icon">
        <img src="../assets/images/desktop-icons/chrome.png" alt="" />
        Chrome
      </div>
      <div class="desktop-icon">
        <img src="../assets/images/desktop-icons/notion.png" alt="" />
        Notion
      </div>
      <div class="desktop-icon">
        <img src="../assets/images/desktop-icons/capcut.png" alt="" />
        Capcut
      </div>
      <div class="desktop-icon">
        <img src="../assets/images/desktop-icons/appstore.png" alt="" />
        App Store
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      iconClicked: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.iconClicked = true;
    }, 1500);
  },
};
</script>
<style lang="scss">
.top-panel {
  height: 1.75em;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 4px 1em;
  display: flex;
  align-items: center;
  font-size: 14px;
  opacity: 0.75;
  margin-bottom: 2em;
  .top-panel-icon {
    height: 100%;
    margin-right: 1.5em;
  }
  .active-app {
    font-weight: bold;
    margin-right: 1.5em;
  }
  p {
    margin-right: 1em;
  }
}
.desktop-icons {
  display: flex;
  height: 90vh;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: fit-content;
  margin: 0 1em;
  .desktop-icon {
    width: 6em;
    height: 100px;
    margin: 1em;
    font-weight: bold;
    color: #fff;
    text-align: center;
    font-size: 0.8em;
    display: flex;
    flex-direction: column;
    align-items: center;
    &.active {
      img {
        background-color: rgba(0, 0, 0, 0.4);
        border: solid 2px rgba(184, 182, 182, 0.644);
        border-radius: 2px;
      }
      span {
        background-color: rgb(51, 51, 255);
        line-height: 1.25;
      }
    }
    img {
      width: 100%;
      margin-bottom: 0.5em;
      padding: 8px;
    }
  }
}
</style>
