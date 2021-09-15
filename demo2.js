function showMemory() {
  const { rss, heapUsed, heapTotal, external } = process.memoryUsage()
  console.log(`rss:${rss}, heapUsed:${heapUsed}, heapTotal:${heapTotal}, external:${external}`)
}

setInterval(showMemory, 1000)
