import React, { useState } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import Post from './Post'
import Link from './Link'
import '../../App.css'
import FuelPrice from './FuelPrice'
import Locations from './Locations'
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Heebo',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}

// all available config props
const config = {
  width: '800px',
  height: '700px',
  hideUserAvatar: true,
  placeholder: 'Type your response.',
  headerTitle: 'Gas Station Bot',
}

const Chatbot = (props) => {
  let [showChat, setShowChat] = useState(false)

  const startChat = () => {
    setShowChat(true)
  }
  const hideChat = () => {
    setShowChat(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: showChat ? 'none' : '' }}>
        <ChatBot
          speechSynthesis={{ enable: false, lang: 'en-GB' }}
          recognitionEnable={true}
          steps={[
            {
              id: 'welcome',
              message: 'Hello!',
              trigger: 'q-firstname',
            },
            {
              id: 'welcome',
              message: 'Hello!',
              trigger: 'q-firstname',
            },
            {
              id: 'q-firstname',
              message: 'What is your first name?',
              trigger: 'firstname',
            },
            {
              id: 'firstname',
              user: true,
              validator: (value) => {
                if (/^[A-Za-z ]+$/.test(value)) {
                  return true
                } else {
                  return 'Please input alphabet characters only.'
                }
              },
              trigger: 'rmcbot',
            },
            {
              id: 'rmcbot',
              message:
                'Hi, {previousValue} I am Gas Station Finder Bot! What can I do for you?',
              trigger: 'qtype',
            },
            {
              id: 'qtype',
              options: [
                { value: 1, label: 'Get Price ?', trigger: 'type-of-gas-station-msg' },
                { value: 2, label: 'Find out fuel available station ?', trigger: '3' },
                { value: 3, label: 'Find out fuel available station in Batticaloa ?', trigger: 'gas-station-batticaloa' },
                { value: 4, label: 'More Information', trigger: '6' },
              ],
            },
            {
              id: 'type-of-gas-station-msg',
              message:
                'great, please select your favorite Fuel Filling Station',
              trigger: 'type-of-gas-station',
            },
            {
              id: 'type-of-gas-station',
              options: [
                { value: 1, label: 'CEYPETCO', trigger: 'ceypetco-a' },
                { value: 2, label: 'Lanka IOC', trigger: 'lanka-ioc-a' },
              ],
            },
            {
              id: 'ceypetco-a',
              component: <FuelPrice name="Price Chart" type="ceypetco" />,
              trigger: 'qtype',
            },
            {
              id: 'lanka-ioc-a',
              component: <FuelPrice name="Price Chart" type="lankaioc" desc="LANKA ICO" />,
              trigger: 'qtype',
            },
            {
              id: 'gas-station-batticaloa',
              component: <Locations />,
              trigger: 'qtype',
            },
            {
              id: '3',
              message:
                'Profession tax is the tax levied and collected by the state governments in India.',
              trigger: 'qtype',
            },
            {
              id: '4',
              message:
                'A property tax or millage rate is an ad valorem tax on the value of a property.',
              trigger: 'qtype',
            },
            {
              id: '5',
              message:
                'An election is a way people can choose their candidate or their preferences in a representative democracy or other form of government',
              trigger: 'qtype',
            },
            {
              id: '6',
              component: <Link />,
              trigger: 'q-submit',
            },
            {
              id: 'q-submit',
              message: 'Do you have any other questions !?',
              trigger: 'submit',
            },
            {
              id: 'submit',
              options: [
                { value: 'y', label: 'Yes', trigger: 'no-submit' },
                { value: 'n', label: 'No', trigger: 'end-message' },
              ],
            },
            {
              id: 'no-submit',
              options: [
                { value: 1, label: 'Property Tax ?', trigger: '4' },
                { value: 2, label: ' Professional Tax ?', trigger: '3' },
                { value: 3, label: 'Election Department', trigger: '5' },
                { value: 4, label: 'More Information', trigger: '6' },
              ],
            },
            {
              id: 'end-message',
              component: <Post />,
              asMessage: true,
              end: true,
            },
          ]}
          {...config}
        />
      </div>
      <div>
        {!showChat ? (
          <button className="btn" onClick={() => startChat()}>
            <i className="fa fa-minus"></i>
          </button>
        ) : (
          <button className="btn" onClick={() => hideChat()}>
            <i className="fa fa-plus"></i>
          </button>
        )}
      </div>
    </ThemeProvider>
  )
}

export default Chatbot
