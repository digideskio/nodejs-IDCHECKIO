var apiClient = new idcheckio_nodejs_client.ApiClient();
apiClient.basePath = "https://api.idcheck.io:443/rest";

var basic = apiClient.authentications['basic'];
basic.username = 'exemple@exemple.com';
basic.password = 'exemple';

var instance = new idcheckio_nodejs_client.SandboxApi();
instance.apiClient = apiClient;

var opts = {
  'rawType': 'Base64',
  'face': 'RECTO',
  'light': 'DL'
}

# imageUid from a response GetImageList
instance.getImage(imageUid, opts, function(error, data, response) {
  if (error) throw error;
  console.log(data);
});
