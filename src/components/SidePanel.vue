<template lang="">
  <div class="side_panel_wrapper">
    <div class="panel-header">
      <p class="panel-header-text">Skills</p>
      <div class="panel-header-icons">
        <font-awesome-icon :icon="['fas', 'user-plus']" />
        <font-awesome-icon :icon="['fas', 'folder-plus']" />
        <font-awesome-icon :icon="['fas', 'list']" />
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </div>
    </div>
    <div class="panel-main">
      <div class="skill-block" v-for="skill in skills">
        <div class="skill-img">
          <img :src="require(`../assets/skill-icons/${skill.img}.svg`)" />
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
      <div class="footer-block" id="last-footer-block">
        <font-awesome-icon :icon="['fas', 'bug']" />
      </div>
    </div>
  </div>
</template>
<script>
import ContactModal from "./Modals/ContactModal.vue";
import { useModal } from "../composables/useModal.ts";
import { markRaw } from "vue";

export default {
  /* Skill Type isn't currently being used. May be able to delete all those props' */
  components: { ContactModal },
  setup() {
    const modal = useModal();
    return { modal };
  },
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
          name: "React",
          type: "Technical",
          img: "react",
          status: "Online",
        },
        {
          name: "PHP",
          type: "Technical",
          img: "php",
          status: "Online",
        },
        {
          name: "SQL",
          type: "Technical",
          img: "sql",
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
          name: "Bootstrap",
          type: "Technical",
          img: "bootstrap",
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
          name: "Figma",
          type: "Technical",
          img: "figma",
          status: "Online",
        },
        {
          name: "Git",
          type: "Technical",
          img: "git",
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
.side_panel_wrapper {
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
    padding: 16px;
    .panel-header-icons {
      margin-left: auto;
      color: RGB(200, 170, 110);
      & > * {
        height: 1em;
        margin-right: 1em;
      }
    }
  }
  .panel-main {
    // flex: 1;
    // max-height: calc(100% - 80px);
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
      .skill-img {
        width: 2.5em;
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
    // height: 40px;
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
      &#last-footer-block {
        margin-left: auto;
      }
      &:hover {
        cursor: pointer;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 5%, rgba(255, 255, 255, 0.2) 90%);
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .side_panel_wrapper {
    min-height: calc(100% - 90px) !important;
    height: auto;
    .panel-main {
      max-height: auto;
    }
  }
}
@media screen and (max-width: 800px) {
  .side_panel_wrapper {
    display: none;
  }
}
</style>
