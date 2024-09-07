<template lang="">
  <div class="skills_wrapper">
    <div class="left-panel"></div>
    <div class="main-panel">
      <div class="skill-grid">
        <div v-for="skill in skills" class="skill-card">
          <div class="skill-image">
            <img :src="`./images/skill-icons/${skill.img}.svg`" />
          </div>
          <div class="skill-info">
            <p>{{ skill.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { categories } from "@/data/skills.json";
export default {
  computed: {
    skills() {
      return categories.reduce((acc, category) => {
        return [...acc, ...category.skills];
      }, []);
    },
  },
};
</script>
<style lang="scss">
.skills_wrapper {
  border: solid 2px red;
  width: 100%;
  display: flex;
  .left-panel {
    border: solid 2px cyan;
    width: 20%;
    min-width: 350px;
    height: 100%;
  }
  .main-panel {
    border: solid 4px green;
    position: relative;
    flex-grow: 1;
    .skill-grid {
      border: solid 2px blue;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
      grid-gap: 12px;
      padding: 20px;
      overflow-y: scroll;
      height: 100%;
      width: 100%;
      position: absolute;
      .skill-card {
        text-align: center;
        height: 125px;
        width: 125px;
        display: flex;
        flex-direction: column;
        .skill-image {
          width: 75%;
          min-height: 75%;
          border: solid 1px #c89b3c;
          background-color: #c89b3c25;
          padding: 12px;
          margin: auto;
          display: flex;
          img {
            width: 100%;
          }
        }
        .skill-info {
          color: rgb(240, 230, 210);
          font-size: 16px;
        }
      }
    }
  }
}
</style>
