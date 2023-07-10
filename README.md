# stocken backend 🚀🌌

## 🌍 Directory Structure

```bash
src
├ constants
├ controllers # Responsible for handling incoming HTTP requests
│  └ xxx.controller.ts
├ domain # Holds business logic, entities, and domain-specific data types
│  └ xxx.interface.ts
├ infrastructure # Contains classes and code related to infrastructure concerns
│  ├ xxx.repository.ts
│  └ xxx.repository-interface.ts
├ libs
├ routers # Defines the route handlers for different endpoints
│  └ xxx.routers.ts
├ services # Contains the application's business logic
│  └ xxx.service.ts
└ handler.ts
```

## 🪐 Features

### 🪐🚀 API Endpoints

|Status|Category|Method|Endpoint|Description|
|:---:|:---|:---|:---|:---|
|🚧|Auth|GET|/auth/nonce|Generate nonce|
|🚧|Auth|POST|/auth/verify|Verify|
|🚧|User|GET|/user/:id|Get user by id|
|🚧|User|POST|/user|Create user|
|🚧|User|PUT|/user/:id|Update user|

## 🛰️ Getting Started

Start DynamoDB container

```bash
docker-cmpose up -d
```

Install packages

```bash
pnpm install
```

## 🌌 Metadata Standards

Metadata for NFTs conforms to [Metadata standards](https://docs.opensea.io/docs/metadata-standards).

## 📡 License

MIT © stocken

May the decentralized force be with you! 🌌
