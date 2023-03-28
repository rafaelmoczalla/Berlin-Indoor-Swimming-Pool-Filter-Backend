# Berlin-Indoor-Swimming-Pool-Filter-Backend
## Local Development
The `Server.tsx` file is the main file of the server where the magic is happening.

You can build the server locally to check for build errors.
```bash
yarn build
```

You can run a local version of the backend server.
```bash
yarn start
```

## Heroku Stuff
Do not change `0.0.0.0` to `localhost` as the host. Otherwise Heroku is unable to bind the port.

### Show Logs
The option `--tail` sends continuous logging to the terminal. For one shot logs remove this option.
```bash
heroku logs --tail --app=berlin-indoor-swimming-backend
```

### Restart
After a new version of the server was deployed to github you need to restart the  
```bash
heroku restart --app=berlin-indoor-swimming-backend
```