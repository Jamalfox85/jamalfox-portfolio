<template lang="">
  <div class="body_wrapper">
    <div class="body-content">
      <div class="body-nav">
        <p class="body-link custom-cursor-active" :class="{ active: currentProject === 0 }" @click="setCurrentProject(0)">All Projects</p>
        <p class="body-link custom-cursor-active" :class="{ active: currentProject === project.projectId }" v-for="project in projectData" @click="setCurrentProject(project.projectId)">
          {{ project.title }}
        </p>
      </div>
      <!-- All Projects -->
      <div class="body-projects" v-if="currentProject === 0">
        <project-block />
      </div>

      <!-- Project Details Pages -->
      <div v-for="project in projectData" class="project-details-view">
        <div v-if="currentProject === project.projectId">
          <div class="project-details-left">
            <h1>{{ project.title }}</h1>
            <p>{{ project.description }}</p>
            <div class="project-images">
              <img v-for="image in project.ss" class="project-details-img" :src="`../../assets/images/${image}.png`" />
            </div>
          </div>
          <div class="project-details-right">
            <div class="demo-account-group" v-if="project.login">
              <h2>Demo Account</h2>
              <p class="account-heading">Email:</p>
              <p class="account-value">jamalfoxportfoliotesting@gmail.com</p>
              <p class="account-heading">Password:</p>
              <p class="account-value">testing123</p>
            </div>
            <div class="skills-group">
              <h2>Skills</h2>
              <ul>
                <li v-for="skill in project.skills">{{ skill }}</li>
              </ul>
            </div>
            <button class="project-block-buttons" v-if="project.demo">
              <a :href="project.demo" target="_blank">Demo</a>
            </button>
            <!-- <button
                class="project-block-buttons details-button"
                @click="setCurrentProject(project.projectId)"
              >
                Details
              </button> -->
            <button class="project-block-buttons" v-if="project.github">
              <a :href="project.github" target="_blank">Github</a>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="body-overlay"></div>
  </div>
</template>
<script>
import ProjectBlock from "../components/ProjectBlock.vue";
import { projects } from "../services/projectsService";
export default {
  components: { ProjectBlock },
  data() {
    return {
      currentProject: 0,
    };
  },
  methods: {
    setCurrentProject(id) {
      this.currentProject = id;
    },
  },
  setup() {
    let projectData = projects;
    return { projectData };
  },
};
</script>
<style lang="scss" scoped>
.body_wrapper {
  flex: 1 1 auto;
  max-width: calc(100% - 250px);
  background: url("../../assets/images/body-bg.jpeg");
  background-size: cover;
  position: relative;
  color: rgb(240, 230, 210);
  .body-overlay {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    position: absolute;
    top: 0;
  }
  .body-content {
    position: relative;
    z-index: 2;
    // padding: 1em 2em;
    width: inherit;
    height: 100%;
    display: flex;
    flex-direction: column;
    .body-nav {
      width: 100%;
      display: flex;
      margin-bottom: 2em;
      .body-link {
        margin-right: 2em;
        font-size: 1.25em;
        color: RGB(200, 170, 110);
        a {
          color: RGB(200, 170, 110);
        }
        &.active,
        &:hover,
        a:hover {
          color: rgb(240, 230, 210);
          transition: 0.1s ease-in-out;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 45%, rgba(255, 255, 255, 0.2) 90%);
        }
      }
    }
    .body-projects {
      height: 100%;
      width: 90%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow-y: auto;
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
    .project-details-view {
      display: flex;
      overflow-y: scroll;
      padding-right: 2em;
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
      .project-details-left {
        width: 75%;
        p {
          margin-bottom: 2em;
        }
        .project-images {
          display: flex;
          flex-wrap: wrap;
          .project-details-img {
            width: 45%;
            border: solid 2px #c89b3c;
            margin: 4px;
          }
        }
      }
      .project-details-right {
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        h2 {
          text-decoration: underline;
          margin-bottom: 1em;
        }
        .skills-group,
        .demo-account-group {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          ul {
            text-decoration: none;
            margin-bottom: auto;
            li {
              margin-bottom: 1em;
            }
          }
          .account-heading {
            font-size: 1.1em;
            margin-bottom: 0.25em;
            font-weight: bold;
            text-decoration: underline;
          }
          .account-value {
            font-size: 0.9em;
            margin-bottom: 0.75em;
          }
        }
        .project-block-buttons {
          height: 3em;
          padding: 0.5em 2em;
          font-size: 0.8em;
          font-weight: bold;
          border: none;
          border: solid 1px #c89b3c;
          background-color: rgb(7, 11, 19);
          color: #fff;
          margin-bottom: 1em;
          width: 100%;
          a,
          a:visited {
            text-decoration: none;
            color: #fff;
          }
          &:hover {
            background-color: rgb(67, 68, 69);
          }
        }
      }
      h1 {
        font-size: 4em;
        margin-bottom: 0.5em;
      }
    }
  }
}
@media screen and (max-width: 1050px) {
  .project-details-view {
    flex-direction: column;
    .project-details-left,
    .project-details-right {
      width: 100% !important;
      .skills-group {
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            width: 50%;
            list-style-type: none;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .body-content {
    padding: 1em !important;
    .body-nav {
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: center;
      .body-link {
        margin-right: 0 !important;
        margin: 12px;
        width: 40%;
        text-align: center;
      }
    }
    .body-projects {
      .project-block {
        min-width: 0 !important;
        width: 100% !important;
        .block-footer {
          flex-direction: column;
          .project-block-buttons {
            width: 100%;
            margin: 4px !important;
          }
        }
      }
    }
  }
}
</style>
