import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.kairos',
  name: '火龙免费漫剧',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '欢迎使用火龙免费漫剧-同意并继续',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="同意并继续"] < @View[clickable=true] -n [text="欢迎使用火龙免费漫剧"] < View < View < View < ComposeView + * [id="android:id/content"]',
          ],
          activityIds: ['.KairosMainJumpActivity'],
        },
      ],
    },
  ],
});
