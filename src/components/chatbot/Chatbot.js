import React, { useMemo, useState } from 'react'
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
  let [idistrict, setIDistrict] = useState("")

  const startChat = () => {
    setShowChat(true)
  }
  const hideChat = () => {
    setShowChat(false)
  }

  return useMemo(() => (
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
              trigger: 'gasbot',
            },
            {
              id: 'gasbot',
              message:
                'Hi, {previousValue} I am Gas Station Finder Bot! What can I do for you?',
              trigger: 'qtype',
            },
            {
              id: 'qtype',
              options: [
                { value: 1, label: 'Get Price ?', trigger: 'type-of-gas-station-msg' },
                // { value: 2, label: 'Find out available fuel station ?', trigger: 'q-district' },
                { value: 3, label: 'Find out available fuel station in Batticaloa ?', trigger: 'gas-station-batticaloa' },
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
              component: <Locations district="batticaloa" name="sample" />,
              trigger: 'qtype',
            },
            {
              id: 'q-district',
              message: 'Enter the district name?',
              trigger: 'district-name-input',
            },
            {
              id: 'district-name-input',
              user: true,
              validator: (value) => {
                if (/^[A-Za-z ]+$/.test(value)) {
                  return true
                } else {
                  return 'Please input alphabet characters only.'
                }
              },
              trigger: 'district-name-state',
            },
            {
              id: 'district-name-state',
              message: ({ previousValue, steps }) => {
                setIDistrict(previousValue)
              },
              trigger: 'district-name-find-fuel',
            },
            {
              id: 'district-name-find-fuel',
              component: <Locations district={idistrict} />,
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
                { value: 'y', label: 'Yes', trigger: 'qtype' },
                { value: 'n', label: 'No', trigger: 'end-message' },
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
  ), [idistrict, setIDistrict])
}

export default Chatbot
