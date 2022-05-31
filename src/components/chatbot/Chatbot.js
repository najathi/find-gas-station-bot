import React, { useState } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'

import Post from './Post'
import FuelPrice from './FuelPrice'
import Link from './Link'
import Locations from './Locations'
import { pDistrict } from '../../data/district'

import '../../App.css'

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
  placeholder: 'Type the message...',
  headerTitle: 'Gas Station Bot',
  bubbleOptionStyle: { backgroundColor: "white", color: "black", borderColor: "#EF6C00", borderWidth: '1px', borderStyle: 'solid' }
}

const Chatbot = (props) => {
  let [showChat, setShowChat] = useState(false)

  const startChat = () => {
    setShowChat(true)
  }
  const hideChat = () => {
    setShowChat(false)
  }

  const districtArr = pDistrict.map((item) => ({
    id: 'district-name-find-fuel-in' + item,
    component: <Locations district={item} />,
    trigger: 'qtype',
  }));

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
                if (!(/^[A-Za-z ]+$/.test(value)))
                  return 'Please input alphabet characters only.'

                return true
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
                { value: 2, label: 'Find out available fuel station in Batticaloa ?', trigger: 'gas-station-batticaloa' },
                { value: 3, label: 'Find out available fuel station ?', trigger: 'q-district' },
                { value: 4, label: 'More Information', trigger: '6' },
                { value: 5, label: "Who are you?", trigger: "BOT/introduce-self" },
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
              component: <Locations district="batticaloa" />,
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

                if (!(/^[A-Za-z ]+$/.test(value)))
                  return 'Please input alphabet characters only.'

                if (!(pDistrict.indexOf(value) > -1))
                  return 'Please input the valid district name!'

                return true;

              },
              trigger: (input) => {
                return "district-name-find-fuel-in" + input.value
              }
            },
            ...districtArr,
            {
              id: "BOT/introduce-self",
              message: "I'm find petrol station chatbot. You Can find available petrol station very easily.",
              trigger: "BOT/introduce-self-return"
            },
            {
              id: "BOT/introduce-self-return",
              message: "Select an option?",
              trigger: "qtype"
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
  )
}

export default Chatbot
