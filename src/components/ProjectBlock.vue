<template lang="">
  <div>
    <div class="project-block" v-for="project in projectData">
      <div class="block-left">
        <p class="project-title">{{ project.title }}</p>
        <div class="project-buttons">
          <n-button class="project-block-buttons" v-if="project.demo">
            <a :href="project.demo" target="_blank">Demo</a>
          </n-button>
          <n-button class="project-block-buttons details-button" @click="setCurrentProject(project.projectId)">Details</n-button>
          <n-button class="project-block-buttons" v-if="project.github">
            <a :href="project.github" target="_blank">Github</a>
          </n-button>
        </div>
      </div>
      <div class="block-right">
        <img class="block-img" :src="require(`../assets/images/${project.ss[0]}.png`)" />
      </div>
    </div>
  </div>
</template>
<script>
import { projects } from "../services/projectsService";
import { NButton } from "naive-ui";
export default {
  components: { NButton },
  data() {
    return {};
  },
  setup() {
    let projectData = projects;
    return { projectData };
  },
};
</script>
<style lang="scss">
.project-block {
  height: 250px;
  width: 97.5%;
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  position: relative;
  border: solid 2px #c89b3c;
  padding: 1em;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.25);
  .block-left {
    width: 70%;
    display: flex;
    flex-direction: column;
    .project-title {
      font-size: 2em;
      margin-bottom: 1em;
    }
    .project-buttons {
    }
  }
  .block-right {
    width: 50%;
    display: flex;
    img {
      width: 100%;
    }
  }
}
</style>
