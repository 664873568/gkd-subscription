import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.unionpay',
  name: '云闪付',
  groups: [
    {
      key: 0,
      name: 'U惠湖北-×',
      forcedTime: 60000,
      matchRoot: true,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: ['.liteapp.app.UPLiteAppActivity'],
      rules: [
        {
          matches: [
            'View[getChild(0).getChild(0).name$="ImageButton"] - * > View > @ImageButton[clickable=true]',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '玩转中心',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.liteapp.app.UPLiteAppActivity'],
      rules: [
        {
          key: 0,
          anyMatches: [
            '[id="root-router-view"] >n @[text="签到成功"][clickable=true]',
            '[id="root-router-view"] >n @[text="去抽奖"][clickable=true]',
            '[id="root-router-view"] >n @[text="领取"][clickable=true]',
            'Image + * > @[text="去抽奖"][clickable=true] + TextView[clickable=true]',
          ],
        },
        {
          key: 1,
          matches: [
            '[id="root-router-view"] >n @[text~="剩余 [1-9]次 抽奖机会"][clickable=true]',
          ],
        },
        {
          key: 2,
          actionDelay: 1000,
          anyMatches: [
            'Image < @View[clickable=true] -n [text="去查看"][clickable=true]',
            'Image < @View[clickable=true] -n [text="开心收下"][clickable=true]',
          ],
        },
        {
          key: 3,
          actionDelay: 2000,
          matches: ['AlertDialog > View > [text="知道了"][clickable=true]'],
        },
        {
          key: 4,
          matches: [
            '[id="root-router-view"] > View > View > TextView + @TextView[clickable=true]', //点亮商铺 全国排名赛最高赢300元立减券-立即参加-×
          ],
        },
      ],
    },
    //功能应用类
    {
      key: 40,
      name: '用户隐私授权提示-同意',
      forcedTime: 60000,
      matchRoot: true,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: ['.liteapp.app.UPLiteAppActivity'],
      rules: [
        {
          matches: [
            '[text="用户隐私授权提示"][vid="tv_dialog_title"] < [vid="view_dialog_title_container"] +n [vid="view_dialog_btn_container"] > [text="拒绝"][vid="btn_cancel"] + @[text="同意"][vid="btn_ok"][clickable=true]',
          ],
        },
      ],
    },
  ],
});
