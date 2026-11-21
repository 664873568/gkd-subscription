import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmcc.cmvideo',
  name: '咪咕视频',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '欢迎使用咪咕视频-同意并继续',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="同意并继续"][vid="mgguide_page_fourth_dialog_right_btn"] -n [text="欢迎使用咪咕视频"][vid="mgguide_page_fourth_tip_title"]',
          ],
          activityIds: ['com.cmvideo.foundation.guide.GuideActivity'],
        },
      ],
    },
  ],
});
