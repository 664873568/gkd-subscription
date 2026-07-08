import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.BaiduMap',
  name: '百度地图',
  groups: [
    //金币任务中心
    {
      key: 0,
      name: '签到日历-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@TextView[index=8][childCount=0] <n [id="sign-dialog"]'],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '恭喜获得任务奖励-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@TextView[index=4][childCount=0][clickable=true] <<n AlertDialog',
          ],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '继续看视频领金币-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@TextView[clickable=true] <<n * [text="继续看视频领金币"]',
          ],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '地图图区-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: ['@[desc="返回"][vid="title_btn_left"] <<n * [vid="title"]'],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '访问飞猪旅行APP-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[desc="返回"][vid="title_btn_left"] <<n * [text="此功能需访问飞猪旅行APP"]',
          ],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    //看视频-返回|跳过|关闭
    {
      key: 20,
      name: '看视频-我要免看本次广告-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="我要免看本次广告"] <<n * [text="跳过"]'],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 21,
      name: '看视频-立即试玩-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="立即试玩"] <<n * [text$="跳过"]'],
          activityIds: ['com.sigmob.sdk.base.common.PortraitAdActivity'],
        },
      ],
    },
    {
      key: 22,
      name: '看视频-已获得奖励-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text$="跳过"] - [text="已获得奖励"] <n [id="close_btn"] - [text="反馈"]',
          ],
          activityIds: ['com.sigmob.sdk.base.common.PortraitAdActivity'],
        },
      ],
    },
    {
      key: 23,
      name: '看视频-已获得奖励-跳过-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[id="close_btn"] - [text="反馈"]'],
          activityIds: ['com.sigmob.sdk.base.common.PortraitAdActivity'],
        },
      ],
    },
    {
      key: 24,
      name: '看视频-已获得奖励-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[text$="跳过"] - [text="已获得奖励"] <n [id="close_btn"] - [text="反馈"]',
          ],
          activityIds: ['com.sigmob.sdk.base.common.PortraitAdActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[id="close_btn"] - [text="反馈"]'],
          activityIds: ['com.sigmob.sdk.base.common.PortraitAdActivity'],
        },
      ],
    },
    {
      key: 25,
      name: '看视频-点击下载免看广告-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text^="点击下载免看广告"] <<n * [text="跳过"]'],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 26,
      name: '看视频-点击打开-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@Image < [id="7b5368"] < [id="01dce7"] - [id="aa39b4"] > [text="反馈"][id="665045"]',
          ],
          activityIds: ['com.byazt.xs.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
  ],
});
