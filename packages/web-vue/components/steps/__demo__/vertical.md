```yaml
title:
  zh-CN: 竖直步骤条
  en-US: Vertical Steps
```

## zh-CN

竖直方向的步骤条。

---

## en-US

Vertical step bar.

---

```vue
<template>
  <div class="frame-bg">
    <div class="frame-body">
      <div class="frame-aside">
        <a-steps :current="current" direction="vertical">
          <a-step>Succeeded</a-step>
          <a-step>Processing</a-step>
          <a-step>Pending</a-step>
        </a-steps>
      </div>
      <div class="frame-main">
        <div class="main-content">The content of this step.</div>
        <div class="main-bottom">
          <a-button :disabled="current===1" @click="back">
            <icon-left />
            Back
          </a-button>
          <a-button :disabled="current===3" @click="next">
            Next
            <icon-right />
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 1
    }
  },
  methods: {
    back() {
      if (this.current > 1) {
        this.current -= 1
      }
    },
    next() {
      if (this.current < 3) {
        this.current += 1
      }
    }
  }
}
</script>

<style scoped lang="less">
.frame-bg {
  max-width: 780px;
  padding: 40px;
  background: var(--color-fill-2);
}

.frame-body {
  display: flex;
  background: var(--color-bg-2);
}

.frame-aside {
  padding: 24px;
  height: 272px;
  border-right: 1px solid var(--color-border);
}

.frame-main {
  width: 100%;
}

.main-content {
  text-align: center;
  line-height: 200px;
}

.main-bottom {
  display: flex;
  justify-content: center;

  button {
    margin: 0 20px;
  }
}
</style>
```
