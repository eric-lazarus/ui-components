/* eslint-disable max-len */

/* methods used in multiple components */

const Helpers = {
  async fetchPostJson(url, data, headers = {}) {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    const headerKeys = Object.keys(headers)
    if (headerKeys?.length > 0) {
      headerKeys.forEach((key) => {
        myHeaders.append(key, headers[key])
      })
    }
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: 'follow'
    }

    const response = await fetch(url, requestOptions)
    // parses JSON response into native JavaScript objects
    return response.json()
  },

  async fetchGet(url, headers) {
    const myHeaders = new Headers(headers)
    myHeaders.append('Content-Type', 'application/json')
    const requestOptions = {
      headers: myHeaders,
      redirect: 'follow'
    }

    const response = await fetch(url, requestOptions)
    // parses JSON response into native JavaScript objects
    return response.json()
  },

  time() {
    const now = new Date()
    const hour = now.getHours()
    const min = now.getMinutes()
    return `${hour}:${min}`
  },

  mysteryCaseToDisplay(str) {
    if (str) {
      if (str.includes('_')) {
        return this.snakeCaseToDisplay(str)
      } else {
        return this.camelCaseToDisplay(str)
      }
    }
  },

  camelCaseToDisplay(str) {
    const result = str.replace(/([A-Z])/g, ' $1')
    return result.charAt(0).toUpperCase() + result.slice(1)
  },

  snakeCaseToDisplay(str) {
    let result = str.charAt(0).toUpperCase() + str.slice(1)
    while (result.includes('_')) {
      const indexOfFirst_ = result.indexOf('_')
      result =
        result.slice(0, indexOfFirst_) +
        ' ' +
        result.charAt(indexOfFirst_ + 1).toUpperCase() +
        result.slice(indexOfFirst_ + 2)
    }
    return result
  },

  displayToSnakeCase(val) {
    return val.toLowerCase().replace(' ', '_')
  },

  async getFileFromURL(url, name) {
    const response = await fetch(url)
      .then((resp) => {
        return resp
      })
      .catch((err) => {
        console.log(url, err)
        return null
      })
    const blob = await response?.blob() || null
    return blob ? new File([blob], name, { type: blob.type }) : null
  },

  copyToClipBoard(copyText, successCb = () => {}) {
    navigator.permissions
      .query({ name: 'clipboard-write' })
      .then((result) => {
        if (result.state === 'granted' || result.state === 'prompt') {
          /* write to the clipboard */
          navigator.clipboard
            .writeText(copyText)
            .then(() => {
              /* clipboard successfully set */
              successCb()
            })
            .catch(clipboardCopyFallback)
        } else {
          clipboardCopyFallback()
        }
      })
      .catch(clipboardCopyFallback)

    function clipboardCopyFallback() {
      /*
        Necessary for Safari/Firefox or situtations without clipboard access:
        -Create invisible DOM element that contains copyText
        -Focus/select DOM element
        -copy content of DOM element
        -remove DOM element
      */
      const textArea = document.createElement('textarea')
      textArea.value = copyText

      // Avoid scrolling to bottom
      textArea.style.top = '0'
      textArea.style.left = '0'
      textArea.style.position = 'fixed'

      // create DOM element, focus, select DOM element
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()

      // copy content of DOM element
      try {
        /*
          MDN says document.execCommand is deprecated
          but at the time of writing this (Feb 2023),
          it has wide browser support
        */
        document.execCommand('copy')
        successCb()
      } catch (err) {
        console.error('Unable to copy to clipboard: ', err)
      }
      // remove DOM element
      document.body.removeChild(textArea)
    }
  },

  timeStampToDate(timestamp) {
    if (timestamp) {
      const dateObj = new Date(timestamp)
      return (
        dateObj.getMonth() +
        1 +
        '/' +
        dateObj.getDate() +
        '/' +
        dateObj.getFullYear()
      )
    }
  },

  timeStampToTime(timestamp) {
    const dateObj = new Date(timestamp)
    const hours = dateObj.getHours().toString()
    const minutes = dateObj.getMinutes().toString()
    const formattedHours = hours.length === 2 ? hours : '0' + hours
    const formattedMinutes = minutes.length === 2 ? minutes : '0' + minutes
    return `${formattedHours}:${formattedMinutes}`
  },

  formatDate(str) {
    if (str) {
      const dashB = str.slice(5, str.length) + '/' + str.slice(0, 4)
      return dashB.replace('-', '/')
    } else {
      return ''
    }
  },

  returnIndexWithinRange(i, range) {
    if (i >= range) {
      return i % range
    } else {
      return i
    }
  },

  downloadJsonData(val, name) {
    const blob = new Blob([val], { type: 'application/json' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.setAttribute('href', url)
    a.setAttribute(
      'download',
      name.substring(name.length - 5) === '.json' ? name : `${name}.json`
    )
    a.click()
  },

  openLinkInNewTab(link) {
    Object.assign(document.createElement('a'), {
      target: '_blank',
      rel: 'noopener noreferrer',
      href: link
    }).click()
  },

  truncateString(str, limit) {
    if (limit && str?.length > limit) {
      return str.slice(0, limit) + '...'
    } else {
      return str
    }
  },

  assessSubSectionCompletion(subSectionData) {
    const ids = Object.keys(subSectionData)
    let completed = 0
    ids.forEach((id, i) => {
      const questionData = subSectionData[id]
      if (questionData.Answer) {
        completed++
      }
    })
    return {
      total: ids.length,
      completed
    }
  },

  removeCheckbox(str) {
    if (str) {
      const boxChar = '□'
      const boxCharSpace = '□ '
      const step1 = str.replace(boxCharSpace, '')
      const step2 = step1.replace(boxChar, '')
      return step2
    }
  },

  splitTextByCitations(text) {
    const regex = /<co: (\S+)>(.*?)<\/co: [\d,>]+(?!,)/g
    return Array.from(text.matchAll(regex))
  },

  citationTextIntoArray(text) {
    const cited = this.splitTextByCitations(text)
    const fullText = []
    let standardStart = 0
    for (let cIndex = 0; cIndex < cited.length; cIndex++) {
      fullText.push([text.slice(standardStart, cited[cIndex].index), null])
      const citeLength = cited[cIndex][0]?.[cited[cIndex][0].length - 1] === ',' &&
      cited[cIndex][0]?.[cited[cIndex][0].length - 2] === '>'
        ? cited[cIndex][0].length - 1
        : cited[cIndex][0].length
      standardStart = cited[cIndex].index + citeLength
      fullText.push([cited[cIndex][2], cited[cIndex][1].split(',').map((val) => parseInt(val) + 1)])
    }
    fullText.push([text.slice(standardStart), null])
    return fullText
  },

  splitTextByLinks(text) {
    const regex = /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g
    return Array.from(text.matchAll(regex))
  },

  faqTextIntoArray(text) {
    const cited = this.splitTextByLinks(text)
    const fullText = []
    let standardStart = 0
    for (let cIndex = 0; cIndex < cited.length; cIndex++) {
      fullText.push([text.slice(standardStart, cited[cIndex].index), null])
      const citeLength = cited[cIndex][0].length
      standardStart = cited[cIndex].index + citeLength
      fullText.push([cited[cIndex][1], cited[cIndex][2]])
    }
    fullText.push([text.slice(standardStart), null])
    return fullText
  }
}

export default Helpers
