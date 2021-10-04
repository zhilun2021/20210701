#抖音去广告，适用于抖音16.2.0以下版本

hostname =  *.snssdk.com, *.amemv.com


[rewrite_local]

# 抖音去广告去水印 (By Choler)
#URL Rewrite
^https?+:\/\/[\w-]++\.amemv\.com\/aweme\/v\d\/feed\/ url request-header ^GET \/aweme\/v\d\/feed\/(.+)(\r\n)Host:.+ request-header GET /aweme/v1/feed/$1$2Host: aweme.snssdk.com
^https?+:\/\/[\w-]++\.amemv\.com\/aweme\/v\d\/aweme\/post\/ url request-header ^GET \/aweme\/v\d\/aweme\/post\/(.+)(\r\n)Host:.+ request-header GET /aweme/v1/aweme/post/$1$2Host: aweme.snssdk.com
^https?+:\/\/[\w-]++\.amemv\.com\/aweme\/v\d\/follow\/feed\/ url request-header ^GET \/aweme\/v\d\/follow\/feed\/(.+)(\r\n)Host:.+ request-header GET /aweme/v1/follow/feed/$1$2Host: aweme.snssdk.com
^https?+:\/\/[\w-]++\.amemv\.com\/aweme\/v\d\/nearby\/feed\/ url request-header ^GET \/aweme\/v\d\/nearby\/feed\/(.+)(\r\n)Host:.+ request-header GET /aweme/v1/nearby/feed/$1$2Host: aweme.snssdk.com

