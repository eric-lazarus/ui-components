// import React, { useCallback, useEffect, useState, useMemo, useRef } from 'react'

// import * as echarts from 'echarts'
// import ReactECharts from 'echarts-for-react'

// import Notification from './Notification'
// import Icon from './Icon'

// import styles from '../styles/Chart.module.css'

// const Chart = ({
//   data,
//   theme,
//   onChartClick,
//   onChartZoom,
//   title,
//   type,
//   aspectRatio,
//   showOnly,
//   maxHeight = '350px'
// }) => {
//   const [notificationShowing, setNotificationShowing] = useState(false)
//   const [eventsLoaded, setEventsLoaded] = useState(false)
//   const [onEvents, setOnEvents] = useState({})

//   const chartRef = useRef()

//   const colors = useMemo(
//     () => ({
//       errorsLight: '204, 0, 0',
//       errorsDark: '255, 128, 128',
//       questionsLight: '155, 173, 177',
//       questionsDark: '212, 220, 221',
//       pagesLight: '15, 123, 138',
//       pagesDark: '142, 241, 255',
//       requestsLight: '0, 128, 36',
//       requestsDark: '81, 255, 200'
//     }),
//     []
//   )

//   const setData = useCallback(() => {
//     const newData = {
//       errors: [],
//       pages: [],
//       requests: [],
//       questions: []
//     }

//     Object.keys(data.years).map((year) =>
//       Object.keys(data.years[year].months).map((month) => {
//         const tempdata = Object.assign(data, {})
//         let days = data.years[year].months[month].days
//           ? Object.keys(data.years[year].months[month].days)
//           : []

//         const daysObj = {}

//         days.map((day) => {
//           return (daysObj[day.toString()] =
//             data.years[year].months[month].days[day])
//         })

//         tempdata.years[year].months[month].days = daysObj

//         days = Object.keys(tempdata.years[year].months[month].days).sort()

//         return days.map((day) => {
//           const dailyMetrics =
//             tempdata.years[year].months[month].days[day].dailyMetrics

//           const date = new Date(`${year}-${month}-${day}`)

//           newData.errors.push([date, dailyMetrics.dailyErrors])

//           newData.pages.push([date, dailyMetrics.dailyPages])

//           newData.requests.push([date, dailyMetrics.dailyRequests])

//           dailyMetrics.dailyQuestions &&
//             newData.questions &&
//             newData.questions.push([date, dailyMetrics.dailyQuestions])

//           if (!dailyMetrics.dailyQuestions) {
//             newData.questions = null
//           }

//           return newData
//         })
//       })
//     )
//     return newData
//   }, [data])

//   const newData = type !== 'pie' && setData()

//   const fontSize = useMemo(() => 9, [])
//   const fontFamily = useMemo(
//     () => '"OCR A Std", "Anonymous Pro", monospace',
//     []
//   )

//   const zoomDarkTheme = useMemo(
//     () => ({
//       textStyle: {
//         fontFamily,
//         fontSize: fontSize * 0.75,
//         color: 'rgba(255,255,255,.8)'
//       },
//       fillerColor: 'rgba(255,255,255,0.1)',
//       borderColor: 'rgba(255,255,255,.2)',
//       handleStyle: {
//         color: 'rgba(51,51,51,1)',
//         borderColor: 'rgba(102,102,102,1)'
//       },
//       brushStyle: {
//         color: 'rgba(255,255,255, 0.2)'
//       },
//       moveHandleStyle: {
//         color: 'rgba(255,255,255,1)',
//         borderColor: 'rgba(255,255,255,0)',
//         opacity: 0.2
//       },
//       emphasis: {
//         moveHandleStyle: {
//           color: 'rgba(255,255,255,1)',
//           borderColor: 'rgba(255,255,255,0)',
//           opacity: 0.3
//         },
//         handleStyle: {
//           color: 'rgba(51,51,51,1)',
//           borderColor: 'rgba(204,204,204,1)'
//         }
//       },
//       dataBackground: {
//         lineStyle: {
//           color: 'rgba(255,255,255, 0.2)'
//         },
//         areaStyle: {
//           color: 'rgba(255,255,255, 0.4)'
//         }
//       },
//       selectedDataBackground: {
//         lineStyle: {
//           color: 'rgba(255,255,255, 0.4)'
//         },
//         areaStyle: {
//           color: 'rgba(255,255,255, 0.6)'
//         }
//       }
//     }),
//     [fontFamily, fontSize]
//   )

//   const zoomLightTheme = useMemo(
//     () => ({
//       textStyle: {
//         fontFamily,
//         fontSize: fontSize * 0.75,
//         color: 'rgba(0,0,0,.8)'
//       },
//       fillerColor: 'rgba(0,0,0, 0.075)',
//       borderColor: 'rgba(0,0,0,.2)',
//       handleStyle: {
//         color: '#efefef',
//         borderColor: 'rgba(179,179,179,1)'
//       },
//       brushStyle: {
//         color: 'rgba(0, 0, 0, 0.15)'
//       },
//       moveHandleStyle: {
//         color: 'rgba(0,0,0,1)',
//         borderColor: 'rgba(0,0,0,0)',
//         opacity: 0.2
//       },
//       emphasis: {
//         handleStyle: {
//           color: '#fff',
//           borderColor: 'rgba(179,179,179,1)'
//         },
//         moveHandleStyle: {
//           color: 'rgba(0,0,0,1)',
//           borderColor: 'rgba(0,0,0,0)',
//           opacity: 0.3
//         }
//       },
//       dataBackground: {
//         lineStyle: {
//           color: 'rgba(0, 0, 0, 0.2)'
//         },
//         areaStyle: {
//           color: 'rgba(0, 0, 0, 0.2)'
//         }
//       },
//       selectedDataBackground: {
//         lineStyle: {
//           color: 'rgba(0, 0, 0, 0.4)'
//         },
//         areaStyle: {
//           color: 'rgba(0, 0, 0, 0.4)'
//         }
//       }
//     }),
//     [fontFamily, fontSize]
//   )
//   const zoomTheme = useMemo(
//     () => (theme === 'dark' ? zoomDarkTheme : zoomLightTheme),
//     [theme, zoomDarkTheme, zoomLightTheme]
//   )

//   const colorArray = useMemo(() => [], [])

//   if (showOnly === 'requests' || !showOnly) {
//     colorArray.push(
//       theme === 'dark'
//         ? 'rgba(' + colors.requestsDark + ', 1)'
//         : 'rgba(' + colors.requestsLight + ', .9)'
//     )
//   }

//   if (showOnly === 'errors' || !showOnly) {
//     colorArray.push(
//       theme === 'dark'
//         ? 'rgba(' + colors.errorsDark + ', 1)'
//         : 'rgba(' + colors.errorsLight + ', .9)'
//     )
//   }

//   if (showOnly === 'pages' || !showOnly) {
//     colorArray.push(
//       theme === 'dark'
//         ? 'rgba(' + colors.pagesDark + ', 1)'
//         : 'rgba(' + colors.pagesLight + ', .9)'
//     )
//   }
//   if (showOnly === 'questions' || !showOnly) {
//     colorArray.push(
//       theme === 'dark'
//         ? 'rgba(' + colors.questionsDark + ', 1)'
//         : 'rgba(' + colors.questionsLight + ', .9)'
//     )
//   }

//   const optionShared = useMemo(
//     () => ({
//       title: {
//         text: title
//       },
//       toolbox: {
//         top: 30,
//         right: type === 'pie' ? 0 : 15,
//         feature: {
//           saveAsImage: {
//             backgroundColor: theme === 'dark' ? 'black' : 'white'
//           }
//         },
//         tooltip: {
//           show: false,
//           textStyle: {
//             fontFamily,
//             fontSize,
//             color: theme === 'dark' ? 'white' : 'black'
//           },
//           className: theme === 'dark' ? styles.tooltipDark : styles.tooltipLight
//         },
//         showTitle: false,
//         emphasis: {
//           iconStyle: {
//             textFill: theme === 'dark' ? 'white' : 'black',
//             borderColor: theme === 'dark' ? 'white' : 'black'
//           }
//         }
//       },
//       darkMode: theme === 'dark',
//       tooltip: {
//         trigger: 'axis',
//         textStyle: {
//           fontFamily,
//           fontSize
//         },
//         className: theme === 'dark' ? styles.tooltipDark : styles.tooltipLight
//       },
//       textStyle: {
//         fontFamily,
//         fontSize,
//         color: theme === 'dark' ? '#fff' : '#000'
//       },
//       color: colorArray,
//       grid: {
//         left: 0,
//         right: 0,
//         bottom: 0,
//         top: 0
//       },
//       series:
//         type === 'pie'
//           ? [
//               {
//                 type: 'pie',
//                 radius: ['60%', '80%'],
//                 avoidLabelOverlap: false,
//                 label: {
//                   show: false,
//                   position: 'center'
//                 },
//                 emphasis: {
//                   label: {
//                     show: true,
//                     fontSize
//                   }
//                 },
//                 data: [
//                   {
//                     name: 'Successes',
//                     value: data[0]
//                   },
//                   {
//                     name: 'Failures',
//                     value: data[1]
//                   }
//                 ]
//               }
//             ]
//           : [
//               (showOnly === 'requests' || !showOnly) && {
//                 name: 'Requests',
//                 type: 'line',
//                 lineStyle: {
//                   width: 1
//                 },
//                 smooth: true,
//                 z: 2,
//                 symbol: 'none',
//                 symbolSize: 3,
//                 areaStyle: {
//                   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                     {
//                       offset: 0.2,
//                       color:
//                         theme === 'dark'
//                           ? 'rgba(' + colors.requestsDark + ', .9)'
//                           : 'rgba(' + colors.requestsLight + ', .9)'
//                     },
//                     {
//                       offset: 1,
//                       color:
//                         theme === 'dark'
//                           ? 'rgba(' + colors.requestsDark + ', 0.4)'
//                           : 'rgba(' + colors.requestsLight + ', 0.4)'
//                     }
//                   ])
//                 },
//                 data: newData.requests
//               },
//               (showOnly === 'errors' || !showOnly) && {
//                 name: 'Errors',
//                 type: 'line',
//                 lineStyle: {
//                   width: 1
//                 },
//                 step: !showOnly ? 'middle' : '',
//                 smooth: !showOnly ? '' : true,
//                 z: 4,
//                 stack: 2,
//                 symbol: 'diamond',
//                 symbolSize: 4,
//                 emphasis: {
//                   scale: 3
//                 },
//                 areaStyle: {
//                   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                     {
//                       offset: 0.2,
//                       color:
//                         theme === 'dark'
//                           ? 'rgba(' + colors.errorsDark + ', .8)'
//                           : 'rgba(' + colors.errorsLight + ', .8)'
//                     },
//                     {
//                       offset: 1,
//                       color:
//                         theme === 'dark'
//                           ? 'rgba(' + colors.errorsDark + ', 0.4)'
//                           : 'rgba(' + colors.errorsLight + ', 0.4)'
//                     }
//                   ])
//                 },
//                 data: newData.errors
//               },
//               (showOnly === 'pages' || !showOnly) && {
//                 name: 'Pages',
//                 type: 'line',
//                 lineStyle: {
//                   width: 1
//                 },
//                 smooth: true,
//                 z: 1,
//                 symbol: 'none',
//                 symbolSize: 3,
//                 areaStyle: {
//                   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                     {
//                       offset: 0.2,
//                       color:
//                         theme === 'dark'
//                           ? 'rgba(' + colors.pagesDark + ', .9)'
//                           : 'rgba(' + colors.pagesLight + ', .9)'
//                     },
//                     {
//                       offset: 1,
//                       color:
//                         theme === 'dark'
//                           ? 'rgba(' + colors.pagesDark + ', 0.4)'
//                           : 'rgba(' + colors.pagesLight + ', 0.4)'
//                     }
//                   ])
//                 },
//                 data: newData.pages
//               },
//               (showOnly === 'questions' || !showOnly) &&
//                 newData.questions && {
//                   name: 'Questions',
//                   type: 'line',
//                   lineStyle: {
//                     width: 1
//                   },
//                   smooth: true,
//                   z: 3,
//                   symbol: 'none',
//                   symbolSize: 3,
//                   areaStyle: {
//                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                       {
//                         offset: 0.2,
//                         color:
//                           theme === 'dark'
//                             ? 'rgba(' + colors.questionsDark + ', 1)'
//                             : 'rgba(' + colors.questionsLight + ', 1)'
//                       },
//                       {
//                         offset: 1,
//                         color:
//                           theme === 'dark'
//                             ? 'rgba(' + colors.questionsDark + ', 0.6)'
//                             : 'rgba(' + colors.questionsLight + ', 0.6)'
//                       }
//                     ])
//                   },
//                   data: newData.questions
//                 }
//             ]
//     }),
//     [
//       colorArray,
//       colors.errorsDark,
//       colors.errorsLight,
//       colors.pagesDark,
//       colors.pagesLight,
//       colors.questionsDark,
//       colors.questionsLight,
//       colors.requestsDark,
//       colors.requestsLight,
//       data,
//       fontFamily,
//       fontSize,
//       newData.errors,
//       newData.pages,
//       newData.questions,
//       newData.requests,
//       showOnly,
//       theme,
//       title,
//       type
//     ]
//   )

//   const lineOption = useMemo(
//     () => ({
//       ...optionShared,

//       dataZoom: [
//         Object.assign(
//           {
//             filterMode: 'none',
//             type: 'slider',
//             zlevel: 4,
//             left: '60px',
//             right: '60px',
//             labelFormatter: function (value) {
//               return new Date(value).toLocaleDateString()
//             }
//           },
//           zoomTheme
//         ),
//         {
//           end: 100,
//           start: 0,
//           type: 'inside'
//         }
//       ],
//       grid: {
//         left: 60,
//         right: 60,
//         bottom: 80,
//         top: !showOnly ? 80 : 60
//       },
//       xAxis: [
//         {
//           axisLabel: {
//             fontFamily,
//             fontSize
//           },
//           nameTextStyle: {
//             fontFamily,
//             fontSize
//           },
//           type: 'time',
//           boundaryGap: false,
//           axisPointer: {
//             label: {
//               fontFamily
//             }
//           },
//           data: {
//             textStyle: {
//               fontFamily,
//               fontSize
//             }
//           }
//         }
//       ],
//       yAxis: {
//         axisLabel: {
//           fontFamily,
//           fontSize
//         },
//         type: 'value',
//         splitLine: {
//           lineStyle: {
//             color:
//               theme === 'dark'
//                 ? 'rgba(255, 255, 255, .15)'
//                 : 'rgba(0, 0, 0, .15)'
//           }
//         }
//       },
//       legend: !showOnly
//         ? {
//             icon: 'circle',
//             top: '32',
//             inactiveColor:
//               theme === 'dark'
//                 ? 'rgba(128, 128, 128, 1)'
//                 : 'rgba(179, 179, 179, 1)',
//             textStyle: {
//               fontFamily,
//               fontSize,
//               color:
//                 theme === 'dark'
//                   ? 'rgba(255, 255, 255, .8)'
//                   : 'rgba(0, 0, 0, .8)'
//             },
//             itemGap: 10
//           }
//         : ''
//     }),
//     [fontFamily, fontSize, optionShared, showOnly, theme, zoomTheme]
//   )

//   const handleZoom = useCallback(
//     (e, c) => {
//       const startRange = newData.errors[0][0]
//       const endRange = newData.errors[newData.errors.length - 1][0]
//       const difference = endRange - startRange

//       let startPercent, endPercent
//       if (e.batch && e.batch[0]) {
//         startPercent = e.batch[0].start / 100
//         endPercent = e.batch[0].end / 100
//       } else {
//         startPercent = e.start / 100
//         endPercent = e.end / 100
//       }

//       const start = new Date(startPercent * difference + startRange.getTime())
//       const end = new Date(endPercent * difference + startRange.getTime())

//       onChartZoom && onChartZoom({ start, end })
//     },
//     [newData, onChartZoom]
//   )

//   const handleClick = useCallback(
//     (e) => {
//       const shouldCopy = e.seriesName === 'Errors' && e.data[1] > 0
//       shouldCopy &&
//         navigator.clipboard.writeText(e.data[0].toLocaleDateString())

//       shouldCopy && setNotificationShowing(false)
//       shouldCopy &&
//         setTimeout(() => {
//           setNotificationShowing(true)
//         }, 50)
//       onChartClick && onChartClick(e)
//     },
//     [onChartClick]
//   )

//   const setEvents = useCallback(() => {
//     setTimeout(() => {
//       type !== 'pie' &&
//         setOnEvents({
//           dataZoom: (e) => handleZoom(e),
//           click: (e) => handleClick(e)
//         })
//     }, 2000)
//   }, [handleClick, handleZoom, type])

//   useEffect(() => {
//     !eventsLoaded && setEvents()
//     !eventsLoaded && setEventsLoaded(true)
//   }, [eventsLoaded, setEvents, setEventsLoaded])

//   return (
//     <div
//       className={`${styles.chart} ${
//         theme === 'dark' ? styles.dark : styles.light
//       }`}
//     >
//       <Notification
//         isVisible={notificationShowing}
//         type={2}
//         theme={theme}
//         content='Copied to clipboard'
//         icon={
//           <Icon
//             icon='checkmark-outline'
//             fill='var(--colors-brand-state-success)'
//           />
//         }
//       />
//       <ReactECharts
//         option={type !== 'pie' ? lineOption : optionShared}
//         onEvents={onEvents}
//         style={{
//           height: '100%',
//           aspectRatio: aspectRatio || (type !== 'pie' ? '5/4' : '1/1'),
//           width: '100%',
//           maxHeight
//         }}
//         ref={chartRef}
//       />
//     </div>
//   )
// }

// export default Chart

import React from 'react'

export default function Chart() {
  return (
    <div>Chart</div>
  )
}

