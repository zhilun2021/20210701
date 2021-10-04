#抖音去广告，适用于抖音16.2.0以下版本
[mitm]
hostname =  aweme.snssdk.com, frontier.snssdk.com


[rewrite_local]

^https?:\/\/.+?\.(snssdk|amemv)\.com\/api\/ad\/ url reject-img
^https?:\/\/.+?\.snssdk\.com\/motor\/operation\/activity\/display\/config\/V2\/ url reject
^https?:\/\/[\s\S]*\.snssdk\.com\/api\/ad\/ url reject-img
^https?:\/\/[\w-]+\.snssdk\.com\/.+_ad\/ url reject
^https?:\/\/aweme\.snssdk\.com\/aweme\/v1\/aweme\/stats\/ url reject-img
^https?:\/\/aweme\.snssdk\.com\/aweme\/v1\/device\/update\/ url reject-img
^https?:\/\/aweme\.snssdk\.com\/aweme\/v1\/screen\/ad\/ url reject-img
^https?:\/\/aweme\.snssdk\.com\/service\/1\/app_logout\/ url reject-img
^https?:\/\/aweme\.snssdk\.com\/service\/2\/app_log url reject-img
^https?:\/\/frontier\.snssdk\.com\/ url reject-img
