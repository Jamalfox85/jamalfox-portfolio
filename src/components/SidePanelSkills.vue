<template lang="">
  <div class="sidepanel-skills-wrapper">
    <n-collapse :default-expanded-names="['Languages', 'Frameworks', 'Tools', 'Other']">
      <n-collapse-item v-for="category in skills.categories" :title="category.name" :name="category.name">
        <div class="skill-block" v-for="skill in category.skills">
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
      </n-collapse-item>
    </n-collapse>
  </div>
</template>
<script>
import { NCollapse, NCollapseItem } from "naive-ui";
import skills from "../data/skills.json";
export default {
  components: {
    NCollapse,
    NCollapseItem,
  },
  data() {
    return {
      skills,
    };
  },
};
</script>
<style lang="scss">
.sidepanel-skills-wrapper {
  .n-collapse {
    padding: 12px;
    .n-collapse-item__header-main {
      background-color: #c89b3c;
      color: black;
      font-weight: bold !important;
    }
    .n-collapse-item:not(:first-child) {
      border-top: none;
    }
  }

  .skill-block {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0.5em;
    margin-bottom: 0.25em;
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
        color: rgb(170, 160, 140) !important;
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
</style>
