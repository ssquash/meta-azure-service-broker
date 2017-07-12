var supportedEnvironment = {
  AzureCloud: {
    location: 'eastus',
    redisCacheEndpointSuffix: '.redis.cache.windows.net',
    sqlServerEndpointSuffix: '.database.windows.net',
    mysqlServerEndpointSuffix: '.mysql.database.azure.com',
    postgresqlServerEndpointSuffix: '.postgres.database.azure.com',
    serviceBusEndpointSuffix: '.servicebus.windows.net',
    storageEndpointSuffix: '.core.windows.net'
  },
  AzureChinaCloud: {
    location: 'chinaeast',
    redisCacheEndpointSuffix: '.redis.cache.chinacloudapi.cn',
    sqlServerEndpointSuffix: '.database.chinacloudapi.cn',
    serviceBusEndpointSuffix: '.servicebus.chinacloudapi.cn',
    storageEndpointSuffix: '.core.chinacloudapi.cn'
  },
  AzureGermanCloud: {
    location: 'germanycentral',
    redisCacheEndpointSuffix: '.redis.cache.cloudapi.de',
    sqlServerEndpointSuffix: '.database.cloudapi.de',
    serviceBusEndpointSuffix: '.servicebus.cloudapi.de',
    storageEndpointSuffix: '.core.cloudapi.de',
  },
  AzureUSGovernment: {
    location: 'usgovvirginia',
    redisCacheEndpointSuffix: '.redis.cache.usgovcloudapi.net',
    sqlServerEndpointSuffix: '.database.usgovcloudapi.net',
    serviceBusEndpointSuffix: '.servicebus.usgovcloudapi.net',
    storageEndpointSuffix: '.core.usgovcloudapi.net',
  }
};

module.exports = supportedEnvironment;