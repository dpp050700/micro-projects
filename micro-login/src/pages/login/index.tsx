import React, { useState } from 'react'
import {
  Input,
  Button,
  Form,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  LockOutlined
} from 'MicroContainer/components/antd'
import styles from './index.module.less'

interface IPasswordSuffix {
  eyeStatus: boolean
  setEyeStatus: (status: boolean) => void
}

function PasswordSuffix({ eyeStatus, setEyeStatus }: IPasswordSuffix) {
  const openEye = () => {
    setEyeStatus(true)
  }

  const closeEye = () => {
    setEyeStatus(false)
  }

  return <span>{eyeStatus ? <EyeOutlined onClick={closeEye} /> : <EyeInvisibleOutlined onClick={openEye} />}</span>
}

export default function Login() {
  const [eyeStatus, setEyeStatus] = useState(false)

  const onLogin = () => {}

  return (
    <div className={styles['login-wrap']}>
      <div className={styles['login-box']}>
        <div className={styles['login-left']}>
          <img
            src='http://mms2.baidu.com/it/u=2250055045,1573914104&fm=253&app=138&f=PNG&fmt=auto&q=75?w=500&h=334'
            alt=''
          />
        </div>
        <div className={styles['login-form']}>
          <div className={styles['login-title']}>Micro-Admin</div>
          <div>
            <Form name='login' size='large'>
              <Form.Item name='username' rules={[{ required: true, message: '请输入用户名!' }]}>
                <Input prefix={<UserOutlined />} placeholder='请输入用户名' />
              </Form.Item>
              <Form.Item name='password' rules={[{ required: true, message: '请输入密码!' }]}>
                <Input
                  prefix={<LockOutlined />}
                  type={eyeStatus ? 'text' : 'password'}
                  suffix={<PasswordSuffix eyeStatus={eyeStatus} setEyeStatus={setEyeStatus} />}
                  placeholder='请输入密码'
                />
              </Form.Item>
              <Form.Item>
                <Button type='primary' block onClick={onLogin}>
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
