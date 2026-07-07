import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xunlei.downloadprovider',
  name: '迅雷',
  groups: [
    {
      key: 0,
      name: '首页广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[id$="noah_interstitial_close_button"] <<n [id$="noah_interstitial_media_view"]',
          ],
          activityIds: ['com.noah.adn.huichuan.view.HCCommonActivity'],
        },
      ],
    },
  ],
});
