<template>
  <div markdown="1" v-html="content"></div>
</template>

<script>
export default {
  data() {
    return {
      content: `
    configureWebpack: {
    resolve: {
      alias: {
        fs: 'pdfkit/js/virtual-fs.js'
      }
    },
    module: {
      rules: [
        {
          enforce: 'post',
          test: /fontkit[/\\]index.js$/,
          loader: 'transform-loader?brfs'
        },
        {
          enforce: 'post',
          test: /unicode-properties[/\\]index.js$/,
          loader: 'transform-loader?brfs'
        },
        {
          enforce: 'post',
          test: /linebreak[/\\]src[/\\]linebreaker.js/,
          loader: 'transform-loader?brfs'
        },
        { test: /src[/\\]assets/, loader: 'arraybuffer-loader' },
        { test: /\.afm$/, loader: 'raw-loader' }
      ]
    }
  }`
    }
  }
}
</script>

<style></style>
