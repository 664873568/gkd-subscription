import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.duowan.mobile',
  name: 'YY',
  groups: [
    {
      key: 0,
      name: '打开通知权限-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[vid="iv_close"] <<n * [text="打开通知权限"]'],
          activityIds: ['.basemedia.watchlive.activity.LiveTemplateActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '发现新版本-立即下载-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[vid="btn_cancel"] <<n * [vid="btn_ok"]'],
          activityIds: ['com.yy.mobile.ui.common.JsSupportWebAcitivity'],
        },
      ],
    },
  ],
});
