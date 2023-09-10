---
title: 更新日志：美化文章样式
date: 2023-09-10 10:59:28
categories:
  - 更新日志
tags:
  - 博客搭建
  - 网站
  - 代码
---

完成了博客基本功能后当然要开始美化一下 UI 啦，重中之重就属博客文章的样式了。


关于样式部分，借鉴~~（抄）~~一下["语雀文档 HTML 格式说明"](https://www.yuque.com/yuque/developer/yr938f)的文章样式, 进行微调修改。


接下来开始水这篇博客，把常见的，可能用得上的都试一试，确保样式的正常，并且介绍一下 Markdown 的基本用法

## Markdown基础语法

### 标识1-6级标题

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

### 段落换行
1. 段落末尾添加两个或以上空格
2. 段落之间空一行

### 字体样式

- 斜体
  - ```_斜体_```
  - ```*斜体*```
- 粗体
  - ```__粗体__```
  - ```**粗体**```
- 斜体加粗
  - ```***斜体加粗***```
  - ```___斜体加粗___```
- 删除线
  - ```~~删除线~~```
- 下划线
  - ```<u>下划线</u>```

## 文章格式展示

### Table 展示
| Item              | In Stock | Price |
| :---------------- | :------: | ----: |
| Python Hat        |   True   | 23.99 |
| SQL Hat           |   True   | 23.99 |
| Codecademy Tee    |  False   | 19.99 |
| Codecademy Hoodie |  False   | 42.99 |

### 代码片段

使用了 highlight 来优化代码块样式

```jsx
function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```

### 写在最后

完成大致了文章样式，支持了代码块，行内代码，表格，列表等等。但是这并不是结束，而是开始，接下来打算一步一步慢慢完善样式，例如代码块的卡片样式，复制功能、展开收缩等等。
