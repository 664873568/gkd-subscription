import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yy.yyvoicetool',
  name: 'YY语音',
  groups: [
    //每日任务
    {
      key: 0,
      name: '每日任务-领奖励',
      matchRoot: true,
      actionMaximum: 5,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="领奖励"] <<n * [text="每日任务"]'],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '每日任务-我知道了',
      matchRoot: true,
      actionMaximum: 5,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="我知道了"] -4 [text="恭喜获得"]'],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '每日任务-领奖励-我知道了',
      matchRoot: true,
      actionMaximum: 5,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@[text="领奖励"] <<n * [text="每日任务"]'],
          activityIds: ['.MainActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[text="我知道了"] -4 [text="恭喜获得"]'],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '每日任务-限时任务',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: ['@[desc="YY游仓"] <<n ViewFactoryHolder'],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '每日任务-打开',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="打开"] -n [text="取消"] < * -n [text="提示"]',
            '@[text="确定"] -n [text="取消"] < * -n [text="提示"]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '每日任务-搜索',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 1000,
          matches: ['@[text="取消"] - [desc="删除"]'],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '每日任务-完成应用浏览',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[text="去领奖"][clickable=true] - * [text="完成应用浏览"]',
          ],
          activityIds: ['.MainActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[text="关闭"][clickable=true] -n [text="已获得奖励"]'],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    //看视频
    {
      key: 10,
      name: '看视频',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
          matches: [
            '@[text="看视频"][clickable=true] - [text^="看视频最高赚"]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 11,
      name: '看视频-领金币',
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
      ],
    },
    {
      key: 12,
      name: '每日任务-看视频-点击跳转后停留 *秒立即获奖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[vid="noah_reward_click_tips_v2_container"][clickable=true] > [text~="点击跳转后停留\\n[0-9]秒立即获奖"][vid="noah_reward_click_tips_v2_countdown"] +n * [text="立即点击领取"][vid="noah_reward_cta_tip_tv"]',
          ],
          activityIds: [
            'com.noah.adn.huichuan.view.rewardvideo.HCRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '每日任务-看视频-取消-奖励已发放',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 2000,
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
            '@[vid="noah_hc_close_button"][clickable=true] -2 [text="奖励已发放"][vid="noah_hc_countdown_view"]',
          ],
          activityIds: [
            'com.noah.adn.huichuan.view.rewardvideo.HCRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '每日任务-看视频-奖励已发放-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[vid="noah_hc_close_button"][clickable=true] -2 [text="奖励已发放"][vid="noah_hc_countdown_view"]',
          ],
          activityIds: [
            'com.noah.adn.huichuan.view.rewardvideo.HCRewardVideoActivity',
          ],
        },
      ],
    },
    //连续签到
    {
      key: 20,
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
      key: 21,
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
