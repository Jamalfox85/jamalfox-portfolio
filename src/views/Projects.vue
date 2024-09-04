<template lang="">
  <div class="projects_wrapper">
    <div class="projects-main">
      <div class="project-groups">
        <div v-for="(project, index) in projectData" :ref="`project-${index}`" :key="index" class="project-group custom-cursor-active" :class="{ active: index == activeProjectIndex }" @click="setActiveProject(index)">
          <project-block :project="project" />
        </div>
      </div>
    </div>
    <div class="navigation-buttons">
      <div class="carousel-nav" :class="{ disabled: activeProjectIndex == 0 }">
        <img src="@images/design-icons/active-link-arrow.svg" alt="left" @click="setActiveProject(activeProjectIndex - 1)" />
      </div>
      <NButton v-for="(project, index) in projectData" class="nav-button" :class="{ active: activeProjectIndex === index }" size="small" @click="setActiveProject(index)"></NButton>
      <div class="carousel-nav" :class="{ disabled: activeProjectIndex == projectData.length - 1 }">
        <img src="@images/design-icons/active-link-arrow.svg" alt="left" @click="setActiveProject(activeProjectIndex + 1)" class="custom-cursor-pointer" />
      </div>
    </div>
  </div>
</template>
<script>
import ProjectBlock from "../components/ProjectBlock.vue";
import { projects } from "../data/projects";
import { NButton } from "naive-ui";

export default {
  components: { ProjectBlock, NButton },
  data() {
    return {
      toggler: false,
      activeProjectIndex: 1,
      projectData: projects,
    };
  },
  methods: {
    openLink(link) {
      window.open(link);
    },
    setActiveProject(index) {
      this.activeProjectIndex = index;
      const targetSection = this.$refs[`project-${index}`][0];
      targetSection.scrollIntoView({ behavior: "smooth", inline: "center" });
    },
  },
};
</script>
<style lang="scss" scoped>
.projects_wrapper {
  color: rgb(240, 230, 210);
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  .projects-main {
    display: flex;
    flex-grow: 1;
    width: 100%;
    position: relative;
    .project-groups {
      overflow-y: scroll;
      scroll-behavior: smooth;
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      position: absolute;
      .project-group {
        min-width: 45%;
        max-width: 45%;
        border: solid 2px #c89b3c;
        background-color: #a07e3a75;
        border-radius: 8px;
        margin: 2em;
        opacity: 0.25;
        transition: 0.35s;
        &.active {
          opacity: 1;
        }
      }
    }
  }
  .navigation-buttons {
    padding: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    .carousel-nav {
      margin: 0 1em;
      transform: rotate(-90deg);
      cursor: url("@/assets/link.cur"), pointer;
      img {
        width: 3em;
      }
      &:first-child {
        transform: rotate(90deg);
      }
      &.disabled {
        opacity: 0.4;
        pointer-events: none;
      }
    }
    .nav-button {
      margin: 0 1em;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      cursor: url("@/assets/link.cur"), pointer;
      &.active {
        background-color: #c0a267;
      }
    }
  }
}
</style>
