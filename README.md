Home server API with node and express.

Node app is served with pm2.

Server run on Apache2.

in sites-available folder, add file:

```
api.pi.hole.conf

<VirtualHost *:80>
ServerName api.pi.hole
ProxyPass / http://localhost:3337/
ProxyPassReverse / http://localhost:3337/
</VirtualHost>
```


