import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.unionpay',
  name: '云闪付',
  groups: [
    {
      key: 0,
      name: 'U惠湖北-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: [
        '.liteapp.app.UPLiteAppActivity1',
        '.liteapp.app.UPLiteAppActivity2',
        '.liteapp.app.UPLiteAppActivity3',
      ],
      rules: [
        {
          excludeMatches: ['[text="我的积点"][vid="tv_title_text"]'],
          matches: [
            '[vid="view_content_container"] >n View[index=1][childCount=1] >n @ImageButton',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '玩转中心',
      matchRoot: true,
      matchDelay: 2000,
      resetMatch: 'activity',
      activityIds: [
        '.liteapp.app.UPLiteAppActivity1',
        '.liteapp.app.UPLiteAppActivity2',
        '.liteapp.app.UPLiteAppActivity3',
      ],
      rules: [
        {
          key: 0,
          anyMatches: [
            '[id="root-router-view"] >n @[text="签到成功"][clickable=true]',
            '[id="root-router-view"] >n @[text="去抽奖"][clickable=true]',
            'Image + * > @[text="去抽奖"][clickable=true] + TextView[clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 1000,
          matches: [
            '[id="root-router-view"] >n @[text~="剩余 [1-9]次 抽奖机会"][clickable=true]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 1000,
          anyMatches: [
            'Image < @View[clickable=true] -n [text="去查看"][clickable=true]',
            'Image < @View[clickable=true] -n [text="开心收下"][clickable=true]',
          ],
        },
        {
          key: 3,
          actionDelay: 1000,
          matches: ['AlertDialog > View > [text="知道了"][clickable=true]'],
        },
      ],
    },
  ],
});
