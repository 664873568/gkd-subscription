import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yy.yyvoicetool',
  name: 'YY语音',
  groups: [
    //天天领金币
    {
      key: 0,
      name: '每天领钱-×',
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@View - [text$="自动关闭"] - ViewFactoryHolder'],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '立即签到',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.MainActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="立即签到"][clickable=true][index=parent.childCount.minus(1)]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@TextView[clickable=true] - * > [text="恭喜获得"] +n [text="我知道了"] + [text="去完成"]',
          ],
        },
      ],
    },
    //每日任务
    {
      key: 10,
      name: '每日任务-领奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.MainActivity'],
      rules: [
        {
          key: 0,
          anyMatches: [
            '[text="每日任务"] + View[index=1] >n @[text="领奖励"][clickable=true]',
            'ViewFactoryHolder >n FrameLayout[clickable=true] >n LinearLayout[clickable=true] > @[text="领奖励"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@TextView[clickable=true] - * [text="恭喜获得"] +n [text="我知道了"] + [text="去完成"]',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '每日任务-去完成-访问YY游仓',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.MainActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[text="每日任务"] +n View[index=3] >n [text="访问YY游仓"] +n @[text="去完成"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          matches: [
            '@ViewFactoryHolder >n [id="fun-root"][clickable=true] >n [desc="YY游仓"]',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '每日任务-去完成-浏览App',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.MainActivity'],
      rules: [
        {
          key: 0,
          anyMatches: [
            '[text="每日任务"] +n View[index=3] >n [text="打开汽车之家APP"] +n @[text="去完成"][clickable=true]',
            '[text="每日任务"] +n View[index=3] >n [text="去一刻相册领积分"] +n @[text="去完成"][clickable=true]',
            '[text="每日任务"] +n View[index=3] >n [text="打开星图金融"] +n @[text="去完成"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="打开"][clickable=true] -n [text="取消"] < * -n ImageButton - [text="提示"]',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '每日任务-去完成-访问指定频道',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.MainActivity'],
      rules: [
        {
          key: 0,
          anyMatches: [
            '[text="每日任务"] +n View[index=3] >n [text="访问指定频道"] +n @[text="去完成"][clickable=true]',
            '[text="每日任务"] +n View[index=3] >n [text="频道内发言"] +n @[text="去完成"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            'ViewFactoryHolder + @View[clickable=true] > [text="说点什么吧..."]', //点击聊天框
          ],
        },
        {
          preKeys: [1,2],
          key: 2,
          matches: [
            'ViewFactoryHolder + @View[clickable=true]', //点击表情
          ],
        },
        {
          preKeys: [0,1,2],
          key: 3,
          matches: [
            'ViewFactoryHolder +n View[clickable=true] >n View[childCount=48] > @View[clickable=true][index=0]', //选择表情
          ],
        },
        {
          preKeys: [0,1,2, 3],
          key: 4,
          matches: [
            'ViewFactoryHolder +n @View[clickable=true] > [text="发送"]', //发送表情
          ],
        },
        {
          preKeys: [0,1,2, 3, 4],
          key: 5,
          action: 'back',
          matches: [
            '@ViewFactoryHolder >n [id="root"][clickable=true] > View[clickable=true]',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '每日任务-去完成-访问指定频道-确定',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.MainActivity'],
      rules: [
        {
          matches: [
            '@[text="确定"][clickable=true] -n [text="取消"] < * -n ImageButton - [text="提示"]',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '每日任务-去完成-去搜索热门频道',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.MainActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[text="每日任务"] +n View[index=3] >n [text="去搜索热门频道"] +n @[text="去完成"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          matches: ['@ComposeView > [desc="删除"] + [text="取消"]'],
        },
      ],
    },
    {
      key: 16,
      name: '每日任务-去完成-收藏任意频道',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.MainActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[text="每日任务"] +n View[index=3] >n [text="收藏任意频道"] +n @[text="去完成"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text^="直播间号"] - View[clickable=true] -2 @View[clickable=true][childCount=1] > [text="收藏"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '[text^="直播间号"] - @View[clickable=true] -2 View[clickable=true][childCount=0]',
          ],
        },
      ],
    },
    {
      key: 17,
      name: '每日任务-去完成-完成应用下载',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[text="每日任务"] +n View >n [text="收藏任意频道"] +n @[text="去完成"][clickable=true]',
          ],
          matches: [
            '@[text="去完成"][clickable=true] - * [text="完成应用下载"]',
          ],
          activityIds: ['.MainActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="取消"][vid="noah_adn_dialog_download_cancel"][clickable=true] -n [text="应用详情"][vid="adn_dialog_download_title"]',
          ],
          activityIds: [
            'com.noah.adn.huichuan.view.ui.dialog.HcDownLoadDialog',
          ],
        },
      ],
    },
    {
      key: 18,
      name: '每日任务-去完成-完成应用浏览',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[text="每日任务"] +n View >n [text="收藏任意频道"] +n @[text="去完成"][clickable=true]',
          ],
          matches: [
            '@[text="去完成"][clickable=true] - * [text="完成页面浏览"]',
          ],
          activityIds: ['.MainActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[vid="noah_reward_click_tips_v2_container"][clickable=true] > [text~="点击跳转后停留\\\\n[0-9]秒立即获奖"][vid="noah_reward_click_tips_v2_countdown"] +n [vid="noah_reward_cta_tip_container"] > [text="立即点击领取"][vid="noah_reward_cta_tip_tv"]',
          ],
          activityIds: [
            'com.noah.adn.huichuan.view.rewardvideo.HCRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 19,
      name: '每日任务-去完成-奖励已发放',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 2,
          actionDelay: 3000,
          matches: [
            '@[text="取消"][vid="noah_adn_dialog_download_cancel"][clickable=true] -n [text="应用详情"][vid="adn_dialog_download_title"]',
          ],
          activityIds: [
            'com.noah.adn.huichuan.view.ui.dialog.HcDownLoadDialog',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '@[vid="noah_hc_close_button"][clickable=true] -n [text="奖励已发放"][vid="noah_hc_countdown_view"]',
          ],
          activityIds: [
            'com.noah.adn.huichuan.view.rewardvideo.HCRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 20,
      name: '每日任务-看视频',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[text="每日任务"] +n View[index=1] >n [text="完成应用浏览"] +n @[text="去完成"][clickable=true]',
            '[text="每日任务"] +n View[index=1] >n [text="完成应用下载"] +n @[text="去完成"][clickable=true]',
          ],
          matches: [
            '[id="mainPanelWrapper"] > @[text="看视频"][clickable=true]',
          ],
          activityIds: ['.MainActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[vid="noah_reward_click_tips_v2_container"][clickable=true] > [text~="点击跳转后停留\\\\n[0-9]秒立即获奖"][vid="noah_reward_click_tips_v2_countdown"] +n [vid="noah_reward_cta_tip_container"] > [text="立即点击领取"][vid="noah_reward_cta_tip_tv"]',
          ],
          activityIds: [
            'com.noah.adn.huichuan.view.rewardvideo.HCRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 21,
      name: '每日任务-看视频-领金币',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.MainActivity'],
      rules: [
        {
          key: 4,
          matches: [
            '[id="mainPanelWrapper"] > @[text="领金币"][clickable=true]',
          ],
        },
        {
          preKeys: [4],
          key: 5,
          matches: [
            '[text~="恭喜获得[0-9]+金币"] - @TextView[clickable=true]',
          ],
        },
      ],
    },
    //看视频
    {
      key: 22,
      name: '看视频-观看广告*秒获得奖励-关闭',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="关闭"][clickable=true] -n [text="已获得奖励"]',
            '@[text="关闭"][clickable=true] -n [text="观看广告获得奖励"]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    //功能应用类
    {
      key: 40,
      name: '版本更新-稍后再说',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="稍后再说"][clickable=true] - [text="立即更新"] -n [text="版本更新"]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 41,
      name: '未成年模式-我知道了',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['[text="我知道了"] < @View -n [text="未成年模式"]'],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 42,
      name: '开启消息通知-取消',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="开启消息通知"] +n * @[text="取消"][clickable=true] +n [text="立即启用"]',
          ],
          activityIds: ['.MainActivity'],
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
          matches: ['@View > [text="跳过"] + [text~="[0-9]"]'],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 51,
      name: '首页广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@View - [text$="s后自动关闭"] - [desc="HomepageActWindowImage"]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
  ],
});
