import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.autonavi.minimap',
  name: '高德地图',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '欢迎使用 高德地图-同意并继续',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="欢迎使用 高德地图"][vid="title"] < LinearLayout + [vid="ll_bottom"] > @[text="同意并继续"][vid="agree"][clickable=true]',
          ],
          activityIds: ['com.autonavi.map.activity.NewMapActivity'],
        },
      ],
    },
  ],
});
