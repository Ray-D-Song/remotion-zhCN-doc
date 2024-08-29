---
slug: makestories
title: MakeStories如何使用Remotion渲染Web Stories
image: /img/makestories.png
---

import {NewMuxVideo} from '../src/components/MuxVideo';

:::note
这是我们新系列文章中的第一篇：成功案例。我们采访了一些我们认为令人鼓舞并成功在其技术栈中实施Remotion的公司和创作者。请告诉我们您的想法！
:::

MakeStories从事[Web Stories](https://stories.google/)业务 - 这是Google推出的一种将故事带到网络的格式。它们直接出现在Google搜索中，为发布者提供了大幅增加受众的机会。

<NewMuxVideo muxId="eB9pPF17zyOrmEas4kwsa3OvTeQV3cDlLQ5U01CHrfcg" style={{
  width: '100%'
}} controls poster="/img/makestories.png"/>

<p align="center"><em style={{fontSize: "0.9em"}}>MakeStories创始人Pratik Ghela解释了他们如何构建Remotion渲染服务以将Web Stories导出为MP4视频。</em></p>

这些故事使用网络技术驱动，这意味着它们是使用HTML和CSS构建的。对于发布者来说，最流行的快速创建Web Stories的工具之一是[MakeStories.io](https://makestories.io/)。我们正在与创始人Pratik Ghela讨论他们如何使用Remotion允许发布者将他们的视频导出为真正的MP4视频。

**嗨，Pratik！快速向我们介绍一下MakeStories。**

MakeStories是一个基于网络的工具，您可以在其中为网站创建故事。为了更好理解：Google有一个名为Web Stories的产品。这些故事在网络上，不同于您从社交媒体了解的故事，您只需拍照并将其上传到您的故事线。这些Web Stories需要用HTML和CSS编写，这是困难的部分。我们构建了一个名为MakeStories的工具，采用了拖放和点击的方法。您可以使用我们简化的方法创建动画。通过使用MakeStories创建您自己的Web Stories，您将获得您故事的必要HTML和CSS代码。这些代码可用于将您的故事放在Google Discover上或您自己的网站上。

**你是如何在 MakeStories 中使用 Remotion 的？**

我们开始为社交媒体构建 Web Story 构建器。出于这个原因，我们正在寻找一个渲染引擎，这就是我们遇到 Remotion 的时候。现在在 MakeStories 上创建的 Web Story 与任何平台兼容 - 包括 Google 和社交媒体。

![MakeStories 导出功能的截图](/img/makestories-export.png)

<p align="center"><em>MakeStories 的客户有两种导出选项 - 要么以 AMP 格式发布到 Google，要么以 MP4 格式发布到社交媒体。</em></p>

**为什么决定在 Remotion 中实现这个功能？**

我们之前遇到的一个大挑战是渲染时间。我们之前使用另一个服务，但那不是一个可扩展的解决方案。即使一个故事有多达十张幻灯片，渲染过程也是流畅的，并且在一分钟内完成，这对我们来说是一个巨大的改进。

考虑到这是一个比我们之前使用的更好的产品，一切对我们来说都很完美。通过 Remotion，我们能够最小化渲染时间，这是我们在实施之前面临的一个重大挑战。

**在集成 Remotion 时是否遇到任何困难？**

Remotion 的集成很简单。网站上的文档很好，为我们提供了整个过程的指导。
对我们来说另一个好处是 Remotion 使用 TypeScript，因为我们之前已经在使用它，所以我们对它已经很熟悉。这让很多事情对我们来说更容易。甚至我们之前遇到的一些次要质量问题现在都已经解决了。
_编辑注：MakeStories 与 Remotion 协商了如何优化其故事的渲染时间和质量。_

---

_您在使用 Remotion 时取得了成功吗？请通过 hi@remotion.dev 与我们分享您的故事！_
