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
      rules: [
        {
          matches: [
            '@ImageButton <<2 View[index=1][childCount=1] <<n [vid="view_content_container"]',
          ],
          activityIds: [
            '.liteapp.app.UPLiteAppActivity1',
            '.liteapp.app.UPLiteAppActivity2',
            '.liteapp.app.UPLiteAppActivity3',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '玩转中心-幸运扭蛋机',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[id="root-router-view"] @[text~="剩余 [1-9]次 抽奖机会"][clickable=true]',
          ],
          activityIds: [
            '.liteapp.app.UPLiteAppActivity1',
            '.liteapp.app.UPLiteAppActivity2',
            '.liteapp.app.UPLiteAppActivity3',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '玩转中心-去抽奖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            'Image + * > @[text="去抽奖"][clickable=true] + TextView[clickable=true]',
          ],
          activityIds: [
            '.liteapp.app.UPLiteAppActivity1',
            '.liteapp.app.UPLiteAppActivity2',
            '.liteapp.app.UPLiteAppActivity3',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[id="root-router-view"] @[text~="剩余 [1-9]次 抽奖机会"][clickable=true]',
          ],
          activityIds: [
            '.liteapp.app.UPLiteAppActivity1',
            '.liteapp.app.UPLiteAppActivity2',
            '.liteapp.app.UPLiteAppActivity3',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '玩转中心-签到抽大奖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[id="root-router-view"] @[text~="剩余 [1-9]次 抽奖机会"][clickable=true]',
          ],
          activityIds: [
            '.liteapp.app.UPLiteAppActivity1',
            '.liteapp.app.UPLiteAppActivity2',
            '.liteapp.app.UPLiteAppActivity3',
          ],
        },
      ],
    },
  ],
});
