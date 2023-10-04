<template lang="">
  <div class="projects_wrapper">
    <div class="projects-topbar">
      <p class="project-top-panel-link" :class="{ active: mode == 0 }" @click="loadDevelopmentView">Development</p>
      <!-- <p class="project-top-panel-link" :class="{ active: mode == 1 }" @click="loadDesignView">Design</p> -->
      <!-- <p class="project-top-panel-link" :class="{ active: mode == 2 }" @click="loadAccessibilityView">Accessibility</p> -->
    </div>
    <div class="projects-main">
      <div class="projects-wrapper" v-if="mode == 0">
        <div v-for="project in projectData" class="project-group" :class="{ active: activeProject.mode == project.mode }" @click="activeProject = project">
          <div class="icon-wrapper">
            <font-awesome-icon :icon="['fas', 'calendar']" />
          </div>
          <div class="project-text-wrapper">
            <p>{{ project.class }}</p>
            <h2>{{ project.title }}</h2>
          </div>
          <p>{{ project.description }}</p>
        </div>
        <!-- <div
          class="project-group"
          :class="{ active: devProjectMode == 1 }"
          @click="
            devProjectMode = 1;
            demoLink = 'https://amazon.com';
          "
        >
          <div class="icon-wrapper">
            <font-awesome-icon :icon="['fas', 'money-bill']" />
          </div>
          <div class="project-text-wrapper">
            <p>Finance App</p>
            <h2>Tauro Finance</h2>
          </div>
          <p>This is the project description.This is the project description.This is the project description.</p>
        </div>
        <div
          class="project-group"
          :class="{ active: devProjectMode == 2 }"
          @click="
            devProjectMode = 2;
            demoLink = 'https://youtube.com';
          "
        >
          <div class="icon-wrapper">
            <font-awesome-icon :icon="['fas', 'rotate']" />
          </div>
          <div class="project-text-wrapper">
            <p>Website</p>
            <h2>Rebillia</h2>
          </div>
          <p>This is the project description.This is the project description.This is the project description.</p>
        </div> -->
      </div>
      <div class="projects-wrapper" v-if="mode == 1">
        <div class="project-group">Design</div>
        <div class="project-group">Design</div>
        <div class="project-group">Design</div>
      </div>
      <div class="projects-wrapper" v-if="mode == 2">
        <div class="project-group">Accessibility</div>
        <div class="project-group">Accessibility</div>
        <div class="project-group">Accessibility</div>
      </div>
    </div>
    <div class="projects-bottombar">
      <n-button class="projects-bottom-panel-bttn" color="#C89B3C" ghost>
        <p @click="viewGithub">View Github</p>
      </n-button>
      <n-button class="projects-bottom-panel-bttn" color="#0397ab" ghost>
        <p @click="demoProject">Demo Project</p>
      </n-button>
    </div>
  </div>
</template>
<script>
import ProjectBlock from "../components/ProjectBlock.vue";
import { projects } from "../services/projectsService";
import { NButton } from "naive-ui";
export default {
  components: { ProjectBlock, NButton },
  data() {
    return {
      mode: 0,
      activeProject: {
        mode: 0,
        demoLink: "https://apollo-appointment-scheduler-evptp4uhp-jamalfox85.vercel.app/login" /* Set to first project link */,
        githubLink: "https://github.com/Jamalfox85/Apollo_Appointment_Scheduler",
      },
    };
  },
  methods: {
    loadDevelopmentView() {
      this.mode = 0;
    },
    loadDesignView() {
      this.mode = 1;
    },
    loadAccessibilityView() {
      this.mode = 2;
    },
    viewGithub() {
      window.open(this.activeProject.githubLink);
    },
    demoProject() {
      window.open(this.activeProject.demoLink);
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
  flex: 1 1 auto;
  max-width: calc(100% - 250px);
  background-size: cover;
  position: relative;
  color: rgb(240, 230, 210);
  display: flex;
  flex-direction: column;
  .projects-topbar {
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 4px 16px;
    .project-top-panel-link {
      margin: 0 1.5em;
      color: #a09b8c;
      text-decoration: none;
      &.active {
        border-width: 0;
        border-bottom: 1px;
        border-style: solid;
        border-image: linear-gradient(300deg, rgba(0, 0, 0, 1) 0%, rgba(200, 155, 60, 1) 48%, rgba(0, 0, 0, 1) 100%) 1;
        color: #f0e6d2;
      }
      &:hover {
        color: #f0e6d2;
        cursor: url("../assets/link.cur"), pointer;
      }
    }
    .projects-bottom-panel-bttn {
      margin-left: auto;
      &:hover {
        background-color: #091428;
      }
    }
  }
  .projects-main {
    flex-grow: 1;
    display: flex;
    justify-content: space-around;
    .projects-wrapper {
      display: flex;
      width: 100%;
      .project-group {
        // flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1em;
        border: solid 1px #c89b3c;
        border-radius: 4px;
        margin: 0.5em;
        width: 33%;
        &.active {
          background-color: rgba(255, 255, 255, 0.1);
          background-image: linear-gradient(to top, #0ac8b985, #62d5e640, #aae0fc30, #e0ecff20, #ffffff05);
          h2 {
            text-shadow: 1px 1px 0 rgba(200, 155, 60, 0.5), -1px -1px 0 rgba(200, 155, 60, 0.5), 1px -1px 0 rgba(200, 155, 60, 0.5), -1px 1px 0 rgba(200, 155, 60, 0.5), 1px 1px 0 rgba(200, 155, 60, 0.5);
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
        .icon-wrapper {
          width: 100px;
          aspect-ratio: 1;
          margin-bottom: 1.5em;
          display: flex;
          svg {
            font-size: 6em;
            margin: auto;
          }
        }
        .project-text-wrapper {
          border: solid 2px cyan;
          margin-bottom: 1em;
          width: 100%;
          min-height: 125px; /* Set to accommodate longest title */
          border-width: 0;
          border-bottom: 1px;
          border-style: solid;
          border-image: linear-gradient(300deg, rgba(160, 155, 140, 0.1) 0%, rgba(240, 230, 210, 1) 48%, rgba(160, 155, 140, 0.1) 100%) 1;
          color: #f0e6d2;
          p {
            font-size: 1.25em;
            color: #a09b8c;
          }
          h2 {
            color: #f0e6d2;
            font-size: 2.5em;
            line-height: normal;
          }
        }
      }
    }
  }
  .projects-bottombar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .projects-bottom-panel-bttn {
      width: 175px;
      margin: 1em 0.5em;
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
</style>
