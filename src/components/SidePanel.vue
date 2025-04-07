<template lang="">
  <div class="sidepanel_wrapper">
    <div class="panel-header">
      <p class="panel-header-text">Skills</p>
      <div class="panel-header-icons">
        <font-awesome-icon :icon="['fas', 'user-plus']" />
        <font-awesome-icon :icon="['fas', 'folder-plus']" />
        <font-awesome-icon :icon="['fas', 'list']" />
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        <div class="sidebar-social-media-icon custom-cursor-active">
          <a
            class="social-link-tag"
            href="https://www.linkedin.com/in/jamalfox1/"
            target="_blank"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
        </div>
        <div class="sidebar-social-media-icon custom-cursor-active">
          <a
            class="social-link-tag"
            href="https://github.com/Jamalfox85"
            target="_blank"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </div>
        <div class="sidebar-social-media-icon custom-cursor-active">
          <a
            class="social-link-tag"
            href="mailto:Fox.Jamal@outlook.com?Subject=Web%20Development%20Opportunity"
            target="_blank"
          >
            <font-awesome-icon :icon="['fas', 'envelope']" />
          </a>
        </div>
      </div>
    </div>
    <div class="panel-main">
      <side-panel-skills />
    </div>
    <div class="panel-footer">
      <div class="footer-block">
        <font-awesome-icon :icon="['fas', 'message']" />
      </div>
      <div class="footer-block">
        <font-awesome-icon :icon="['fas', 'scroll']" />
      </div>
      <div class="footer-block">
        <font-awesome-icon :icon="['fas', 'microphone']" />
      </div>
      <div class="footer-block" id="version">
        <p>V.2</p>
      </div>
      <div class="footer-block" id="bug">
        <font-awesome-icon :icon="['fas', 'bug']" />
      </div>
    </div>
  </div>
</template>
<script>
import SidePanelSkills from "./SidePanelSkills.vue";

export default {
  components: { SidePanelSkills },
};
</script>
<style lang="scss">
.sidepanel_wrapper {
  width: 250px;
  margin-left: auto;
  color: rgb(170, 160, 140);
  // padding: 0.5em;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #000;
  height: 100%;
  .panel-header {
    display: flex;
    width: 100%;
    // margin-bottom: 1em;
    padding: 8px 16px;
    .panel-header-icons {
      margin-left: auto;
      color: RGB(200, 170, 110);
      & > * {
        height: 1em;
        margin-right: 1em;
      }
      .sidebar-social-media-icon {
        display: none;
      }
    }
  }
  .panel-main {
    // flex: 1;
    height: 0px; /* Hacky solution. No matter what, if height is set at an absolute value, 
                  the container will grow to fill the space with flex-grow: 1. 
                  But if I set height at any relative value (0%, 100%, auto, inherit, etc), 
                  this section grows outside of parent containers */
    padding: 1em 0;
    overflow-y: scroll;
    flex-grow: 1;
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
  .panel-footer {
    width: 100%;
    margin-top: auto;
    display: flex;
    background-color: #000;
    padding: 8px 16px;
    .footer-block {
      height: 40px;
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: solid 1px #c89b3c;
      margin: 0 2px;
      transition: 0.3s ease-in;
      position: relative; /* Position and z-index here are so the chat box can overlap the chat interface */
      z-index: 3;
      background-color: rgb(7, 16, 24);
      &#version {
        flex: 1 1 auto;
        border: none;
        pointer-events: none;
      }
      &#bug {
        margin-left: auto;
      }
      &:hover {
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.1) 5%,
          rgba(255, 255, 255, 0.2) 90%
        );
      }
    }
  }
}

@media screen and (max-width: 400px) {
  .sidepanel_wrapper {
    display: none;
  }
}
</style>
