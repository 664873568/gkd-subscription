import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jtjr99.jiayoubao',
  name: '加油宝',
  groups: [
    //每日赚积分
    {
      key: 0,
      name: '每日赚积分-每日签到',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text*="签到成功"] + [text$="积分"] + @[text="我知道了"][clickable=true]',
          ],
          activityIds: ['.base.BrowserFullScreen'],
        },
      ],
    },
    {
      key: 1,
      name: '每日赚积分-评论',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.base.BrowserFullScreen'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[text*="签到成功"] + [text$="积分"] + @[text="我知道了"][clickable=true]',
            '[id="container"] > [getChild(0).text="每日任务"] +n [text^="评论3条"] + [text=" 赚3积分"] + [text="待领取"]',
          ],
          actionDelay: 2000,
          matches: [
            '[id="container"] > [getChild(0).text="每日任务"] +n [text^="评论3条"] + [text=" 赚3积分"] + [text="去完成"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 2000,
          matches: [
            '[text="热门话题"] +n View > View > View > @View[clickable=true] > [desc="点赞"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          actionDelay: 2000,
          matches: [
            '[text="热门话题"] +n View > View > View > @View[clickable=true] > [desc="回复"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          actionDelay: 2000,
          matches: [
            '[id="h5-product_mod"] > [id="header"] +n [text^="评论"] +n View > @EditText[clickable=true]',
          ],
        },
        {
          preKeys: [3],
          key: 4,
          position: {
            left: 'width * 0.53',
            top: 'height * 1.3',
          },
          actionDelay: 2000,
          matches: [
            '[id="h5-product_mod"] > [id="header"] +n [text^="评论"] +n View > View > @EditText[clickable=true]',
          ],
        },
        {
          preKeys: [4],
          key: 5,
          position: {
            left: 'width * 0.25',
            top: 'height * 1.7',
          },
          actionDelay: 2000,
          matches: [
            '[id="h5-product_mod"] > [id="header"] +n [text^="评论"] +n View > View > @EditText[clickable=true]',
          ],
        },
        {
          preKeys: [5],
          key: 6,
          actionDelay: 2000,
          matches: [
            '[id="h5-product_mod"] > [id="header"] +n [text^="评论"] +n View > View > [text="666"] +n @[text="发布"][clickable=true]',
          ],
        },
        {
          preKeys: [6],
          key: 7,
          actionDelay: 2000,
          matches: [
            '[id="h5-product_mod"] > [id="header"] > [id="headerNav"] > View > View > @View[clickable=true] > [id="headerLeft"] > [text=""]',
          ],
        },
        {
          preKeys: [7],
          key: 8,
          actionDelay: 2000,
          matches: [
            '[id="h5-product_mod"] > [id="index-container"] > [id="header"] > [id="headerNav"] > View > View > @View[clickable=true] > [id="headerLeft"] > [text=""],
          ],
        },
        {
          key: 9,
          actionDelay: 2000,
          matches: [
            '[id="container"] > [getChild(0).text="每日任务"] +n [text^="评论3条"] + [text=" 赚3积分"] + [text="待领取"]',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '每日赚积分-点赞',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.base.BrowserFullScreen'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[id="container"] > [getChild(0).text="每日任务"] +n [text^="评论3条"] + [text=" 赚3积分"] + [text~="去完成|待领取"]',
          ],
          actionDelay: 2000,
          matches: [
            '[id="container"] > [getChild(0).text="每日任务"] +n [text^="点赞3条"] + [text=" 赚3积分"] + [text="去完成"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 2000,
          matches: [
            '[text="热门话题"] +n View > View > View > @View[clickable=true] > [desc="点赞"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          actionDelay: 2000,
          matches: [
            '[id="h5-product_mod"] > [id="header"] > [id="headerNav"] > View > View > @View[clickable=true] > [id="headerLeft"] > [text=""]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          actionDelay: 2000,
          matches: [
            '[id="h5-product_mod"] > [id="index-container"] > [id="header"] > [id="headerNav"] > View > View > @View[clickable=true] > [id="headerLeft"] > [text=""],
          ],
        },
        {
          key: 4,
          actionDelay: 2000,
          matches: [
            '[id="container"] > [getChild(0).text="每日任务"] +n [text^="点赞3条"] + [text=" 赚3积分"] + [text="待领取"]',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '每日赚积分-答题',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.base.BrowserFullScreen', '.base.Browser'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[id="container"] > [getChild(0).text="每日任务"] +n [text^="点赞3条"] + [text=" 赚3积分"] + [text~="去完成|待领取"]',
          ],
          actionDelay: 2000,
          matches: [
            '[id="container"] > [getChild(0).text="每日任务"] +n [text="每日正确答题赢积分"] + [text=" 赚2积分"] + [text="去完成"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 2000,
          matches: ['[text="每日答题奖励"] +n @[text^="A"][clickable=true]'],
        },
        {
          preKeys: [1],
          key: 2,
          actionDelay: 2000,
          matches: [
            '[text="恭喜你答对了"] +n @[text="我知道了"][clickable=true]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          actionDelay: 2000,
          matches: [
            '[vid="iv_back"] < @[vid="view_back"][clickable=true] + [text="涨知识赚积分答题活动"][vid="txt_title"]',
          ],
        },
        {
          key: 4,
          actionDelay: 2000,
          matches: [
            '[id="container"] > [getChild(0).text="每日任务"] +n [text="每日正确答题赢积分"] + [text=" 赚2积分"] + [text="待领取"]',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '每日赚积分-冲榜',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.base.BrowserFullScreen', '.base.Browser'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[id="container"] > [getChild(0).text="每日任务"] +n [text="每日正确答题赢积分"] + [text=" 赚3积分"] + [text~="去完成|待领取"]',
          ],
          actionDelay: 2000,
          matches: [
            '[id="container"] > [getChild(0).text="每日任务"] +n [text="参与冲榜赢豪礼活动15s"] + [text=" 赚2积分"] + [text="去完成"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 16000,
          matches: [
            '[id="container"] > View > TextView + @View[clickable=true] > [text=""]',
          ],
        },
        {
          key: 2,
          matches: [
            '[id="container"] > [getChild(0).text="每日任务"] +n [text="参与冲榜赢豪礼活动15s"] + [text=" 赚2积分"] + [text="待领取"]',
          ],
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
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['[text~="跳过[0-9]s"][vid="btn_skip"][clickable=true]'],
          activityIds: ['.module.ucenter.enter.SplashScreenActivity'],
        },
      ],
    },
    {
      key: 51,
      name: '首页广告-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[vid="iv_close"][clickable=true]'],
          activityIds: ['.module.home.MainTabActivity'],
        },
      ],
    },
    {
      key: 52,
      name: '广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[vid="iv_close"][clickable=true]'],
          activityIds: ['.module.ucenter.enter.SplashScreenActivity'],
        },
      ],
    },
  ],
});
