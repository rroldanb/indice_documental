# indice_documental



## Lista procesos pm2
gonzalo@gonzalo-PC:~$ pm2 list
⇆ PM2+ activated | Instance Name: gonzalo-PC-1c2c | Dash: https://app.pm2.io/#/r/qr1hfhdq79rb2i2
┌────┬────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id │ name   │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├────┼────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0  │ app    │ default     │ 1.0.0   │ fork    │ 1482     │ 5h     │ 0    │ online    │ 0%       │ 79.6mb   │ gonzalo  │ disabled │
└────┴────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘

## Restart el serivio node
gonzalo@gonzalo-PC:~$ pm2 restart 0


## Status pm2
gonzalo@gonzalo-PC:~$ systemctl status pm2-gonzalo
● pm2-gonzalo.service - PM2 process manager
     Loaded: loaded (/etc/systemd/system/pm2-gonzalo.service; enabled; vendor preset: enabled)
     Active: active (running) since Mon 2024-07-29 09:39:10 -04; 5h 26min ago
       Docs: https://pm2.keymetrics.io/
    Process: 559 ExecStart=/home/gonzalo/.config/nvm/versions/node/v18.16.0/lib/node_modules/pm2/bin/pm2 resurrect (code=exited, status=0/SUCCESS)
   Main PID: 1114 (PM2 v5.3.1: God)
      Tasks: 33 (limit: 6881)
     Memory: 162.6M
        CPU: 4min 7.372s
     CGroup: /system.slice/pm2-gonzalo.service
             ├─1114 "PM2 v5.3.1: God Daemon (/home/gonzalo/.pm2)" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "">
             ├─1214 "PM2 Agent v2.0.3: (/home/gonzalo/.pm2)" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" ">
             └─1482 "node /home/gonzalo/Documentos/_coder/react/indice_documental/node/app.js" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" >

jul 29 09:39:10 gonzalo-PC pm2[559]: [PM2] PM2 Successfully daemonized
jul 29 09:39:10 gonzalo-PC pm2[559]: [PM2] Resurrecting
jul 29 09:39:10 gonzalo-PC pm2[559]: [PM2] Restoring processes located in /home/gonzalo/.pm2/dump.pm2
jul 29 09:39:10 gonzalo-PC pm2[559]: [PM2] Process /home/gonzalo/Documentos/_coder/react/indice_documental/node/app.js restored
jul 29 09:39:10 gonzalo-PC pm2[559]: ┌────┬────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────>
jul 29 09:39:10 gonzalo-PC pm2[559]: │ id │ name   │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watch>
jul 29 09:39:10 gonzalo-PC pm2[559]: ├────┼────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────>
jul 29 09:39:10 gonzalo-PC pm2[559]: │ 0  │ app    │ default     │ 1.0.0   │ fork    │ 1482     │ 0s     │ 0    │ online    │ 0%       │ 46.8mb   │ gonzalo  │ disab>
jul 29 09:39:10 gonzalo-PC pm2[559]: └────┴────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────>
jul 29 09:39:10 gonzalo-PC systemd[1]: Started PM2 process manager.
lines 1-24/24 (END)

## Documentacion node en linux:
https://www.digitalocean.com/community/tutorials/como-configurar-una-aplicacion-de-node-js-para-produccion-en-ubuntu-18-04-es
