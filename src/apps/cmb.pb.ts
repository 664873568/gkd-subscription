import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cmb.pb',
  name: '招商银行',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '开启消息通知-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[vid="close_btn"][clickable=true] - [text="开启消息通知"][vid="title"] <n [vid="upper_layout"] < ViewGroup < [id="android:id/content"]',
          ],
          activityIds: [
            'com.cmb.zh.ui.mbank.im.activitys.messagecenter.NewMsgCenterActivity',
            'null',
          ],
        },
      ],
    },
  ],
});
