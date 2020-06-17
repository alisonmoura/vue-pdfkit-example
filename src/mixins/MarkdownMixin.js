import marked from 'marked'
import pygmentize from 'pygmentize'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
hljs.registerLanguage('javascript', javascript)

export default {
  methods: {
    markdown(content) {
      return marked(content)
    },
    highlight(content) {
      return hljs.highlight('javascript', content).value
    },
    pygmentize(content) {
      return new Promise((resolve, reject) => {
        pygmentize({ lang: 'javascript', format: 'html' }, content, function(
          err,
          result
        ) {
          if (err) reject(err)
          else resolve(result.toString())
        })
      })
    }
  }
}
