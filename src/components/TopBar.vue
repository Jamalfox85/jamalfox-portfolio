<!-- TO DO: MOBILE RESPONSIVENESS -->
<template lang="">
  <div class="header_wrapper">
    <nav class="header-left">
      <div class="contact-button-group">
        <img class="lol-header-icon" src="../assets/images/desktop-icons/league-icon.png" alt="League of Legends Icon" />
        <div @click="toggleContactModal(true)" class="contact-bttn" role="button">
          <div class="inside-border">
            <p>Contact</p>
          </div>
        </div>
      </div>
      <div class="nav-links">
        <div class="nav-link-container" :class="{ activeLink: currentPath === '/' }"><RouterLink to="/" class="nav-link">Home</RouterLink></div>
        <div class="nav-link-container" :class="{ activeLink: currentPath === '/projects' }"><RouterLink to="/projects" class="nav-link">Projects</RouterLink></div>
        <!-- <div class="nav-link-container" :class="{ activeLink: currentPath === '/extras' }"><RouterLink to="/extras" class="nav-link">Extras</RouterLink></div> -->
      </div>
    </nav>
    <div class="heading-icons">
      <div class="heading-icon">
        <a class="social-link-tag" href="https://www.linkedin.com/in/jamalfox1/" target="_blank">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
      </div>
      <div class="heading-icon">
        <a class="social-link-tag" href="https://github.com/Jamalfox85" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
      </div>
      <!-- <div class="heading-icon">
        <a class="social-link-tag" href="https://www.instagram.com/jamalfoxdesigns/" target="_blank">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
      </div>
      <div class="heading-icon">
        <a class="social-link-tag" href="https://twitter.com/JamalFoxDesigns" target="_blank">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
      </div> -->
      <div class="heading-icon">
        <a class="social-link-tag" href="mailto:Fox.Jamal@outlook.com?Subject=Web%20Development%20Opportunity" target="_blank">
          <font-awesome-icon :icon="['fas', 'envelope']" />
        </a>
      </div>
    </div>

    <div class="header-right">
      <div class="riot-points-wrapper">
        <div class="point-group">
          <img class="point-img" src="../assets/design-icons/RP_icon.webp" />
          <p class="points">0926</p>
        </div>
        <div class="point-group">
          <img class="point-img" id="blue-essence-img" src="../assets/design-icons/blue_essence.webp" />
          <p class="points">2023</p>
        </div>
      </div>

      <div class="profile-image-wrapper">
        <div class="inside-img">
          <img src="../assets/images/bitmoji-avatar.png" alt="profile" />
        </div>
        <div class="level-group">
          <img src="../assets/images/profile-level.svg" alt="profile-level" class="profile-level" />
          <p class="level-text">444</p>
        </div>
      </div>

      <div class="profile-name-wrapper">
        <p class="name"><b>Jamal Fox</b></p>
        <div class="status">
          <div class="status-bubble"></div>
          <p class="status-text">Full Stack Developer</p>
        </div>
      </div>

      <div class="client-controls-wrapper">
        <font-awesome-icon :icon="['fas', 'question']" />
        <font-awesome-icon :icon="['fas', 'window-minimize']" />
        <font-awesome-icon :icon="['fas', 'gear']" />
        <font-awesome-icon :icon="['fas', 'xmark']" @click="openExitModal" role="button" />
      </div>
    </div>

    <contact-modal :isOpen="showContactModal" @closeModal="toggleContactModal(false)" />
  </div>
</template>
<script>
import ContactModal from "../components/Modals/ContactModal.vue";
import ExitModal from "../components/Modals/ExitModal.vue";
import { markRaw } from "vue";
import { RouterLink, RouterView } from "vue-router";

export default {
  components: { ContactModal, ExitModal },
  data() {
    return {
      mobileMenuOpen: false,
      currentPath: null,
      showContactModal: false,
    };
  },
  watch: {
    $route: {
      handler(newValue) {
        this.currentPath = newValue.path;
      },
      immediate: true,
    },
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    toggleContactModal(state) {
      this.showContactModal = state;
    },
    openExitModal() {
      this.modal.component.value = markRaw(ExitModal);
      this.modal.showModal();
    },
  },
};
</script>
<style lang="scss">
.header_wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 4px 0.5em 0 1em;
  background-color: rgb(21, 30, 36);
  .header-left {
    display: flex;
    align-items: center;
    margin-right: auto;
    margin-bottom: 1em;
    .contact-button-group {
      display: flex;
      align-items: center;
      .lol-header-icon {
        height: 3.25em;
        z-index: 2;
      }
      .contact-bttn {
        border: solid 1px #c89b3c;
        padding: 2px;
        position: relative;
        right: 2em;
        cursor: url("../assets/link.cur"), pointer;
        .inside-border {
          height: 100%;
          width: 100%;
          border: solid 1px #c89b3c;
          display: flex;
          padding: 0.25em 0.75em 0.25em 2em;
          color: rgb(240, 230, 210);
          font-size: 1.25em;
          font-weight: bold;
        }
        &:hover {
          background-color: rgb(67, 68, 69);
        }
      }
    }
    .nav-links {
      display: flex;

      .nav-link-container {
        padding: 1em;
        position: relative;
        display: flex;
        justify-content: center;
        &.activeLink {
          font-weight: bold;
        }
        &.activeLink,
        &:hover {
          cursor: url("../assets/link.cur"), pointer;
          transition: 0.1s ease-in-out;
          .nav-link {
            color: rgb(240, 230, 210);
          }
        }
        &.activeLink::before {
          content: url("../assets/design-icons/active-link-arrow.svg");
          position: absolute;
          top: -75%;
          transform: scale(0.8);
        }
        &.activeLink::after {
          content: "";
          height: 90%;
          width: 100%;
          position: absolute;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 45%, rgba(255, 255, 255, 0.2) 90%);
        }
        .nav-link {
          color: #c89b3c;
          overflow: hidden;
          text-decoration: none;
          font-size: 1.15em;
          display: flex;
          position: relative;
          z-index: 2;
          cursor: url("../assets/link.cur"), pointer;
        }
      }
    }
  }
  .heading-icons {
    font-size: 1.5em;
    display: flex;
    align-items: center;
    color: rgb(240, 230, 210);
    display: flex;
    position: relative;
    border-width: 0;
    // border-right: 1px;
    border-style: solid;
    border-image: linear-gradient(rgba(0, 0, 0, 1) 0%, rgba(200, 155, 60, 1) 48%, rgba(0, 0, 0, 1) 100%) 1;
    margin: 0 1em 0 auto;
    padding-right: 1em;
    // flex-grow: 1;
    .heading-icon {
      display: flex;
      align-items: center;
      padding: 0.5em;
      height: 120%;
      color: RGB(200, 170, 110);
      &:hover {
        cursor: url("../assets/link.cur"), pointer;
        color: rgb(240, 230, 210);
        transition: 0.1s ease-in-out;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 45%, rgba(255, 255, 255, 0.2) 90%);
      }
      .social-link-tag,
      .social-link-tag:visited {
        color: RGB(200, 170, 110);
        &:hover {
          cursor: url("../assets/link.cur"), pointer;
          color: rgb(240, 230, 210);
          transition: 0.1s ease-in-out;
        }
      }
    }
  }

  .header-right {
    font-size: 1em;
    color: rgb(240, 230, 210);
    display: flex;
    position: relative;

    .riot-points-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0.5em;
      margin-right: 1em;
      .point-group {
        display: flex;
        margin-bottom: 8px;
        .point-img {
          height: 1em;
          &#blue-essence-img {
            height: 1.25em;
          }
        }
        .points {
          margin-left: 0.5em;
        }
      }
    }

    .profile-image-wrapper {
      height: 65px;
      width: 65px;
      border-radius: 50%;
      border: solid 2px #c89b3c;
      background: rgb(0, 90, 130);
      background: linear-gradient(339deg, rgba(0, 90, 130, 1) 0%, rgba(10, 200, 185, 1) 58%);
      margin: auto 1em auto 0;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      .inside-img {
        height: 90%;
        width: 90%;
        border-radius: 50%;
        border: solid 2px #c89b3c;
        overflow: hidden;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        img {
          width: 115%;
        }
      }
      .level-group {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 4px;
        color: rgb(170, 160, 140);
        .profile-level {
          width: 30px;
          position: absolute;
        }
        .level-text {
          position: absolute;
          font-size: 0.5em;
        }
      }
    }

    .client-controls-wrapper {
      margin-bottom: 1em;
      display: flex;
      justify-content: space-evenly;
      color: rgb(170, 160, 140);
      position: absolute;
      top: 2px;
      right: 0px;
      width: 125px;
      align-self: flex-end;
      & > * {
        font-size: 16px;
        &:hover {
          color: rgb(240, 230, 210);
          transition: 0.1s ease-in-out;
          cursor: url("../assets/link.cur"), pointer;
        }
      }
    }
    .profile-name-wrapper {
      margin-right: 2em;
      position: relative;
      bottom: 4px;
      align-self: flex-end;
      .name {
        letter-spacing: 2px;
        margin-bottom: 4px;
      }
      .status {
        display: flex;
        align-items: center;
        .status-bubble {
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: rgb(9, 166, 70);
          border: solid 2px rgb(102, 248, 160);
          margin-right: 0.5em;
        }
        .status-text {
          opacity: 0.75;
          font-size: 0.85em;
          color: rgb(9, 166, 70);
        }
      }
    }
  }
}
@media screen and (max-width: 660px) {
  .header_wrapper {
    flex-direction: column-reverse;
    & > * {
      margin: auto !important;
      overflow: hidden;
      width: 100%;
    }
    .header-left {
      .activeLink::before {
        top: -50% !important;
        transform: scale(0.6) !important;
      }
    }
    .heading-icons {
      display: none;
      justify-content: space-evenly;
    }
  }
}
</style>
