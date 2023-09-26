<template lang="">
  <div class="header_wrapper">
    <!-- Mobile Menu -->
    <div class="mobile-menu">
      <font-awesome-icon :icon="['fas', 'bars']" class="mobile-hamburger" @click="toggleMobileMenu" />
      <div class="expanded-menu" v-if="mobileMenuOpen">
        <div class="expanded-header">
          <font-awesome-icon :icon="['fas', 'xmark']" class="mobile-hamburger" @click="toggleMobileMenu" />
        </div>
        <div class="expanded-main">
          <NuxtLink to="/">
            <p class="mobile-link" :class="{ active: isActiveRoute('/') }">Home</p>
          </NuxtLink>
          <NuxtLink to="/projects">
            <p class="mobile-link" :class="{ active: isActiveRoute('/projects') }">Projects</p>
          </NuxtLink>
          <a class="mobile-link" href="../assets/downloads/Jamal_Fox_Resume_July_2023.pdf" download>Resume</a>
          <a href="mailto:Fox.Jamal@outlook.com?Subject=Web%20Development%20Opportunity" target="_blank" class="mobile-link">
            <p>Contact</p>
          </a>
          <div class="mobile-socials">
            <div class="heading-icon">
              <a class="social-link-tag" href="https://www.linkedin.com/in/jamallynellfox/" target="_blank">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
              </a>
            </div>
            <div class="heading-icon">
              <a class="social-link-tag" href="https://github.com/Jamalfox85" target="_blank">
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
            </div>
            <div class="heading-icon">
              <a class="social-link-tag" href="https://www.instagram.com/jamalfoxdesigns/" target="_blank">
                <font-awesome-icon :icon="['fab', 'instagram']" />
              </a>
            </div>
            <div class="heading-icon">
              <a class="social-link-tag" href="https://twitter.com/JamalFoxDesigns" target="_blank">
                <font-awesome-icon :icon="['fab', 'twitter']" />
              </a>
            </div>
            <div class="heading-icon">
              <a class="social-link-tag" href="mailto:Fox.Jamal@outlook.com?Subject=Web%20Development%20Opportunity" target="_blank">
                <font-awesome-icon :icon="['fas', 'envelope']" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Header left -->
    <nav class="header-left">
      <!-- Button -->
      <img src="../assets/images/desktop-icons/league-icon.png" alt="League of Legends Icon" class="lol-header-icon" />
      <div @click="openContactModal" class="contact-bttn" role="button">
        <div class="inside-border">
          <p>Contact</p>
        </div>
      </div>

      <!-- Nav Links -->
      <div class="nav-link-container" :class="{ activeLink: currentPath === '/' }"><NuxtLink to="/" class="nav-link">Home</NuxtLink></div>
      <div class="nav-link-container" :class="{ activeLink: currentPath === '/projects' }"><NuxtLink to="/projects" class="nav-link">Portfolio</NuxtLink></div>
      <!-- <div class="nav-link-container"><NuxtLink to="/" class="nav-link">Design</NuxtLink></div>
      <div class="nav-link-container"><NuxtLink to="/" class="nav-link">Accessibility</NuxtLink></div> -->
    </nav>

    <!-- Header Right -->
    <div class="header-right">
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
        <div class="heading-icon">
          <a class="social-link-tag" href="https://www.instagram.com/jamalfoxdesigns/" target="_blank">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
        </div>
        <div class="heading-icon">
          <a class="social-link-tag" href="https://twitter.com/JamalFoxDesigns" target="_blank">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
        </div>
        <div class="heading-icon">
          <a class="social-link-tag" href="mailto:Fox.Jamal@outlook.com?Subject=Web%20Development%20Opportunity" target="_blank">
            <font-awesome-icon :icon="['fas', 'envelope']" />
          </a>
        </div>
      </div>
      <div class="dividing-line"></div>
      <!-- figure out something cool to do with these points. Maybe they represent projects done, or git commits, idk yet -->
      <div class="riot-points-wrapper">
        <div class="point-group">
          <img class="point-img" src="../assets/design-icons/RP_icon.webp" />
          <p class="points">0729</p>
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
      <div class="user-and-controls">
        <div class="client-controls-wrapper">
          <font-awesome-icon :icon="['fas', 'question']" />
          <font-awesome-icon :icon="['fas', 'window-minimize']" />
          <font-awesome-icon :icon="['fas', 'gear']" />
          <font-awesome-icon :icon="['fas', 'xmark']" @click="openExitModal" role="button" />
        </div>
        <div class="profile-name-wrapper">
          <p class="name"><b>Jamal Fox</b></p>
          <div class="status">
            <div class="status-bubble"></div>
            <p class="status-text">Front End Developer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ContactModal from "../components/Modals/ContactModal.vue";
import ExitModal from "../components/Modals/ExitModal.vue";
import { useModal } from "../composables/useModal.ts";
import { markRaw } from "vue";
export default {
  components: { ContactModal, ExitModal },
  setup() {
    const modal = useModal();
    return { modal };
  },
  data() {
    return {
      mobileMenuOpen: false,
      currentPath: null,
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
    openContactModal() {
      this.modal.component.value = markRaw(ContactModal);
      this.modal.showModal();
    },
    openExitModal() {
      this.modal.component.value = markRaw(ExitModal);
      this.modal.showModal();
    },
  },
};
</script>
<style lang="scss" scope>
.header_wrapper {
  .mobile-menu {
    display: none;
    width: 100%;
    padding: 12px;
    svg {
      color: #c89b3c;
      font-size: 2em;
    }
    .expanded-menu {
      position: fixed;
      background-color: rgba(31, 31, 31, 0.8);
      height: 100vh;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 999;
      padding: 12px;
      .expanded-header {
        display: flex;
        justify-content: flex-end;
      }
      .expanded-main {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        padding: 1em;
        a,
        a:visited {
          color: transparent;
          text-decoration: none;
          &:hover {
            color: #c89b3c;
          }
        }
        .mobile-link {
          font-size: 2em;
          color: #fff;
          font-weight: bold;
          margin-bottom: 2em;
          &.active {
            color: #c89b3c;
            border-bottom: solid 2px #c89b3c;
          }
        }
        .mobile-socials {
          display: flex;
          justify-content: center;
          .heading-icon {
            margin: 1em;
            svg {
              color: #fff;
            }
          }
        }
      }
    }
  }
  .header-left {
    display: flex;
    align-items: center;
    margin-right: auto;
    .lol-header-icon {
      height: 3.25em;
      position: relative;
      z-index: 2;
    }
    .contact-bttn {
      border: solid 1px #c89b3c;
      padding: 3px;
      text-decoration: none;
      position: relative;
      right: 2em;
      cursor: pointer;
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
        cursor: pointer;
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
        height: 100%;
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
      }
    }
  }
  .header-right {
    font-size: 1em;
    color: rgb(240, 230, 210);
    display: flex;

    .heading-icons {
      font-size: 1.5em;
      display: flex;
      align-items: center;
      color: rgb(178, 132, 72);

      .heading-icon {
        display: flex;
        align-items: center;
        padding: 0.5em;
        height: 118%; /* Adjust the height calculation later. This is so the hover state shadow touches the bottom of the
                        div. There has to be a better to way to make that happen than bonking up the height past 100% */
        color: RGB(200, 170, 110);
        &:hover {
          cursor: pointer;
          color: rgb(240, 230, 210);
          transition: 0.1s ease-in-out;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 45%, rgba(255, 255, 255, 0.2) 90%);
        }
        .social-link-tag,
        .social-link-tag:visited {
          color: RGB(200, 170, 110);
          &:hover {
            cursor: pointer;
            color: rgb(240, 230, 210);
            transition: 0.1s ease-in-out;
          }
        }
      }
    }
    .dividing-line {
      height: inherit;
      width: 2px;
      margin: 4px 1em;
      background: rgb(156, 134, 97);
      background: radial-gradient(circle, rgba(156, 134, 97, 1) 9%, rgba(2, 0, 36, 1) 100%);
    }
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

    /* Profile Image */
    .profile-image-wrapper {
      height: 70px; /* Fix the sizing of this at some point. Should be 100% height with an equal width*/
      width: 70px;
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

    /* User & Controls */
    .user-and-controls {
      display: flex;
      flex-direction: column;
      .client-controls-wrapper {
        margin-bottom: 1em;
        display: flex;
        justify-content: space-evenly;
        color: rgb(170, 160, 140);
        & > * {
          &:hover {
            color: rgb(240, 230, 210);
            transition: 0.1s ease-in-out;
            cursor: pointer;
          }
        }
      }
      .profile-name-wrapper {
        margin-right: 2em;
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
}

@media screen and (max-width: 1350px) {
  .header_wrapper {
    .header-right {
      .dividing-line,
      .riot-points-wrapper,
      .profile-image-wrapper,
      .user-and-controls {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 850px) {
  .header_wrapper {
    flex-direction: column;
    height: fit-content;
    .header-left {
      width: 100%;
      justify-content: space-evenly;
    }
    .header-right {
      width: 100%;
      .heading-icons {
        width: 100%;
        justify-content: space-evenly;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .header_wrapper {
    .header-left,
    .header-right {
      display: none;
    }
    .mobile-menu {
      display: block;
    }
  }
}

@keyframes slideDown {
  from {
    top: -200%;
    width: 800px;
  }
  to {
    top: -10px;
    width: 40px;
  }
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-leave,
.v-enter-to {
  opacity: 1;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
</style>
