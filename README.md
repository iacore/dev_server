# Typescript Dev Server

This is like `python -m http.server`, except it transpiles Typescript files to ESM.

## Getting Started

I mean just clone this repo and run `deno install -g --allow-read --allow-write --allow-net --allow-env mod.ts` to install this program.

Create project from template (check under template/)

```sh
ts_dev_server my_app --template hello_world
ts_dev_server my_app --template react
ts_dev_server my_app --template angular
```

## Quick Test

```
deno run --allow-read --allow-write --allow-net --unstable ./mod.ts ./template/hello_world
```

## TODOs

- [ ] Hot Module Replacement
- [ ] CSS Pre-Processors
- [ ] Building for Production
