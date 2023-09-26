<template lang="">
  <div class="template_wrapper">
    <div class="main_wrapper">
      <div class="desktop-view">
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
      <div class="client-content" v-if="clientOpen">
        <Header class="client-header" />
        <div class="client-body-and-side">
          <Nuxt />
          <SidePanel />
        </div>
        <div id="modal"></div>
      </div>
    </div>
    <Teleport to="#modal">
      <Transition>
        <component :is="modal.component.value" v-if="modal.show.value" @close="modal.hideModal" />
      </Transition>
    </Teleport>
  </div>
</template>
<script>
import { useModal } from "../composables/useModal.ts";

export default {
  setup() {
    const modal = useModal();
    return { modal };
  },
  data() {
    return {
      clientOpen: false,
      iconClicked: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.iconClicked = true;
    }, 1500);
    setTimeout(() => {
      this.clientOpen = true;
    }, 2250);
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main_wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: black;
  background-image: url("../assets/images/default-mac-bg.jpeg");
  background-size: cover;
  position: relative;
  align-items: center;
  justify-content: center;
  .desktop-view {
    height: 100%;
    width: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
      height: 90%;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: flex-start;
      width: fit-content;
      margin: 0 1em;
    }
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
  .client-content {
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 90%;
    width: 90%;
    margin: 6em auto 0 auto;
    border-radius: 8px;
    background-color: rgb(7, 16, 24);
    padding: 4px;
    overflow: hidden;
    border: solid 2px #c89b3c;
    box-shadow: 0px 1px 2px rgba(239, 234, 234, 0.1), 0px 2px 4px rgba(240, 230, 210, 0.15), 0px 4px 8px rgba(240, 230, 210, 0.15), 0px 8px 16px rgba(240, 230, 210, 0.15);
    opacity: 1;
    animation: loadClient 0.4s forwards;
    .client-header {
      width: 100%;
      border-bottom: solid 2px rgb(67, 68, 69);
      display: flex;
      align-items: center;
      padding: 0.5 1em 0.75em 1em;
      position: relative;
    }
    .client-body-and-side {
      display: flex;
      position: relative;
      height: 90%;
      margin-top: auto;
    }
    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-track {
      background: #32281e;
    }
    &::-webkit-scrollbar-thumb {
      background: #c89b3c;
      border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #785a28;
    }
  }
}

@keyframes loadClient {
  from {
    opacity: 0;
    margin: 6em auto 0 auto;
  }
  to {
    opacity: 1;
    margin: auto auto;
  }
}
</style>
