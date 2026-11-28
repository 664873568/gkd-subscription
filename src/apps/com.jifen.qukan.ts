import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jifen.qukan',
  name: '趣头条',
  groups: [
    {
      key: 0,
      name: '限时福利-直接签到-看视频/做任务',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[vid="ll_bootom"] - @[vid="tv_countdown"][clickable=true] -n [vid="iv_close"] - [vid="xad_dialog_image"] < RelativeLayout < RelativeLayout < [id="android:id/content"]',
          ],
          activityIds: ['com.jifen.qkbase.main.MainActivity'],
        },
      ],
    },
    //功能应用类
    {
      key: 40,
      name: '欢迎使用趣头条-同意',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="同意"][vid="tv_positive"][clickable=true] -n [text="欢迎使用趣头条"][vid="tv_title"]',
          ],
          activityIds: ['.SplashActivity', 'null'],
        },
      ],
    },
    {
      key: 41,
      name: '立即更新-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[vid="qkui_dialog_btn_negative_ver"][clickable=true] < FrameLayout + * [text="立即更新"][vid="qkui_dialog_btn_positive_ver"]',
          ],
          activityIds: ['com.jifen.qkbase.main.MainActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 50,
      name: '首页广告-跳过',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[vid="tv_splash_ad_skip"][clickable=true] - [vid="img_splash_ad"]',
            '@[text^="跳过"][clickable=true] <n FrameLayout < [vid="img_splash_ad"]',
            '[text="跳过"][vid="fanti_ad_txt_skip"] < [vid="fanti_ad_count_and_skip_container"] < @[desc="CLOSE_AD"][vid="fanti_ad_count_and_skip_container_ex"][clickable=true] <n [vid="img_splash_ad"]',
          ],
          activityIds: ['com.jifen.qkbase.main.MainActivity', 'null'],
        },
      ],
    },
  ],
});
