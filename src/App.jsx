// import React, { useState } from 'react'

import {
  AsideDiv,
  Avatar,
  BirthdayForm,
  Button,
  Button2,
  Card,
  ConfidenceBar,
  FloatingButton,
  Header,
  Icon,
  Input,
  Loader,
  LoadingBar,
  MetricCard,
  Meter,
  Modal,
  Modal2,
  MoleTrackingThumb,
  Notification,
  OrgMemberThumb,
  PatientHeader,
  PatientThumb,
  Pill,
  SearchBar,
  MultiSelect,
  Switch,
  TabContainer,
  Table,
  TableEntry,
  TestSetThumb,
  TestThumb,
  Timeline,
  ToolTip,
  XBoxContainer,
  Slider,
  InputMulti,
  Chat,
  StandardChat,
  Select,
  Animation,
  CollapseCard,
  FrequentlyAskedQuestions
} from '../lib/main.js'

// import Helpers from '../lib/Helpers.js'

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import exampleImportAnimation from './assets/Lazarus_Logo_Transform_1.json'

// const App = () => {
//   const [isLoadingBar, setIsLoadingBar] = useState(false)
//   const [zoom, setZoom] = useState(50)
//   // eslint-disable-next-line no-unused-vars
//   const [time, setTime] = useState(Date.now())
//   const [sex, setSex] = useState(null)
//   const [isLightNavShowing, setIsLightNavShowing] = useState(false)
//   const [isDarkNavShowing, setIsDarkNavShowing] = useState(true)
//   const [isLightModalShowing, setIsLightModalShowing] = useState(false)
//   const [newPrompt, setNewPrompt] = useState('')
//   const [isDarkModalShowing, setIsDarkModalShowing] = useState(false)
//   // const [isLightModal2Showing, setIsLightModal2Showing] = useState(false)
//   const [isDarkModal2Showing, setIsDarkModal2Showing] = useState(false)
//   const [isDarkNotificationShowing, setIsDarkNotificationShowing] =
//     useState(false)
//   const [isLightNotificationShowing, setIsLightNotificationShowing] =
//     useState(false)
//   const [isToolTipShowing, setIsToolTipShowing] = useState(true)

//   const [inputValue, setInputValue] = useState('')

//   const [selectValue, setSelectValue] = useState('')
//   const [selectValue2, setSelectValue2] = useState([])
//   const [animationState, setAnimationState] = useState('generating')
//   const [isAnimationStopped, setIsAnimationStopped] = useState(false)
//   const [prompts, setPrompts] = useState(
//     [
//       {
//         id: '0932749286',
//         title: 'What is love?',
//         questions: ['What is love?'],
//         answers: ['Baby dont hurt me. dont hurt me no more.'],
//         confidence: 0.8,
//         context: 'A song by Haddaway',
//         isStarred: true
//       },
//       {
//         id: '0932749286',
//         isStarred: false,
//         title: 'What is love?',
//         questions: ['What is love?', 'What is this thing called love?'],
//         answers: ['Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more. Baby dont hurt me. dont hurt me no more.'],
//         context: 'A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. A song by Haddaway. '
//       }
//     ]
//   )

//   // const promptsRef = useRef(prompts)
//   // function setPrompts(data) {
//   //   _setPrompts(data)
//   //   promptsRef.current = data
//   // }

//   const toggleDarkNotification = () => {
//     setIsLightNotificationShowing(false)
//     setIsDarkNotificationShowing(!isDarkNotificationShowing)

//     // Commenting this out so it shows the difference in notification types
//     /*
//     setTimeout(() => {
//       setIsDarkNotificationShowing(false)
//     }, 4000)
//     */
//   }

//   // demonstrates the onClickEvent parameter's functionality
//   const logFunct = () => {
//     console.log('Pages tab clicked')
//   }

//   const toggleLightNotification = () => {
//     setIsDarkNotificationShowing(false)
//     setIsLightNotificationShowing(!isLightNotificationShowing)
//   }

//   // const errorRender = (
//   //   <div name='Errors' style={{ paddingBottom: 'var(--spacing-10)' }}>
//   //     <Chart
//   //       aspectRatio='3/2'
//   //       showOnly='errors'
//   //       data={{
//   //         years: {
//   //           2021: {
//   //             months: {
//   //               11: {
//   //                 days: {
//   //                   17: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 6,
//   //                       dailyRequests: 1,
//   //                       dailyQuestions: 80
//   //                     }
//   //                   },
//   //                   18: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 10,
//   //                       dailyPages: 222,
//   //                       dailyRequests: 79,
//   //                       dailyQuestions: 3
//   //                     }
//   //                   },
//   //                   23: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 4,
//   //                       dailyRequests: 2,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   }
//   //                 },
//   //                 monthlyMetrics: {
//   //                   monthlyErrors: 10,
//   //                   monthlyPages: 232,
//   //                   monthlyRequests: 82
//   //                 }
//   //               },
//   //               12: {
//   //                 days: {
//   //                   15: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 6,
//   //                       dailyRequests: 3,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   },
//   //                   16: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 13,
//   //                       dailyRequests: 7,
//   //                       dailyQuestions: 3
//   //                     }
//   //                   },
//   //                   17: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 1,
//   //                       dailyRequests: 1,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   },
//   //                   '08': {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 12,
//   //                       dailyRequests: 4,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   }
//   //                 },
//   //                 monthlyMetrics: {
//   //                   monthlyErrors: 0,
//   //                   monthlyPages: 32,
//   //                   monthlyRequests: 15
//   //                 }
//   //               }
//   //             },
//   //             yearlyMetrics: {
//   //               yearlyErrors: 10,
//   //               yearlyPages: 264,
//   //               yearlyRequests: 97
//   //             }
//   //           }
//   //         }
//   //       }}
//   //     />
//   //   </div>
//   // )
//   // const requestRender = (
//   //   <div name='Requests' style={{ paddingBottom: 'var(--spacing-10)' }}>
//   //     <Chart
//   //       aspectRatio='3/2'
//   //       showOnly='requests'
//   //       data={{
//   //         years: {
//   //           2021: {
//   //             months: {
//   //               11: {
//   //                 days: {
//   //                   17: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 6,
//   //                       dailyRequests: 1,
//   //                       dailyQuestions: 80
//   //                     }
//   //                   },
//   //                   18: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 10,
//   //                       dailyPages: 222,
//   //                       dailyRequests: 79,
//   //                       dailyQuestions: 3
//   //                     }
//   //                   },
//   //                   23: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 4,
//   //                       dailyRequests: 2,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   }
//   //                 },
//   //                 monthlyMetrics: {
//   //                   monthlyErrors: 10,
//   //                   monthlyPages: 232,
//   //                   monthlyRequests: 82
//   //                 }
//   //               },
//   //               12: {
//   //                 days: {
//   //                   15: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 6,
//   //                       dailyRequests: 3,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   },
//   //                   16: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 13,
//   //                       dailyRequests: 7,
//   //                       dailyQuestions: 3
//   //                     }
//   //                   },
//   //                   17: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 1,
//   //                       dailyRequests: 1,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   },
//   //                   '08': {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 12,
//   //                       dailyRequests: 4,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   }
//   //                 },
//   //                 monthlyMetrics: {
//   //                   monthlyErrors: 0,
//   //                   monthlyPages: 32,
//   //                   monthlyRequests: 15
//   //                 }
//   //               }
//   //             },
//   //             yearlyMetrics: {
//   //               yearlyErrors: 10,
//   //               yearlyPages: 264,
//   //               yearlyRequests: 97
//   //             }
//   //           }
//   //         }
//   //       }}
//   //     />
//   //   </div>
//   // )
//   // const pagesRender = (
//   //   <div name='Pages' style={{ paddingBottom: 'var(--spacing-10)' }}>
//   //     <Chart
//   //       aspectRatio='3/2'
//   //       showOnly='pages'
//   //       data={{
//   //         years: {
//   //           2021: {
//   //             months: {
//   //               11: {
//   //                 days: {
//   //                   17: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 6,
//   //                       dailyRequests: 1,
//   //                       dailyQuestions: 80
//   //                     }
//   //                   },
//   //                   18: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 10,
//   //                       dailyPages: 222,
//   //                       dailyRequests: 79,
//   //                       dailyQuestions: 3
//   //                     }
//   //                   },
//   //                   23: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 4,
//   //                       dailyRequests: 2,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   }
//   //                 },
//   //                 monthlyMetrics: {
//   //                   monthlyErrors: 10,
//   //                   monthlyPages: 232,
//   //                   monthlyRequests: 82
//   //                 }
//   //               },
//   //               12: {
//   //                 days: {
//   //                   15: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 6,
//   //                       dailyRequests: 3,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   },
//   //                   16: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 13,
//   //                       dailyRequests: 7,
//   //                       dailyQuestions: 3
//   //                     }
//   //                   },
//   //                   17: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 1,
//   //                       dailyRequests: 1,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   },
//   //                   '08': {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 12,
//   //                       dailyRequests: 4,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   }
//   //                 },
//   //                 monthlyMetrics: {
//   //                   monthlyErrors: 0,
//   //                   monthlyPages: 32,
//   //                   monthlyRequests: 15
//   //                 }
//   //               }
//   //             },
//   //             yearlyMetrics: {
//   //               yearlyErrors: 10,
//   //               yearlyPages: 264,
//   //               yearlyRequests: 97
//   //             }
//   //           }
//   //         }
//   //       }}
//   //     />
//   //   </div>
//   // )

//   // const questionsRender = (
//   //   <div name='Questions' style={{ paddingBottom: 'var(--spacing-10)' }}>
//   //     <Chart
//   //       aspectRatio='3/2'
//   //       showOnly='questions'
//   //       data={{
//   //         years: {
//   //           2021: {
//   //             months: {
//   //               11: {
//   //                 days: {
//   //                   17: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 6,
//   //                       dailyRequests: 1,
//   //                       dailyQuestions: 80
//   //                     }
//   //                   },
//   //                   18: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 10,
//   //                       dailyPages: 222,
//   //                       dailyRequests: 79,
//   //                       dailyQuestions: 3
//   //                     }
//   //                   },
//   //                   23: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 4,
//   //                       dailyRequests: 2,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   }
//   //                 },
//   //                 monthlyMetrics: {
//   //                   monthlyErrors: 10,
//   //                   monthlyPages: 232,
//   //                   monthlyRequests: 82
//   //                 }
//   //               },
//   //               12: {
//   //                 days: {
//   //                   15: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 6,
//   //                       dailyRequests: 3,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   },
//   //                   16: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 13,
//   //                       dailyRequests: 7,
//   //                       dailyQuestions: 3
//   //                     }
//   //                   },
//   //                   17: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 1,
//   //                       dailyRequests: 1,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   },
//   //                   '08': {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 12,
//   //                       dailyRequests: 4,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   }
//   //                 },
//   //                 monthlyMetrics: {
//   //                   monthlyErrors: 0,
//   //                   monthlyPages: 32,
//   //                   monthlyRequests: 15
//   //                 }
//   //               }
//   //             },
//   //             yearlyMetrics: {
//   //               yearlyErrors: 10,
//   //               yearlyPages: 264,
//   //               yearlyRequests: 97
//   //             }
//   //           }
//   //         }
//   //       }}
//   //     />
//   //   </div>
//   // )

//   // const errorRenderDark = (
//   //   <div name='Errors' style={{ paddingBottom: 'var(--spacing-10)' }}>
//   //     <Chart
//   //       aspectRatio='3/2'
//   //       theme='dark'
//   //       showOnly='errors'
//   //       data={{
//   //         years: {
//   //           2021: {
//   //             months: {
//   //               11: {
//   //                 days: {
//   //                   17: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 6,
//   //                       dailyRequests: 1,
//   //                       dailyQuestions: 80
//   //                     }
//   //                   },
//   //                   18: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 10,
//   //                       dailyPages: 222,
//   //                       dailyRequests: 79,
//   //                       dailyQuestions: 3
//   //                     }
//   //                   },
//   //                   23: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 4,
//   //                       dailyRequests: 2,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   }
//   //                 },
//   //                 monthlyMetrics: {
//   //                   monthlyErrors: 10,
//   //                   monthlyPages: 232,
//   //                   monthlyRequests: 82
//   //                 }
//   //               },
//   //               12: {
//   //                 days: {
//   //                   15: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 6,
//   //                       dailyRequests: 3,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   },
//   //                   16: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 13,
//   //                       dailyRequests: 7,
//   //                       dailyQuestions: 3
//   //                     }
//   //                   },
//   //                   17: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 1,
//   //                       dailyRequests: 1,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   },
//   //                   '08': {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 12,
//   //                       dailyRequests: 4,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   }
//   //                 },
//   //                 monthlyMetrics: {
//   //                   monthlyErrors: 0,
//   //                   monthlyPages: 32,
//   //                   monthlyRequests: 15
//   //                 }
//   //               }
//   //             },
//   //             yearlyMetrics: {
//   //               yearlyErrors: 10,
//   //               yearlyPages: 264,
//   //               yearlyRequests: 97
//   //             }
//   //           }
//   //         }
//   //       }}
//   //     />
//   //   </div>
//   // )
//   // const requestRenderDark = (
//   //   <div name='Requests' style={{ paddingBottom: 'var(--spacing-10)' }}>
//   //     <Chart
//   //       aspectRatio='3/2'
//   //       theme='dark'
//   //       showOnly='requests'
//   //       data={{
//   //         years: {
//   //           2021: {
//   //             months: {
//   //               11: {
//   //                 days: {
//   //                   17: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 6,
//   //                       dailyRequests: 1,
//   //                       dailyQuestions: 80
//   //                     }
//   //                   },
//   //                   18: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 10,
//   //                       dailyPages: 222,
//   //                       dailyRequests: 79,
//   //                       dailyQuestions: 3
//   //                     }
//   //                   },
//   //                   23: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 4,
//   //                       dailyRequests: 2,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   }
//   //                 },
//   //                 monthlyMetrics: {
//   //                   monthlyErrors: 10,
//   //                   monthlyPages: 232,
//   //                   monthlyRequests: 82
//   //                 }
//   //               },
//   //               12: {
//   //                 days: {
//   //                   15: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 6,
//   //                       dailyRequests: 3,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   },
//   //                   16: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 13,
//   //                       dailyRequests: 7,
//   //                       dailyQuestions: 3
//   //                     }
//   //                   },
//   //                   17: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 1,
//   //                       dailyRequests: 1,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   },
//   //                   '08': {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 12,
//   //                       dailyRequests: 4,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   }
//   //                 },
//   //                 monthlyMetrics: {
//   //                   monthlyErrors: 0,
//   //                   monthlyPages: 32,
//   //                   monthlyRequests: 15
//   //                 }
//   //               }
//   //             },
//   //             yearlyMetrics: {
//   //               yearlyErrors: 10,
//   //               yearlyPages: 264,
//   //               yearlyRequests: 97
//   //             }
//   //           }
//   //         }
//   //       }}
//   //     />
//   //   </div>
//   // )
//   // const pagesRenderDark = (
//   //   <div name='Pages' style={{ paddingBottom: 'var(--spacing-10)' }}>
//   //     <Chart
//   //       aspectRatio='3/2'
//   //       theme='dark'
//   //       showOnly='pages'
//   //       data={{
//   //         years: {
//   //           2021: {
//   //             months: {
//   //               11: {
//   //                 days: {
//   //                   17: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 6,
//   //                       dailyRequests: 1,
//   //                       dailyQuestions: 80
//   //                     }
//   //                   },
//   //                   18: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 10,
//   //                       dailyPages: 222,
//   //                       dailyRequests: 79,
//   //                       dailyQuestions: 3
//   //                     }
//   //                   },
//   //                   23: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 4,
//   //                       dailyRequests: 2,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   }
//   //                 },
//   //                 monthlyMetrics: {
//   //                   monthlyErrors: 10,
//   //                   monthlyPages: 232,
//   //                   monthlyRequests: 82
//   //                 }
//   //               },
//   //               12: {
//   //                 days: {
//   //                   15: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 6,
//   //                       dailyRequests: 3,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   },
//   //                   16: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 13,
//   //                       dailyRequests: 7,
//   //                       dailyQuestions: 3
//   //                     }
//   //                   },
//   //                   17: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 1,
//   //                       dailyRequests: 1,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   },
//   //                   '08': {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 12,
//   //                       dailyRequests: 4,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   }
//   //                 },
//   //                 monthlyMetrics: {
//   //                   monthlyErrors: 0,
//   //                   monthlyPages: 32,
//   //                   monthlyRequests: 15
//   //                 }
//   //               }
//   //             },
//   //             yearlyMetrics: {
//   //               yearlyErrors: 10,
//   //               yearlyPages: 264,
//   //               yearlyRequests: 97
//   //             }
//   //           }
//   //         }
//   //       }}
//   //     />
//   //   </div>
//   // )
//   // const questionsRenderDark = (
//   //   <div name='Questions' style={{ paddingBottom: 'var(--spacing-10)' }}>
//   //     <Chart
//   //       aspectRatio='3/2'
//   //       theme='dark'
//   //       showOnly='questions'
//   //       data={{
//   //         years: {
//   //           2021: {
//   //             months: {
//   //               11: {
//   //                 days: {
//   //                   17: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 6,
//   //                       dailyRequests: 1,
//   //                       dailyQuestions: 80
//   //                     }
//   //                   },
//   //                   18: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 10,
//   //                       dailyPages: 222,
//   //                       dailyRequests: 79,
//   //                       dailyQuestions: 3
//   //                     }
//   //                   },
//   //                   23: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 4,
//   //                       dailyRequests: 2,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   }
//   //                 },
//   //                 monthlyMetrics: {
//   //                   monthlyErrors: 10,
//   //                   monthlyPages: 232,
//   //                   monthlyRequests: 82
//   //                 }
//   //               },
//   //               12: {
//   //                 days: {
//   //                   15: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 6,
//   //                       dailyRequests: 3,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   },
//   //                   16: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 13,
//   //                       dailyRequests: 7,
//   //                       dailyQuestions: 3
//   //                     }
//   //                   },
//   //                   17: {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 1,
//   //                       dailyRequests: 1,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   },
//   //                   '08': {
//   //                     dailyMetrics: {
//   //                       dailyErrors: 0,
//   //                       dailyPages: 12,
//   //                       dailyRequests: 4,
//   //                       dailyQuestions: 30
//   //                     }
//   //                   }
//   //                 },
//   //                 monthlyMetrics: {
//   //                   monthlyErrors: 0,
//   //                   monthlyPages: 32,
//   //                   monthlyRequests: 15
//   //                 }
//   //               }
//   //             },
//   //             yearlyMetrics: {
//   //               yearlyErrors: 10,
//   //               yearlyPages: 264,
//   //               yearlyRequests: 97
//   //             }
//   //           }
//   //         }
//   //       }}
//   //     />
//   //   </div>
//   // )

//   const [activeTab, setActiveTab] = useState('error')
//   const [activeTabDark, setActiveTabDark] = useState('error')

//   return (
//     <main
//       className={isLightNavShowing || isDarkNavShowing ? 'nav-showing' : ''}
//     >
//       <div className='component' id='Animation'>
//         <h2>Animation</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>animationObj: dict (AfterEffects animation json / Overwrites animationType)</li>
//           <li>animationType: number</li>
//           <li>height: number (pixels)</li>
//           <li>width: number (pixels)</li>
//         </ul>
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
//           gridTemplateRows: '1fr',
//           gap: '4px'
//         }}>
//           <Button
//             type={isAnimationStopped ? 3 : 5}
//             text={isAnimationStopped ? 'Play' : 'Pause'}
//             onClick={() => {
//               setIsAnimationStopped(!isAnimationStopped)
//             }}
//           />
//           <Button
//             type={animationState !== 'generating' ? 5 : 3}
//             text={'generating'}
//             onClick={() => {
//               setAnimationState('generating')
//             }}
//           />
//           <Button
//             type={animationState !== 'error' ? 5 : 3}
//             text={'error'}
//             onClick={() => {
//               setAnimationState('error')
//             }}
//           />
//           <Button
//             type={animationState !== 'browsing' ? 5 : 3}
//             text={'browsing'}
//             onClick={() => {
//               setAnimationState('browsing')
//             }}
//           />
//           <Button
//             type={animationState !== 'extracting' ? 5 : 3}
//             text={'extracting'}
//             onClick={() => {
//               setAnimationState('extracting')
//             }}
//           />
//           <Button
//             type={animationState !== 'loading' ? 5 : 3}
//             text={'loading'}
//             onClick={() => {
//               setAnimationState('loading')
//             }}
//           />
//         </div>
//         <div style={{
//           background: '#000'
//         }}>
//           <Animation
//             animationState={animationState}
//             stopAnimation={isAnimationStopped}
//           />
//           <Animation
//             animationJson={exampleImportAnimation}
//             stopAnimation={isAnimationStopped}
//           />
//           <Animation
//             animationState={animationState}
//             stopAnimation={isAnimationStopped}
//             height={24}
//             width={24}
//           />
//         </div>
//       </div>
//       <div className='component' id='button2'>
//         <h2>Button2</h2>
//         <Button2
//           text='text'
//           theme='dark'
//         />
//       </div>
//       <div className='component' id='AsideDiv'>
//         <h2>AsideDiv</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>type: number</li>
//           <li>text: string</li>
//           <li>number: string</li>
//           <li>isSelected: boolean</li>
//           <li>theme: 'light' || 'dark'</li>
//         </ul>
//         <h3>Light Theme</h3>
//         <div className='box light'>
//           <AsideDiv
//             type={1}
//             text='Step 1'
//             number='Crop Image'
//             switchText='Switch Text'
//             icon={<Icon icon='alert-triangle-outline' />}
//             isSelected
//           />
//         </div>
//         <h3>Dark Theme</h3>
//         <div className='box dark'>
//           <AsideDiv
//             type={2}
//             theme='dark'
//             text='Step 1'
//             number='Crop Image'
//             switchText='Switch Text'
//             icon={<Icon icon='alert-triangle-outline' />}
//             isSelected
//           />
//         </div>
//       </div>
//       <div className='component' id='Avatar'>
//         <h2>Avatar</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>{`style: {}`}</li>
//           <li>name: string</li>
//           <li>size: 'large' || 'medium' || 'small'</li>
//           <li>image: url</li>
//           <li>showGradient: boolean</li>
//           <li>colors: int 0-3</li>
//           <li>onClick: f()</li>
//           <li>theme: 'light' || 'dark'</li>
//         </ul>

//         <h3>Light Theme</h3>
//         <div className='box light'>
//           <Avatar name='Bob Smith' />
//           <Avatar color={3} name='Bob Diyarddddd' showGradient />
//           <Avatar image='avatar.png' />
//           <Avatar icon={<Icon icon='alert-triangle-outline' />} />
//         </div>
//         <h3>Dark Theme</h3>
//         <div className='box dark'>
//           <Avatar name='Bob Smith' theme='dark' />
//           <Avatar name='Bob Diya' showGradient theme='dark' />
//           <Avatar image='avatar.png' theme='dark' />
//           <Avatar icon={<Icon icon='alert-triangle-outline' />} theme='dark' />
//         </div>
//       </div>
//       <div className='component' id='BirthdayForm'>
//         <h2>BirthdayForm</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>onChangeDay: f()</li>
//           <li>onChangeMonth: f()</li>
//           <li>onChangeYear: f()</li>
//           <li>theme: 'light' || 'dark'</li>
//         </ul>
//         <h3>Light Theme</h3>
//         <div className='box light'>
//           <BirthdayForm
//             onChangeDay={() => console.log('on change day')}
//             onChangeMonth={() => console.log('on change month')}
//             onChangeYear={() => console.log('on change year')}
//           />
//         </div>
//         <h3>Dark Theme</h3>
//         <div className='box dark'>
//           <BirthdayForm
//             onChangeDay={() => console.log('on change day')}
//             onChangeMonth={() => console.log('on change month')}
//             onChangeYear={() => console.log('on change year')}
//             theme='dark'
//           />
//         </div>
//       </div>
//       <div className='component' id='Button'>
//         <h2>Button</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>
//             type: 1 || 'primary' || 2 || 'secondary || 3 || 'success' || 4 ||
//             'warn' || 5 || 'error' || 6 || 'ghost' || 7 || 'ghost-accent' || 8
//             || 'ghost-success' || 9 || 'ghost-warn' || 10 || 'ghost-error'
//           </li>
//           <li>text: string</li>
//           <li>onClick: f()</li>
//           <li>iconImage: string</li>
//           <li>icon: element</li>
//           <li>iconPosition: string</li>
//           <li>iconJustify: 'center' || 'edge'</li>
//           <li>selected: : boolean</li>
//           <li>loading: boolean</li>
//           <li>theme: 'light' || 'dark'</li>
//           <li>width: 'auto' || '100%'</li>
//         </ul>
//         <h3>Light Theme</h3>
//         <div className='box light'>
//           <Button
//             type={1}
//             text='Type 1'
//             onClick={() => console.log('Clicked button 1')}
//             theme='light'
//           />

//           <Button
//             type={2}
//             text='Type 2'
//             onClick={() => console.log('Clicked button 2')}
//             theme='light'
//           />

//           <Button
//             type={3}
//             text='Type 3'
//             onClick={() => console.log('Clicked button 3')}
//             icon={<Icon icon='checkmark' />}
//             iconJustify='edge'
//             theme='light'
//           />

//           <Button
//             type='warn'
//             text='Type 4'
//             onClick={() => console.log('Clicked button 4')}
//             icon={<Icon icon='alert-triangle-outline' />}
//             iconPosition='right'
//             iconJustify='edge'
//             theme='light'
//           />

//           <Button
//             type={5}
//             text='Type 5'
//             onClick={() => console.log('Clicked button 5')}
//             icon={<Icon icon='alert-triangle-outline' />}
//             iconPosition='right'
//             iconJustify='edge'
//             theme='light'
//           />

//           <Button
//             type={6}
//             text='Type 6'
//             onClick={() => console.log('Clicked button 6')}
//             theme='light'
//           />

//           <Button
//             type={7}
//             text='Type 7'
//             onClick={() => console.log('Clicked button 7')}
//             theme='light'
//           />

//           <Button
//             type={8}
//             text='Type 8'
//             onClick={() => console.log('Clicked button 8')}
//             theme='light'
//           />

//           <Button
//             type={9}
//             text='Type 9'
//             onClick={() => console.log('Clicked button 9')}
//             theme='light'
//           />

//           <Button
//             type={10}
//             text='Type 10'
//             onClick={() => console.log('Clicked button 10')}
//             theme='light'
//           />
//         </div>
//         <h3>Dark Theme</h3>
//         <div className='box dark'>
//           <Button
//             type={1}
//             text='Type 1'
//             onClick={() => console.log('Clicked button 1')}
//             theme='dark'
//             download={true}
//           />

//           <Button
//             type={2}
//             text='Type 2'
//             onClick={() => console.log('Clicked button 2')}
//             icon={<Icon icon='checkmark' />}
//             iconJustify='edge'
//             theme='dark'
//           />

//           <Button
//             type={3}
//             text='Type 3'
//             onClick={() => console.log('Clicked button 3')}
//             icon={<Icon icon='checkmark' />}
//             iconJustify='edge'
//             theme='dark'
//           />

//           <Button
//             type={4}
//             text='Type 4'
//             onClick={() => console.log('Clicked button 4')}
//             icon={<Icon icon='alert-triangle-outline' />}
//             iconPosition='right'
//             iconJustify='edge'
//             theme='dark'
//           />

//           <Button
//             type={5}
//             text='Type 5'
//             onClick={() => console.log('Clicked button 5')}
//             icon={<Icon icon='alert-triangle-outline' />}
//             iconPosition='right'
//             iconJustify='edge'
//             theme='dark'
//           />

//           <Button
//             type={6}
//             text='Type 6'
//             onClick={() => console.log('Clicked button 6')}
//             theme='dark'
//           />

//           <Button
//             type={7}
//             text='Type 7'
//             onClick={() => console.log('Clicked button 7')}
//             theme='dark'
//           />

//           <Button
//             type={8}
//             text='Type 8'
//             onClick={() => console.log('Clicked button 8')}
//             theme='dark'
//           />

//           <Button
//             type={9}
//             text='Type 9'
//             onClick={() => console.log('Clicked button 9')}
//             theme='dark'
//           />

//           <Button
//             type={10}
//             text='Type 10'
//             onClick={() => console.log('Clicked button 10')}
//             theme='dark'
//           />
//         </div>
//       </div>
//       <div className='component' id='Card'>
//         <h2>Card</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>title: string</li>
//           <li>children</li>
//           <li>theme: 'light' || 'dark'</li>
//         </ul>
//         <h3>Light Theme</h3>
//         <div className='box light'>
//           <Card title='Card Title'>Card content.</Card>
//         </div>
//         <h3>Dark Theme</h3>
//         <div className='box dark'>
//           <Card title='Card Title' theme='dark' id='card-id'>
//             Card content.
//           </Card>
//         </div>
//       </div>
//       <div className='component' id='ConfidenceBar'>
//         <h2>ConfidenceBar</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>{`reasoning: [{Confidence: 0-1, Risk: 'green' || 'yellow' || 'orange' || 'red'}]`}</li>
//         </ul>
//         <ConfidenceBar
//           reasoning={[
//             {
//               Confidence: 0.25,
//               Risk: 'green'
//             },
//             {
//               Confidence: 0.25,
//               Risk: 'yellow'
//             },
//             {
//               Confidence: 0.25,
//               Risk: 'orange'
//             },
//             {
//               Confidence: 0.25,
//               Risk: 'red'
//             }
//           ]}
//         />
//       </div>
//       <div className='component' id='FloatingButton'>
//         <h2>FloatingButton</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>onClick: f()</li>
//           <li>label: string</li>
//           <li>text: string</li>
//           <li>theme: 'light' || 'dark'</li>
//         </ul>
//         <h3>Light Theme</h3>
//         <div className='box light'>
//           <div style={{ marginLeft: '4rem' }}>
//             <FloatingButton
//               // eslint-disable-next-line no-undef
//               onClick={() => alert('onClick FloatingButton!')}
//               label='Tooltip label'
//               icon={<Icon icon='heart-outline' />}
//               text='TL'
//             />
//           </div>
//         </div>
//         <h3>Dark Theme</h3>
//         <div className='box dark'>
//           <div style={{ marginLeft: '4rem' }}>
//             <FloatingButton
//               // eslint-disable-next-line no-undef
//               onClick={() => alert('onClick FloatingButton!')}
//               label='Tooltip label'
//               text='TL'
//               icon={<Icon icon='heart-outline' />}
//               theme='dark'
//             />
//           </div>
//         </div>
//       </div>
//       <div className='component' id='Header'>
//         <h2>Header</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>name: string</li>
//           <li>practice: string</li>
//           <li>image: string</li>
//         </ul>
//         <h3>Light Theme</h3>
//         <div className='box light'>
//           <Header
//             headerTitle='Lazarus AI'
//             changeLogNotes={{
//               version: '1.0.0',
//               versionDetails: 'Version details',
//               versionBullets: [
//                 'Version bullet 1',
//                 'Version bullet 2',
//                 'Version bullet 3'
//               ],
//               versionSummary:
//                 'Version summary version summary version summary version summary version summary version summary version summary version summary'
//             }}
//           />
//         </div>
//         <h3>Dark Theme</h3>
//         <div className='box dark'>
//           <Header
//             headerTitle='Lazarus AI'
//             changeLogNotes={{
//               version: '1.0.0',
//               versionDetails: 'Version details',
//               versionBullets: [
//                 'Version bullet 1',
//                 'Version bullet 2',
//                 'Version bullet 3'
//               ],
//               versionSummary:
//                 'Version summary version summary version summary version summary version summary version summary version summary version summary'
//             }}
//             theme='dark'
//           />
//         </div>
//       </div>
//       <div className='component' id='Input'>
//         <h2>Input</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>onChange: f()</li>
//           <li>onSubmit: f()</li>
//           <li>onKeyDown: f() [not for select || type 3]</li>
//           <li>label: string</li>
//           <li>info: string</li>
//           <li>iconLeftImage: string</li>
//           <li>iconRightImage: string</li>
//           <li>iconLeft: element</li>
//           <li>iconRight: element</li>
//           <li>placeholder: string</li>
//           <li>type: number</li>
//           <li>
//             {
//               'InputType: string (This is the type you would use for a traditonal HTML Input ("text" || "select" || "textarea" || "password" || "submit")'
//             }
//           </li>
//           <li>options: []</li>
//           <li>theme: 'light' || 'dark'</li>
//           <li>className: className for label</li>
//           <li>inputClassName: className for input (independent of type)</li>
//         </ul>
//         <h3>Light Theme</h3>
//         <div className='box light'>
//           <Input
//             // eslint-disable-next-line no-undef
//             onChange={() => alert('onChange Input!')}
//             label='Label'
//             info='This is additional information'
//             placeholder='Placeholder'
//             iconLeft={<Icon icon='alert-triangle-outline' />}
//             iconRight={<Icon icon='check' />}
//             type={1}
//           />

//           <Input
//             // eslint-disable-next-line no-undef
//             onChange={() => alert('onChange Input!')}
//             label='Label'
//             info='This is additional information'
//             placeholder='Placeholder'
//             iconRight={<Icon icon='paper-plane-outline' />}
//             type='submit'
//           />
//           <Input
//             // eslint-disable-next-line no-undef
//             label='Label'
//             info='This is additional information'
//             placeholder='Placeholder'
//             iconLeft={<Icon icon='alert-triangle-outline' />}
//             iconRight={<Icon icon='check' />}
//             type={2}
//             isAutoResizing={true}
//             onChange={(e) => setInputValue(e.target.value)}
//             value={inputValue}
//           />
//           <Input
//             // eslint-disable-next-line no-undef
//             onChange={() => alert('onChange Input!')}
//             label='Label'
//             info='This is additional information'
//             placeholder='Placeholder'
//             iconLeft={<Icon icon='alert-triangle-outline' />}
//             type={3}
//             required
//           >
//             <option value='classification'>Classification</option>
//             <option value='form extraction'>Form extraction</option>
//           </Input>
//         </div>
//         <h3>Dark Theme</h3>
//         <div className='box dark'>
//           <Input
//             // eslint-disable-next-line no-undef
//             onChange={() => alert('onChange Input!')}
//             label='Label'
//             info='This is additional information'
//             placeholder='Placeholder'
//             iconLeft={<Icon icon='alert-triangle-outline' />}
//             iconRight={<Icon icon='check' />}
//             type={1}
//             theme='dark'
//           />

//           <Input
//             // eslint-disable-next-line no-undef
//             onChange={() => alert('onChange Input!')}
//             label='Label'
//             info='This is additional information'
//             placeholder='Placeholder'
//             iconRight={<Icon icon='paper-plane-outline' />}
//             type='submit'
//             theme='dark'
//           />
//           <Input
//             // eslint-disable-next-line no-undef
//             label='Label'
//             info='This is additional information'
//             placeholder='Placeholder'
//             iconLeft={<Icon icon='alert-triangle-outline' />}
//             iconRight={<Icon icon='check' />}
//             type={2}
//             theme='dark'
//           />
//           <Input
//             // eslint-disable-next-line no-undef
//             onChange={() => alert('onChange Input!')}
//             label='Label'
//             info='This is additional information'
//             placeholder='Placeholder'
//             iconLeft={<Icon icon='alert-triangle-outline' />}
//             type={3}
//             theme='dark'
//             required
//           >
//             <option value='classification'>Classification</option>
//             <option value='form extraction'>Form extraction</option>
//           </Input>
//         </div>
//       </div>
//       <div className='component' id='InputMulti'>
//         <h2>InputMulti</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>onChange: f()</li>
//           <li>label: string</li>
//           <li>info: string</li>
//           <li>options: [{'{value, label}'}]</li>
//           <li>isMulti: boolean</li>
//           <li>icon: element</li>
//           <li>placeholder: string</li>
//           <li>theme: 'light' || 'dark'</li>
//           <li>...react-select props</li>
//         </ul>
//         <h3>Light Theme</h3>
//         <div className='box light'>
//           <InputMulti
//             // eslint-disable-next-line no-undef
//             onChange={() => alert('onChange Input!')}
//             label='Multi Value'
//             info='This is additional information'
//             placeholder='Placeholder'
//             icon={<Icon icon='alert-triangle-outline' />}
//             isMulti
//             options={[
//               { value: 'Uno', label: 'Uno' },
//               { value: 'Dos', label: 'Dos' },
//               { value: 'Tres', label: 'Tres' }
//             ]}
//           />
//           <InputMulti
//             // eslint-disable-next-line no-undef
//             onChange={() => alert('onChange Input!')}
//             label='Single Value'
//             info='This is additional information'
//             placeholder='Placeholder'
//             icon={<Icon icon='alert-triangle-outline' />}
//             options={[
//               { value: 'Uno', label: 'Uno' },
//               { value: 'Dos', label: 'Dos' },
//               { value: 'Tres', label: 'Tres' }
//             ]}
//           />
//         </div>
//         <h3>Dark Theme</h3>
//         <div className='box dark'>
//           <InputMulti
//             // eslint-disable-next-line no-undef
//             onChange={() => alert('onChange Input!')}
//             label='Multi Value'
//             info='This is additional information'
//             placeholder='Placeholder'
//             icon={<Icon icon='alert-triangle-outline' />}
//             isMulti
//             options={[
//               { value: 'Uno', label: 'Uno' },
//               { value: 'Dos', label: 'Dos' },
//               { value: 'Tres', label: 'Tres' }
//             ]}
//             theme='dark'
//           />
//           <InputMulti
//             // eslint-disable-next-line no-undef
//             onChange={() => alert('onChange Input!')}
//             label='Single Value'
//             info='This is additional information'
//             placeholder='Placeholder'
//             icon={<Icon icon='alert-triangle-outline' />}
//             options={[
//               { value: 'Uno', label: 'Uno' },
//               { value: 'Dos', label: 'Dos' },
//               { value: 'Tres', label: 'Tres' }
//             ]}
//             theme='dark'
//           />
//         </div>
//       </div>
//       <div className='component'>
//         <h2>Select</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>theme: dark</li>
//           <li>{`options: array ['string', 'string']`}</li>
//           <li>onClickOption: f()</li>
//           <li>value: string</li>
//           <li>placeholder: string *optional*</li>
//           <li>label: string *optional*</li>
//           <li>textMaxLength: int, used to truncate choice string and append '...'</li>
//           <li>isSelectedYellow: boolean, changes value color</li>
//         </ul>
//         <div className='box dark' style={{ paddingRight: '60px' }}>
//           <Select
//             value={selectValue}
//             label='Select'
//             theme='dark'
//             isSelectedYellow={true}
//             options={[
//               'option1al;kjsdlf;jkasl;dkjfl;akjsdflkjasdlfk;jaslkdfjasdf;ioe;oijf;olkjadljkf',
//               'option 2',
//               'option 3',
//               'option 4',
//               'option 5',
//               'option 6',
//               'option 7',
//               'option 8',
//               'option 9',
//               'option 10'
//             ]}
//             onClickOption={(option) => setSelectValue(option)}
//             selectId={'select-id'}
//             optionIdPrefix={'option-prefix'}
//           />
//           <Select
//             value={selectValue}
//             label='Select (with Close Option)'
//             theme='dark'
//             isSelectedYellow={true}
//             options={[
//               'option 1',
//               'option 2',
//               'option 3',
//               'option 4',
//               'option 5',
//               'option 6',
//               'option 7',
//               'option 8',
//               'option 9',
//               'option 10'
//             ]}
//             onClickOption={(option) => setSelectValue(option)}
//             canCloseOptions={true}
//             onCloseOption={(option) => {
//               alert(`clicked close ${option}`)
//             }}
//           />
//           <Select
//             value={selectValue2}
//             label='Select (Multiselect)'
//             theme='dark'
//             isSelectedYellow={true}
//             options={[
//               'option 1',
//               'option 2',
//               'option 3',
//               'option 4',
//               'option 5',
//               'option 6',
//               'option 7',
//               'option 8',
//               'option 9',
//               'option 10'
//             ]}
//             onClickOption={(option) => {
//               if (selectValue2.includes(option)) {
//                 setSelectValue2(selectValue2.filter((val) => val !== option))
//               } else {
//                 setSelectValue2([...selectValue2, option])
//               }
//             }}
//             canCloseOptions={true}
//             onCloseOption={(option) => {
//               alert(`clicked close ${option}`)
//             }}
//             isMultiselect={true}
//           />
//           <Select
//             value={selectValue2}
//             label='Select (Multiselect w/ Custom Display Message)'
//             theme='dark'
//             isSelectedYellow={true}
//             options={[
//               'option 1',
//               'option 2',
//               'option 3',
//               'option 4',
//               'option 5',
//               'option 6',
//               'option 7',
//               'option 8',
//               'option 9',
//               'option 10'
//             ]}
//             onClickOption={(option) => {
//               if (selectValue2.includes(option)) {
//                 setSelectValue2(selectValue2.filter((val) => val !== option))
//               } else {
//                 setSelectValue2([...selectValue2, option])
//               }
//             }}
//             canCloseOptions={true}
//             onCloseOption={(option) => {
//               alert(`clicked close ${option}`)
//             }}
//             isMultiselect={true}
//             multiSelectDisplayValue={`${selectValue2.length}/10 options selected`}
//           />
//           <Select
//             value={'key1'}
//             label='Select (Dict)'
//             theme='dark'
//             isSelectedYellow={true}
//             optionsDict={{
//               key1: 'value 1',
//               key2: 'value 2'
//             }}
//             onClickOption={(option) => {
//               console.log(option)
//             }}
//             canCloseOptions={true}
//             onCloseOption={(option) => {
//               alert(`clicked close ${option}`)
//             }}
//           />
//         </div>
//       </div>
//       {/* <div className='component'>
//         <Select
//           value='value'
//           theme='dark'
//         />
//       </div> */}
//       <div className='component' id='Loader'>
//         <h2>Loader</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>theme: 'light' || 'dark'</li>
//         </ul>
//         <h3>Light Theme</h3>
//         <div className='box light items-center'>
//           <Loader />
//         </div>
//         <h3>Dark Theme</h3>
//         <div className='box dark items-center'>
//           <Loader theme='dark' />
//         </div>
//       </div>
//       <div className='component' id='LoadingBar'>
//         <h2>LoadingBar</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>isFinished: boolean</li>
//           <li>animationDuration: string (i.e. '10s')</li>
//         </ul>

//         <Button text='Render' onClick={() => setIsLoadingBar(!isLoadingBar)} />

//         {isLoadingBar && (
//           <div>
//             <LoadingBar isFinished={false} />
//           </div>
//         )}
//       </div>
//       <div className='component' id='Meter'>
//         <h2>Meter</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>percent: number (0-100)</li>
//         </ul>
//         <Meter percent={33} />
//       </div>

//       <div className='component' id='MetricCard'>
//         <h2>MetricCard</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>title: string</li>
//           <li>
//             color: 'atlantic' || 'blue-gray' || 'burnt-orange' || 'error' ||
//             'french-puce' || 'japanese-laurel' || 'metallic-blue' || 'salem' ||
//             'success'
//           </li>
//           <li>icon: element</li>
//           <li>value: string</li>
//           <li>column1: string</li>
//           <li>column2: string</li>
//           <li>children</li>
//         </ul>
//         <MetricCard
//           title='Card Title'
//           value='2000'
//           column1='1442'
//           column2='avg/month'
//           icon={<Icon icon='file-outline' />}
//           icon2={<Icon icon='refresh-outline' />}
//         >
//           Card content.
//         </MetricCard>
//       </div>
//       <div className='component' id='Modal'>
//         <h2>Modal</h2>
//         <ul>
//           <li>isVisible: boolean</li>
//           <li>image: string(icon in upper left corner)</li>
//           <li>icon: string(icon in upper left corner)</li>
//           <li>meta: string</li>
//           <li>showClose: boolean</li>
//           <li>showCancel: boolean</li>
//           <li>showConfirm: boolean</li>
//           <li>showBackdrop: boolean</li>
//           <li>outsideClickDismisses: boolean</li>
//           <li>content: el</li>
//           <li>children: el</li>
//           <li>confirmationText: string</li>
//           <li>cancelationText: string</li>
//           <li>onConfirm: f()</li>
//           <li>onCancel: f()</li>
//           <li>confirmButtonType: integer</li>
//           <li>cancelButtonType: integer</li>
//           <li>style: {`{}`}</li>
//           <li>bodyStyle: {`{}`}</li>
//           <li>contentStyle: {`{}`}</li>
//           <li>aboveNav: boolean</li>
//           <li>navPadding: boolean</li>
//           <li>isDismissable: boolean</li>
//           <li>confirmDisabled: boolean</li>
//         </ul>
//         <Button
//           text='Show Light Modal'
//           onClick={() => {
//             setIsLightModalShowing(true)
//           }}
//         />
//         <Button
//           text='Show Dark Modal'
//           onClick={() => {
//             setIsDarkModalShowing(true)
//           }}
//         />
//         <Modal
//           onConfirm={() => {
//             setIsLightModalShowing(false)
//           }}
//           onCancel={() => setIsLightModalShowing(false)}
//           confirmationText='Confirm'
//           cancelationText='Cancel'
//           icon={<Icon icon='alert-triangle-outline' />}
//           showTime={true}
//           isVisible={isLightModalShowing}
//           navPadding={isDarkNavShowing || isLightNavShowing}
//         >
//           <div style={{ height: 900 }}>Content goes here</div>
//         </Modal>
//         <Modal
//           onConfirm={() => {
//             setIsDarkModalShowing(false)
//           }}
//           onCancel={() => setIsDarkModalShowing(false)}
//           confirmationText='Confirm'
//           cancelationText='Cancel'
//           showTime={false}
//           isVisible={isDarkModalShowing}
//           theme='dark'
//           navPadding={isDarkNavShowing || isLightNavShowing}
//           outsideClickDismisses={true}
//         >
//           <div style={{ height: 900 }}>Content goes here</div>
//         </Modal>
//       </div>
//       <div className='component' id='Modal2'>
//         <h2>Modal2</h2>
//         <ul>
//           <li>isVisible: boolean</li>
//           {/* <li>image: string(icon in upper left corner)</li>
//           <li>icon: string(icon in upper left corner)</li> */}
//           <li>showClose: boolean</li>
//           <li>showBackdrop: boolean</li>
//           <li>outsideClickDismisses: boolean</li>
//           <li>content: el</li>
//           <li>children: el</li>
//           <li>footer: el (with buttons)</li>
//           <li>onCancel: f()</li>
//           <li>style: {`{}`}</li>
//           <li>contentContainerStyle: {`{}`}</li>
//           <li>contentStyle: {`{}`}</li>
//           <li>isDismissable: boolean</li>
//           <li>direction: 'up' || 'down' || 'left' || 'right'</li>
//           <li>hasLine: boolean</li>
//         </ul>
//         {/* <Button
//           text='Show Light Modal'
//           onClick={() => {
//             setIsLightModal2Showing(true)
//           }}
//         /> */}
//         <Button
//           text='Show Dark Modal'
//           onClick={() => {
//             setIsDarkModal2Showing(true)
//           }}
//         />
//         <Modal2
//           title='New Modal'
//           onDismiss={() => setIsDarkModal2Showing(false)}
//           confirmationText='Confirm'
//           cancelationText='Cancel'
//           showTime={false}
//           isVisible={isDarkModal2Showing}
//           theme='dark'
//           outsideClickDismisses={true}
//           style={{ height: '400px' }}
//           hasLine={true}
//           footer={
//             <>
//               <Button
//                 text='Agree'
//                 theme='dark'
//                 onClick={() => {
//                   setIsDarkModal2Showing(false)
//                 }}
//               />
//             </>
//           }
//         >
//           <div>
//             <p>Exercitation incididunt cillum exercitation deserunt sit incididunt veniam sint. Occaecat enim amet ea nostrud. Consectetur est reprehenderit aliqua tempor magna non velit fugiat sint est nisi aliqua. Veniam aliquip elit veniam excepteur cillum est esse aute. Occaecat commodo eu aute aute tempor quis laborum est ipsum.

//               Excepteur sint magna ea reprehenderit ipsum ut exercitation veniam tempor anim excepteur. Eiusmod sit proident irure magna in Lorem consequat enim reprehenderit pariatur. Laborum esse ipsum pariatur sit dolore elit. Eu cupidatat aute magna sunt esse aliqua sint excepteur qui laborum ex dolore aliquip.

//               Ipsum enim eiusmod elit anim pariatur veniam deserunt mollit ut. Ut nostrud veniam ullamco eu dolore ad enim. Eu exercitation minim reprehenderit excepteur ipsum exercitation irure exercitation cillum est officia. Minim magna anim ad tempor occaecat adipisicing ex Lorem ex ipsum. Sit magna laboris Lorem dolore et excepteur et aliqua aliqua ipsum aliqua ullamco Lorem ipsum. Minim non sit pariatur ullamco sit excepteur. Elit ad tempor aliqua ut.

//               In est anim laborum officia enim consequat id commodo velit sunt officia qui aute nulla. Velit non esse sit do velit. Adipisicing minim consectetur ullamco pariatur. Dolore non laborum officia mollit aute tempor. Consequat ad adipisicing sit est do aliquip fugiat duis. Est fugiat voluptate ut est amet fugiat ut esse cupidatat quis. Occaecat ea deserunt cupidatat cupidatat deserunt in sint occaecat deserunt voluptate ea.

//               Laboris occaecat do dolor ipsum anim ea incididunt reprehenderit fugiat consectetur ipsum culpa. Minim veniam do nisi dolore ipsum fugiat aliqua culpa adipisicing consectetur. Dolore laboris ipsum consequat proident et do quis deserunt quis Lorem. Aliqua officia velit cillum et tempor velit proident eu. Sit amet velit dolore in elit elit dolor exercitation consectetur fugiat nisi. Pariatur ipsum fugiat ex occaecat esse.

//               Qui ex dolore commodo sint. Labore consectetur fugiat et pariatur eiusmod eu tempor sint ullamco fugiat adipisicing velit duis. Nisi esse ipsum anim velit ad ullamco incididunt non nostrud et. Commodo aliquip tempor ut deserunt sunt in excepteur ea. Mollit anim reprehenderit consequat magna excepteur sunt dolore cupidatat amet irure excepteur dolore quis velit. Consectetur anim id ea minim aliquip id officia dolor magna irure consectetur proident.

//               Sint voluptate laborum est dolore adipisicing ut laborum eu sint occaecat occaecat proident. Aliqua consequat reprehenderit dolore dolore dolore consequat commodo anim dolor enim do dolore. Sint duis nostrud aute ipsum sit nisi labore. Est ipsum officia adipisicing enim aute ullamco in minim sunt ut nulla enim dolore ipsum. Consequat Lorem do aliquip mollit ea ut amet dolore. Dolore dolor ullamco adipisicing voluptate id.

//               Dolore culpa quis ad anim dolore et cupidatat laborum. Veniam veniam officia eu nulla id. Occaecat amet ea eiusmod enim mollit aliquip proident incididunt id amet reprehenderit nulla dolor id. Aliqua mollit nisi ut Lorem ullamco ea fugiat quis esse Lorem cupidatat fugiat exercitation exercitation. Irure ut amet labore labore exercitation voluptate occaecat qui eu in labore.

//               Dolor aliquip amet laborum nisi consectetur esse amet ad enim dolore. Pariatur veniam cupidatat magna cillum ut culpa consequat laboris minim veniam non et. Irure amet minim qui magna ea dolore do. Sunt Lorem irure culpa excepteur consectetur ut aliquip qui aliquip. Minim do sunt nostrud dolor culpa ex. Velit nisi eiusmod consequat adipisicing dolor consequat consequat ad excepteur nostrud magna dolor ullamco.

//               Sint reprehenderit irure nostrud voluptate. Veniam labore aliqua aute ipsum quis ex Lorem incididunt elit. Occaecat in irure dolore cillum proident minim minim cupidatat duis duis quis nisi minim deserunt. Amet veniam duis quis magna labore ea adipisicing anim consectetur consequat.</p>
//           </div>
//         </Modal2>
//       </div>
//       <div className='component' id='MoleTrackingThumb'>
//         <h2>MoleTrackingThumb</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>date1: string (mm/dd/yyyy)</li>
//           <li>date2: string (mm/dd/yyyy)</li>
//           <li>id: string</li>
//           <li>location: string</li>
//           <li>imageNumber: int</li>
//           <li>isReviewRequested: boolean</li>
//           <li>theme: 'light' || 'dark'</li>
//         </ul>
//         <h3>Light Theme</h3>
//         <div className='box light'>
//           <MoleTrackingThumb
//             date1='3/17/2021'
//             date2='3/25/2021'
//             id='123'
//             location='Torso'
//             imageNumber={3}
//             isReviewRequested
//             theme='light'
//           />
//         </div>
//         <h3>Dark Theme</h3>
//         <div className='box dark'>
//           <MoleTrackingThumb
//             date1='3/17/2021'
//             date2='3/25/2021'
//             id='123'
//             location='Torso'
//             imageNumber={3}
//             isReviewRequested
//             theme='dark'
//           />
//         </div>
//       </div>
//       <div className='component' id='MultiSelect'>
//         <h2>MultiSelect</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>onChange: f()</li>
//           <li>title: string</li>
//           <li>items: []</li>
//           <li>selected: string</li>
//           <li>theme: 'light' || 'dark'</li>
//           <li>disabled: boolean</li>
//         </ul>
//         <h3>Light Theme</h3>
//         <div className='box light'>
//           <MultiSelect
//             title='Sex:'
//             items={['Female', 'Male', 'Other', 'Decline to Answer']}
//             onChange={(option) => setSex(option)}
//             selected={sex}
//           />
//         </div>
//         <h3>Dark Theme</h3>
//         <div className='box dark'>
//           <MultiSelect
//             title='Sex:'
//             items={['Female', 'Male', 'Other', 'Decline to Answer']}
//             onChange={(option) => setSex(option)}
//             selected={sex}
//             theme='dark'
//           />
//         </div>
//       </div>
//       <div className='component' id='Nav'>
//         <h2>Nav</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>{`style: {}`}</li>
//           <li>theme: 'light' || 'dark'</li>
//           <li>onSignOutClick: f()</li>
//           <li>onRikAIClick: f()</li>

//           <li>logo: element</li>
//           <li>userImage: url</li>

//           <li>userName: string</li>
//           <li>
//             active: string // 'dashboard', 'api', 'training', 'quickstart',
//             'demo', 'settings', 'support', 'documentation', 'resources',
//             'signout'
//           </li>
//           <li>
//             ({'links: {}'}) // 'dashboard', 'api', 'training', 'quickstart',
//             'demo', 'settings', 'support', 'documentation', 'resources',
//             'signout', 'rikai'
//           </li>
//           <li>
//             ({'disabledLinks: {}'}) // 'dashboard', 'api', 'training',
//             'quickstart', 'demo', 'settings', 'support', 'documentation',
//             'resources', 'signout', 'rikai'
//           </li>
//         </ul>
//         <Button
//           text='Toggle Light Nav'
//           onClick={() => {
//             setIsDarkNavShowing(false)
//             setIsLightNavShowing(!isLightNavShowing)
//           }}
//         />
//         <Button
//           text='Toggle Dark Nav'
//           onClick={() => {
//             setIsLightNavShowing(false)
//             setIsDarkNavShowing(!isDarkNavShowing)
//           }}
//         />
//         {/* <Nav
//           userName='bobstevens@gmail.com'
//           active='dashboard'
//           isVisible={isLightNavShowing}
//           links={{ documentation: 'https://docs.google.com/' }}
//           disabledLinks={['api']}
//           noFollow
//         />
//         <Nav
//           userName='bobstevenssssssss@gmail.com'
//           active='dashboard'
//           isVisible={isDarkNavShowing}
//           links={{ documentation: 'https://docs.google.com/' }}
//           disabledLinks={['api']}
//           theme='dark'
//           isCollapsed
//         /> */}
//       </div>
//       <div className='component' id='Notification'>
//         <h2>Notification</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>isVisible: boolean</li>
//           <li>showBackdrop: boolean</li>
//           <li>showMeta: boolean</li>
//           <li>meta: string</li>
//           <li>content: string</li>
//           <li>type: 1 (persistant) || 2 (timed out) || 3 (error)</li>
//           <li>image: string</li>
//           <li>icon: element</li>
//           <li>theme: 'light' || 'dark'</li>
//         </ul>
//         <Button
//           onClick={() => {
//             toggleDarkNotification()
//           }}
//           text='Toggle Dark Notification'
//         />

//         <Button
//           onClick={() => {
//             toggleLightNotification()
//           }}
//           text='Toggle Light Notification'
//         />
//         <div style={{ position: 'relative' }}>
//           <Notification
//             isVisible={isDarkNotificationShowing}
//             content='Content: This is a type 3 notification'
//             type={3}
//             onClick={() => setIsDarkNotificationShowing(false)}
//             icon={
//               <Icon icon='checkmark' fill='var(--colors-brand-state-success)' />
//             }
//             theme='dark'
//             showMeta
//           />
//           <Notification
//             isVisible={isLightNotificationShowing}
//             content='Content: This is a type 2 notification'
//             type={2}
//             onClick={() => setIsLightNotificationShowing(false)}
//             icon={
//               <Icon icon='checkmark' fill='var(--colors-brand-state-success)' />
//             }
//             theme='light'
//             showMeta
//           />
//         </div>
//       </div>
//       <div className='component' id='OrgMemberThumb'>
//         <h2>OrgMemberThumb</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>onClick: f()</li>
//           <li>{`orgMember: {}`}</li>
//         </ul>
//         <h3>Light Theme</h3>
//         <div className='box light'>
//           <OrgMemberThumb
//             // eslint-disable-next-line no-undef
//             onClick={() => alert('onClick OrgMemberThumb')}
//             orgMember={{
//               Info: {
//                 Name: 'FirstName LastName',
//                 Email: 'email@email.com'
//               },
//               Membership: {
//                 Auth: 'Auth'
//               }
//             }}
//           />
//         </div>
//         <h3>Dark Theme</h3>
//         <div className='box dark'>
//           <OrgMemberThumb
//             // eslint-disable-next-line no-undef
//             onClick={() => alert('onClick OrgMemberThumb')}
//             orgMember={{
//               Info: {
//                 Name: 'FirstName LastName',
//                 Email: 'email@email.com'
//               },
//               Membership: {
//                 Auth: 'Auth'
//               }
//             }}
//             theme='dark'
//           />
//         </div>
//       </div>
//       <div className='component' id='PatientHeader'>
//         <h2>PatientHeader (Typically fixed)</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>name: string</li>
//           <li>lastUpdated: string (mm/dd/yyyy)</li>
//           <li>birthdate: string (mm/dd/yyyy)</li>
//           <li>image: string</li>
//           <li>icon: element</li>
//           <li>theme: 'light' || 'dark'</li>
//           <li>{`style: {}`}</li>
//         </ul>
//         <h3>Light Theme</h3>
//         <div className='box light'>
//           <PatientHeader
//             name='Eric Bowman'
//             lastUpdated='12/30/2021'
//             birthdate='05/26/1989'
//             theme='light'
//             style={{
//               position: 'relative'
//             }}
//           />
//         </div>
//         <h3>Dark Theme</h3>
//         <div className='box dark'>
//           <PatientHeader
//             name='Eric Bowman'
//             lastUpdated='12/30/2021'
//             birthdate='05/26/1989'
//             theme='dark'
//             style={{
//               position: 'relative'
//             }}
//           />
//         </div>
//       </div>
//       <div className='component' id='PatientThumb'>
//         <h2>PatientThumb</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>name: string</li>
//           <li>firstName: string</li>
//           <li>lastName: string</li>
//           <li>lastUpdated: string (mm/dd/yyyy)</li>
//           <li>birthdate: string (mm/dd/yyyy)</li>
//           <li>image: string</li>
//           <li>icon: element</li>
//           <li>isLinked: boolean</li>
//           <li>theme: 'light' || 'dark'</li>
//           <li>{`style: {}`}</li>
//         </ul>
//         <h3>Light Theme</h3>
//         <div className='box light'>
//           <PatientThumb
//             name='Eric Bowman'
//             firstName='Eric'
//             lastName='Bowman'
//             lastUpdated='01/01/2021'
//             birthdate='05/26/1900'
//             icon={<Icon icon='person-outline' />}
//             isLinked
//           />
//         </div>
//         <h3>Dark Theme</h3>
//         <div className='box dark'>
//           <PatientThumb
//             name='Eric Bowman'
//             firstName='Eric'
//             lastName='Bowman'
//             lastUpdated='01/01/2021'
//             birthdate='05/26/1900'
//             icon={<Icon icon='person-outline' />}
//             theme='dark'
//             isLinked
//           />
//         </div>
//       </div>
//       <div className='component' id='Pill'>
//         <h2>Pill</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>type: '1', 'accent', '2', 'ghost'</li>
//           <li>theme: 'light' || 'dark'</li>
//         </ul>
//         <h3>Light Theme</h3>
//         <div className='box light'>
//           <Pill text='M-Proc' />
//           <Pill type='ghost' text='M-Proc' />
//         </div>
//         <h3>Dark Theme</h3>
//         <div className='box dark'>
//           <Pill text='M-Proc' theme='dark' />
//           <Pill type='ghost' text='M-Proc' theme='dark' />
//         </div>
//       </div>
//       <div className='component' id='SearchBar'>
//         <h2>SearchBar</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>isCollapsed: boolean</li>
//           <li>isCollapsible: boolean</li>
//           <li>onChange: f()</li>
//           <li>searchValue: string</li>
//           <li>{`style: {}`}</li>
//         </ul>
//         <h3>Light Theme</h3>
//         <div className='box light'>
//           <SearchBar
//             isCollapsible
//             inputId={'light-search-input'}
//             formId={'light-search-form'}
//           />
//         </div>
//         <h3>Dark Theme</h3>
//         <div className='box dark'>
//           <SearchBar isCollapsible theme='dark' />
//         </div>
//       </div>
//       <div className='component' id='Slider'>
//         <h2>Slider</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>value: 1-100</li>
//           <li>onChangeZoom: f()</li>
//           <li>type: 1 || 2 || 3 || 4 || 5 || 6</li>
//           <li>width: string</li>
//           <li>isOverlay: boolean</li>
//         </ul>
//         <h3>Light Theme</h3>
//         <div className='box light'>
//           <Slider
//             value={zoom}
//             onChangeZoom={(event) => setZoom(event.target.value)}
//             theme='light'
//             isOverlay
//           />

//           <Slider
//             value={zoom}
//             onChangeZoom={(event) => setZoom(event.target.value)}
//             type={2}
//             theme='light'
//             isOverlay
//           />

//           <Slider
//             value={zoom}
//             onChangeZoom={(event) => setZoom(event.target.value)}
//             type={3}
//             theme='light'
//           />

//           <Slider
//             value={zoom}
//             onChangeZoom={(event) => setZoom(event.target.value)}
//             type={4}
//             theme='light'
//           />
//           <div>
//             <Slider
//               value={zoom}
//               onChangeZoom={(event) => setZoom(event.target.value)}
//               type={5}
//               theme='light'
//               isOverlay
//               width='10rem'
//             />
//             <Slider
//               value={zoom}
//               onChangeZoom={(event) => setZoom(event.target.value)}
//               type={6}
//               theme='light'
//               isOverlay
//               width='10rem'
//             />

//             <Slider
//               value={zoom}
//               onChangeZoom={(event) => setZoom(event.target.value)}
//               type={7}
//               theme='light'
//               width='10rem'
//             />

//             <Slider
//               value={zoom}
//               onChangeZoom={(event) => setZoom(event.target.value)}
//               type={8}
//               theme='light'
//               width='10rem'
//             />
//           </div>
//         </div>
//         <h3>Dark Theme</h3>
//         <div className='box dark'>
//           <Slider
//             value={zoom}
//             onChangeZoom={(event) => setZoom(event.target.value)}
//             isOverlay
//             theme='dark'
//           />

//           <Slider
//             value={zoom}
//             onChangeZoom={(event) => setZoom(event.target.value)}
//             isOverlay
//             type={2}
//             theme='dark'
//           />

//           <Slider
//             value={zoom}
//             onChangeZoom={(event) => setZoom(event.target.value)}
//             type={3}
//             theme='dark'
//           />
//           <Slider
//             value={zoom}
//             onChangeZoom={(event) => setZoom(event.target.value)}
//             type={4}
//             theme='dark'
//           />
//           <div>
//             <Slider
//               value={zoom}
//               onChangeZoom={(event) => setZoom(event.target.value)}
//               type={5}
//               isOverlay
//               theme='dark'
//             />

//             <Slider
//               value={zoom}
//               onChangeZoom={(event) => setZoom(event.target.value)}
//               type={6}
//               isOverlay
//               theme='dark'
//             />

//             <Slider
//               value={zoom}
//               onChangeZoom={(event) => setZoom(event.target.value)}
//               type={7}
//               theme='dark'
//             />

//             <Slider
//               value={zoom}
//               onChangeZoom={(event) => setZoom(event.target.value)}
//               type={8}
//               theme='dark'
//             />
//           </div>
//         </div>
//       </div>
//       <div className='component' id='Switch'>
//         <h2>Switch</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>label: string</li>
//           <li>onChange: f()</li>
//           <li>checked: boolean</li>
//           <li>reversed: boolean</li>
//         </ul>
//         <h3>Light Theme</h3>
//         <div className='box light'>
//           <div>
//             <Switch label='Label' type='radio' name='radio' />
//             <Switch label='Label' type='radio' name='radio' />
//             <Switch label='Label' type='radio' name='radio' />
//           </div>
//           <Switch label='Label' />
//           <Switch label='Label' type='checkbox' />
//         </div>
//         <h3>Dark Theme</h3>
//         <div className='box dark'>
//           <div>
//             <Switch theme='dark' label='Label' type='radio' name='radio' />
//             <Switch theme='dark' label='Label' type='radio' name='radio' />
//             <Switch theme='dark' label='Label' type='radio' name='radio' />
//           </div>
//           <Switch theme='dark' label='Label' />
//           <Switch theme='dark' label='Label' type='checkbox' />
//         </div>
//       </div>
//       <div className='component' id='TabContainer'>
//         <h2>TabContainer</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>activeTab: string</li>
//           <li>canChangeTab?: f() returns boolean</li>
//           <li>onTabChange: f()</li>
//           <li>
//             tabContent: object with key=tabName | values=(render, isDisabled,
//             title, link?, onClickEvent?)
//           </li>
//         </ul>
//         <h3>Light Theme</h3>
//         {/* <div className='box light'>
//           <TabContainer
//             activeTab={activeTab}
//             canChangeTab={() => true}
//             onTabChange={(tabName) => {
//               setActiveTab(tabName)
//             }}
//             tabContent={{
//               error: {
//                 render: errorRender,
//                 isDisabled: false,
//                 title: 'Errors'
//               },
//               request: {
//                 render: requestRender,
//                 isDisabled: false,
//                 title: 'Requests'
//               },
//               pages: {
//                 render: pagesRender,
//                 isDisabled: false,
//                 title: 'Pages',
//                 onClickEvent: logFunct
//               },
//               questions: {
//                 render: questionsRender,
//                 isDisabled: true,
//                 title: 'Questions'
//               },
//               google: {
//                 link: 'http://google.com',
//                 isDisabled: false,
//                 title: 'Google'
//               }
//             }}
//           />
//         </div>
//         <h3>Dark Theme</h3>
//         <div className='box dark'>
//           <TabContainer
//             theme='dark'
//             type='primary'
//             activeTab={activeTabDark}
//             canChangeTab={() => true}
//             onTabChange={(tabName) => {
//               setActiveTabDark(tabName)
//             }}
//             tabContent={{
//               error: {
//                 render: errorRenderDark,
//                 isDisabled: false,
//                 title: 'Errors'
//               },
//               request: {
//                 render: requestRenderDark,
//                 isDisabled: false,
//                 title: 'Requests'
//               },
//               pages: {
//                 render: pagesRenderDark,
//                 isDisabled: false,
//                 title: 'Pages',
//                 onClickEvent: logFunct
//               },
//               questions: {
//                 render: questionsRenderDark,
//                 isDisabled: true,
//                 title: 'Questions'
//               },
//               google: {
//                 link: 'http://google.com',
//                 isDisabled: false,
//                 title: 'Google'
//               }
//             }}
//           />
//         </div> */}
//       </div>
//       <div className='component' id='Table'>
//         <h2>Table</h2>
//         <h3>Table props:</h3>
//         <ul>
//           <li>title: string</li>
//           <li>showCount: boolean</li>
//           <li>showTotal: boolean</li>
//           <li>showingCount: string</li>
//           <li>total: string</li>
//           <li>columnTitles: [string, string]</li>
//           <li>entries: [jsx, jsx]</li>
//           <li>* style: object</li>
//           <li>* maxHeight: string</li>
//           <li>* minHeight: string</li>
//         </ul>
//         <h3>TableEntry props:</h3>
//         <ul>
//           <li>key: int</li>
//           <li>content: [string, ['error' || 'success' || 'warning']]</li>
//           <li>onClick: f()</li>
//           <li>isSelected: boolean</li>
//         </ul>
//         <h3>Light Theme</h3>
//         <div className='box light'>
//           <Table
//             title='Title'
//             useFilter={true}
//             showTotal='true'
//             columnTitles={['Column 1', 'Column 2']}
//             minHeight='180px'
//             tableId={'table-1'}
//             entries={[
//               <TableEntry key={4} content={['Item', ['warn', 'Item 1']]} onClick={() => alert('On click!')} />,
//               <TableEntry key={1} content={[['success', 'Item'], 'Item 2']} />,
//               <TableEntry key={3} content={['Item', ['error', 'Item 2']]} />,
//               <TableEntry key={2} content={['Item', 'Item 2']} rowId={'row-4'} />
//             ]}
//           />
//         </div>
//         <h3>Dark Theme</h3>
//         <div className='box dark'>
//           <Table
//             title='Title'
//             showTotal='true'
//             columnTitles={['Column 1', 'Column 2']}
//             minHeight='180px'
//             theme='dark'
//             entries={[
//               <TableEntry key={4} content={['Item', ['warn', 'Item 2']]} rowId={'row-id'} />,
//               <TableEntry key={1} content={[['success', 'Item'], 'Item 2']} isSelected={true} />,
//               <TableEntry key={3} content={['Item', ['error', 'Item 2']]} isSelected />,
//               <TableEntry key={2} content={['Item', 'Item 2']} />
//             ]}
//             cardId={'table-card-id'}
//             tableId={'table-table-id'}
//           />
//         </div>
//       </div>
//       <div className='component' id='TestSetThumb'>
//         <h2>TestSetThumb (type='mproc')</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>isAIActive: boolean</li>
//           <li>id: string</li>
//           <li>date: string (mm/dd/yyyy)</li>
//           <li>type: string</li>
//           <li>condition: string</li>
//           <li>confidence: 0-100</li>
//           <li>risk: string (red/orange/yellow/green)</li>
//           <li>potentialConcern: boolean</li>
//           <li>location: string</li>
//           <li>locationCoordinates: [0-100, 0-100]</li>
//           <li>isClicked: boolean</li>
//           <li>theme: 'light' || 'dark'</li>
//         </ul>
//         <h3>Light Theme</h3>
//         <div className='box light'>
//           <TestSetThumb
//             isAIActive
//             id='123'
//             date='11/11/1999'
//             type='mproc'
//             condition='Melanoma'
//             confidence={50}
//             risk='red'
//             potentialConcern
//             location='Face'
//             locationCoordinates={[0, 0]}
//             isClicked={false}
//             theme='light'
//           />
//         </div>
//         <h3>Dark Theme</h3>
//         <div className='box dark'>
//           <TestSetThumb
//             isAIActive
//             id='123'
//             date='11/11/1999'
//             type='mproc'
//             condition='Melanoma'
//             confidence={50}
//             risk='red'
//             potentialConcern
//             location='Face'
//             locationCoordinates={[0, 0]}
//             isClicked={false}
//             theme='dark'
//           />
//         </div>
//       </div>
//       <div className='component' id='TestThumb'>
//         <h2>TestThumb</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>isAIActive: boolean</li>
//           <li>isVisible: boolean</li>
//           <li>{`reasoning: {[{Confidence: number, Risk: 'color'}]}`}</li>
//           <li>condition1: string</li>
//           <li>condition2: string</li>
//           <li>confidence1: string</li>
//           <li>confidence2: string</li>
//           <li>risk1: string (color)</li>
//           <li>risk2: string (color)</li>
//           <li>image: string</li>
//           <li>{`style: {}`}</li>
//           <li>theme: 'light' || 'dark'</li>
//         </ul>
//         <h3>Dark Theme</h3>
//         <div className='box dark'>
//           <TestThumb
//             isAIActive
//             isVisible
//             reasoning={[
//               {
//                 Confidence: 0.25,
//                 Risk: 'green'
//               },
//               {
//                 Confidence: 0.25,
//                 Risk: 'yellow'
//               },
//               {
//                 Confidence: 0.25,
//                 Risk: 'orange'
//               },
//               {
//                 Confidence: 0.25,
//                 Risk: 'red'
//               }
//             ]}
//             condition1='Top condition'
//             condition2='Second condition'
//             confidence1='25.1'
//             confidence2='24.9'
//             risk1='red'
//             risk2='orange'
//             icon={<Icon icon='alert-triangle-outline' />}
//           />
//         </div>
//         <h3>Light Theme</h3>
//         <div className='box light'>
//           <TestThumb
//             isAIActive
//             isVisible
//             icon={<Icon icon='alert-triangle-outline' />}
//             reasoning={[
//               {
//                 Confidence: 0.25,
//                 Risk: 'green'
//               },
//               {
//                 Confidence: 0.25,
//                 Risk: 'yellow'
//               },
//               {
//                 Confidence: 0.25,
//                 Risk: 'orange'
//               },
//               {
//                 Confidence: 0.25,
//                 Risk: 'red'
//               }
//             ]}
//             condition1='Top condition'
//             condition2='Second condition'
//             confidence1='25.1'
//             confidence2='24.9'
//             risk1='red'
//             risk2='orange'
//             theme='light'
//           />
//         </div>
//       </div>
//       <div className='component' id='Timeline'>
//         <h2>Timeline</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>steps: int</li>
//           <li>stepIndex: int</li>
//           <li>{`style: {}`}</li>
//         </ul>
//         Light Theme
//         <div className='box light'>
//           <Timeline steps={4} activeStep={3} />
//         </div>
//         Dark Theme
//         <div className='box dark'>
//           <Timeline steps={4} activeStep={3} theme='dark' />
//         </div>
//       </div>
//       <div className='component' id='ToolTip'>
//         <h2>ToolTip</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>text: string</li>
//           <li>onDismiss: f()</li>
//           <li>arrowPosition: int (0-7)</li>
//           <li>isVisible: bool</li>
//           <li>* style: object</li>
//         </ul>

//         <ToolTip
//           text='Tooltip text goes here'
//           onDismiss={() => {
//             setIsToolTipShowing(false)
//             setTimeout(() => {
//               setIsToolTipShowing(true)
//             }, 3000)
//           }}
//           arrowPosition={7}
//           isVisible={isToolTipShowing}
//         />
//       </div>
//       <div className='component' id='XBoxContainer'>
//         <h2>XBoxContainer</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>align: 'left' || 'right'</li>
//           <li>theme: 'light' || 'dark'</li>
//           <li>size: 'small' || 'large'</li>
//           <li>onClick: f()</li>
//         </ul>

//         <div className='box light'>
//           <XBoxContainer />
//         </div>

//         <div className='box dark'>
//           <XBoxContainer theme='dark' />
//         </div>
//       </div>
//       <div className='component' id='Chat'>
//         <h2>Chat</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>{`title: string (e.g. Rikai Chat) *optional*`}</li>
//           <li>{`feedTitle: string (e.g. chat) *optional*`}</li>
//           <li>hasInput: bool</li>
//           <li>{`style={} *optional*`}</li>
//           <li>newPrompt: string</li>
//           <li>newPromptPlaceholder: string</li>
//           <li>onChangeNewPrompt: f()</li>
//           <li>onSubmit: f()</li>
//           <li>copyToClipBoard: f()</li>
//           <li>prompts: array-see example below</li>
//           <li style={ { whiteSpace: 'pre-wrap' } }>{
//             `
//             [
//               {
//                 id: '0932749286',
//                 title: 'What is love?',
//                 questions: ['What is love?'],
//                 answers: ['Baby dont hurt me. dont hurt me no more.'],
//                 confidence: 0.8, *optional
//                 context: 'A song by Haddaway' *optional
//               },
//               {
//                 id: '0932749287',
//                 title: 'What is love?',
//                 questions: ['What is love?'],
//                 answers: ['Baby dont hurt me. dont hurt me no more.'],
//                 context: 'A song by Haddaway'
//               },
//             ]
//             `
//           }
//           </li>
//         </ul>
//         <div style={ { width: '50%', minWidth: '500px', height: '100vh' } }>
//           <Chat
//             title='Rikai Chat'
//             copyToClipBoard={Helpers.copyToClipBoard}
//             feedTitle='chat'
//             hasInput={true}
//             hasStars={true}
//             style={ { width: '100%', height: '100%' } }
//             newPrompt={newPrompt}
//             newPromptPlaceholder='Send a message...'
//             onChangeNewPrompt={(e) => setNewPrompt(e.target.value)}
//             onSubmitPrompt={(e) => {
//               e.preventDefault()
//               setNewPrompt('')
//               console.log('Submit')
//             }}
//             onClickStar={(i) => {
//               console.log('i: ', i)
//               const newPrompts = [...prompts]
//               console.log(newPrompts)
//               newPrompts[i].isStarred = !newPrompts[i].isStarred
//               setPrompts(newPrompts)
//               // trigger state change
//               setTime(Date.now())
//             }}
//             prompts={prompts}
//             theme='dark'
//           />
//         </div>
//       </div>
//       <div className='component' id='StandardChat'>
//         <h2>StandardChat</h2>
//         <h3>props:</h3>
//         <ul>
//           <li>{`paddingBottom: string height style of the invisible div at the bottom of the chat ['12em']`}</li>
//           <li>{`avatar: Avatar Component (size needs to be 'small')`}</li>
//           <li>{`chatFeed: array`}</li>
//           <li style={ { whiteSpace: 'pre-wrap' } }>{
//             `
//             [
//             {
//               type: "question",
//               text: "I need to decide between 100, 200 and 400 film for a camera that I plan to use to take candid photos with, what should I choose?",
//               isLoading: false,
//               isCompleted: false
//             },
//             {
//               type: "answer",
//               text: " To choose the best film for your camera, consider the following factors:\n\n1. Camera type: Different film types are designed for specific camera types, such as 35mm, medium format, or large format cameras. Make sure you know your camera's type and compatibility.\n\n2. Film speed (ISO): The ISO (International Standards Organization) rating determines the film's sensitivity to light. Higher ISO means the film is more sensitive, allowing for better low-light performance but potentially introducing more grain. Lower ISO means less sensitivity, resulting in less grain but potentially requiring more light for proper exposure.\n\n3. Intended use: Think about the type of photos you want to take and the lighting conditions you'll be in. If you're planning to take candid photos in various lighting conditions, a versatile film with a medium ISO (e.g., 400) might be suitable.\n\n4. Personal preference: Consider your experience with different film types and your preferences for image quality, grain, and overall look.\n\nBased on these factors, you can make an informed decision between 100, 200, and 400 film for your camera.",
//               isLoading: false,
//               isCompleted: false,
//             },
//               {
//                 type: "question",
//                 text: "I need to decide between 100, 200 and 400 film for a camera that I plan to use to take candid photos with, what should I choose?",
//                 isLoading: false,
//                 isCompleted: false
//               },
//               {
//                 type: "answer",
//                 text: " To choose the best film for your camera, consider the following factors:\n\n1. Camera type: Different film types are designed for specific camera types, such as 35mm, medium format, or large format cameras. Make sure you know your camera's type and compatibility.\n\n2. Film speed (ISO): The ISO (International Standards Organization) rating determines the film's sensitivity to light. Higher ISO means the film is more sensitive, allowing for better low-light performance but potentially introducing more grain. Lower ISO means less sensitivity, resulting in less grain but potentially requiring more light for proper exposure.\n\n3. Intended use: Think about the type of photos you want to take and the lighting conditions you'll be in. If you're planning to take candid photos in various lighting conditions, a versatile film with a medium ISO (e.g., 400) might be suitable.\n\n4. Personal preference: Consider your experience with different film types and your preferences for image quality, grain, and overall look.\n\nBased on these factors, you can make an informed decision between 100, 200, and 400 film for your camera.",
//                 isLoading: false,
//                 isCompleted: true
//               },
//               {
//                 type: "question",
//                 text: "I want to listen to 5 80s songs, which should I choose?",
//                 isLoading: false,
//                 isCompleted: false
//               },
//               {
//                 type: "answer",
//                 text: " Here are 5 popular 80s songs for you to listen to:\n\nThis is a good one actually:\n[TEST LINK]: https://www.youtube.com/watch?v=dQw4w9WgXcQ \n1.\\"Billie Jean\\" by Michael Jackson\n2. \\"Like a Prayer\\" by Madonna\n3. \\"Sweet Child O' Mine\\" by Guns N' Roses\n4. \\"Take on Me\\" by A-ha\n5. \\"Don't Stop Believin'\\" by Journey\n\nThese songs represent various... (Not done yet)",
//                 isLoading: true,
//                 isCompleted: false
//               }
//             ]
//             `
//           }
//           </li>
//         </ul>
//         <div style={ { width: '50%', minWidth: '500px', height: '80vh' } }>
//           <StandardChat
//             chatFeed={[
//               {
//                 type: "question",
//                 text: "I need to decide between 100, 200 and 400 film for a camera that I plan to use to take candid photos with, what should I choose?",
//                 isLoading: false,
//                 isCompleted: false
//               },
//               {
//                 type: "answer",
//                 text: " To choose the best film for your camera, consider the following factors:\n\n1. Camera type: Different film types are designed for specific camera types, such as 35mm, medium format, or large format cameras. Make sure you know your camera's type and compatibility.\n\n2. Film speed (ISO): The ISO (International Standards Organization) rating determines the film's sensitivity to light. Higher ISO means the film is more sensitive, allowing for better low-light performance but potentially introducing more grain. Lower ISO means less sensitivity, resulting in less grain but potentially requiring more light for proper exposure.\n\n3. Intended use: Think about the type of photos you want to take and the lighting conditions you'll be in. If you're planning to take candid photos in various lighting conditions, a versatile film with a medium ISO (e.g., 400) might be suitable.\n\n4. Personal preference: Consider your experience with different film types and your preferences for image quality, grain, and overall look.\n\nBased on these factors, you can make an informed decision between 100, 200, and 400 film for your camera.",
//                 isLoading: false,
//                 isCompleted: false
//               },
//               {
//                 type: "question",
//                 text: "I need to decide between 100, 200 and 400 film for a camera that I plan to use to take candid photos with, what should I choose?",
//                 isLoading: false,
//                 isCompleted: false
//               },
//               {
//                 type: "answer",
//                 text: " To choose the best film for your camera, consider the following factors:\n\n1. Camera type: Different film types are designed for specific camera types, such as 35mm, medium format, or large format cameras. Make sure you know your camera's type and compatibility.\n\n2. Film speed (ISO): The ISO (International Standards Organization) rating determines the film's sensitivity to light. Higher ISO means the film is more sensitive, allowing for better low-light performance but potentially introducing more grain. Lower ISO means less sensitivity, resulting in less grain but potentially requiring more light for proper exposure.\n\n3. Intended use: Think about the type of photos you want to take and the lighting conditions you'll be in. If you're planning to take candid photos in various lighting conditions, a versatile film with a medium ISO (e.g., 400) might be suitable.\n\n4. Personal preference: Consider your experience with different film types and your preferences for image quality, grain, and overall look.\n\nBased on these factors, you can make an informed decision between 100, 200, and 400 film for your camera.",
//                 isLoading: false,
//                 isCompleted: true
//               },
//               {
//                 type: "question",
//                 text: "I want to listen to 5 80s songs, which should I choose?",
//                 isLoading: false,
//                 isCompleted: false
//               },
//               {
//                 type: "answer",
//                 text: " Here are 5 popular 80s songs for you to listen to:\n\nThis is a good one actually:\n[TEST LINK]: https://www.youtube.com/watch?v=dQw4w9WgXcQ \n1. \"Billie Jean\" by Michael Jackson\n2. \"Like a Prayer\" by Madonna\n3. \"Sweet Child O' Mine\" by Guns N' Roses\n4. \"Take on Me\" by A-ha\n5. \"Don't Stop Believin'\" by Journey\n\nThese songs represent various... (Not done yet)",
//                 isLoading: true,
//                 isCompleted: false
//               }
//             ]}
//             paddingBottom={'12em'}
//             answerAvatar={
//               <Avatar
//                 theme={'dark'}
//                 name={'Riky'}
//                 size={'small'}
//                 color={2}
//                 showGradient={true}
//                 showText={true}
//               />
//             }
//             userAvatar={
//               <Avatar
//                 theme={'dark'}
//                 name={'User'}
//                 size={'small'}
//                 showGradient={true}
//                 showText={true}
//               />
//             }
//           />
//         </div>
//         <div className='component' id='ToolTip'>
//           <h2>CollapseCard</h2>
//           <h3>props:</h3>
//           <ul>
//             <li>children || content (jsx)</li>
//             <li>title: str</li>
//           </ul>
//           <CollapseCard
//             content={<p>Hello world</p>}
//             copyTitle={true}
//             theme='dark'
//             title='Task name is a very long title that will inevitably overflow and make everybody really sad and disappointed in the behavior of the component because it does not do the thing right.'
//           />
//         </div>
//         <div className='component' id='FrequentlyAskedQuestions'>
//           <h2>FrequentlyAskedQuestions</h2>
//           <div style={{ backgroundColor: '#fff' }}>
//           <FrequentlyAskedQuestions
//             theme={'light'}
//             faqs={{
//               "Technical Clarifications-RikAI": [
//                 {
//                   question: "When we say that RikAI2-Extract is more affordable than existing models, which model are we comparing to?",
//                   answer: "We are comparing RikAI2-Extract to RikAI2. The affordability of RikAI2-Extract comes from the fact that it allows for the extraction of several fields in the same API call without a significant loss in performance, whereas RikAI2 may experience a performance drop when more fields are added to the prompt."
//                 },
//                 {
//                   question: "What are the pros and cons of using RikAI2 and RikAI2-Extract?",
//                   answer: "Overview of [RikAI2](https://docs.lazarusforms.com/models/Rikai/rikai2/overview). RikAI2 excels in multimodal tasks, leveraging its Vision Transformer for image analysis and advanced reasoning, making it ideal for extracting insights from complex, messy documents. It also offers Advanced Explainability for detailed reasoning but struggles with large documents due to its attention curve, requiring strategic prompting and/or preprocessing.\nDetails on [RikAI2-Extract](https://docs.lazarusforms.com/models/Rikai/rikai2-extract/overview). Conversely, RikAI2-Extract is optimized for structured data extraction using JSON schemas, handling longer documents with fewer attention issues and providing field-level confidence scores. However, it lacks a Vision Transformer, limiting its ability to process images or detect signatures, and its JSON schema format may be challenging for non-technical users.\nWhile RikAI2 is versatile and reasoning-focused, RikAI2-Extract is better suited for high-volume, structured data extraction."
//                 }
//               ],
//               Documentation: [
//                 {
//                   question: "Does this [thing] exist in our documentation?",
//                   answer: "Use the search feature in our documentation to determine if the topic exists."
//                 },
//                 {
//                   question: "What do our API request body parameters do?",
//                   answer: "See the documentation under each end point [Endpoints | Lazarus](https://docs.lazarusai.com/models/Rikai/rikai2/#operation/post_bulk_rikai2)."
//                 },
//                 {
//                   question: "For the documentation site is there a sample curl feature or just the payloads?",
//                   answer: "You can get a curl in the Quickstart: [Quickstart | Lazarus](https://docs.lazarusai.com/getting-started/quickstart)"
//                 }
//               ]
//             }}
//           />
//           </div>
//           <div style={{ backgroundColor: '#000' }}>
//           <FrequentlyAskedQuestions
//             theme={'dark'}
//             faqs={{
//               "Technical Clarifications-RikAI": [
//                 {
//                   question: "When we say that RikAI2-Extract is more affordable than existing models, which model are we comparing to?",
//                   answer: "We are comparing RikAI2-Extract to RikAI2. The affordability of RikAI2-Extract comes from the fact that it allows for the extraction of several fields in the same API call without a significant loss in performance, whereas RikAI2 may experience a performance drop when more fields are added to the prompt."
//                 },
//                 {
//                   question: "What are the pros and cons of using RikAI2 and RikAI2-Extract?",
//                   answer: "Overview of [RikAI2](https://docs.lazarusforms.com/models/Rikai/rikai2/overview). RikAI2 excels in multimodal tasks, leveraging its Vision Transformer for image analysis and advanced reasoning, making it ideal for extracting insights from complex, messy documents. It also offers Advanced Explainability for detailed reasoning but struggles with large documents due to its attention curve, requiring strategic prompting and/or preprocessing.\nDetails on [RikAI2-Extract](https://docs.lazarusforms.com/models/Rikai/rikai2-extract/overview). Conversely, RikAI2-Extract is optimized for structured data extraction using JSON schemas, handling longer documents with fewer attention issues and providing field-level confidence scores. However, it lacks a Vision Transformer, limiting its ability to process images or detect signatures, and its JSON schema format may be challenging for non-technical users.\nWhile RikAI2 is versatile and reasoning-focused, RikAI2-Extract is better suited for high-volume, structured data extraction."
//                 },
//                 {
//                   question: "When we say that RikAI2-Extract is more affordable than existing models, which model are we comparing to?",
//                   answer: "We are comparing RikAI2-Extract to RikAI2. The affordability of RikAI2-Extract comes from the fact that it allows for the extraction of several fields in the same API call without a significant loss in performance, whereas RikAI2 may experience a performance drop when more fields are added to the prompt."
//                 },
//                 {
//                   question: "What are the pros and cons of using RikAI2 and RikAI2-Extract?",
//                   answer: "Overview of [RikAI2](https://docs.lazarusforms.com/models/Rikai/rikai2/overview). RikAI2 excels in multimodal tasks, leveraging its Vision Transformer for image analysis and advanced reasoning, making it ideal for extracting insights from complex, messy documents. It also offers Advanced Explainability for detailed reasoning but struggles with large documents due to its attention curve, requiring strategic prompting and/or preprocessing.\nDetails on [RikAI2-Extract](https://docs.lazarusforms.com/models/Rikai/rikai2-extract/overview). Conversely, RikAI2-Extract is optimized for structured data extraction using JSON schemas, handling longer documents with fewer attention issues and providing field-level confidence scores. However, it lacks a Vision Transformer, limiting its ability to process images or detect signatures, and its JSON schema format may be challenging for non-technical users.\nWhile RikAI2 is versatile and reasoning-focused, RikAI2-Extract is better suited for high-volume, structured data extraction."
//                 },
//                 {
//                   question: "When we say that RikAI2-Extract is more affordable than existing models, which model are we comparing to?",
//                   answer: "We are comparing RikAI2-Extract to RikAI2. The affordability of RikAI2-Extract comes from the fact that it allows for the extraction of several fields in the same API call without a significant loss in performance, whereas RikAI2 may experience a performance drop when more fields are added to the prompt."
//                 },
//                 {
//                   question: "What are the pros and cons of using RikAI2 and RikAI2-Extract?",
//                   answer: "Overview of [RikAI2](https://docs.lazarusforms.com/models/Rikai/rikai2/overview). RikAI2 excels in multimodal tasks, leveraging its Vision Transformer for image analysis and advanced reasoning, making it ideal for extracting insights from complex, messy documents. It also offers Advanced Explainability for detailed reasoning but struggles with large documents due to its attention curve, requiring strategic prompting and/or preprocessing.\nDetails on [RikAI2-Extract](https://docs.lazarusforms.com/models/Rikai/rikai2-extract/overview). Conversely, RikAI2-Extract is optimized for structured data extraction using JSON schemas, handling longer documents with fewer attention issues and providing field-level confidence scores. However, it lacks a Vision Transformer, limiting its ability to process images or detect signatures, and its JSON schema format may be challenging for non-technical users.\nWhile RikAI2 is versatile and reasoning-focused, RikAI2-Extract is better suited for high-volume, structured data extraction."
//                 }
//               ],
//               Documentation: [
//                 {
//                   question: "Does this [thing] exist in our documentation?",
//                   answer: "Use the search feature in our documentation to determine if the topic exists."
//                 },
//                 {
//                   question: "What do our API request body parameters do?",
//                   answer: "See the documentation under each end point [Endpoints | Lazarus](https://docs.lazarusai.com/models/Rikai/rikai2/#operation/post_bulk_rikai2)."
//                 },
//                 {
//                   question: "For the documentation site is there a sample curl feature or just the payloads?",
//                   answer: "You can get a curl in the Quickstart: [Quickstart | Lazarus](https://docs.lazarusai.com/getting-started/quickstart)"
//                 }
//               ]
//             }}
//           />
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }

// const AppRoute = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path='/' element={<App />} />
//       </Routes>
//     </Router>
//   )
// }
// export default AppRoute

import React from 'react'

export default function App() {
  return (
    <div>
      <AsideDiv
        type={1}
        text='Step 1'
        number='Crop Image'
        switchText='Switch Text'
        isSelected
      />
      <Button
        text='Toggle Dark Nav'
        onClick={() => {
          setIsLightNavShowing(false)
          setIsDarkNavShowing(!isDarkNavShowing)
        }}
      />
    </div>
  )
}

