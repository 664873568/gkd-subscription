import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.BaiduMap',
  name: '百度地图',
  groups: [
    //金币任务中心-com.baidu.baidumaps.MapsActivity
    //签到*天得*金币[id="J-sign-card"]
    {
      key: 0,
      name: '金币任务中心-签到日历-立即签到',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['com.baidu.baidumaps.MapsActivity'],
      rules: [
        {
          key: 0,
          name: '额外领*金币-直接领取-×',
          matches: [
            '@TextView[clickable=true] <n [id="sign-dialog"] < AlertDialog <n View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '去逛逛-×',
          matches: [
            '@TextView[clickable=true] < View < AlertDialog <n View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 2,
          name: '立即打卡-×',
          matches: [
            '@[desc="关闭"][clickable=true] < View < AlertDialog <n View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
      ],
    },
    //看视频最高赚99999金币*50[id="J-watchVideo"]
    {
      key: 1,
      name: '金币任务中心-看视频-赚金币',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.baidu.baidumaps.MapsActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          anyMatches: [
            '[text="待领取"] - [getChild(0).text~="[0-9]{3,}"] < View - @[text="赚金币"][clickable=true] <n [id="J-watchVideo"] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '[text="待领取"] - [getChild(0).text~="[0-9]{3,}"] < View < View - @[text="赚金币"][clickable=true] <n [id="J-watchVideo"] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '[text="待领取"] - [getChild(0).text~="[0-9]{3,}"] < View - [getChild(1).text~="第.*个"] -n @[text="赚金币"][clickable=true] <n [id="J-watchVideo"] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '[text="待领取"] - [getChild(0).text~="[0-9]{3,}"] < View - [getChild(1).text~="第.*个"] < View - @[text="赚金币"][clickable=true] <n [id="J-watchVideo"] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
          excludeMatches: [
            '@[desc="关闭"][clickable=true] < View < AlertDialog <n View <n WebView < WebView < [vid="frameLayout1"]',
            '@TextView[clickable=true] < View < View - TextView < View < View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 1,
          name: '恭喜获得-继续看视频领金币-×',
          matches: [
            '@TextView[clickable=true] < View < View - TextView < View < View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
      ],
    },
    //做任务攒金币[id="task-loader"]
    {
      key: 2,
      name: '金币任务中心-浏览App-去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.baidu.baidumaps.MapsActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          anyMatches: [
            '[text="去完成"] -2 [text~="[0-9]{3,}"] -2 [text!~="去中国移动领话费流量"] < @View[clickable=true] < [id~="J-task-item.*"] <n [id="task-loader"] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '[text="去完成"] < View -2 [text~="[0-9]{3,}"] -2 [text!~="去中国移动领话费流量"] < @View[clickable=true] < [id^="J-task-item"] <n [id="task-loader"] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
          excludeMatches: [
            '[text="待领取"] - [getChild(0).text~="[0-9]{3,}"] < View - @[text="赚金币"][clickable=true] <n [id="J-watchVideo"] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '[text="待领取"] - [getChild(0).text~="[0-9]{3,}"] < View < View - @[text="赚金币"][clickable=true] <n [id="J-watchVideo"] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '[text="待领取"] - [getChild(0).text~="[0-9]{3,}"] < View - [getChild(1).text~="第.*个"] -n @[text="赚金币"][clickable=true] <n [id="J-watchVideo"] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '[text="待领取"] - [getChild(0).text~="[0-9]{3,}"] < View - [getChild(1).text~="第.*个"] < View - @[text="赚金币"][clickable=true] <n [id="J-watchVideo"] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '@TextView[clickable=true] < View < View - TextView < View < View <n WebView < WebView < [vid="frameLayout1"]',
            '@TextView[clickable=true] <n View < View < AlertDialog <n View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 1,
          matches: [
            '@TextView[clickable=true] <n View < View < AlertDialog <n View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 2,
          actionDelay: 3000,
          anyMatches: [
            '@[desc="返回"][vid="title_btn_left"][clickable=true] <n RelativeLayout <n LinearLayout < LinearLayout + [vid="frameLayout1"]',
            '@[desc="返回"][vid="iv_first_back"][clickable=true] < ViewGroup < LinearLayout <n ViewGroup < FrameLayout <n ViewGroup < FrameLayout <n [vid="fragment_container"]',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '金币任务中心-浏览App-已完成-领取/立即领取',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.baidu.baidumaps.MapsActivity'],
      rules: [
        {
          key: 0,
          anyMatches: [
            '@TextView[clickable=true] -n [text="cjduojinbi"] < View <n [id="J-reward-list"] < View <n [id="J-save-wrap"] < [id="task-loader"] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '@TextView[clickable=true] -n [text="cjduojinbi"] < View <n View < View <n [id="J-reward-list"] < View <n [id="J-save-wrap"] < [id="task-loader"] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
          excludeMatches: [
            '[text="去完成"] -2 [text~="[0-9]{3,}"] -2 [text!~="去中国移动领话费流量"] < @View[clickable=true] < [id~="J-task-item.*"] <n [id="task-loader"] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '[text="去完成"] < View -2 [text~="[0-9]{3,}"] -2 [text!~="去中国移动领话费流量"] < @View[clickable=true] < [id^="J-task-item"] <n [id="task-loader"] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '@TextView[clickable=true] <n View < View < AlertDialog <n View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 1,
          matches: [
            '[text="点击领取"] < @View[clickable=true] <n View <n View <n View <n View < View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '[getChild(0).getChild(0).text="恭喜获得"] +n View > @View[clickable=true] > [text="我知道了"]',
          ],
        },
        {
          key: 3,
          matches: [
            '@[text="点击领取"][clickable=true] < View <n View <n [id="J-red-packet-icon"] < View <n View <n [id="J-save-wrap"] < [id="task-loader"] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
          excludeMatches: [
            '@TextView[clickable=true] <n View < View < AlertDialog <n View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
      ],
    },
    //连续打卡 免费领现金[id="long-sign-entry-entry"]
    {
      key: 4,
      name: '金币任务中心-连续打卡-去打卡',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.baidu.baidumaps.MapsActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '@[text="去打卡"][clickable=true] <n [id="long-sign-entry-entry"] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
          excludeMatches: [
            '[text="去完成"] -2 [text~="[0-9]{3,}"] -2 [text!~="去中国移动领话费流量"] < @View[clickable=true] < [id~="J-task-item.*"] <n [id="task-loader"] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '[text="去完成"] < View -2 [text~="[0-9]{3,}"] -2 [text!~="去中国移动领话费流量"] < @View[clickable=true] < [id^="J-task-item"] <n [id="task-loader"] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 1,
          matches: [
            '@Button[text="开启挑战"][clickable=true] -n [desc="关闭"] < View <n View < View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 2,
          matches: [
            '@[text="返回打卡页查看"][clickable=true] <n View <n View - [text="close_20261104110848"] <n View < AlertDialog <n View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 3,
          actionDelay: 2000,
          matches: [
            '@[text~="去签到|去完成"][clickable=true] -n [text="今日打卡任务"] < View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 4,
          actionDelay: 3000,
          matches: [
            '[text="请返回到列表领取奖励"] - [text="任务已完成"] < View <n View <n [id="root"] < WebView < WebView < [vid="frameLayout1"] - * @[desc="返回"][vid="title_btn_left"][clickable=true]',
          ],
        },
        {
          key: 5,
          name: '打卡成功-×',
          matches: [
            '@[desc="关闭"][clickable=true] < View < View < View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 6,
          name: '返回-<',
          actionDelay: 5000,
          matches: [
            '@[desc="返回"][clickable=true] < View < View < View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
          excludeMatches: [
            '@[text~="去签到|去完成"][clickable=true] <n View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '@[desc="关闭"][clickable=true] < View < View < View <n WebView < WebView < [vid="frameLayout1"]',
            '@[text="仍要离开"][clickable=true] < View <n View <n View < View < View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 7,
          name: '仍要离开',
          matches: [
            '@[text="仍要离开"][clickable=true] < View <n View <n View < View < View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
      ],
    },
    //免费抽大奖[id="J-sign-card"]
    {
      key: 5,
      name: '金币任务中心-免费抽大奖-免费抽奖',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.baidu.baidumaps.MapsActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text~="免费抽奖"] < View < @View[clickable=true] <n View <n [id="J-lucky-draw"] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
          excludeMatches: [
            '[text="去完成"] -2 [text~="[0-9]{3,}"] -2 [text!~="去中国移动领话费流量"] < @View[clickable=true] < [id~="J-task-item.*"] <n [id="task-loader"] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '[text="去完成"] < View -2 [text~="[0-9]{3,}"] -2 [text!~="去中国移动领话费流量"] < @View[clickable=true] < [id^="J-task-item"] <n [id="task-loader"] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '@[text="去打卡"][clickable=true] <n [id="long-sign-entry-entry"] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '@TextView[clickable=true] - [getChild(0).text~="恭喜获得.*"] < View < View <n View < View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 1,
          matches: [
            '[text~="立即领取|再试一次"] < @View[clickable=true] - [text~=".*[0-9]{3,} 金币.*"] <n View < View <n View <n View <n View < View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 2,
          matches: [
            '@TextView[clickable=true] - [getChild(0).text~="恭喜获得.*奖励"] < View < View <n View < View <n WebView < WebView < [vid="frameLayout1"]',
          ],
          excludeMatches: [
            '[text~="立即领取|再试一次"] < @View[clickable=true] - [text~=".*[0-9]{3,} 金币.*"] <n View < View <n View <n View <n View < View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '金币任务中心-免费抽大奖-赚抽奖次数',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.baidu.baidumaps.MapsActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text="赚抽奖次数"] <n View < @View[clickable=true] <n View <n [id="J-lucky-draw"] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
          excludeMatches: [
            '[text="去完成"] -2 [text~="[0-9]{3,}"] -2 [text!~="去中国移动领话费流量"] < @View[clickable=true] < [id~="J-task-item.*"] <n [id="task-loader"] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '[text="去完成"] < View -2 [text~="[0-9]{3,}"] -2 [text!~="去中国移动领话费流量"] < @View[clickable=true] < [id^="J-task-item"] <n [id="task-loader"] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '@[text="去打卡"][clickable=true] <n [id="long-sign-entry-entry"] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '@TextView[clickable=true] - [getChild(0).text~="恭喜获得.*"] < View < View <n View < View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 1,
          matches: [
            '[text="继续抽奖"] < @View[clickable=true] <n View < View <n View <n View <n View < View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
      ],
    },
    //翻卡赢 9999金币[id="J-flip-card"]
    {
      key: 7,
      name: '金币任务中心-翻卡-翻*倍',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.baidu.baidumaps.MapsActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text="翻多少赚多少"] + [text="翻卡赢 9999金币"] +n @View[clickable=true] > View > Image',
          ],
          excludeMatches: [
            '[text~="免费抽奖|抽奖中"] < View < @View[clickable=true] <n View <n [id="J-lucky-draw"] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '@TextView[clickable=true] - [getChild(0).text~="恭喜获得.*奖励"] < View < View <n View < View <n WebView < WebView < [vid="frameLayout1"]',
            '[text="恭喜翻出"] +n @[getChild(0).text~="继续翻十位领取|继续翻百位|立即收下"][clickable=true] + TextView',
            '@TextView[clickable=true] - View > [id="lottieDom"] > View > [text="恭喜获得收益翻倍卡"] + [text="明天再来可翻倍今日收益"] +n View > [text="明日来翻倍"]',
            '@View[clickable=true] > [text~="立即翻倍|立即收下"]',
          ],
        },
        {
          key: 1,
          matches: [
            '[text="恭喜翻出"] +n @[getChild(0).text~="继续翻十位领取|继续翻百位|立即收下"][clickable=true] + TextView',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          matches: [
            '@TextView[clickable=true] - View > [id="lottieDom"] > View > [text="恭喜获得收益翻倍卡"] + [text="明天再来可翻倍今日收益"] +n View > [text="明日来翻倍"]',
          ],
        },
        {
          preKeys: [0],
          key: 3,
          matches: [
            '[id="lottieDom"] > View > @View[clickable=true] > [text="立即翻倍"]',
          ],
        },
        {
          preKeys: [3],
          key: 4,
          matches: [
            '[id="reward-info"] > @View[clickable=true] > [text="立即收下"]',
          ],
        },
      ],
    },
    //翻 卡赢 1888金币[id="J-flip-card-v2"]
    {
      key: 8,
      name: '金币任务中心-翻卡-翻',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.baidu.baidumaps.MapsActivity'],
      rules: [
        {
          key: 0,
          name: '翻',
          actionDelay: 2000,
          matches: [
            '[text^="0"] - TextView < View < @View[clickable=true] <n ListView <n [id="J-flip-card-v2"] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
          excludeMatches: [
            '[text~="免费抽奖|抽奖中"] < View < @View[clickable=true] <n View <n [id="J-lucky-draw"] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '@TextView[clickable=true] - [getChild(0).text~="恭喜获得.*奖励"] < View < View <n View < View <n WebView < WebView < [vid="frameLayout1"]',
            '@TextView[index=parent.childCount.minus(1)][clickable=true] <n View <n View - AlertDialog <n View < View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 1,
          name: '放弃这张 翻更大',
          matches: [
            '[text~="放弃这张.*"] < @View[clickable=true] <n View <n View <n View <n View < View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 2,
          name: '翻到炸弹-领取*金币',
          anyMatches: [
            '@[text~="领取.*金币.*"] < View[clickable=true] - [text="翻到炸弹啦"] < View <n View <n View < View <n WebView < WebView < [vid="frameLayout1"]',
            '@[text~="领取.*金币.*"] < View[clickable=true] < View - [text="翻到炸弹咯"] < View <n View <n View < View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 3,
          name: '本局卡片已翻完-领走结束翻卡',
          matches: [
            '@[text="领走结束翻卡"] < View[clickable=true] < View + [text="本局卡片已翻完"] <n View <n View <n View < View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 4,
          name: '已获得翻卡奖励-×',
          matches: [
            'Image - @TextView[clickable=true] -n [text="已获得翻卡奖励"] <n View <n View < View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
      ],
    },
    //天天赢大奖[id="lucky-wheel-entry"]
    {
      key: 9,
      name: '金币任务中心-天天赢大奖-去抽奖',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.baidu.baidumaps.MapsActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '@[text="去完成"][clickable=true] - [text!~=".*中国移动.*"] - [text~=".*得次数 \\\\([0-9]/10\\\\)"] <n View <n ListView <n View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 1,
          actionDelay: 3000,
          matches: [
            '[text~="[1-9][0-9]*"] -2 [text="立刻抽奖"] <n @View[clickable=true] < View <n View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
          excludeMatches: [
            '@[text="去完成"][clickable=true] - [text!~=".*中国移动.*"] - [text~=".*得次数 \\\\([0-9]/10\\\\)"] <n View <n ListView <n View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '@[desc="关闭"][clickable=true] + [text~="恭喜获得金币奖励|恭喜获得现金奖励"] +n [text~="再抽一次|去做任务赚次数"]',
          ],
        },
        {
          key: 2,
          matches: [
            '@[desc="关闭"][clickable=true] + [text~="恭喜获得金币奖励|恭喜获得现金奖励"] +n [text~="再抽一次|去做任务赚次数"]',
          ],
        },
        {
          actionDelay: 5000,
          key: 3,
          matches: [
            '[text="天天赢大奖"] < View - @TextView[clickable=true] < View < View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
          excludeMatches: [
            '@[text="去完成"][clickable=true] - [text!~=".*中国移动.*"] - [text~=".*得次数 \\\\([0-9]/10\\\\)"] <n View <n ListView <n View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '[text~="[1-9][0-9]*"] -2 [text="立刻抽奖"] <n @View[clickable=true] < View <n View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '@[desc="关闭"][clickable=true] + [text~="恭喜获得金币奖励|恭喜获得现金奖励"] +n [text~="再抽一次|去做任务赚次数"]',
          ],
        },
      ],
    },
    //幸运大转盘[id="lucky-wheel-entry"]
    {
      key: 10,
      name: '金币任务中心-幸运大转盘-去抽奖',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.baidu.baidumaps.MapsActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '@[text~="浏览页面得次数.*[0-2]/3.*去完成"][clickable=true] <n ListView <n View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
          excludeMatches: [
            '@[text~="抽奖剩余[1-9][0-9]*次"][clickable=true] <n View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '@Button[desc="关闭"][clickable=true] < View <n View < View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 1,
          actionDelay: 2000,
          matches: [
            '@[text~="看视频得次数.*去完成"][clickable=true] <n ListView <n View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
          excludeMatches: [
            '@[text~="浏览页面得次数.*[0-2]/3.*去完成"][clickable=true] <n ListView <n View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '@[text~="抽奖剩余[1-9][0-9]*次"][clickable=true] <n View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '@Button[desc="关闭"][clickable=true] < View <n View < View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 2,
          actionDelay: 3000,
          matches: [
            '@[text~="抽奖剩余[1-9][0-9]*次"][clickable=true] <n View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
          excludeMatches: [
            '@Button[desc="关闭"][clickable=true] < View <n View < View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 3,
          actionDelay: 3000,
          matches: [
            '@Button[desc="关闭"][clickable=true] < View <n View < View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 4,
          matches: [
            '[text~="再抽一次.*抽后必得.*金币"] -n @Button[desc="关闭"][clickable=true] < View <n View < View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
          excludeMatches: [
            '@[text~="浏览页面得次数.*[0-2]/3.*去完成"][clickable=true] <n ListView <n View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          actionDelay: 5000,
          key: 5,
          matches: [
            '[text="幸运大转盘"] < View - @TextView[clickable=true] < View < View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
          excludeMatches: [
            '@[text~=".*次后必得"] <n View <n ListView <n View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '@[text~="浏览页面得次数.*[0-2]/3.*去完成"][clickable=true] <n ListView <n View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '@[text~="抽奖剩余[1-9][0-9]*次"][clickable=true] <n View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '@Button[desc="关闭"][clickable=true] < View <n View < View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
        },
      ],
    },
    //开红包领现金[id="J-sign-card"]
    {
      key: 11,
      name: '金币任务中心-开红包领现金-去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.baidu.baidumaps.MapsActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          matches: [
            '[text="正在开"] < @View[clickable=true] <n View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
          excludeMatches: [
            '@ImageButton[clickable=true] < View <n AlertDialog <n View <n WebView < WebView < [vid="frameLayout1"]',
            '@ImageButton[clickable=true] <n View < View <n View < AlertDialog <n View <n WebView < WebView < [vid="frameLayout1"]',
            '@ImageButton[clickable=true] <n View < View < View <n View <n AlertDialog <n View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 1,
          actionDelay: 1000,
          anyMatches: [
            '[text~="去完成|继续开红包|邀请好友助力|开启下一轮|明日再来"] <n @View[clickable=true] <n View <n View <n AlertDialog <n View <n WebView < WebView < [vid="frameLayout1"]',
            '[text~="去完成|继续开红包|邀请好友助力|开启下一轮|明日再来"] <n @View[clickable=true] <n View <n View <n View < AlertDialog <n View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          actionDelay: 5000,
          key: 2,
          matches: [
            '[text="开红包 领现金"] -n @TextView[clickable=true] < View < View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
          excludeMatches: [
            '[text="正在开"] < @View[clickable=true] <n View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '@ImageButton[clickable=true] < View <n AlertDialog <n View <n WebView < WebView < [vid="frameLayout1"]',
            '@ImageButton[clickable=true] <n View < View <n View < AlertDialog <n View <n WebView < WebView < [vid="frameLayout1"]',
            '@ImageButton[clickable=true] <n View < View < View <n View <n AlertDialog <n View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
      ],
    },
    //现金连连乐[id="cash-line-entry"]
    {
      key: 12,
      name: '金币任务中心-现金连连乐-去领奖',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.baidu.baidumaps.MapsActivity'],
      rules: [
        {
          key: 0,
          name: '经典模式-×',
          position: {
            left: 'width * 0.5',
            top: 'height * 0.686',
          },
          actionDelay: 1000,
          matches: [
            '[text~="开启本局|免费解锁|看视频解锁"] <n View[clickable=true] <n View <n @View < View < View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 1,
          name: '经典模式-每日挑战',
          actionDelay: 2000,
          matches: [
            '@[text~=".*每日挑战"][clickable=true] - [text~="经典模式 今日第10/10局.*"] < View < View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 2,
          name: '每日挑战-开始挑战',
          actionDelay: 2000,
          matches: [
            '@[text="开始挑战"][clickable=true] <n View <n View < View < View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 3,
          name: '免费拆',
          actionDelay: 1000,
          matches: [
            '@[text="免费拆"][clickable=true] <n View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
          excludeMatches: [
            '@ImageButton[clickable=true] < View <n View < View < View <n WebView < WebView < [vid="frameLayout1"]',
            '@ImageButton[clickable=true] <n View < View < View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 4,
          name: '视频*1',
          actionDelay: 1000,
          matches: [
            '@[text="视频0/1"][clickable=true] <n View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
          excludeMatches: [
            '@ImageButton[clickable=true] < View <n View < View < View <n WebView < WebView < [vid="frameLayout1"]',
            '@ImageButton[clickable=true] <n View < View < View <n WebView < WebView < [vid="frameLayout1"]',
            '@[text="免费拆"][clickable=true] <n View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 5,
          name: '视频*2',
          actionDelay: 1000,
          matches: [
            '@[text~="视频[0-1]/2"][clickable=true] <n View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
          excludeMatches: [
            '@ImageButton[clickable=true] < View <n View < View < View <n WebView < WebView < [vid="frameLayout1"]',
            '@ImageButton[clickable=true] <n View < View < View <n WebView < WebView < [vid="frameLayout1"]',
            '@[text="视频0/1"][clickable=true] <n View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 6,
          name: '视频*3',
          actionDelay: 1000,
          matches: [
            '@[text~="视频[0-2]/3"][clickable=true] <n View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
          excludeMatches: [
            '@ImageButton[clickable=true] < View <n View < View < View <n WebView < WebView < [vid="frameLayout1"]',
            '@ImageButton[clickable=true] <n View < View < View <n WebView < WebView < [vid="frameLayout1"]',
            '@[text="视频0/1"][clickable=true] <n View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '@[text~="视频[0-1]/2"][clickable=true] <n View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          actionDelay: 5000,
          key: 7,
          matches: [
            '[desc="现金连连乐"] - @[desc="返回"][clickable=true] < View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
          excludeMatches: [
            '@[text~="免费拆|视频.*"][clickable=true] <n View <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '@ImageButton[clickable=true] < View <n View < View < View <n WebView < WebView < [vid="frameLayout1"]',
            '@ImageButton[clickable=true] <n View < View < View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
      ],
    },
    //开宝箱得金币[id="J-chest-box"]
    {
      key: 13,
      name: '金币任务中心-开宝箱得金币',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.baidu.baidumaps.MapsActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 3000,
          matches: [
            '[text~="开宝箱得金币|点我减.*分钟"] <n View < [id="J-chest-box-inner"] < [id="J-chest-box"] < @View[clickable=true] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
          ],
          excludeMatches: [
            '[text^="0"] - TextView < View < @View[clickable=true] <n ListView <n [id="J-flip-card-v2"] <n View < [id="root"] < [id="app"] < WebView < WebView < [vid="frameLayout1"]',
            '@TextView[index=parent.childCount.minus(1)][clickable=true] <n View < View < AlertDialog <n View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 1,
          matches: [
            '[text~="再领[0-9]{3,}金币|膨胀到[0-9]{3,}金币"] < @View[clickable=true] <n View < View < AlertDialog <n View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
        {
          key: 2,
          matches: [
            '@TextView[clickable=true] - [getChild(0).text~="再领[0-9]{2,}金币"] <n View < View < AlertDialog <n View <n WebView < WebView < [vid="frameLayout1"]',
          ],
        },
      ],
    },
    {
      key: 17,
      name: '立即重试',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="立即重试"][vid="retry_click"][clickable=true] <n LinearLayout < FrameLayout < FrameLayout <n [vid="frameLayout1"]',
          ],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    {
      key: 18,
      name: '正在载入',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 5000,
          matches: [
            '[text="正在载入"][vid="bm_progress_message"] - [vid="loading_anim"] < [vid="bm_progress_container"] < RelativeLayout < [id="android:id/content"]',
          ],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    {
      key: 19,
      name: '看视频-广告-反馈 ×baidu',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.baidu.baidumaps.MapsActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="不用了"][clickable=true] < [desc="auto_call_close_button"] <n [desc="auto_call_view"] <n * [desc="bottom_actionbar_button"] > [text="立即打开"]',
          ],
        },
        {
          key: 1,
          matches: [
            'ImageView < @[desc="top_close_button"][clickable=true] < ViewGroup <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text="不用了"][clickable=true] < [desc="auto_call_close_button"] <n [desc="auto_call_view"] <n * [desc="bottom_actionbar_button"] > [text="立即打开"]',
          ],
        },
        {
          key: 2,
          matches: [
            '@[text="上滑/点击了解更多内容"] < LinearLayout < LinearLayout < FrameLayout <n FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
            '@[text="下载或打开第三方应用"] <n LinearLayout < FrameLayout <n FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
            '@ImageView[index=parent.childCount.minus(1)] < FrameLayout - FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    //看视频-com.byazt.ff.Stub_Standard_Portrait_Activity
    {
      key: 20,
      name: '看视频-跳过',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.byazt.ff.Stub_Standard_Portrait_Activity',
        'com.byazt.ff.Stub_Standard_Activity',
        'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
        'com.bytedance.sdk.openadsdk.core.activity.base.TTWebPageActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          anyMatches: [
            '@[text~="去体验|立即前往|立即前往加速|我要加速|我要立即领奖|我要直接拿奖励"] <<n * [text~="去体验[0-9]+秒可立即领奖"] +n [text$="跳过"]',
            '@[text~="点击查看|立即领奖|我要加速领奖|我要直接拿奖励|恭喜获得神秘惊喜"] <<n * [text~="[0-9]+s"] + [text$="跳过"]',
            '@[text~="去体验[0-9]+秒立即领奖"] <<n * [text~="[0-9]s"] + [text="｜跳过"]',
            '@[text~="我要立即领奖|我要减广告时长"] <<n * [text="svg%3e"] + [text~="再逛[0-9]+秒后可领奖"]',
            '@View[clickable=true] - [text="reward_pop_get"] <<n * [text="svg%3e"] + [text~="再逛[0-9]+秒后可领奖"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 15000,
          anyMatches: [
            '[text="已领取"] >n @[text="svg+xml;base64"]',
            '@ImageView[clickable=true] < [getChild(1).text="应用详情"] +n [text="立即下载"]',
            'LinearLayout > FrameLayout + FrameLayout > FrameLayout > WebView - FrameLayout > TextView + @ImageView[clickable=true] + View',
            'LinearLayout > FrameLayout - LinearLayout > RelativeLayout > ImageView + @ImageView[clickable=true] + TextView + [text="反馈"]', //二级广告页
          ],
        },
        {
          preKeys: [0],
          key: 2,
          action: 'back',
          actionDelay: 15000,
          matches: ['View - View - LinearLayout >n WebView > WebView > View'],
        },
        {
          key: 3,
          anyMatches: [
            '@Image < * +n [text="限时奖励点击领取"]',
            '@[getChild(0).text="3ca6ab446dec1c57"] + [getChild(0).text="恭喜获得优惠券"]',
            '@[getChild(0).text="7b144c81c2cb181f"] -n [getChild(0).text="限时领取"]', //恭喜获得奖励-恭喜获得*元红包
            '@[getChild(0).text="恭喜获得奖励"] + [getChild(1).getChild(1).text="以实际活动为准"]', //惊喜福利-限时优惠权益
            '@TextView - [text="恭喜获得限时奖励"] < * + [getChild(1).getChild(1).text="以实际活动为准"]', //限时优惠权益
          ],
        },
        {
          key: 4,
          swipeArg: {
            start: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.75',
            },
            end: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.25',
            },
            duration: 1000,
          },
          matches: [
            '[getChild(0).text="需要下滑浏览更多才能领取奖励哦"] - [id="root"] > [id="app"] > @[id="_scrollView"][childCount>1]',
          ],
        },
        {
          key: 5,
          matches: [
            '[getChild(0).text="需要下滑浏览更多才能领取奖励哦"] - [id="root"] > [id="app"] > [id="_scrollView"][childCount=1] >n @TextView',
          ],
        },
        {
          key: 6,
          anyMatches: [
            '@[text$="跳过"] -n [text="奖励已领取"]',
            '@RelativeLayout[clickable=true] <<n * + * [text="svg%3e"] + [text="奖励已领取"]',
          ],
        },
        {
          key: 7,
          excludeMatches: [
            '[text="svg%3e"] + [text~="再逛[0-9]+秒后可领奖"]',
            '[text~="[1-9][0-9]*秒"] - [text="Rkt+ZKm7ZwiYnxjnD71pWy80P5LJAAAAAElFTkSuQmCC"]',
          ],
          actionDelay: 1000,
          matches: [
            'FrameLayout - FrameLayout - FrameLayout >n @RelativeLayout[clickable=true]',
          ],
        },
      ],
    },
    {
      key: 21,
      name: '看视频-下滑',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.byazt.ff.Stub_Standard_Portrait_Activity',
        'com.byazt.ff.Stub_Standard_Activity',
        'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
      ],
      rules: [
        {
          key: 0,
          anyMatches: [
            '@[text="icon-close.e3e3211b"] -n [getChild(0).text="限时领取"]', //恭喜获得优惠券
            '@[getChild(0).text="1301a2d542c5e480"] < * + [text="倒计时后将放弃优惠券"]',
            '@[getChild(0).text="7b144c81c2cb181f"] -n [getChild(0).text="限时领取"]', //恭喜获得奖励-恭喜获得*元红包
            'TextView + [text="继续浏览 有机会获得大额券"] +n [text="继续浏览"] + @[text="坚持退出"][clickable=true]',
          ],
        },
        {
          key: 1,
          swipeArg: {
            start: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.75',
            },
            end: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.25',
            },
            duration: 1000,
          },
          actionCd: 1000,
          matches: [
            '@[id="app"] < [id="root"] + [text="需要下滑浏览更多才能领取奖励哦"] <n WebView < WebView < FrameLayout < FrameLayout < LinearLayout < FrameLayout < FrameLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 2,
          matches: [
            'View - @[text="svg%3e"] < View <n View < [id="app"] < [id="root"] < WebView < WebView < FrameLayout < FrameLayout < LinearLayout < FrameLayout < FrameLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '[text~="[0-9]+:[0-9]+"] <n View - @View <n [id="app"] < [id="root"] < WebView < WebView < FrameLayout < FrameLayout < LinearLayout < FrameLayout < FrameLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 22,
      name: '看视频-礼包',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
      rules: [
        {
          key: 0,
          action: 'back',
          anyMatches: [
            'ImageView < @ViewGroup <<n * - * [desc="gift_box"]',
            '@ImageView <<n [desc="close_button"] <<n * [desc="gift_box"]',
          ],
        },
        {
          key: 1,
          matches: [
            'ImageView < @LinearLayout[clickable=true] - View - LinearLayout > ImageView + [text="领取成功"]', //*s后可领取奖励-×
          ],
        },
      ],
    },
    {
      key: 23,
      name: '看视频-跳过 *s',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            'Image < View < View < View < @View - * [text="反馈"] < * + * [text="点击取消静音"]',
            '@[text$="跳过"] - [text="0s"] < View <n View < View -n * [text="反馈"] < * + * [text="点击取消静音"]',
          ],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 28,
      name: '看视频-跳过-*秒',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '[text~="试玩[0-9]+秒获得奖励|看[0-9]+秒/安装应用立即领奖"] +n @[text="跳过"]',
          ],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[desc="button_container"] > [text="继续试玩"] + @[text="残忍离开"][clickable=true]',
          ],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 29,
      name: '看视频-广告-反馈 ×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@ImageView < ViewGroup - * > [text="反馈"]',
            'ImageView < LinearLayout < @LinearLayout[clickable=true] - * > [text="反馈"]',
            '@Image <<n * - * [text="反馈"] <<n * + * [text="上滑或点击"] + [text="跳转至详情页或第三方应用"]',
            '@ImageView < ViewGroup < ViewGroup < ViewGroup -n * [text="向上滑动 或 点击"] + * > [text="跳转至详情页或第三方应用"]',
            'ImageView < LinearLayout[clickable=true] < @LinearLayout[clickable=true] - * [text="反馈"] <<n * + * [text=" 立即查看 "]',
            '@ImageView < ViewGroup < ViewGroup < ViewGroup - * [text="点击到落地页或三方APP"] <<n * + * [text="关闭悬浮球可继续浏览应用"]', //京东-惊喜等你拿
            '@ImageView < ViewGroup - [getChild(0).text="反馈"] <<n * + * [text="点击或上滑打开"] + [getChild(0).text="跳转至详情页或第三方应用"]', //蚂蚁阿福
            '@ImageView < ViewGroup < ViewGroup - [getChild(1).getChild(0).text="反馈"] <<n * + * [text="上滑或点击"] + [text="跳转至详情页或第三方应用"]',
          ],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    //看视频-com.byazt.xs.Stub_Standard_Portrait_Activity
    {
      key: 30,
      name: '看视频-点击打开-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@Image < View < View + View'],
          activityIds: ['com.byazt.xs.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 31,
      name: '看视频-跳过-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 30000,
          matches: ['@[text$="跳过"] - [text="反馈"]'],
          activityIds: ['com.byazt.xs.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 32,
      name: '看视频-反馈-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@Image < View - [text="反馈"]'],
          activityIds: ['com.byazt.xs.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    //看视频-com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity
    {
      key: 40,
      name: '看视频-全屏广告',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity',
      ],
      rules: [
        {
          anyMatches: [
            '@[text~="去体验[0-9]秒立即领奖"] <n * -n * > [text="上滑或点击领取"]',
            '@ImageView < ViewGroup < ViewGroup -n * [text="上滑或点击"] + [text="跳转至详情页或第三方应用"]',
            '@ImageView < ViewGroup <n * < * + * [getChild(0).text="点击打开"] + [text="跳转至详情页或第三方应用"]',
            'Image < @View[width<100] < View < View < View -n * [getChild(0).text="反馈"] + * > [text="点击取消静音"]',
            '@ImageView[width<100] < ViewGroup < ViewGroup < ViewGroup -n * [getChild(0).text="反馈"] + * > [text="点击取消静音"]',
            '@ImageView[width<100] < ViewGroup < ViewGroup < ViewGroup -n * [text="向上滑动 或 点击"] + * > [text="跳转至详情页或第三方应用"]',
          ],
        },
      ],
    },
    //看视频-com.kwad.sdk.api.proxy.app.AdWebViewActivity
    //看视频-com.kwad.sdk.api.proxy.app.FeedDownloadActivity
    //看视频-com.kwad.sdk.api.proxy.app.KsRewardVideoActivity
    //看视频-com.kwad.sdk.api.proxy.app.KSRewardLandScapeVideoActivity
    {
      key: 50,
      name: '看视频-跳过-礼包-kwad',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: [
        'com.kwad.sdk.api.proxy.app.AdWebViewActivity',
        'com.kwad.sdk.api.proxy.app.FeedDownloadActivity',
        'com.kwad.sdk.api.proxy.app.KsRewardVideoActivity',
        'com.kwad.sdk.api.proxy.app.KSRewardLandScapeVideoActivity',
      ],
      rules: [
        {
          key: 0,
          name: '*|*秒后可领取奖励|看*秒可直接拿奖励',
          anyMatches: [
            '@[text~=".*免看.*广告|点击下载.*|点击跳转.*|.*拿奖励.*|.*再试一次.*"][clickable=true] < ViewGroup <n ViewGroup < ViewGroup < ViewGroup <n ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout <n [id="android:id/content"]',
            '@[text~=".*免看.*广告|点击下载.*|点击跳转.*|.*拿奖励.*|.*再试一次.*"][clickable=true] <n ViewGroup <n ViewGroup <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup < ViewGroup <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout <n [id="android:id/content"]',
          ],
          excludeMatches: [
            'ImageView < @[desc="gift_box"][clickable=true] < ViewGroup < ViewGroup < ViewGroup < ViewGroup <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
            '@[desc~=".*easy-playable_scene.*_actionBtn"][clickable=true] <n ViewGroup <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          name: '点击灯笼领券',
          matches: [
            '@[desc="sky_lantern_main"][clickable=true] <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 2,
          name: '点击领取“天选福袋',
          matches: [
            '@[desc~=".*easy-playable_scene.*_iconView"][clickable=true] <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 3,
          name: '恭喜获得天选福利',
          matches: [
            '@[desc~=".*easy-playable_scene.*_actionBtn"][clickable=true] <n ViewGroup <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 4,
          name: '跳过',
          anyMatches: [
            '@[text="跳过"][clickable=true] < ViewGroup < [desc="skip_button"] <n ViewGroup <n ViewGroup < ViewGroup <n ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
            '@[text="跳过"][clickable=true] < ViewGroup < [desc="skip_button"] <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text~=".*秒后可领取奖励|看.*秒可直接拿奖励"] <n ViewGroup[clickable=true] < ViewGroup <n ViewGroup < ViewGroup < ViewGroup <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout <n [id="android:id/content"]',
            '@[text~="[0-9]+"] < ViewGroup + [desc="sound_button"] <n ViewGroup < ViewGroup < ViewGroup <n ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
            '@[text~="[0-9]+"] < ViewGroup + [desc="sound_button"] <n ViewGroup < ViewGroup < ViewGroup < ViewGroup <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 5,
          name: '×-立即获取|免费获取',
          anyMatches: [
            'ImageView < ViewGroup < @ViewGroup[clickable=true] < [desc="close_button"] <n ViewGroup <n ViewGroup < ViewGroup <n ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
            'ImageView < ViewGroup < @ViewGroup[clickable=true] < [desc="close_button"] <n ViewGroup <n ViewGroup < ViewGroup <n ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
            'ImageView < ViewGroup < @ViewGroup[clickable=true] < [desc="close_button"] <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 6,
          name: '二级广告页-< ×',
          matches: [
            'TextView - @ImageView[width=height][id$="close"][clickable=true] - ImageView[id$="back"] < RelativeLayout < LinearLayout < RelativeLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 7,
          name: '残忍离开',
          matches: [
            '@[text="残忍离开"][clickable=true] < LinearLayout <n LinearLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    //看视频-com.meishu.sdk.activity.MeishuRewardVideoPlayerActivity
    {
      key: 60,
      name: '看视频-恭喜已获得奖励',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.meishu.sdk.activity.MeishuRewardVideoPlayerActivity'],
      rules: [
        {
          key: 0,
          matches: ['[vid="ms_process_bar"] <n * <n * [id="app-tips"]'],
        },
        {
          key: 1,
          matches: [
            '[vid="ms_reward_close_button"] < @[vid="ms_reward_close_button_parent"][clickable=true] < * <n * [text="恭喜已获得奖励"][id="app-tips"]',
          ],
        },
        {
          key: 2,
          excludeMatches: [
            '[vid="ms_process_bar"]',
            '[text="恭喜已获得奖励"][id="app-tips"]',
          ],
          matches: [
            '[vid="ms_reward_close_button"] < @[vid="ms_reward_close_button_parent"][clickable=true]',
          ],
        },
      ],
    },
    {
      key: 61,
      name: '看视频-去浏览*秒免看此广告',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.meishu.sdk.activity.MeishuRewardVideoPlayerActivity'],
      rules: [
        {
          key: 0,
          name: '去浏览*秒免看此广告-我要加速',
          matches: [
            '@[text="我要加速"][id="btn-text"] < View -n [text~="去浏览.*秒免看此广告"][id="state-message"] <n View < View < View <n [id="app"] < WebView < WebView < RelativeLayout +n * [vid="ms_process_bar"]',
          ],
        },
        {
          key: 1,
          matches: [
            '[text="恭喜提前获得奖励"][id="state-message"] <n View < View < View <n [id="app"] < WebView < WebView < RelativeLayout +n * @[vid="ms_reward_close_button_parent"][clickable=true]',
          ],
        },
      ],
    },
    {
      key: 62,
      name: '看视频-浏览*s-×meishu',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.meishu.sdk.activity.MeishuRewardVideoPlayerActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[vid="ms_reward_close_button"] < @RelativeLayout[clickable=true] < LinearLayout <n RelativeLayout < FrameLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[vid="ms_process_bar"] <n LinearLayout <n RelativeLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    //看视频-com.meishu.sdk.activity.SdkInterstitialActivity
    {
      key: 63,
      name: '看视频-×meishu',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.meishu.sdk.activity.SdkInterstitialActivity',
        'com.meishu.sdk.activity.MeishuWebviewActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '@ImageView[vid~="ms_activity_sdk_interstitial_cacel|ms_interstitial_v2_close"][clickable=true] <n RelativeLayout < FrameLayout < RelativeLayout < RelativeLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '二级广告页-<',
          matches: [
            'Image - [id="J_navBarTitle"] - Image < @View[clickable=true] <n WebView < WebView < RelativeLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    //看视频-com.qq.e.ads.PortraitADActivity
    {
      key: 70,
      name: '看视频-微信-×',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.qq.e.ads.PortraitADActivity',
        'com.qq.e.ads.ADActivity',
      ],
      rules: [
        {
          key: 0,
          name: '拿奖励',
          matches: [
            '@[text~=".*微信.*(看|玩).*"][index=parent.childCount.minus(1)] <n FrameLayout <n LinearLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            'FrameLayout - @ImageView < LinearLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          name: '恭喜获得奖励-×',
          matches: [
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            'FrameLayout - @[text~=".*拿奖励"] - TextView < LinearLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 71,
      name: '看视频-微信-阅读小说 可获得奖励',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.qq.e.ads.PortraitADActivity',
        'com.qq.e.ads.ADActivity',
      ],
      rules: [
        {
          key: 0,
          name: '或向下滑动继续试读',
          swipeArg: {
            start: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.75',
            },
            end: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.25',
            },
            duration: 1000,
          },
          actionCd: 1000,
          matches: [
            '[text="或向下滑动继续试读"] <n LinearLayout <n FrameLayout < @RecyclerView <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text="继续体验15秒得奖励"] < LinearLayout < FrameLayout <n FrameLayout < FrameLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          name: '继续体验15秒得奖励',
          matches: [
            '@[text="继续体验15秒得奖励"] < LinearLayout < FrameLayout <n FrameLayout < FrameLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 2,
          name: '恭喜已经获得奖励！-×',
          matches: [
            '@[text="恭喜已经获得奖励！"] < LinearLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout < FrameLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '[text="可获得奖励"] - [text="阅读小说"] < @LinearLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 72,
      name: '看视频-×qq',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.qq.e.ads.PortraitADActivity',
        'com.qq.e.ads.ADActivity',
      ],
      rules: [
        {
          key: 0,
          name: '奖励将于*秒后发放',
          anyMatches: [
            '[text~=".*更快拿奖"] < @FrameLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '[text~=".*提前拿奖"] <n LinearLayout < @FrameLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '[text="扭动/点击"] <n LinearLayout <n @FrameLayout <n FrameLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          name: '残忍离开|放弃福利',
          anyMatches: [
            '@[text="残忍离开"] <n FrameLayout < FrameLayout < FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '[text="放弃福利"] < @FrameLayout <n LinearLayout < FrameLayout < FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 2,
          name: '*秒后点击广告*，即可*得奖*',
          matches: [
            '@[text~="点击广告.*拿奖励"] < FrameLayout < FrameLayout < FrameLayout < LinearLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '[text~=".*秒后点击广告.*，即可.*得奖.*"] < @FrameLayout < FrameLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 3,
          name: '二级广告页-×',
          actionDelay: 5000,
          anyMatches: [
            'View - @ImageView[clickable=true] - TextView < FrameLayout < FrameLayout < FrameLayout <n LinearLayout < [id="android:id/content"]',
            'View - ProgressBar - @ImageView[clickable=true] - TextView < FrameLayout < LinearLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 4,
          name: '恭喜获得奖励-×',
          actionDelay: 1000,
          anyMatches: [
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout <n FrameLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout < FrameLayout <n LinearLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout < FrameLayout <n LinearLayout <n FrameLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text^="奖励将于"] < LinearLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '@[text^="奖励将于"] < LinearLayout < LinearLayout < LinearLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '@[text^="奖励将于"] < LinearLayout < LinearLayout < LinearLayout <n FrameLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '[text~=".*点击广告.*，即可.*得奖.*"] < @FrameLayout < FrameLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '[text~="立即安装|立即体验|去微信看看"] <n @FrameLayout <n * <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '[text="扭动/点击"] <n LinearLayout <n @FrameLayout <n FrameLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 5,
          name: '滑动/点击了解更多|扭动/点击*|点击下载或打开第三方应用-×',
          anyMatches: [
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout < FrameLayout <n FrameLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout < FrameLayout < LinearLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '[text~=".*更快拿奖"] < @FrameLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '[text~=".*提前拿奖"] <n LinearLayout < @FrameLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '[text~="立即安装|立即体验|去微信看看"] <n @FrameLayout <n * <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '[text="扭动/点击"] <n LinearLayout <n @FrameLayout <n FrameLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 6,
          name: '立即安装|立即体验|去微信看看|扭动/点击*-×',
          anyMatches: [
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout < FrameLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout < FrameLayout < FrameLayout <n FrameLayout < FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 8,
          name: '二级广告页-×打开小程序',
          matches: [
            'View - @ImageView[clickable=true] - TextView[text="打开小程序"] < FrameLayout < FrameLayout < FrameLayout <n LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 9,
          name: '浏览页面*秒后即可获得奖励',
          matches: [
            '@[text="恭喜获得奖励！"] < LinearLayout <n LinearLayout < RelativeLayout < FrameLayout < FrameLayout <n LinearLayout < [id="android:id/content"]',
            '@ImageView[width=height][index=parent.childCount.minus(1)][clickable=true] <n LinearLayout < RelativeLayout < FrameLayout < FrameLayout <n LinearLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '[text="秒后即可获得奖励"] - [text~="[0-9]+"] - [text="浏览页面"] < @LinearLayout <n LinearLayout < RelativeLayout < FrameLayout < FrameLayout <n LinearLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    //看视频-com.qumeng.advlib.ui.front.InciteADActivity
    {
      key: 80,
      name: '看视频-体验APP，提前拿奖励-×',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.qumeng.advlib.ui.front.InciteADActivity'],
      rules: [
        {
          key: 0,
          name: '点击打开',
          actionDelay: 2000,
          matches: [
            'View < LinearLayout < @RelativeLayout[clickable=true] < FrameLayout <n LinearLayout < RelativeLayout < FrameLayout <n RelativeLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          name: '我要直接拿奖励',
          matches: [
            '@[text="我要直接拿奖励"][clickable=true] < LinearLayout < FrameLayout <n LinearLayout < FrameLayout < FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 2,
          name: '奖励已到账-×',
          anyMatches: [
            '@ImageView[clickable=true] - RelativeLayout - ImageView - FrameLayout - FrameLayout < RelativeLayout < LinearLayout < [id="android:id/content"]',
            'FrameLayout - @ImageView[clickable=true] - RelativeLayout - ImageView - FrameLayout < RelativeLayout < LinearLayout < [id="android:id/content"]',
            'FrameLayout - FrameLayout - @ImageView[clickable=true] - RelativeLayout - ImageView < RelativeLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 3,
          name: '奖励已到账-⊙',
          position: {
            left: 'width * 0.415',
            top: 'height * 0.5',
          },
          actionDelay: 1000,
          matches: [
            'ImageView - ImageView < FrameLayout - @View[clickable=true] < RelativeLayout <n RelativeLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 81,
      name: '看视频-*秒后可领奖励-×qumeng',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.qumeng.advlib.ui.front.InciteADActivity'],
      rules: [
        {
          key: 0,
          position: {
            left: 'width * 0.382',
            top: 'height * 0.042',
          },
          matches: [
            '[text="广\\n告"] <n LinearLayout <n FrameLayout < RelativeLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="放弃奖励"][clickable=true] <n RelativeLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    //看视频-com.sigmob.sdk.base.common.PortraitAdActivity
    {
      key: 90,
      name: '看视频-跳过-浏览|试玩|再玩*秒领取奖励',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.sigmob.sdk.base.common.PortraitAdActivity'],
      rules: [
        {
          key: 0,
          name: '立即前往|试玩/立即|继续试玩',
          matches: [
            '[text="aperture"] - TextView < @View[clickable=true] <n View < View < View <n [id="ad_area"] < [id="app"] < View < WebView < WebView < FrameLayout <n FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[id="close_btn"][clickable=true] - [text="已获得奖励"] <n View <n [id="ad_area"] < [id="app"] < View < WebView < WebView < FrameLayout <n FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          name: '已获得奖励-跳过',
          matches: [
            '@[id="close_btn"][clickable=true] - [text="已获得奖励"] <n View <n [id="ad_area"] < [id="app"] < View < WebView < WebView < FrameLayout <n FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 2,
          matches: [
            '@[id="close_btn"][clickable=true] <n View <n [id="ad_area"] < [id="app"] < View < WebView < WebView < FrameLayout <n FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '[text="跳过"] -n [text~="[0-9]+"] < @[id="close_btn"][clickable=true] <n View < [id="ad_area"] < [id="app"] < View < WebView < WebView < FrameLayout <n FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 3,
          name: '立即参与-×',
          matches: [
            //'[text="aperture"] - TextView < @View[clickable=false] <n View <n [id="ad_area"] < [id="app"] < View < WebView < WebView < FrameLayout <n FrameLayout < RelativeLayout < [id="android:id/content"]',
            '@[id="close_btn"][clickable=true] <n View < WebView < WebView < FrameLayout <n FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 91,
      name: '看视频-跳过-*秒sigmob',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.sigmob.sdk.base.common.PortraitAdActivity'],
      rules: [
        {
          key: 0,
          name: '点击体验 立刻获取奖励',
          matches: [
            '@TextView[index=parent.childCount.minus(1)][clickable=true] <n View <n View <n View <n View < [id="app"] < View < WebView < WebView < FrameLayout <n FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text~=".*秒领取奖励"] <n View  < [id="ad_area"] < [id="app"] < View < WebView < WebView < FrameLayout <n FrameLayout < RelativeLayout < [id="android:id/content"]',
            '@[id="close_btn"][clickable=true] -n [getChild(1).text="已获得奖励"] < [id="ad_area"] < [id="app"] < View < WebView < WebView < FrameLayout <n FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          name: '恭喜获得奖励-×',
          matches: [
            '@[id="close_btn"][clickable=true] <n View <n [id="ad_area"] < [id="app"] <n View < WebView < WebView < FrameLayout <n FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '[text="跳过"] -n [text~="[0-9]+"] < @[id="close_btn"][clickable=true] <n View < [id="ad_area"] < [id="app"] < View < WebView < WebView < FrameLayout <n FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 2,
          name: '已获得奖励-跳过',
          matches: [
            '@[id="close_btn"][clickable=true] -n [getChild(1).text="已获得奖励"] < [id="ad_area"] < [id="app"] < View < WebView < WebView < FrameLayout <n FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 3,
          name: '下载并安装领取奖励-跳过',
          matches: [
            '@[text="跳过"][clickable=true] <n [id="close_btn"] <n View +n * [text="下载并安装领取奖励" || text="立即下载"]',
          ],
          excludeMatches: [
            '@[text="是"][clickable=true] < View - [text="是否放弃领奖？"] < AlertDialog <n View < WebView < WebView < FrameLayout <n FrameLayout < RelativeLayout < [id="android:id/content"]',
            '@[text="关闭广告"][clickable=true] -n [text="要放弃领取奖励吗？"] < AlertDialog <n View < WebView < WebView < FrameLayout <n FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 4,
          name: '*放弃领*奖',
          anyMatches: [
            '@[text="是"][clickable=true] < View - [text="是否放弃领奖？"] < AlertDialog <n View < WebView < WebView < FrameLayout <n FrameLayout < RelativeLayout < [id="android:id/content"]',
            '@[text="关闭广告"][clickable=true] -n [text="要放弃领取奖励吗？"] < AlertDialog <n View < WebView < WebView < FrameLayout <n FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 5,
          name: '立即下载-×',
          anyMatches: [
            '@[id="close_btn"][clickable=true] <n [id="ad_area"] < [id="app"] < View < WebView < WebView < FrameLayout <n FrameLayout < RelativeLayout < [id="android:id/content"]',
            '@[id="close_btn"][clickable=true] <n View <n View <n [id="ad_area"] < [id="app"] < View < WebView < WebView < FrameLayout <n FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '[text="跳过"] -n [text~="[0-9]+"] < @[id="close_btn"][clickable=true] <n View < [id="ad_area"] < [id="app"] < View < WebView < WebView < FrameLayout <n FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 92,
      name: '看视频-跳过-*s后获取奖励sigmob',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.sigmob.sdk.base.common.PortraitAdActivity'],
      rules: [
        {
          key: 0,
          name: '已获得奖励-跳过',
          matches: [
            '@[text="跳过"][clickable=true] - [text="已获得奖励"] <n View < View < View < View < [id="app"] < View < WebView < WebView <n FrameLayout < RelativeLayout < [id="android:id/content"]',
            '@[text="跳过"][clickable=true] - [text="已获得奖励"] <n View < [id="video-native"] < [id="app"] < View < WebView < WebView <n FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          matches: [
            '[text="反馈"][id="feed"] - @TextView[clickable=true] < View < [id="app"] < View < WebView < WebView <n FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 2,
          name: '立即下载|立即查看-×',
          matches: [
            '@TextView[clickable=true] - [text="反馈"] <n [id="app"] < View < WebView < WebView < FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 93,
      name: '看视频-跳过-点击领取奖励',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.sigmob.sdk.base.common.PortraitAdActivity'],
      rules: [
        {
          key: 0,
          name: '立即前往',
          matches: [
            '@[text="立即前往"][clickable=true] <n View < View <n View <n [id="ad_area"] < [id="app"] < View < WebView < WebView < FrameLayout <n FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text="继续任务"][clickable=true] <n View < View <n [id="ad_area"] < [id="app"] < View < WebView < WebView < FrameLayout <n FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          name: '继续任务',
          matches: [
            '@[text="继续任务"][clickable=true] <n View < View <n [id="ad_area"] < [id="app"] < View < WebView < WebView < FrameLayout <n FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 94,
      name: '看视频-跳过-*s后可领取奖励-免',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.sigmob.sdk.base.common.PortraitAdActivity',
        'com.sigmob.sdk.base.common.AdActivity',
      ],
      rules: [
        {
          key: 0,
          name: '立即前往',
          matches: [
            '[text="light"] < View - TextView <n @View[clickable=true] <n View < View <n [id="ad_area"] < [id="app"] <n View < WebView < WebView < FrameLayout <n FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text$="跳过"][clickable=true] - [text="已获得奖励"] <n [id="close_btn"] <n View < [id="ad_area"] < [id="app"] <n View < WebView < WebView < FrameLayout <n FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          name: '二级广告页',
          action: 'back',
          actionDelay: 5000,
          matches: [
            '@ImageView[width=height][clickable=true] < RelativeLayout + LinearLayout + LinearLayout <n ViewGroup < FrameLayout + [id="android:id/content"]',
          ],
        },
        {
          key: 2,
          name: '已获得奖励-跳过',
          matches: [
            '@[text$="跳过"][clickable=true] - [text="已获得奖励"] <n [id="close_btn"] <n View < [id="ad_area"] < [id="app"] <n View < WebView < WebView < FrameLayout <n FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 96,
      name: '看视频-跳过-反馈-×sigmob',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.sigmob.sdk.base.common.PortraitAdActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="跳过"][clickable=true] <n View < [id="ad_area"] < [id="app"] < View < WebView < WebView < FrameLayout < FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          anyMatches: [
            '@[id="close_btn"][clickable=true] <n [id="ad_area"] < [id="app"] < View < WebView < WebView < FrameLayout < FrameLayout < RelativeLayout < [id="android:id/content"]',
            '@[id="close_btn"][clickable=true] <n View <n [id="ad_area"] < [id="app"] < View < WebView < WebView < FrameLayout < FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 2,
          name: '已获得奖励-跳过',
          matches: [
            '@[text="跳过"][clickable=true] - [text="已获得奖励"] <n View < View < View < [id="app"] < View < WebView < WebView < FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '@TextView[clickable=true] - [text="反馈"] <n [id="app"] < View < WebView < WebView < FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 4,
          matches: [
            '@TextView[clickable=true] < View - [text="反馈"] < View < [id="app"] < View < WebView < WebView < FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 99,
      name: '看视频-跳过-sigmob',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: [
        'com.sigmob.sdk.base.common.PortraitTransparentAdActivity',
        'com.sigmob.sdk.base.common.AdActivity',
      ],
      rules: [
        {
          key: 0,
          name: '跳过',
          matches: [
            '@[text="跳过"][id="close_btn"][clickable=true] < View < View < [id="ad_area"] < View < [id="app"] < WebView < WebView < FrameLayout < FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text="剩余时间"] < View <n View < View <n [id="app"] < WebView < WebView < FrameLayout < FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          name: '反馈-×',
          anyMatches: [
            '@ImageView[width=height][index=parent.childCount.minus(1)] < RelativeLayout - View[clickable=true] - FrameLayout < RelativeLayout < [id="android:id/content"]',
            '@TextView[clickable=true] - [text="反馈"] < [id="ad_area"] < View < [id="app"] < WebView < WebView < FrameLayout < FrameLayout < RelativeLayout < [id="android:id/content"]',
            '@[id="close_btn"][clickable=true] < View < View < View < View < [id="app"] < WebView < WebView < FrameLayout < FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text="剩余时间"] < View <n View < View <n [id="app"] < WebView < WebView < FrameLayout < FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 2,
          name: '二级广告页',
          action: 'back',
          matches: [
            '@Image[id="shop"] < View < [id="shopImg"] <n View <n [id="ldbody"] < WebView < WebView < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 3,
          name: '二级广告页-取消',
          action: 'back',
          matches: [
            '@[text="取消"][clickable=true] <n LinearLayout < LinearLayout <n LinearLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    //看视频-com.ubix.ssp.open.comm.UBiXVideoActivity
    {
      key: 100,
      name: '看视频-×-点击广告并停留*秒*获取奖励',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.ubix.ssp.open.comm.UBiXVideoActivity',
        'com.ubix.ssp.open.comm.UBiXWebViewActivity',
      ],
      rules: [
        {
          key: 0,
          name: '拿奖励',
          actionDelay: 1000,
          matches: [
            '[text~=".*广告"] - @TextView[clickable=true] -n [text~="点击广告并停留.*秒.*获取奖励"] - [text~=".*奖励"] < RelativeLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          name: '二级广告页< ×',
          actionDelay: 5000,
          matches: [
            'TextView - @ImageView[width=height][clickable=true] - ImageView < FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 2,
          name: '立即下载-×',
          matches: [
            '[text="立即下载"] <n RelativeLayout < RelativeLayout -n @ImageView[clickable=true] - [text~="点击广告并停留.*秒.*获取奖励"] <n RelativeLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 3,
          name: '恭喜获得奖励-关闭广告|继续看广告',
          matches: [
            '@[text~="关闭广告|继续看广告"] -n [text="恭喜获得奖励"] < RelativeLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 4,
          name: '恭喜获得奖励-×',
          actionDelay: 1000,
          matches: [
            '[getChild(0).getChild(3).name$="TextView"] -n @ImageView[clickable=true] - [text="恭喜获得奖励"] <n RelativeLayout < LinearLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text~="点击广告并停留.*秒.*获取奖励"] <n RelativeLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    //看视频-com.windmill.sdk.widget.InterstitialView_401200*
    {
      key: 110,
      name: '看视频-跳过*s-关闭',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="关闭"][vid="tobid_interstitial_skip_text"] < @[vid="tobid_interstitial_skip_ll"][clickable=true] <n FrameLayout <n [vid="tobid_interstitial_sound_and_skip_layout"]',
          ],
          excludeMatches: [
            '[text~="跳过｜.*"][vid="tobid_interstitial_skip_text"] < @[vid="tobid_interstitial_skip_ll"][clickable=true] < FrameLayout < [vid="tobid_interstitial_sound_and_skip_layout"]',
          ],
          activityIds: ['com.windmill.sdk.widget.InterstitialView_401200'],
        },
      ],
    },
    //功能应用类
    {
      key: 400,
      name: '欢迎使用百度地图-同意',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="同意"][vid="term_right_btn"][clickable=true] <n LinearLayout -n [text="欢迎使用百度地图"][vid="term_title"]',
          ],
          activityIds: ['com.baidu.baidumaps.guide.TermsActivity'],
        },
      ],
    },
    {
      key: 401,
      name: '隐私保护指引-暂不开启',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="暂不开启"][vid="term_first_btn"][clickable=true] -n [text="隐私保护指引"][vid="term_title"]',
          ],
          activityIds: [
            'com.baidu.baidumaps.MapsActivity',
            'com.baidu.baidumaps.guide.TermsActivity',
          ],
        },
      ],
    },
    {
      key: 402,
      name: '开启推送通知-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[vid="push_close"][clickable=true] - * > [vid="imgGif"] + * > [text="以后再说"][vid="cancel"] + [text="去开启"][vid="go_setting"]',
          ],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    {
      key: 403,
      name: '开启北斗定位权限-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[vid="cancel_dialog"][clickable=true] - * > [text="开启北斗定位权限"][vid="tv_dialog_title"] +n * > [text="暂不设置"][vid="tv_dialog_cancel"] + [text="去设置"][vid="tv_dialog_confirm"]',
          ],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 500,
      name: '首页广告-跳过',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text$="跳过"][vid="sdm_myoffer_splash_skip"] < [vid="sdm_myoffer_splash_skip_area"][clickable=true]',
          ],
          activityIds: [
            'com.baidu.baidumaps.MapsActivity',
            'com.baidu.baidumaps.WelcomeScreen',
          ],
        },
      ],
    },
    {
      key: 501,
      name: '弹窗广告-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageView[clickable=true] <n FrameLayout <n LinearLayout < FrameLayout <n FrameLayout < FrameLayout < LinearLayout < FrameLayout < FrameLayout <n ViewGroup <n [id="android:id/content"]',
          ],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    {
      key: 502,
      name: '首页广告-关闭',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="关闭"][clickable=true] < LinearLayout <n RelativeLayout < FrameLayout < LinearLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
  ],
});
