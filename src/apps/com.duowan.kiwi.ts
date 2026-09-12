import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.duowan.kiwi',
  name: '虎牙直播',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '用户协议及隐私政策概要-同意',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="用户协议及隐私政策概要"][vid="hyui_dialog_title"] +n [vid="hyui_dialog_dialog_btn"] > @[text="同意"][vid="hyui_dialog_button_positive"][clickable=true]',
          ],
          activityIds: ['com.duowan.hypravacypolicy.ui.PrivacyDlgActivity'],
        },
      ],
    },
    {
      key: 41,
      name: '开启通知-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[vid="iv_close"][clickable=true] + [vid="ll_bottom_layout"] > [text="打开推送通知"][vid="push_popup_first_txt"] +n [text="开启通知"][vid="push_popup_confirm_layout"]',
          ],
          activityIds: [
            'com.huya.kiwi.crossplatform.common.webview.KiwiOakWebActivity',
          ],
        },
      ],
    },
    {
      key: 42,
      name: '未成年人模式-我知道了',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="未成年人模式"][vid="hyui_dialog_title"] < [vid="hyui_dialog_title_container"] +n [vid="hyui_dialog_dialog_btn"] > @[text="我知道了"][vid="hyui_dialog_button_positive"][clickable=true]',
          ],
          activityIds: ['.homepage.Homepage'],
        },
      ],
    },
    //首页广告类
    {
      key: 50,
      name: '首页广告-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[text="跳过"] <<n [vid="ad_aplash"]'],
          activityIds: ['.homepage.Homepage'],
        },
      ],
    },
  ],
});
