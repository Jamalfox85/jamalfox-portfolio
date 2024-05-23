<template lang="">
  <div class="projects_wrapper">
    <div class="projects-main">
      <div class="projects-wrapper">
        <div v-for="(project, index) in projectData" class="project-group" :class="{ active: index == activeProjectIndex }" @click="activeProjectIndex = index">
          <div class="project-header">
            <div class="project-header-text">
              <p>{{ project.class }}</p>
              <h2>{{ project.title }}</h2>
            </div>
            <font-awesome-icon :icon="project.icon" class="icon" v-if="index == activeProjectIndex" />
          </div>
          <div class="project-main" v-if="index == activeProjectIndex">
            <div class="text-block">
              <p class="section-header">Description</p>
              <p>{{ project.description }}</p>
            </div>
            <div class="project-main-block-2">
              <div class="text-block" v-if="project.login">
                <p class="section-header">Login Details</p>
                <p>User: jamalfoxdevportfoliotesting@gmail.com</p>
                <p>Pass: pass1234</p>
              </div>
              <!-- <div class="text-block">
                <p class="section-header">Sample Photos</p>
                <div class="project-images">
                  project img #1
                  project img #2
                  project img #3
                  project img #4
                </div>
              </div> -->
            </div>
            <div class="text-block">
              <p class="section-header">Links</p>
              <div class="projects-bottombar">
                <n-button class="projects-bottom-panel-bttn" color="#C89B3C" ghost>
                  <p @click="openLink(project.githubLink)">View Github</p>
                </n-button>
                <n-button v-if="project?.githubLink2" class="projects-bottom-panel-bttn" color="#C89B3C" ghost>
                  <p @click="openLink(project.githubLink2)">View Github (API)</p>
                </n-button>
                <n-button class="projects-bottom-panel-bttn" color="#0397ab" ghost>
                  <p @click="openLink(project.demoLink)">Demo Project</p>
                </n-button>
              </div>
            </div>
          </div>
          <div class="project-footer" v-if="index == activeProjectIndex">
            <div class="skills-container">
              <div class="skill-block" v-for="skill in project.skills">
                <div class="skill-img" :style="{ background: skill.bg }">
                  <img :src="`./images/skill-icons/${skill.img}.svg`" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProjectBlock from "../components/ProjectBlock.vue";
import { projects } from "../services/projectsService";
import { NButton } from "naive-ui";
import FsLightbox from "fslightbox-vue/v3";

export default {
  components: { ProjectBlock, NButton, FsLightbox },
  data() {
    return {
      toggler: false,
      activeProjectIndex: 0,
    };
  },
  methods: {
    openLink(link) {
      window.open(link);
    },
  },
  setup() {
    let projectData = projects;
    return { projectData };
  },
};
</script>
<style lang="scss" scoped>
.projects_wrapper {
  color: rgb(240, 230, 210);
  display: flex;
  flex-direction: column;
  width: 100%;
  .projects-main {
    display: flex;
    flex-grow: 1;
    overflow: hidden;
    .projects-wrapper {
      display: flex;
      width: 100%;
      .project-group {
        transition: 0.3s ease;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1em;
        border: solid 1px #c89b3c;
        border-radius: 4px;
        margin: 0.5em;
        width: 200px;
        &.active {
          flex-grow: 1;
          background-color: rgba(255, 255, 255, 0.1);
          background-image: linear-gradient(to top, #0ac8b985, #62d5e640, #aae0fc30, #e0ecff20, #ffffff05);
          .project-header {
            .project-header-text {
              h2 {
                text-shadow: 1px 1px 0 rgba(200, 155, 60, 0.5), -1px -1px 0 rgba(200, 155, 60, 0.5), 1px -1px 0 rgba(200, 155, 60, 0.5), -1px 1px 0 rgba(200, 155, 60, 0.5), 1px 1px 0 rgba(200, 155, 60, 0.5);
                font-size: 2.5em;
              }
            }
          }
          svg {
            color: #0ac8b9;
          }
        }
        &:hover {
          background-color: rgba(255, 255, 255, 0.1);
          transition: 0.1s ease-in;
          cursor: url("../assets/link.cur"), pointer;
        }
        .project-header {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1em;
          .project-header-text {
            p {
              font-size: 1.25em;
              color: #a09b8c;
            }
            h2 {
              color: #f0e6d2;
              font-size: 1.5em;
              line-height: normal;
            }
          }
          .icon {
            font-size: 5em;
          }
        }
        .project-main {
          flex-grow: 1;
          margin-bottom: 1em;
          border-width: 0;
          border-top: 1px;
          border-bottom: 1px;
          border-image: linear-gradient(300deg, rgba(160, 155, 140, 0.1) 0%, rgba(240, 230, 210, 1) 48%, rgba(160, 155, 140, 0.1) 100%) 1;
          border-style: solid;
          padding: 1em;
          .text-block {
            margin-top: 1.5em;
            width: 100%;
            .section-header {
              font-weight: bold;
              font-size: 1.5em;
              color: #f0e6d2;
              text-shadow: 1px 1px 0 rgba(200, 155, 60, 0.5), -1px -1px 0 rgba(200, 155, 60, 0.5), 1px -1px 0 rgba(200, 155, 60, 0.5), -1px 1px 0 rgba(200, 155, 60, 0.5), 1px 1px 0 rgba(200, 155, 60, 0.5);
            }
            .projects-bottombar {
              width: 100%;
              display: flex;
              .projects-bottom-panel-bttn {
                width: 175px;
                margin: 0.5em 1em 1em 0;
                background-color: #3c3c41;
                p {
                  font-weight: 1.25em !important;
                }
                &:hover {
                  cursor: url("../assets/link.cur"), pointer;
                  background-color: #67676b;
                }
              }
            }
          }
          .project-main-block-2 {
            display: flex;
          }
        }
        .project-footer {
          width: 100%;
          padding: 0.5em;
          display: flex;
          .skills-container {
            display: flex;
            .skill-block {
              width: 4em;
              margin-right: 1em;
              .skill-img {
                aspect-ratio: 1;
                display: flex;
                border: solid 1px #c89b3c;
                border-radius: 50%;
                overflow: hidden;
                align-items: center;
                justify-content: center;
                img {
                  width: 100%;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1100px) {
  .projects-wrapper {
    display: block !important;
    // flex-direction: column !important;
    // width: 100%;
    padding: 1em;
    overflow-y: auto;
    height: 300px;
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
    .project-group {
      width: 100% !important;
      flex-grow: 1 !important;
      margin: 0 0 1em 0 !important;
      flex-direction: row !important;
      height: 200px !important;
      .icon-wrapper {
        width: 50px !important;
        margin-right: 1em;
        svg {
          font-size: 3em !important;
        }
      }
      .project-text-wrapper {
        min-width: 200px !important;
        p {
          font-size: 1em !important;
          width: fit-content !important;
        }
        h2 {
          font-size: 1.5em !important;
          width: 75%;
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .projects_wrapper {
    max-width: 100% !important;
    .project-group {
      flex-direction: column !important;
      position: relative;
      .icon-wrapper {
        position: absolute;
        top: 1em;
        right: 1em;
      }
      .project-text-wrapper {
        min-height: initial !important;
        padding-bottom: 8px;
      }
    }
  }
}
</style>
