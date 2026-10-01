import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinamworld.main',
  name: '中国建设银行',
  groups: [
    //任务中心
    {
      key: 0,
      name: '任务中心-签到有礼',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.nantian.iBank.ui.activity.container.ProgramSingleWindowActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[desc="签到有礼楼层"] +n @[desc="立即签到 按钮"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[getChild(childCount.minus(1)).text="立即使用"] + @[desc="关闭 按钮"][clickable=true]',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '日常任务-去完成',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '[id="Normaltask"] > [desc="精选任务楼层"] +n [text~="查看.*|了解.*"] +(1,2,3) View > View > @[text="去完成"][clickable=true]',
          ],
          activityIds: ['com.nantian.iBank.ui.activity.container.ProgramSingleWindowActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="地理位置信息授权"][vid="tv_dlg_title"] +n * > [text="允许"][vid="dlg_right_tv"]',
          ],
          activityIds: ['com.ccb.framework.ui.widget.webview.CcbWebViewActivity'],
        },
        {
          preKeys: [0,1],
          key: 2,
          matches: [
            '@[desc~="关闭|返回"][vid="web_back"][clickable=true] < [vid="web_title_container"]',
          ],
          activityIds: ['com.ccb.framework.ui.widget.webview.CcbWebViewActivity'],
        },
        {
          preKeys: [0],
          key: 3,
          matches: [
            'Image < @View[clickable=true] + [text="速盈"]',
          ],
          activityIds: ['com.nantian.iBank.ui.activity.container.ProgramSingleWindowActivity'],
        },
      ],
    },
    {
      key: 10,
      name: '低碳生活-一键收取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[text="oneKey"][clickable=true]'],
          activityIds: ['com.ccb.framework.ui.widget.webview.CcbWebViewActivity'],
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
