#!/usr/bin/env node
import { userInfo } from 'os'

async function main(): Promise<void> {
  console.log(`Hello, ${userInfo().username}!`)
}

await main()
