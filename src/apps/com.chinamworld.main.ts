import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinamworld.main',
  name: '中国建设银行',
  groups: [
    {
      key: 0,
      name: '低碳生活-一键收取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[text="oneKey"][clickable=true]'],
          activityIds: [
            'com.ccb.framework.ui.widget.webview.CcbWebViewActivity',
          ],
        },
      ],
    },
    //首页广告类
    {
      key: 50,
      name: '首页广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[desc="关闭"][vid="close"][clickable=true]'],
          activityIds: ['com.ccb.start.view.startdialog.StartDialogActivity'],
        },
      ],
    },
  ],
});
