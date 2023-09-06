import React, { FC } from 'react'
import { defineMessages, useIntl } from 'react-intl'

const messages = defineMessages({
  demoWarning: {
    id: 'store/demo-warning',
  },
})

const DemoWarning: FC = () => {
  const intl = useIntl()

  return (
    <div className="flex justify-center items-center c-action-primary bg-muted-5 pa3">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Mask"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.9704 12.3991V10.5019H10.4407H8.54352V12.3991H10.4407V14.9287H8.54352V16.8259H10.4407H12.9704H14.8676V14.9287H12.9704V12.3991ZM11.7056 9.23703C12.7529 9.23703 13.6028 8.38707 13.6028 7.33981C13.6028 6.29254 12.7529 5.44259 11.7056 5.44259C10.6583 5.44259 9.80838 6.29254 9.80838 7.33981C9.80838 8.38707 10.6583 9.23703 11.7056 9.23703ZM11.7056 21.2528C6.47433 21.2528 2.21949 16.9979 2.21949 11.7667C2.21949 6.53539 6.47433 2.28055 11.7056 2.28055C16.9369 2.28055 21.1917 6.53539 21.1917 11.7667C21.1917 16.9979 16.9369 21.2528 11.7056 21.2528ZM11.7056 0.383331C5.4182 0.383331 0.322266 5.47927 0.322266 11.7667C0.322266 18.0541 5.4182 23.15 11.7056 23.15C17.993 23.15 23.0889 18.0541 23.0889 11.7667C23.0889 5.47927 17.993 0.383331 11.7056 0.383331Z"
          fill="currentColor"
        />
      </svg>
      <span className="ml2">{intl.formatMessage(messages.demoWarning)}</span>
    </div>
  )
}

export default DemoWarning
