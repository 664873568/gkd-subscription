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
      matchTime: 10000,
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
      name: '连续签到-立即签到',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="立即签到"] <<n * [text="连续签到"]'],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    //每日任务
    {
      key: 10,
      name: '每日任务-去完成-取消',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 3000,
          matches: [
            'ViewFactoryHolder >n FrameLayout[clickable=true] >n LinearLayout[clickable=true] >n @[text="去完成"][clickable=true] - * [text="完成应用下载"]',
          ],
          activityIds: ['.MainActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 1000,
          matches: [
            '@[text="取消"][vid="noah_adn_dialog_download_cancel"][clickable=true] -n [text="应用详情"][vid="adn_dialog_download_title"]',
          ],
          activityIds: [
            'com.noah.adn.huichuan.view.ui.dialog.HcDownLoadDialog',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 1000,
          matches: [
            'ViewFactoryHolder >n FrameLayout[clickable=true] >n LinearLayout[clickable=true] > @[text="领奖励"]',
          ],
          activityIds: ['.MainActivity'],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          actionDelay: 1000,
          matches: [
            '@[text="我知道了"][clickable=true] + [text="去完成"][clickable=true] -n [text="恭喜获得"]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 11,
      name: '每日任务-去完成-点击',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 3000,
          anyMatches: [
            'ViewFactoryHolder >n FrameLayout[clickable=true] >n LinearLayout[clickable=true] >n @[text="去完成"][clickable=true] - * [text="完成应用浏览"]',
            'ViewFactoryHolder >n FrameLayout[clickable=true] >n LinearLayout[clickable=true] >n @[text="去完成"][clickable=true] - * [text="完成应用下载"]',
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
      key: 12,
      name: '每日任务-取消-奖励已发放',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 3000,
          matches: [
            '@[text="取消"][vid="noah_adn_dialog_download_cancel"][clickable=true] -n [text="应用详情"][vid="adn_dialog_download_title"]',
          ],
          activityIds: [
            'com.noah.adn.huichuan.view.ui.dialog.HcDownLoadDialog',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[vid="noah_hc_close_button"][clickable=true] -n [text="奖励已发放"][vid="noah_hc_countdown_view"]',
          ],
          activityIds: [
            'com.noah.adn.huichuan.view.rewardvideo.HCRewardVideoActivity',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 1000,
          matches: [
            'ViewFactoryHolder >n FrameLayout[clickable=true] >n LinearLayout[clickable=true] > @[text="领奖励"]',
          ],
          activityIds: ['.MainActivity'],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          actionDelay: 1000,
          matches: [
            '@[text="我知道了"][clickable=true] + [text="去完成"][clickable=true] -n [text="恭喜获得"]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 13,
      name: '每日任务-领奖励-我知道了',
      matchRoot: true,
      actionMaximum: 5,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          matches: [
            'ViewFactoryHolder >n FrameLayout[clickable=true] >n LinearLayout[clickable=true] > @[text="领奖励"]',
          ],
          activityIds: ['.MainActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 1000,
          matches: [
            '@[text="我知道了"][clickable=true] + [text="去完成"][clickable=true] -n [text="恭喜获得"]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 14,
      name: '每日任务-去完成',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 3000,
          anyMatches: [
            '@[text="去完成"][clickable=true] -n [text="打开汽车之家APP"]',
            '@[text="去完成"][clickable=true] -n [text="去一刻相册领积分"]',
            '@[text="去完成"][clickable=true] -n [text="打开星图金融"]',
          ],
          activityIds: ['.MainActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 1000,
          matches: [
            '@[text="打开"][clickable=true] -n [text="取消"] < * -n ImageButton - [text="提示"]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 15,
      name: '每日任务-去完成-访问YY游仓',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 3000,
          matches: ['@[text="去完成"][clickable=true] -n [text="访问YY游仓"]'],
          activityIds: ['.MainActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          actionDelay: 1000,
          matches: [
            '@ViewFactoryHolder >n [id="fun-root"][clickable=true] >n [desc="YY游仓"]',
          ],
          activityIds: ['.MainActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 1000,
          matches: [
            'ViewFactoryHolder >n FrameLayout[clickable=true] >n LinearLayout[clickable=true] > @[text="领奖励"]',
          ],
          activityIds: ['.MainActivity'],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          actionDelay: 1000,
          matches: [
            '@[text="我知道了"][clickable=true] + [text="去完成"][clickable=true] -n [text="恭喜获得"]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 16,
      name: '每日任务-去完成-访问指定频道',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 3000,
          anyMatches: [
            '@[text="去完成"][clickable=true] -n [text="访问指定频道"]',
            '@[text="去完成"][clickable=true] -n [text="频道内发言"]',
          ],
          activityIds: ['.MainActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 1000,
          matches: [
            'ViewFactoryHolder + @View[clickable=true] > [text="说点什么吧..."]', //点击聊天框
          ],
          activityIds: ['.MainActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 1000,
          matches: [
            'ViewFactoryHolder + @View[clickable=true]', //点击表情
          ],
          activityIds: ['.MainActivity'],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          actionDelay: 1000,
          matches: [
            'ViewFactoryHolder +n View[clickable=true] >n View[childCount=48] > @View[clickable=true][index=0]', //选择表情
          ],
          activityIds: ['.MainActivity'],
        },
        {
          preKeys: [0, 1, 2, 3],
          key: 4,
          actionDelay: 1000,
          matches: [
            'ViewFactoryHolder +n @View[clickable=true] > [text="发送"]', //发送表情
          ],
          activityIds: ['.MainActivity'],
        },
        {
          preKeys: [0, 1, 2, 3, 4],
          key: 5,
          action: 'back',
          actionDelay: 1000,
          matches: [
            '@ViewFactoryHolder >n [id="root"][clickable=true] > View[clickable=true]',
          ],
          activityIds: ['.MainActivity'],
        },
        {
          preKeys: [0, 1, 2, 3, 4, 5],
          key: 6,
          actionDelay: 1000,
          matches: [
            'ViewFactoryHolder >n FrameLayout[clickable=true] >n LinearLayout[clickable=true] > @[text="领奖励"]',
          ],
          activityIds: ['.MainActivity'],
        },
        {
          preKeys: [0, 1, 2, 3, 4, 5, 6],
          key: 7,
          actionDelay: 1000,
          matches: [
            '@[text="我知道了"][clickable=true] + [text="去完成"][clickable=true] -n [text="恭喜获得"]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 17,
      name: '每日任务-确定',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="确定"][clickable=true] -n [text="取消"] < * -n ImageButton - [text="提示"]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 18,
      name: '每日任务-去完成-去搜索热门频道',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 3000,
          matches: [
            '@[text="去完成"][clickable=true] -n [text="去搜索热门频道"]',
          ],
          activityIds: ['.MainActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          actionDelay: 1000,
          matches: ['@ComposeView > [desc="删除"] + [text="取消"]'],
          activityIds: ['.MainActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 1000,
          matches: [
            'ViewFactoryHolder >n FrameLayout[clickable=true] >n LinearLayout[clickable=true] > @[text="领奖励"]',
          ],
          activityIds: ['.MainActivity'],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          actionDelay: 1000,
          matches: [
            '@[text="我知道了"][clickable=true] + [text="去完成"][clickable=true] -n [text="恭喜获得"]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 19,
      name: '每日任务-去完成-收藏任意频道',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 3000,
          matches: [
            '@[text="去完成"][clickable=true] -n [text="收藏任意频道"]',
          ],
          activityIds: ['.MainActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 1000,
          matches: [
            'ViewFactoryHolder >n FrameLayout[clickable=true] >n LinearLayout[clickable=true] > @[text="领奖励"]',
          ],
          activityIds: ['.MainActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 1000,
          matches: [
            '@[text="我知道了"][clickable=true] + [text="去完成"][clickable=true] -n [text="恭喜获得"]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    //看视频
    {
      key: 20,
      name: '看视频-领金币-点击领',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 4000,
          matches: [
            '@[text="看视频"][clickable=true] - [text^="看视频最高赚"]',
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
      name: '看视频-领金币-继续领',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[text="领金币"][clickable=true] - [text^="看视频最高赚"]',
          ],
          activityIds: ['.MainActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text~="继续领 [0-9]00 金币 \\\\(最高\\\\)"][clickable=true] -2 [text~="恭喜获得[0-9]+金币"]',
          ],
          activityIds: ['.MainActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
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
      key: 22,
      name: '看视频-取消-奖励已发放',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 3000,
          matches: [
            '@[text="取消"][vid="noah_adn_dialog_download_cancel"][clickable=true] - [text="应用详情"][vid="adn_dialog_download_title"]',
          ],
          activityIds: [
            'com.noah.adn.huichuan.view.ui.dialog.HcDownLoadDialog',
          ],
        },
        {
          preKeys: [0],
          key: 1,
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
      key: 23,
      name: '看视频-观看广告*秒获得奖励-关闭',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
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
