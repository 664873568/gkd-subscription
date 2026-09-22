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
      key: 2,
      name: '每日任务-领奖励',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.MainActivity'],
      rules: [
        {
          key: 0,
          anyMatches: [
            '[text="每日任务"] +n View > View > @[text="领奖励"][clickable=true]',
            'ViewFactoryHolder >n LinearLayout[clickable=true] > @[text="领奖励"]',
          ],
        },
        {
          key: 1,
          matches: [
            '@TextView[clickable=true] - [getChild(0).text="恭喜获得"] > [text="我知道了"] + [text="去完成"]',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '每日任务-去完成',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.MainActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[text="每日任务"] +n View > View > @[text="领奖励"][clickable=true]',
            '@TextView[clickable=true] - [getChild(0).text="恭喜获得"] > [text="我知道了"] + [text="去完成"]',
          ],
          actionDelay: 2000,
          matches: [
            '[text="每日任务"] +n View[getChild(0).getChild(0).text!~="访问指定频道|频道内发言|收藏任意频道|赠送红贝壳礼物"] >n @[text="去完成"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 1000,
          matches: [
            '@[text$="打开"][clickable=true] -n [text="取消"] < * -n ImageButton - [text="提示"]', //浏览App
          ],
        },
        {
          preKeys: [0],
          key: 2,
          action: 'back',
          actionDelay: 1000,
          matches: [
            'ViewFactoryHolder >n @[id="fun-root"][clickable=true] >n [desc="YY游仓"]', //访问YY游仓
          ],
        },
        {
          preKeys: [0],
          key: 3,
          action: 'back',
          actionDelay: 1000,
          matches: ['@ComposeView >n [desc="删除"] + [text="取消"]'], //去搜索热门频道
        },
      ],
    },
    {
      key: 4,
      name: '每日任务-去完成-收藏任意频道',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.MainActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '@TextView[clickable=true] - [getChild(0).text="恭喜获得"] > [text="我知道了"] + [text="去完成"]',
            '[text="每日任务"] +n View[getChild(0).getChild(0).text!~="访问指定频道|频道内发言|收藏任意频道|赠送红贝壳礼物"] >n @[text="去完成"][clickable=true]',
          ],
          actionDelay: 2000,
          matches: [
            '[text="每日任务"] +n View[getChild(0).getChild(0).text="收藏任意频道"] >n @[text="去完成"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 1000,
          matches: [
            '[text^="直播间号"] - View[clickable=true] -2 @View[clickable=true][childCount=1] > [text="收藏"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 1000,
          matches: [
            '[text^="直播间号"] - @View[clickable=true] -2 View[clickable=true][childCount=0]',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '每日任务-去完成-访问指定频道',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.MainActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '@TextView[clickable=true] - [getChild(0).text="恭喜获得"] > [text="我知道了"] + [text="去完成"]',
            '[text="每日任务"] +n View[getChild(0).getChild(0).text!~="访问指定频道|频道内发言|赠送红贝壳礼物"] >n @[text="去完成"][clickable=true]',
          ],
          actionDelay: 2000,
          matches: [
            '[text="每日任务"] +n View[getChild(0).getChild(0).text~="访问指定频道|频道内发言"] >n  @[text="去完成"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="提示"] + ImageButton +n [getChild(0).text="取消"] > @[text="确定"][clickable=true]', //确定跳转至新频道?
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 2000,
          matches: [
            'ViewFactoryHolder + @View[clickable=true] > [text="说点什么吧..."]', //点击聊天框
          ],
        },
        {
          preKeys: [2],
          key: 3,
          actionDelay: 2000,
          matches: [
            'ViewFactoryHolder + @View[clickable=true]', //点击表情
          ],
        },
        {
          preKeys: [3],
          key: 4,
          actionDelay: 2000,
          matches: [
            'ViewFactoryHolder +n View[clickable=true] >n View[childCount=48] > @View[clickable=true][index=0]', //选择表情
          ],
        },
        {
          preKeys: [4],
          key: 5,
          actionDelay: 2000,
          matches: [
            'ViewFactoryHolder +n @View[clickable=true] > [text="发送"]', //发送表情
          ],
        },
        {
          preKeys: [5],
          key: 6,
          action: 'back',
          actionDelay: 1000,
          matches: [
            '@ViewFactoryHolder >n [id="root"][clickable=true] > View[clickable=true]',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '每日任务-去完成-完成应用下载|完成应用浏览|完成页面浏览',
      matchRoot: true,
      matchDelay: 1000,
      forcedTime: 60000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          excludeMatches: [
            '@TextView[clickable=true] - [getChild(0).text="恭喜获得"] > [text="我知道了"] + [text="去完成"]',
            '[text="每日任务"] +n View[getChild(0).getChild(0).text!~="赠送红贝壳礼物"] >n @[text="去完成"][clickable=true]',
          ],
          actionDelay: 2000,
          matches: [
            'ViewFactoryHolder >n LinearLayout > @[text="去完成"][clickable=true]',
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
        },
      ],
    },
    {
      key: 7,
      name: '每日任务-看视频',
      matchRoot: true,
      matchDelay: 1000,
      forcedTime: 60000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          excludeMatches: [
            '@TextView[clickable=true] - [getChild(0).text="恭喜获得"] > [text="我知道了"] + [text="去完成"]',
            '[text="每日任务"] +n View[getChild(0).getChild(0).text!~="赠送红贝壳礼物"] >n @[text="去完成"][clickable=true]',
            '[text="每日任务"] +n [id="task-ad-slot-103"]',
          ],
          actionDelay: 2000,
          matches: [
            '[text~="看视频最高赚[0-9].[0-9]万金币（(?:[0-9]|1[0-9]|2[0-4])/25）"] + @[text="看视频"][clickable=true]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 8,
      name: '每日任务-看视频-领金币',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.MainActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: ['@TextView[clickable=true] + [text~="恭喜获得[0-9]+金币"]'],
          matches: ['[id="mainPanelWrapper"] > @[text="领金币"][clickable=true]'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@TextView[clickable=true] + [text~="恭喜获得[0-9]+金币"]'],
        },
      ],
    },
    {
      key: 9,
      name: '进频道-立即领取',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="，累计待领取"] +n [text="金币"] + @View[clickable=true] > [text="full.1aa72883"]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    //看视频-com.mcto.sspsdk.ssp.activity.QyTrueViewActivity
    {
      key: 20,
      name: '看视频-*秒后可领取奖励mcto',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.mcto.sspsdk.ssp.activity.QyTrueViewActivity'],
      rules: [
        {
          key: 0,
          action: 'none',
          matches: [
            '@[text="关闭"][vid="qy_count_down_close"][clickable=true] -n [text~="[0-9]+秒后可领取奖励"][vid="qy_count_down_desc"] < [vid="qy_count_down_btn"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="关闭"][vid="qy_count_down_close"][clickable=true] < [vid="qy_count_down_btn"]',
          ],
        },
      ],
    },
    //看视频-com.noah.adn.huichuan.view.rewardvideo.HCRewardVideoActivity
    {
      key: 30,
      name: '看视频-点击跳转后停留*秒立即获奖noah',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.noah.adn.huichuan.view.ui.dialog.HcDownLoadDialog',
        'com.noah.adn.huichuan.view.rewardvideo.HCRewardVideoActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '@[vid="noah_reward_click_tips_v2_container"][clickable=true] > [text~="点击跳转后停留\\\\n[0-9]秒立即获奖"][vid="noah_reward_click_tips_v2_countdown"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[vid="noah_hc_close_button"][clickable=true] -n [text="奖励已发放"][vid="noah_hc_countdown_view"]',
          ],
        },
      ],
    },
    {
      key: 31,
      name: '看视频-完成两个任务，立即领奖noah',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.noah.adn.huichuan.view.rewardvideo.HCRewardVideoActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[text~="完成两个任务，立即领奖\\\\n\\\\([0,1]/2\\\\)"][vid="noah_multi_task_progress_text"] < * + * @[text="立即打开"][vid="noah_multi_task_ad1_cta"][clickable=true]',
          ],
        },
        {
          key: 1,
          matches: [
            '@[vid="noah_hc_close_button"][clickable=true] <n [vid="noah_hc_countdown_container"] < * < * < * - * [vid="noah_component_30_task_finish"]',//恭喜获得奖励
          ],
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
