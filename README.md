# typescript-script-cronjob

Local script that runs daily via a cronjob.

# How to develop?

Create a new Personal Authentication Token with permissions `user:follow` and give it to `.env`. Then:

```bash
npm run dev
```

# How to use?

1. Build it.

```bash
npm run build
```

2. Create a cronjob pointing to `dist/index.js`.

```bash
crontab -e
0 */8 * * * /usr/bin/node FULL_PATH_TO_FILE
```
