<template lang="">
  <div class="sidepanel_wrapper">
    <div class="panel-header">
      <p class="panel-header-text">Skills</p>
      <div class="panel-header-icons">
        <font-awesome-icon :icon="['fas', 'user-plus']" />
        <font-awesome-icon :icon="['fas', 'folder-plus']" />
        <font-awesome-icon :icon="['fas', 'list']" />
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        <div class="sidebar-social-media-icon">
          <a class="social-link-tag" href="https://www.linkedin.com/in/jamalfox1/" target="_blank">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
        </div>
        <div class="sidebar-social-media-icon">
          <a class="social-link-tag" href="https://github.com/Jamalfox85" target="_blank">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </div>
        <!-- <div class="sidebar-social-media-icon">
          <a class="social-link-tag" href="https://www.instagram.com/jamalfoxdesigns/" target="_blank">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
        </div>
        <div class="sidebar-social-media-icon">
          <a class="social-link-tag" href="https://twitter.com/JamalFoxDesigns" target="_blank">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
        </div> -->
        <div class="sidebar-social-media-icon">
          <a class="social-link-tag" href="mailto:Fox.Jamal@outlook.com?Subject=Web%20Development%20Opportunity" target="_blank">
            <font-awesome-icon :icon="['fas', 'envelope']" />
          </a>
        </div>
      </div>
    </div>
    <div class="panel-main">
      <div class="skill-block" v-for="skill in skills">
        <div class="skill-img" :style="{ background: skill.bg }">
          <img :src="`./images/skill-icons/${skill.img}.svg`" />
        </div>
        <div class="skill-info">
          <p class="skill-name">{{ skill.name }}</p>
          <div
            class="skill-type"
            :class="{
              online: skill.status === 'Online',
              loading: skill.status === 'Loading...',
            }"
          >
            <div class="skill-type-bubble"></div>
            <p>{{ skill.status }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="panel-footer">
      <div class="footer-block" @click="openContactModal">
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
import ContactModal from "./Modals/ContactModal.vue";
import { markRaw } from "vue";

export default {
  /* Skill Type isn't currently being used. May be able to delete all those props' */
  components: { ContactModal },
  data() {
    return {
      skills: [
        {
          name: "JavaScript",
          type: "Technical",
          img: "javascript",
          status: "Online",
        },
        {
          name: "React",
          type: "Technical",
          img: "react",
          status: "Online",
        },
        {
          name: "Vue",
          type: "Technical",
          img: "vue",
          status: "Online",
        },
        {
          name: "Nuxt",
          type: "Technical",
          img: "nuxt",
          status: "Online",
        },
        {
          name: "PHP",
          type: "Technical",
          img: "php",
          status: "Online",
        },
        {
          name: "Laravel",
          type: "Technical",
          img: "laravel",
          status: "Online",
        },
        {
          name: "Node.js",
          type: "Technical",
          img: "node",
          status: "Online",
        },
        {
          name: "Express",
          type: "Technical",
          img: "express",
          status: "Online",
          bg: "white",
        },
        {
          name: "MongoDB",
          type: "Technical",
          img: "mongodb",
          status: "Online",
        },
        {
          name: "Supabase",
          type: "Technical",
          img: "supabase",
          status: "Online",
        },
        {
          name: "Web Accessibility",
          type: "Technical",
          img: "w3c",
          status: "Online",
        },
        {
          name: "HTML",
          type: "Technical",
          img: "html",
          status: "Online",
        },
        {
          name: "CSS",
          type: "Technical",
          img: "css",
          status: "Online",
        },
        {
          name: "Sass",
          type: "Technical",
          img: "sass",
          status: "Online",
        },
        {
          name: "Tailwind",
          type: "Technical",
          img: "tailwind",
          status: "Online",
        },
        {
          name: "MySQL",
          type: "Technical",
          img: "sql",
          status: "Online",
        },
        {
          name: "Git",
          type: "Technical",
          img: "git",
          status: "Online",
        },
        {
          name: "Figma",
          type: "Technical",
          img: "figma",
          status: "Online",
        },
        {
          name: "Bootstrap",
          type: "Technical",
          img: "bootstrap",
          status: "Online",
        },
      ],
    };
  },
  methods: {
    openContactModal() {
      this.modal.component.value = markRaw(ContactModal);
      this.modal.showModal();
    },
  },
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
    .skill-block {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0.5em;
      margin-bottom: 0.25em;
      // border: solid 2px lime;
      .skill-img {
        width: 2.5em;
        aspect-ratio: 1;
        display: flex;
        border: solid 1px #c89b3c;
        border-radius: 50%;
        margin-right: 1em;
        overflow: hidden;
        align-items: center;
        justify-content: center;
        img {
          width: 100%;
        }
      }
      .skill-info {
        display: flex;
        flex-direction: column;
        .skill-name {
          font-size: 1.1em;
        }
        .skill-type {
          font-size: 0.75em;
          display: flex;
          align-items: center;
          &.online {
            color: rgb(9, 166, 70);
            .skill-type-bubble {
              background: rgb(9, 166, 70);
              border: solid 2px rgb(102, 248, 160);
            }
          }
          &.loading {
            color: #0ac8b9;
            .skill-type-bubble {
              background: #005a82;
              border: solid 2px #0ac8b9;
            }
          }
          .skill-type-bubble {
            height: 10px;
            width: 10px;
            border-radius: 50%;

            margin-right: 0.5em;
          }
        }
      }
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
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 5%, rgba(255, 255, 255, 0.2) 90%);
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .sidepanel_wrapper {
    width: 100%;
    height: 100px;
    flex-direction: row;
    & > * {
      width: auto;
      height: 100%;
    }
    .panel-header {
      flex-direction: column;
      align-items: center;
      width: 50px;
      .panel-header-text {
        display: none;
      }
      .panel-header-icons {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        justify-content: space-around;
        margin-left: initial;
        & > * {
          margin-right: auto;
        }
      }
    }
    .panel-main {
      height: 100%;
      display: flex;
      overflow-y: hidden;
      &::-webkit-scrollbar {
        height: 8px;
      }
    }
    .panel-footer {
      flex-direction: column;
      justify-content: space-around;
      width: 40px;
      .footer-block {
        height: auto;
        width: auto;
        border: none;
        &#version {
          flex: initial;
        }
        &#bug {
          margin-left: initial;
        }
      }
    }
  }
}

@media screen and (max-width: 700px) {
  .skill-block {
    .skill-info {
      display: none !important;
    }
  }
  .footer-block {
    &#version,
    &#bug {
      display: none !important;
    }
  }
}

@media screen and (max-width: 660px) {
  .panel-header-icons {
    & > * {
      display: none !important;
    }
    .sidebar-social-media-icon {
      display: flex !important;
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
}
</style>
