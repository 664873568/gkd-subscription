// 全局规则白名单（由于系统应用默认禁用全局规则，所以对系统应用启用白名单模式）
// 在一些系统软件中启用所有全局规则
export const whiteListAppIDs: string[] = [];

// 广告厂商白名单
export const updateWhiteListAppIDs = new Set([
  ...whiteListAppIDs,
  'com.baidu.mobads.sdk.api.MobRewardVideoActivity', // 百度联盟-百青藤
  'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity', // 字节跳动-穿山甲
  'com.meishu.sdk.activity.SdkInterstitialActivity', // 美数
]);
