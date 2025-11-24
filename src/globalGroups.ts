import { defineGkdGlobalGroups } from '@gkd-kit/define';
import * as appList from './globalDefaultApps';

export const LOOK_VIDIEO = -10; // 看视频

export default defineGkdGlobalGroups([
  {
    key: 0,
    name: '看视频',
    order: LOOK_VIDIEO,
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    disableIfAppGroupMatch: '看视频',
    rules: [
      {
        key: 0,
        desc: '查看-反馈-×',
        anyMatches: [
          '@ImageView +n * >n [text="反馈"] +n * >n View',
          '@ImageView -n [text="反馈"] +n View',
        ],
        activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
      },
      {
        key: 1,
        desc: '反馈-×',
        matches: [
          '@Image <n * <n * -n * >n [text="反馈"] <<n [text="穿山甲"]',
        ],
        activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      },
      {
        key: 2,
        desc: '摇一摇或点击查看详情-×',
        matches: [
          '@[id$="/ms_activity_sdk_interstitial_cacel"] +n * >n [text="摇一摇或点击查看详情"]',
        ],
        activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      },
    ],
    apps: [...appList.whiteListAppIDs]
      .map((id) => ({ id, enable: false }))
      .concat(
        [...appList.whiteListAppIDs].map((id) => ({ id, enable: true })),
      ),
  },
]);
